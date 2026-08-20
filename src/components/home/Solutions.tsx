"use client";

import Link from "next/link";
import { ArrowRight } from "../ui/Icons";
import { Reveal } from "../dynamics/Reveal";
import { Img } from "../ui/Img";
import { products } from "@/lib/brand";

export function Solutions() {
  return (
    <section id="products" className="section-light py-16 md:py-24">
      <div className="site-container">
        <Reveal>
          <span className="label-pill">Our Products</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display-lg mt-5 max-w-3xl text-alethia-dark">
            A Full Spectrum of Specialty Chemicals
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-lg mt-4 max-w-2xl text-alethia-dark/65">
            From oleo derivatives and fatty alcohols to surfactants, waxes, and
            industrial solvents, sourced and supplied for cosmetics, pharma,
            coatings, and manufacturing.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((card, i) => (
            <Reveal key={card.href} delay={0.04 + i * 0.04}>
              <Link
                href={card.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-[24px] sm:aspect-[5/4] md:aspect-[4/5]"
              >
                <Img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="label-pill-outline text-[10px] sm:text-[11px]">[{card.short}]</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-alethia-lime text-alethia-dark transition duration-300 group-hover:translate-x-1 md:h-10 md:w-10">
                      <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[1.2rem] font-medium leading-tight tracking-[-0.03em] text-white md:text-[1.5rem]">{card.title}</h3>
                    <p className="mt-2 line-clamp-2 text-[13px] text-white/70 md:text-sm">
                      {card.blurb}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
