"use client";

import Link from "next/link";
import { assets } from "@/lib/assets";
import { Button } from "../ui/Button";
import { Reveal } from "../dynamics/Reveal";
import { Img } from "../ui/Img";
import { industries } from "@/lib/brand";

export function Technology() {
  return (
    <section className="section-black">
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-black py-20 text-center md:py-28">
        <div className="absolute inset-0">
          <Img
            src="/images/brand/banner1.webp"
            alt=""
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="site-container relative z-10 flex flex-col items-center justify-center text-center">
          <Reveal>
            <span className="label-pill">Industries We Serve</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display-xl mt-6 max-w-4xl text-white md:mt-8">
              Science-Led Supply.
              <br />
              Commercial Precision.
              <br />
              Unmatched Reliability.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-lg mt-6 max-w-xl text-white/70 md:mt-8">
              Market-leading specialty chemicals for cosmetics, pharma, paints,
              plastics, food, construction, water treatment, and more.
            </p>
          </Reveal>
          <a
            href="#capabilities"
            className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-[#c6f19d] text-[#c6f19d] transition hover:bg-[#c6f19d] hover:text-black md:mt-10"
            aria-label="Continue"
          >
            ↓
          </a>
        </div>
      </div>

      <div
        id="capabilities"
        className="site-container grid items-center gap-10 py-16 md:gap-12 md:py-20 lg:grid-cols-2 lg:py-28"
      >
        <Reveal className="relative order-2 w-full overflow-hidden rounded-[24px] md:aspect-square lg:order-1 lg:min-h-[420px]">
          <div className="relative aspect-[4/3] w-full md:aspect-square md:h-full md:min-h-[420px]">
            <video
              src={assets.videos.loop1}
              className="absolute inset-0 h-full w-full object-cover"
              muted
              playsInline
              loop
              autoPlay
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:grid-cols-3">
              {["Quality Assured", "Competitive Pricing", "Timely Delivery"].map(
                (label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.08em] text-white/80 backdrop-blur sm:text-[11px]"
                  >
                    {label}
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="order-1 lg:order-2">
          <span className="label-pill">Why Dev International</span>
          <h3 className="display-md mt-6 text-white">
            One stop for a wide range of quality chemicals, backed by decades
            of field experience and a strong customer base.
          </h3>
          <div className="mt-8">
            <Button href="/about">About the Company</Button>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10 bg-black">
        <div className="site-container py-20 lg:py-28">
          <Reveal>
            <span className="label-pill">Application Segments</span>
            <h3 className="display-md mt-6 max-w-3xl text-white">
              Chemicals engineered for the industries that build, protect, and
              care for the modern world.
            </h3>
          </Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((name, i) => (
              <Reveal key={name} delay={0.03 * i}>
                <Link
                  href="/applications"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-mono text-[12px] uppercase tracking-[0.08em] text-white/80 transition hover:border-[#c6f19d]/40 hover:text-[#c6f19d]"
                >
                  {name}
                  <span className="text-white/30">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
