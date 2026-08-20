"use client";

import Link from "next/link";
import { Reveal } from "../dynamics/Reveal";
import { industries } from "@/lib/brand";
import { ArrowUpRight } from "../ui/Icons";

export function IndustriesGrid() {
  return (
    <section className="section-black py-24 md:py-36">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <span className="label-pill">Application Segments</span>
            <h2 className="display-lg mt-6 max-w-lg text-white">
              Ingredients for the industries that nourish and care.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-lg max-w-md text-white/55">
              These are the eight sectors we serve. Browse what we supply for
              each, and if you need a specific grade, our technical team will
              point you to the right ingredient.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {industries.map((name, i) => {
            const slug = name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
            return (
              <Reveal key={name} delay={0.03 * i}>
                <Link
                  href={`/applications/${slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-alethia-lime/40 bg-alethia-lime/10 px-5 py-4 transition duration-500 hover:border-alethia-lime hover:bg-alethia-lime/20 md:py-5"
                >
                  <span className="text-[13px] font-medium tracking-[-0.01em] text-white/85 md:text-[15px]">
                    {name}
                  </span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-alethia-lime/40 text-alethia-lime transition group-hover:border-alethia-lime group-hover:bg-alethia-lime group-hover:text-alethia-dark md:h-8 md:w-8">
                    <ArrowUpRight className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
