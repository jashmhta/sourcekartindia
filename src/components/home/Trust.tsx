"use client";

import { Reveal } from "../dynamics/Reveal";

const steps = [
  {
    n: "01",
    title: "Pure ingredients from trusted sources, documented every shipment",
  },
  {
    n: "02",
    title: "Correct, competitive pricing for multinationals and MSMEs alike",
  },
  {
    n: "03",
    title: "Timely service with a well-equipped central facility",
  },
  {
    n: "04",
    title: "Trained professionals managing orders, logistics, and support",
  },
];

export function Trust() {
  return (
    <section className="section-light overflow-hidden py-24 md:py-32">
      <div className="site-container">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="label-pill">Our Promise</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg mt-6 text-alethia-dark">
              The Biggest Advantage in Ingredients: Reliability
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg mx-auto mt-6 max-w-2xl text-alethia-dark/70">
              A strong satisfied customer base built on timely service, quality
              ingredients, and competitive pricing, under one roof.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl text-center">
          <h3 className="display-md text-alethia-dark">
            We&apos;re Not Just Supplying Ingredients.
            <br />
            We&apos;re Enabling Industries.
          </h3>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.05 * i}>
              <div className="h-full rounded-[20px] border border-alethia-dark/10 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg sm:p-7 md:rounded-[24px]">
                <p className="font-mono text-[11px] text-alethia-dark/40 sm:text-[12px]">{s.n}</p>
                <h4 className="mt-3 text-[1.15rem] font-medium leading-snug tracking-[-0.02em] text-alethia-dark sm:mt-4 sm:text-[1.35rem]">
                  {s.title}
                </h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
