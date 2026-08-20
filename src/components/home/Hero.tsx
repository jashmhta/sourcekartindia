"use client";

import { CDN_BASE } from "../../lib/cdn";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/Button";
import { ScrollHint } from "../ui/Icons";
import { Img } from "../ui/Img";
import { brand } from "@/lib/brand";

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  `${CDN_BASE}/images/brand/warehouse-interior-4k.webp`,
  `${CDN_BASE}/images/brand/warehouse-quality-4k.webp`,
  `${CDN_BASE}/images/brand/warehouse-dispatch-4k.webp`,
];

/**
 * Hero - cinematic eco-chemistry background with auto-switching 4K images.
 * The 3D rock/island lives in the next section (ScrollNarrative).
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-switch images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Entrance animation
      if (!reduce) {
        gsap.fromTo(
          "[data-hero-reveal]",
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.07,
            delay: 0,
          }
        );
        if (bgRef.current) {
          gsap.fromTo(
            bgRef.current,
            { scale: 1.08 },
            { scale: 1, duration: 2.2, ease: "power2.out" }
          );
        }
      }
      // Scroll fade / parallax
      if (fadeRef.current) {
        gsap.to(fadeRef.current, {
          autoAlpha: 0,
          y: reduce ? 0 : -24,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "70% top",
            scrub: true,
          },
        });
      }
      if (bgRef.current && !reduce) {
        gsap.to(bgRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden bg-[#0f1f10]"
    >
      {/* Background image carousel */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 select-none will-change-transform"
        aria-hidden
      >
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Img
              src={src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f10]/95 via-[#0f1f10]/60 to-[#0f1f10]/20" />
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#0f1f10] to-transparent" />
      </div>


      <div
        ref={fadeRef}
        className="relative z-10 flex min-h-[100dvh] flex-col"
        style={{ paddingTop: "var(--header-h)" }}
      >
        <div className="site-container flex flex-1 flex-col justify-between pb-6 pt-6 sm:pb-8 sm:pt-8 md:pb-10 md:pt-[56px] xl:pb-12 xl:pt-[71px]">
          <div className="relative z-10 max-w-[min(100%,760px)]">
            <p
              data-hero-reveal
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c6f19d]/30 bg-[#c6f19d]/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#c6f19d]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#c6f19d]" />
              SourceKart India
            </p>
            <h1 className="display-xl hero-title-in text-[#f5f4f2]">
              Food &amp; Health Ingredients
              <br />
              for Every Industry
              <br />
              Under One Roof
            </h1>
            <p
              data-hero-reveal
              className="mt-6 max-w-[min(100%,440px)] text-[15px] leading-[1.5] tracking-[-0.01em] text-[#f5f4f2]/80 sm:text-[16px] md:mt-8"
            >
              Vitamins, amino acids, herbal extracts, nutraceuticals,
              sweeteners, proteins, and sports nutrition, quality-checked,
              documented, and dispatched since {brand.established}.
            </p>
            <div
              data-hero-reveal
              className="mt-8 flex flex-wrap items-center gap-4 md:mt-10"
            >
              <Button href="/contact">Request a Quote</Button>
              <a
                href="#catalogue"
                className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#f5f4f2]/70 transition hover:text-[#c6f19d]"
              >
                Browse products
              </a>
            </div>
          </div>

          <div
            data-hero-reveal
            className="relative z-10 mt-auto flex flex-col gap-6 pt-10 md:mt-0 md:flex-row md:items-end md:justify-between md:gap-8 md:pt-0"
          >
            <p className="max-w-[min(100%,380px)] text-[14px] leading-[1.5] tracking-[-0.01em] text-[#f5f4f2]/65 sm:max-w-[400px] md:text-[15px] lg:max-w-[440px] lg:text-[16px]">
              Trusted by multinationals, MSMEs, and trade houses across India
              for consistent quality, competitive pricing, and on-time
              dispatch.
            </p>
            <a
              href="#vision"
              className="hidden items-center gap-2 self-end font-mono text-[12px] tracking-[0.04em] text-[#f5f4f2]/65 transition hover:text-[#c6f19d] md:inline-flex"
            >
              <ScrollHint className="h-3 w-3 opacity-80" />
              Scroll to discover
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
