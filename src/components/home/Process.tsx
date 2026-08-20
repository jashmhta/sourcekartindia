"use client";

import { Reveal } from "../dynamics/Reveal";
import { process } from "@/lib/brand";
import { Button } from "../ui/Button";

export function Process() {
  return (
    <section className="section-light py-24 md:py-36">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <span className="label-pill">How We Work</span>
            <h2 className="display-lg mt-6 max-w-md text-alethia-dark">
              From enquiry to dispatch, five disciplined steps.
            </h2>
            <p className="body-lg mt-6 max-w-md text-alethia-dark/65">
              No opaque supply chain. You always know which step your order is
              on, what documentation comes with it, and when it lands.
            </p>
            <div className="mt-10">
              <Button href="/process" variant="filled">
                See the full process
              </Button>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-alethia-dark/12 md:left-[23px]" />
            <ol className="flex flex-col gap-6 md:gap-8">
              {process.map((step, i) => (
                <Reveal key={step.n} delay={0.06 * i} as="li" className="relative flex gap-4 md:gap-6">
                  <>
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-alethia-dark/15 bg-white font-mono text-[11px] font-medium text-alethia-dark shadow-sm md:h-12 md:w-12 md:text-[12px]">
                      {step.n}
                    </span>
                    <div className="pt-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-alethia-lime">
                        {step.tag}
                      </span>
                      <h3 className="mt-1 text-[1.1rem] font-medium leading-snug tracking-[-0.02em] text-alethia-dark md:text-[1.35rem]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[14px] leading-relaxed text-alethia-dark/60 md:text-[15px]">
                        {step.body}
                      </p>
                    </div>
                  </>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
