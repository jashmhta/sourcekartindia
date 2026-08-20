"use client";
import { CDN_BASE } from "../lib/cdn";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/nav";
import { brand } from "@/lib/brand";
import { ChevronDown, ArrowRight } from "./ui/Icons";

type NavDrop = {
  key: string;
  label: string;
  items?: readonly { label: string; href: string }[];
  href?: string;
};

const dropdowns: NavDrop[] = [
  { key: "products", label: "Products", items: nav.products },
  { key: "capabilities", label: "Capabilities", items: nav.capabilities },
  { key: "company", label: "Company", items: nav.company },
  { key: "applications", label: "Industries", href: nav.applications.href },
];

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileHidden, setMobileHidden] = useState(false);
  const lastScroll = useRef(0);
  const mobileTimeout = useRef<ReturnType<typeof window.setTimeout>>(0 as unknown as ReturnType<typeof window.setTimeout>);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const y = window.scrollY;
      const dy = y - lastScroll.current;
      lastScroll.current = y;

      if (y < 60) {
        setMobileHidden(false);
        return;
      }
      if (dy > 3) {
        setMobileHidden(true);
        clearTimeout(mobileTimeout.current);
      } else if (dy < -2) {
        setMobileHidden(false);
      } else {
        clearTimeout(mobileTimeout.current);
        mobileTimeout.current = setTimeout(() => setMobileHidden(false), 120);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(mobileTimeout.current);
    };
  }, []);

  // Lock body scroll when the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ===== Desktop header (xl and up) ===== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 hidden transition-colors duration-300 xl:block ${
          scrolled ? "bg-[#0f1f10]/92 backdrop-blur-md" : "bg-transparent"
        }`}
        style={{ height: "var(--header-h)" }}
      >
        <div
          className="site-container flex h-full items-center justify-between"
          style={{ height: "var(--header-h)" }}
        >
          <Link href="/" className="relative z-10 flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${CDN_BASE}/images/brand/logo-white.png`}
              alt={brand.name}
              className="h-10 w-auto object-contain object-left"
            />
          </Link>

          <nav className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-0">
            {dropdowns.map((d) =>
              d.items ? (
                <div
                  key={d.key}
                  className="relative"
                  onMouseEnter={() => setOpen(d.key)}
                  onMouseLeave={() => setOpen(null)}
                >
                  <button className="nav-link flex items-center gap-1.5 px-3 py-2 text-[11px] tracking-[0.08em] text-[#f5f4f2]/92">
                    {d.label}
                    <ChevronDown className="h-2.5 w-2.5 opacity-55" />
                  </button>
                  {open === d.key && (
                    <div className="absolute left-1/2 top-full z-50 min-w-[220px] -translate-x-1/2 pt-2">
                      <div className="max-h-[70vh] overflow-y-auto rounded-xl border border-white/10 bg-[#0f1f10] p-1.5 shadow-2xl">
                        {d.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-lg px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-white/75 transition hover:bg-white/5 hover:text-[#c6f19d]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={d.key}
                  href={d.href || "/"}
                  className="nav-link px-3 py-2 text-[11px] tracking-[0.08em] text-[#f5f4f2]/92"
                >
                  {d.label}
                </Link>
              )
            )}
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <Link
              href={nav.faq.href}
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#f5f4f2]/70 transition hover:text-white"
            >
              FAQ
            </Link>
            <Link
              href={nav.contact.href}
              className="group inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-[#f5f4f2]/88 transition hover:text-white"
            >
              Contact Us
              <span className="flex h-7 w-7 items-center justify-center rounded-[6px] border border-white/25 text-white transition group-hover:border-[#c6f19d] group-hover:bg-[#c6f19d] group-hover:text-[#0f1f10]">
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* ===== Mobile liquid glass pill nav (below xl) ===== */}
      <header
        className="fixed inset-x-0 top-0 z-50 xl:hidden transition-transform duration-300 ease-out"
        style={{ transform: mobileHidden && !mobileOpen ? "translateY(-110%)" : "translateY(0)" }}
      >
        <div className="flex items-center justify-between gap-3 px-4 pt-4">
          {/* Left pill: brand */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="liquid-pill flex h-12 items-center rounded-full px-4"
            aria-label={`${brand.name} home`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${CDN_BASE}/images/brand/logo-white.png`}
              alt={brand.name}
              className="h-7 w-auto object-contain object-left"
            />
          </Link>

          {/* Right pill: contact + hamburger */}
          <div className="liquid-pill flex h-12 items-center gap-1 rounded-full p-1.5">
            <Link
              href={nav.contact.href}
              onClick={() => setMobileOpen(false)}
              className="flex h-9 items-center rounded-full bg-[#c6f19d] px-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-[#0f1f10]"
            >
              Quote
            </Link>
            <button
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-white"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 block h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                    mobileOpen ? "translate-y-[5.25px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-[1.5px] w-4 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 block h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                    mobileOpen ? "-translate-y-[5.25px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile glass sheet */}
        <div
          className={`fixed inset-x-3 top-[4.75rem] z-50 origin-top overflow-hidden rounded-[28px] transition-all duration-300 ease-out ${
            mobileOpen
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-[0.97] opacity-0"
          }`}
        >
          <div className="liquid-sheet max-h-[calc(100dvh-6.5rem)] overflow-y-auto p-6">
            <div className="flex flex-col gap-6">
              {dropdowns.map((d) =>
                d.items ? (
                  <div key={d.key}>
                    <p className="eyebrow mb-2.5 text-[#c6f19d]">{d.label}</p>
                    <div className="flex flex-col">
                      {d.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="border-b border-white/8 py-2.5 font-mono text-[13px] uppercase tracking-[0.06em] text-white/85 transition hover:text-[#c6f19d]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={d.key}
                    href={d.href || "/"}
                    onClick={() => setMobileOpen(false)}
                    className="eyebrow text-white/85"
                  >
                    {d.label}
                  </Link>
                )
              )}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={nav.faq.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 items-center rounded-full border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.1em] text-white/85"
                >
                  FAQ
                </Link>
                <Link
                  href={nav.contact.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 items-center gap-2 rounded-full bg-[#c6f19d] px-5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-[#0f1f10]"
                >
                  Contact Us
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        {mobileOpen && (
          <button
            aria-label="Close menu"
            className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </header>
    </>
  );
}
