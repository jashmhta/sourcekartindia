"use client";

import { useState } from "react";
import { Reveal } from "../dynamics/Reveal";
import { testimonials } from "@/lib/brand";
import { ArrowRight } from "../ui/Icons";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-light py-24 md:py-36">
      <div className="site-container">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <span className="label-pill">In Their Words</span>
            <h2 className="display-lg mt-5 max-w-md text-alethia-dark md:mt-6">
              Customers who plan production around our dispatch.
            </h2>
            <p className="body-lg mt-4 max-w-md text-alethia-dark/65 md:mt-6">
              From pharma and nutraceutical brands to food and animal-nutrition
              units, partners keep coming back for consistency they can build a
              schedule on.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="rounded-[24px] border border-alethia-dark/10 bg-white p-6 shadow-sm md:p-10 md:rounded-[28px]">
              <svg
                className="h-8 w-8 text-alethia-lime md:h-9 md:w-9"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden
              >
                <path d="M13 8C8.5 9.7 6 13.5 6 19v5h7v-9h-4c0-3 1.5-5 4-6V8Zm12 0c-4.5 1.7-7 5.5-7 11v5h7v-9h-4c0-3 1.5-5 4-6V8Z" />
              </svg>
              <blockquote className="mt-5 text-[1.15rem] font-medium leading-snug tracking-[-0.02em] text-alethia-dark md:mt-6 md:text-[1.35rem]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-alethia-dark/10 pt-5 md:mt-8 md:pt-6">
                <div>
                  <p className="font-medium text-alethia-dark">{t.name}</p>
                  <p className="text-sm text-alethia-dark/50">
                    {t.role} · {t.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-alethia-dark/15 text-alethia-dark transition hover:bg-alethia-dark/5"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-alethia-lime text-alethia-dark transition hover:brightness-105"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
