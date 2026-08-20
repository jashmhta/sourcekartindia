"use client";

import { Reveal } from "@/components/dynamics/Reveal";

type Step = { title: string; body: string };

export default function QAReveal({ steps }: { steps: Step[] }) {
  return (
    <ol className="flex flex-col gap-6">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={0.05 * i}>
          <li className="flex gap-6 rounded-[20px] border border-alethia-dark/10 bg-white p-7 shadow-sm">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-alethia-dark font-mono text-sm font-medium text-alethia-lime">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-[1.2rem] font-medium tracking-[-0.02em] text-alethia-dark">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-alethia-dark/65">
                {s.body}
              </p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
