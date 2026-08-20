"use client";

import { Reveal } from "../dynamics/Reveal";
import { Counter } from "../dynamics/Counter";
import { stats } from "@/lib/brand";

export function Stats() {
  return (
    <section className="section-dark border-t border-white/10 py-24 md:py-36">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="display-xl max-w-3xl text-white">
              Since {stats[0].value}, supply that industry can count on.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg max-w-md text-white/60">
              From a 50 sq. ft. office to a national distributor, we have built
              a reputation on consistent quality, honest pricing, and dispatch
              you can plan production around. The numbers tell the story.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.06 * i}>
              <div className="flex h-full flex-col gap-2 bg-[#0f1f10] p-6 sm:p-8 md:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-alethia-lime/70 sm:text-[11px]">
                  {s.label}
                </p>
                <p className="text-[2rem] font-medium leading-none tracking-[-0.03em] text-white sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]">
                  <Counter end={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[13px] leading-relaxed text-white/60 sm:text-sm">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
