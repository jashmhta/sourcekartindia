"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Img } from "../ui/Img";

gsap.registerPlugin(ScrollTrigger);

/** Positions tuned against original 1440×900 hero */
const rocks = [
  {
    src: "/images/hero-rock.png",
    // Original main rock dominates center-right of 1440 viewport
    className:
      "absolute right-[-6%] top-[2%] w-[min(68vw,820px)] md:right-[-2%] md:top-[0%] lg:right-[1%]",
    depth: 0.7,
    floatAmp: 12,
    floatDur: 7.5,
    rot: -4,
    priority: true,
  },
  {
    src: "/images/sat-bl.png",
    className:
      "absolute bottom-[12%] left-[-2%] w-[min(28vw,300px)] md:bottom-[14%] md:left-[1%]",
    depth: 1.35,
    floatAmp: 14,
    floatDur: 6.2,
    rot: 16,
  },
  {
    src: "/images/sat-br.png",
    className:
      "absolute bottom-[6%] right-[0%] w-[min(18vw,220px)] md:bottom-[8%] md:right-[2%]",
    depth: 1.1,
    floatAmp: 10,
    floatDur: 7.8,
    rot: -14,
  },
  {
    src: "/images/sat-tr.png",
    className:
      "absolute right-[12%] top-[5%] w-[min(11vw,120px)] md:right-[14%] md:top-[4%]",
    depth: 1.75,
    floatAmp: 8,
    floatDur: 5.6,
    rot: 20,
  },
];

export function FloatingRocks() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const outers = Array.from(
      el.querySelectorAll<HTMLElement>("[data-rock-outer]")
    );
    const inners = Array.from(
      el.querySelectorAll<HTMLElement>("[data-rock-inner]")
    );

    const floats: gsap.core.Tween[] = [];
    inners.forEach((inner, i) => {
      const rock = rocks[i];
      floats.push(
        gsap.to(inner, {
          y: rock.floatAmp,
          duration: rock.floatDur,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.28,
        }),
        gsap.to(inner, {
          rotate: rock.rot + (i % 2 === 0 ? 1.8 : -1.8),
          duration: rock.floatDur * 1.12,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.14,
        })
      );
    });

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      outers.forEach((outer, i) => {
        const d = rocks[i].depth;
        gsap.to(outer, {
          x: nx * 14 * d,
          y: ny * 9 * d,
          duration: 1.05,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };
    window.addEventListener("mousemove", onMove);

    const section = el.closest("section");
    const st = gsap.to(outers, {
      scale: (i) => 1.08 + i * 0.04,
      y: (i) => -70 - i * 24,
      opacity: 0,
      ease: "none",
      stagger: 0.02,
      scrollTrigger: {
        trigger: section || el,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      floats.forEach((t) => t.kill());
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, []);

  return (
    <div
      ref={root}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {rocks.map((rock) => (
        <div key={rock.src} data-rock-outer className={rock.className}>
          <div data-rock-inner style={{ willChange: "transform" }}>
            <Img
              src={rock.src}
              alt=""
              priority={rock.priority}
              className="h-auto w-full object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
