"use client";

import { Reveal } from "@/components/dynamics/Reveal";

export default function AboutReveal() {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="site-container grid gap-10 md:grid-cols-2">
        <Reveal>
          <span className="label-pill">Our Vision</span>
          <p className="mt-5 text-[1.25rem] font-medium leading-snug tracking-[-0.02em] text-white">
            To be India&apos;s most trusted door to premium Food &amp; Health
            ingredients, where every customer, partner, and team member grows
            together.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="label-pill">Our Mission</span>
          <p className="mt-5 text-[1.25rem] font-medium leading-snug tracking-[-0.02em] text-white">
            To connect global ingredient manufacturers with Indian industry
            through transparent sourcing, documented quality, competitive
            pricing, and dependable dispatch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
