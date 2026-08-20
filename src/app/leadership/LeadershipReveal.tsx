"use client";

import { Reveal } from "@/components/dynamics/Reveal";
import { team } from "@/lib/brand";

export default function LeadershipReveal() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {team.map((member, i) => (
        <Reveal key={member.name} delay={0.06 * i}>
          <div className="flex h-full flex-col rounded-[24px] border border-alethia-dark/10 bg-white p-8 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-alethia-dark text-[1.4rem] font-medium text-alethia-lime">
              {member.name.charAt(0)}
            </div>
            <h3 className="mt-6 text-[1.25rem] font-medium tracking-[-0.02em] text-alethia-dark">
              {member.name}
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-alethia-lime">
              {member.role}
            </p>
            <p className="mt-4 flex-1 leading-relaxed text-alethia-dark/65">
              {member.bio}
            </p>
            <div className="mt-6 border-t border-alethia-dark/10 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-dark/40">
                Focus
              </p>
              <p className="mt-1 text-sm text-alethia-dark/70">{member.focus}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
