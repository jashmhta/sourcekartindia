"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.style.scrollBehavior = "auto";
      return;
    }

    // Prefer stable smooth scroll; fall back gracefully if Lenis fails
    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.35,
      });
      document.documentElement.classList.add("lenis", "lenis-smooth");
      lenis.on("scroll", ScrollTrigger.update);
    } catch {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    const tick = (time: number) => {
      lenis?.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    const t1 = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    const t2 = window.setTimeout(() => ScrollTrigger.refresh(), 1500);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(tick);
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return <>{children}</>;
}
