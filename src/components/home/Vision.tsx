"use client";

import Image from "next/image";
import { useState } from "react";
import { assets } from "@/lib/assets";
import { ArrowUpRight, Plus } from "../ui/Icons";

const features = [
  {
    id: "01",
    title: "Gold-Standard Observation Systems",
    body: "Sensor towers, flux methods, & satellites track full carbon flux",
  },
  {
    id: "02",
    title: "World-Class Atmospheric Monitoring (aMRV)",
    body: "Our system combines ground-truth data with real-time atmospheric measurements-the same methods used in the WMO’s Annual State of the Global Climate Report.",
  },
  {
    id: "03",
    title: "Integrated Algorithmic Processing",
    body: "High-frequency data is analyzed at every stage-ensuring accuracy, eliminating estimation bias, and turning raw data into decision-ready insights.",
  },
  {
    id: "04",
    title: "Blockchain-Secured Traceability",
    body: "Every metric is verifiable, audit-ready, and tamper-proof-so you can meet regulatory expectations with credibility.",
  },
  {
    id: "05",
    title: "Built for Scale and Complexity",
    body: "From a single farm to global operations, Alethia adapts to your data infrastructure and ecosystem environment.",
  },
];

export function Vision() {
  const [open, setOpen] = useState<string | null>("02");

  return (
    <section id="vision" className="relative overflow-hidden bg-alethia-dark">
      {/* Cinematic island / sensor scene */}
      <div className="relative min-h-[100vh]">
        <Image
          src={assets.forestMist}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-alethia-dark/50 via-transparent to-alethia-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-alethia-dark/60 via-transparent to-alethia-dark/20" />

        <div className="site-container relative z-10 grid min-h-[100vh] items-center gap-8 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-8 flex items-start gap-3 text-white">
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-alethia-lime" />
              <p className="display-md max-w-sm">
                Scientific Credibility to Corporate Climate Action
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            {/* tower / plant visual */}
            <div className="relative mx-auto max-w-xl">
              <Image
                src={assets.sensorTower}
                alt="Atmospheric monitoring tower"
                width={1200}
                height={900}
                className="mx-auto h-auto w-[88%] object-contain drop-shadow-2xl"
              />

              {/* carbon balance card */}
              <div className="absolute bottom-[12%] left-0 w-[min(58%,270px)] rounded-2xl border border-white/15 bg-alethia-dark/60 p-4 shadow-glass backdrop-blur-xl sm:left-[2%]">
                <p className="text-[12px] leading-snug text-white/75">
                  Accumulated carbon
                  <br />
                  balance
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/55">
                  Yearly
                </p>
                <p className="mt-3 font-geist text-[2.5rem] font-medium leading-none tracking-tight text-white">
                  2.4{" "}
                  <span className="text-base font-normal text-white/55">
                    tCO₂e
                  </span>
                </p>
                <div className="relative mt-4 h-8">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-white/20" />
                  <div className="absolute left-[15%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/50" />
                  <div className="absolute left-[35%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/50" />
                  <div className="absolute left-[55%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/50" />
                  <div className="absolute left-[72%] top-[30%] flex -translate-y-1/2 flex-col items-center">
                    <span className="mb-1 rounded-full bg-alethia-lime px-1.5 py-0.5 font-mono text-[9px] text-alethia-dark">
                      2.2 tCO₂e
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-alethia-lime" />
                  </div>
                  <div className="absolute right-[4%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/50" />
                </div>
                <div className="mt-1 flex justify-between font-mono text-[9px] text-white/55">
                  <span>JAN</span>
                  <span>FEB</span>
                  <span>MAR</span>
                  <span>APR</span>
                  <span className="text-alethia-lime">MAY</span>
                  <span>JUN</span>
                </div>
                <p className="mt-2 font-mono text-[10px] text-white/60">
                  1.9 tCO₂e
                </p>
              </div>

              {/* feature accordion */}
              <div className="absolute right-0 top-[10%] w-[min(62%,300px)] space-y-1.5 sm:right-[-2%]">
                {features.map((f) => {
                  const isOpen = open === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setOpen(isOpen ? null : f.id)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.12] p-3 text-left shadow-lg backdrop-blur-md transition hover:bg-white/[0.18]"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] uppercase leading-snug tracking-[0.06em] text-white/95">
                            <span className="text-white/60">{f.id}.</span>{" "}
                            {f.title}
                          </p>
                          {isOpen && (
                            <p className="mt-2 text-[11px] leading-relaxed text-white/70">
                              {f.body}
                            </p>
                          )}
                        </div>
                        <Plus
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 text-white/70 transition ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plant island interlude matching original mid-scroll */}
      <div className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={assets.plantIsland}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-alethia-dark/40 via-transparent to-alethia-dark/50" />
        <div className="site-container relative z-10 grid min-h-[70vh] items-center gap-10 py-20 lg:grid-cols-2">
          <p className="eyebrow text-white/70">
            Real-time,
            <br />
            blockchain-backed
            <br />
            carbon intelligence
          </p>
          <h2 className="display-md text-white">
            Our Ecosystem-Level Accounting Solutions translate complex scientific
            data into verifiable, compliance-ready metrics-so you can drive
            measurable results, not just reports.
          </h2>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-[12%] flex justify-around px-10">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-alethia-lime shadow-lg"
              style={{ transform: `translateY(${(i % 2) * 20}px)` }}
            >
              <span className="grid grid-cols-2 gap-0.5">
                {[0, 1, 2, 3].map((d) => (
                  <span key={d} className="h-1 w-1 rounded-full bg-alethia-dark" />
                ))}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Our vision header strip */}
      <div className="site-container border-t border-white/10 py-20 md:py-28">
        <span className="label-pill">Our Vision</span>
        <h2 className="display-lg mt-6 max-w-4xl text-white">
          From Data Chaos to Science-Backed, Actionable Insights
        </h2>
        <p className="mt-6 max-w-2xl body-lg text-white/70">
          A Breakthrough In Environmental Measurement. Built for Commercial Use.
        </p>
      </div>
    </section>
  );
}
