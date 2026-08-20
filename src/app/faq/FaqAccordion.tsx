"use client";

import { useState } from "react";
import { Plus } from "@/components/ui/Icons";

type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: readonly Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-alethia-dark/10 border-y border-alethia-dark/10">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <button
            key={f.q}
            type="button"
            onClick={() => setOpen(isOpen ? null : i)}
            className="flex w-full items-start gap-4 py-6 text-left transition hover:bg-alethia-dark/[0.02] md:gap-8"
          >
            <span className="font-mono text-[12px] text-alethia-dark/35">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[1.1rem] font-medium tracking-[-0.02em] text-alethia-dark md:text-[1.2rem]">
                  {f.q}
                </h3>
                <Plus
                  className={`h-4 w-4 shrink-0 text-alethia-dark/50 transition ${
                    isOpen ? "rotate-45 text-alethia-lime" : ""
                  }`}
                />
              </div>
              {isOpen && (
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-alethia-dark/65">
                  {f.a}
                </p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
