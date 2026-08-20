import Link from "next/link";
import Image from "next/image";
import { footer } from "@/lib/nav";
import { brand } from "@/lib/brand";
import { Button } from "./ui/Button";
import { CDN_BASE } from "@/lib/cdn";

export function FooterCta() {
  return (
    <section className="relative overflow-hidden bg-alethia-dark">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url(${CDN_BASE}/images/cta-bg.webp)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-alethia-dark/70 via-alethia-dark/80 to-alethia-dark" />
      <div className="site-container relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-28 text-center">
        <h2 className="display-lg max-w-4xl text-alethia-lime">
          Quality ingredients. Competitive pricing. Dispatch you can plan around.
        </h2>
        <p className="body-lg mt-6 max-w-xl text-white/75">
          One stop for Food &amp; Health ingredients, from vitamins
          <br className="hidden sm:block" /> and amino acids to sweeteners, proteins, and more.
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="filled">
            Request a Quote
          </Button>
        </div>
        <p className="pointer-events-none mt-20 select-none font-geist text-[clamp(2.5rem,12vw,8rem)] font-medium leading-none tracking-[-0.04em] text-alethia-lime/90">
          SourceKart
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-alethia-dark text-alethia-cream">
      <FooterCta />
      <div className="border-t border-white/10">
        <div className="site-container py-8">
          <div className="grid grid-cols-2 gap-4 border-b border-white/10 pb-8 sm:grid-cols-4">
            {[
              { v: "Est. 2026", l: "Established" },
              { v: "8", l: "Product categories" },
              { v: "100+", l: "Individual products" },
              { v: "Bhiwandi", l: "Warehouse & dispatch" },
            ].map((s) => (
              <div key={s.l} className="text-center sm:text-left">
                <p className="text-[1.5rem] font-medium leading-none tracking-[-0.02em] text-alethia-lime">
                  {s.v}
                </p>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="site-container py-16">
          <div className="mb-10 max-w-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${CDN_BASE}/images/brand/logo-white.png`}
              alt={brand.name}
              className="mb-4 h-9 w-auto"
            />
            <p className="text-sm leading-relaxed text-white/60">
              Premium Food & Health ingredients supplier from Mumbai, India.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap gap-x-10 gap-y-3 font-mono text-[12px] uppercase tracking-[0.08em] text-white/50">
            {footer.locations.map((loc) => (
              <span key={loc}>{loc}</span>
            ))}
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/55">
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-mono text-[12px] uppercase tracking-[0.06em] text-white/80 transition hover:text-alethia-lime"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/55">
                connect
              </p>
              <ul className="space-y-2.5">
                {footer.social.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[12px] uppercase tracking-[0.06em] text-white/80 transition hover:text-alethia-lime"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/55">
              © {new Date().getFullYear()} {brand.name}, All rights reserved
            </p>
            <a
              href="#top"
              className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/60 transition hover:text-alethia-lime"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
