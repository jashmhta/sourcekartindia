"use client";

import { HorizontalScroll } from "../dynamics/HorizontalScroll";
import { products } from "@/lib/brand";
import Link from "next/link";
import { ArrowUpRight } from "../ui/Icons";
import { Img } from "../ui/Img";

export function ProductShowcase() {
  return (
    <section className="section-dark" id="catalogue">
      <div className="site-container py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="label-pill">Catalogue</span>
            <h2 className="display-lg mt-6 max-w-2xl text-white">
              Eight product categories. Scroll to explore them sideways.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/70">
            From vitamins to sports nutrition, every ingredient your
            formulation needs under one roof.
          </p>
        </div>
      </div>

      <HorizontalScroll>
        {products.map((p, i) => (
          <Link
            key={p.slug}
            href={p.href}
            className="catalogue-card group relative flex h-[62vh] w-[82vw] shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[24px] border border-white/10 sm:w-[58vw] md:w-[42vw] lg:h-[68vh] lg:w-[33vw] xl:w-[27vw]"
          >
            {/* Full-bleed product image */}
            <Img
              src={p.image}
              alt={p.title}
              fill
              sizes="(min-width:1280px) 27vw, (min-width:1024px) 33vw, (min-width:768px) 42vw, (min-width:640px) 58vw, 82vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            {/* Gradient scrim for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1608] via-[#0a1608]/55 to-transparent" aria-hidden="true" />
            <div className="absolute inset-0 bg-[#0f1f10]/15 transition-opacity duration-500 group-hover:opacity-0" aria-hidden="true" />

            {/* Top row: index + arrow */}
            <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5 md:p-6">
              <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
                {String(i + 1).padStart(2, "0")} / {products.length}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-alethia-lime text-alethia-dark shadow-lg transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            {/* Bottom content */}
            <div className="relative z-10 p-5 md:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-alethia-lime sm:text-[11px]">
                {p.short}
              </p>
              <h3 className="mt-2 text-[1.5rem] font-medium leading-tight tracking-[-0.03em] text-white md:text-[1.85rem]">
                {p.title}
              </h3>
              <p className="mt-2.5 line-clamp-2 max-w-md text-[13px] leading-relaxed text-white/75 md:text-[14px]">
                {p.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.items.slice(0, 2).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-white/90 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-full bg-alethia-lime/90 px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-alethia-dark">
                  {p.items.length} products
                </span>
              </div>
              {/* Explore hint that reveals on hover (desktop) */}
              <div className="mt-4 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/0 transition-colors duration-300 group-hover:text-alethia-lime md:flex">
                Explore family
                <span className="block h-px w-8 bg-alethia-lime/0 transition-colors duration-300 group-hover:bg-alethia-lime/70" />
              </div>
            </div>
          </Link>
        ))}
      </HorizontalScroll>
    </section>
  );
}
