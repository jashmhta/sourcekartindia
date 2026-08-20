"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

/** Scroll-triggered number counter - animates from 0 to `end` on enter. */
export function Counter({ end, suffix = "", duration = 2, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const obj = { v: 0 };

    if (reduce) {
      el.textContent = `${end}${suffix}`;
      return;
    }

    const tween = gsap.to(obj, {
      v: end,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${Math.round(obj.v)}${suffix}`;
      },
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [end, suffix, duration]);

  return (
    <span ref={ref} className={className} style={{ willChange: "contents" }}>
      0{suffix}
    </span>
  );
}
