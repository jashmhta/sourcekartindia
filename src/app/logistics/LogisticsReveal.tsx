"use client";

import { Reveal } from "@/components/dynamics/Reveal";
import { Counter } from "@/components/dynamics/Counter";

export default function LogisticsReveal() {
  return (
    <Reveal delay={0.1}>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6">
          <p className="display-lg text-white">
            <Counter end={1} suffix="-3" />
          </p>
          <p className="mt-2 text-sm text-white/50">
            Working days to dispatch, stocked
          </p>
        </div>
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6">
          <p className="display-lg text-white">
            <Counter end={28} suffix="+" />
          </p>
          <p className="mt-2 text-sm text-white/50">States served across India</p>
        </div>
        <div className="col-span-2 rounded-[20px] border border-white/10 bg-white/[0.03] p-6">
          <p className="display-lg text-white">
            <Counter end={300} suffix="+" />
          </p>
          <p className="mt-2 text-sm text-white/50">
            Active clients served
          </p>
        </div>
      </div>
    </Reveal>
  );
}
