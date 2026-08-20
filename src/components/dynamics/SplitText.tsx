"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
};

/** Word-by-word scroll-scrubbed reveal. Words fade from 0.1 to 1 as you scroll. */
export function SplitText({ text, className = "", as = "h2" }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const words = el.querySelectorAll<HTMLElement>("[data-word]");

    if (reduce) {
      gsap.set(words, { opacity: 1 });
      return;
    }

    const tween = gsap.fromTo(
      words,
      { opacity: 0.5 },
      {
        opacity: 1,
        stagger: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 55%",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(" ").map((word, i) => (
          <span key={i} data-word className="inline-block">
            {word}
            {i < text.split(" ").length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </span>
    </Tag>
  );
}
