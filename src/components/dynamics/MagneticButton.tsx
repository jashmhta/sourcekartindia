"use client";

import { useRef } from "react";
import gsap from "gsap";

/** Subtle magnetic pull on primary CTAs */
export function Magnetic({
  children,
  className = "",
  strength = 0.35,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        gsap.to(el, {
          x: x * strength,
          y: y * strength,
          duration: 0.35,
          ease: "power3.out",
        });
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1,0.4)" });
      }}
    >
      {children}
    </div>
  );
}
