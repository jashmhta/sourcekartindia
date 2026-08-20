"use client";

import { Reveal } from "../dynamics/Reveal";
import { brand } from "@/lib/brand";

export function VisionOutro() {
  return (
    <section className="section-dark border-t border-white/10 py-10 md:py-14">
      <div className="site-container">
        <Reveal>
          <span className="label-pill">Who We Are</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-lg mt-3 max-w-4xl text-white">
            Trusted Specialty Chemicals Since {brand.established}
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-3 max-w-2xl body-lg text-white/70">
            Quality products, competitive pricing, and timely service, for
            multinationals, MSMEs, and trade houses across India and beyond.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
