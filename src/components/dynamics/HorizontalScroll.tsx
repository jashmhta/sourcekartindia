"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  className?: string;
  /** min viewport width (px) to enable GSAP pin. Below this, native scroll. */
  minWidth?: number;
};

/**
 * Renders a horizontal track. On desktop (>= minWidth), GSAP pins the
 * section and pans horizontally on vertical scroll. On mobile, the same
 * element becomes a native touch-scroll container via CSS.
 *
 * Same DOM is always rendered to avoid hydration mismatch - responsive
 * behavior is handled by CSS + the GSAP effect (which checks matchMedia).
 */
export function HorizontalScroll({ children, className = "", minWidth = 1024 }: Props) {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrap.current;
    const trackEl = track.current;
    if (!wrapper || !trackEl) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia(`(min-width: ${minWidth}px)`).matches;
    if (reduce || !isDesktop) return;

    const ctx = gsap.context(() => {
      const distance = trackEl.scrollWidth - window.innerWidth;
      gsap.to(trackEl, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, [minWidth]);

  return (
    <section
      ref={wrap}
      className={`dev-hscroll relative overflow-hidden ${className}`}
    >
      <div ref={track} className="dev-hscroll-track flex items-center">
        {children}
      </div>
      <style>{`
        @media (max-width: ${(minWidth - 1)}px) {
          .dev-hscroll {
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
          }
          .dev-hscroll::-webkit-scrollbar { display: none; }
          .dev-hscroll-track {
            height: auto;
            min-height: 62vh;
            gap: 0.875rem;
            padding: 0 var(--page-pad) 1.75rem;
          }
          .dev-hscroll-track > * {
            scroll-snap-align: center;
            scroll-snap-stop: normal;
          }
        }
        @media (min-width: ${minWidth}px) {
          .dev-hscroll-track {
            height: 100dvh;
            gap: 1.25rem;
            padding-left: var(--page-pad);
            padding-right: var(--page-pad);
          }
        }
      `}</style>
    </section>
  );
}
