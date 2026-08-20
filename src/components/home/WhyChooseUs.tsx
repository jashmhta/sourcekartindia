"use client";

import { Reveal } from "../dynamics/Reveal";
import { whyChooseUs, ourPromise } from "@/lib/brand";

export function WhyChooseUs() {
  return (
    <section className="section-dark py-24 md:py-36">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <Reveal>
            <span className="label-pill">Why Choose Us</span>
            <h2 className="display-lg mt-6 max-w-2xl text-white">
              Sourcing, simplified. Supply, dependable.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg max-w-md text-white/60">
              At SourceKart, we make ingredient sourcing simpler, more
              reliable, and more efficient. We work closely with manufacturers
              and businesses to connect them with the right ingredients, the
              right sources, and the right supply solutions.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:border-[#c6f19d]/40">
                <p className="font-mono text-[11px] text-[#c6f19d]/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-[1.2rem] font-medium leading-snug tracking-[-0.02em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-[28px] bg-alethia-lime p-8 text-alethia-dark md:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-alethia-dark/60">
              Our Promise
            </p>
            <h2 className="display-md mt-4 max-w-3xl">{ourPromise.title}</h2>
            <p className="mt-4 max-w-2xl text-alethia-dark/70">
              {ourPromise.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
