"use client";

import { useState } from "react";
import { IslandSequence } from "./IslandSequence";
import { BgVideo } from "./BgVideo";
import { Plus, ArrowUpRight } from "../ui/Icons";
import { assets } from "@/lib/assets";
import { brand } from "@/lib/brand";

const features = [
  {
    id: "01",
    title: "Broad Ingredient Portfolio",
    body: "Eight product categories under one roof: vitamins, amino acids, herbal extracts, nutraceuticals, sweeteners, nucleotides, proteins, and sports nutrition, quality-checked and documented.",
  },
  {
    id: "02",
    title: "Founder-Led Sourcing",
    body: `${brand.founder.name}, Founder of ${brand.name}, is building a sourcing network on trust, transparency, and long-term relationships across the ingredient industry.`,
  },
  {
    id: "03",
    title: "One Roof for Every Industry",
    body: "Serving pharmaceuticals, nutraceuticals, sports nutrition, and animal nutrition across India and global markets.",
  },
  {
    id: "04",
    title: "Logistics Ready",
    body: "Well-trained professional staff and a well-equipped facility for central, timely dispatch across India.",
  },
  {
    id: "05",
    title: "Competitive & Consistent",
    body: "Quality ingredients at correct competitive prices, for multinationals, medium & small units, and trade houses.",
  },
  {
    id: "06",
    title: "Certified & Traceable",
    body: "Halal, Kosher, MQA, and UKCert credentials across the portfolio, with full COA documentation and traceability on every lot.",
  },
];

export function ScrollNarrative() {
  const [open, setOpen] = useState<string | null>("02");

  return (
    <div id="vision" className="bg-[#0f1f10]">
      <section className="relative h-[70svh] overflow-hidden md:h-[75svh]">
        <BgVideo
          src={assets.videos.scan}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1f10]/20" />
        <div className="site-container relative z-10 flex h-full flex-col justify-center py-16">
          <p className="eyebrow max-w-[200px] text-white/65">
            Food &amp; health ingredients
            <br />
            for Indian industry
            <br />&amp; global partners
          </p>
          <p className="mt-8 max-w-[560px] text-[1.35rem] font-medium leading-[1.25] tracking-[-0.03em] text-white/90 md:mt-12 md:text-[1.75rem]">
            {brand.name} translates complex ingredient supply needs into reliable,
            quality-assured raw materials, so you can focus on production, not
            procurement risk.
          </p>
        </div>
      </section>

      <section className="relative bg-[#0f1f10]">
        <div className="sticky top-0 z-10 h-[100svh] overflow-hidden">
          <BgVideo
            src={assets.videos.clouds}
            className="absolute inset-0 h-full w-full object-cover"
            opacity={0.35}
          />
          <div className="absolute inset-0 bg-[#0f1f10]/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[min(70vh,520px)] w-[min(90vw,520px)]">
              <IslandSequence />
            </div>
          </div>
          <div className="site-container relative z-10 flex h-full flex-col justify-end pb-16">
            <p className="max-w-md text-[1.1rem] font-medium leading-snug tracking-[-0.02em] text-white/90 md:text-[1.35rem]">
              Pure ingredients, certified clean supply chains, and traceable
              sourcing, delivered with industrial discipline.
            </p>
          </div>
        </div>
        <div id="vision-island-track" className="h-[28vh]" />
      </section>

      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span className="label-pill">Capabilities</span>
              <h2 className="display-md mt-4 max-w-2xl text-white">
                Built for scale, complexity, and trust
              </h2>
            </div>
            <a
              href="/contact"
              className="hidden items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-[#c6f19d] md:inline-flex"
            >
              Enquire <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {features.map((f) => {
              const isOpen = open === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : f.id)}
                  className="flex w-full items-start gap-4 py-5 text-left transition hover:bg-white/[0.02] md:gap-8 md:py-6"
                >
                  <span className="font-mono text-[12px] text-white/55">
                    {f.id}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-[1.15rem] font-medium tracking-[-0.02em] text-white md:text-[1.35rem]">
                        {f.title}
                      </h3>
                      <Plus
                        className={`h-4 w-4 shrink-0 text-white/50 transition ${
                          isOpen ? "rotate-45 text-[#c6f19d]" : ""
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/60">
                        {f.body}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
