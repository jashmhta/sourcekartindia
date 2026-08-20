"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  cards: React.ReactNode[];
  className?: string;
};

/**
 * Sticky card stack - each card pins at viewport top; as the next card
 * scrolls in, the previous scales down to 0.92 and dims to 0.55 opacity.
 */
export function StickyStack({ cards, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, [cards.length]);

  return (
    <div ref={ref} className={className}>
      {cards.map((card, i) => (
        <div
          key={i}
          className="stack-card sticky top-0 flex min-h-[100dvh] items-center justify-center"
        >
          {card}
        </div>
      ))}
    </div>
  );
}
