"use client";

import { SplitText } from "../dynamics/SplitText";
import { Reveal } from "../dynamics/Reveal";

export function Manifesto() {
  return (
    <section className="section-black py-20 md:py-28 lg:py-44">
      <div className="site-container">
        <Reveal>
          <span className="label-pill">Our Philosophy</span>
        </Reveal>
        <SplitText
          as="h2"
          text={`Ingredients are the molecules between your formulation and your customer's trust. We supply that trust, consistently, competitively, on time, across all of India.`}
          className="mt-8 max-w-5xl text-[1.35rem] font-medium leading-[1.3] tracking-[-0.03em] text-white md:mt-10 md:text-[2rem] md:leading-[1.25] lg:text-[2.4rem] lg:leading-[1.2]"
        />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-md text-[13px] text-white/60 md:mt-10 md:text-sm">
            That promise stays attached to every lot we dispatch from our
            central warehouse.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
