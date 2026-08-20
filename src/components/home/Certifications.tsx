"use client";

import { Marquee } from "../dynamics/Marquee";
import { Reveal } from "../dynamics/Reveal";
import { certifications } from "@/lib/brand";

export function Certifications() {
  return (
    <section className="section-dark border-t border-white/10 py-20 md:py-28">
      <div className="site-container">
        <Reveal>
          <h2 className="display-md max-w-3xl text-white">
            Quality standards we hold and document on every lot.
          </h2>
        </Reveal>
      </div>

      <div className="mt-14">
        <Marquee speed={38} className="py-2">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-4 rounded-full border border-white/12 bg-white/[0.03] px-7 py-4"
            >
              <span className="h-2 w-2 rounded-full bg-alethia-lime" />
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-white/85">
                {c.name}
              </span>
              <span className="font-mono text-[11px] text-white/55">
                {c.desc}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
