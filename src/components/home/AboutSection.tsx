"use client";

import { CDN_BASE } from "../../lib/cdn";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/Button";
import { Img } from "../ui/Img";
import { brand } from "@/lib/brand";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.fromTo(
          "[data-about-reveal]",
          { y: 48, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              once: true,
            },
          }
        );
        gsap.fromTo(
          "[data-about-image]",
          { clipPath: "inset(8% 8% 8% 8% round 28px)", scale: 1.06 },
          {
            clipPath: "inset(0% 0% 0% 0% round 28px)",
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="section-light py-16 md:py-28"
    >
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Story */}
          <div className="flex flex-col justify-center">
            <span className="label-pill" data-about-reveal>
              About {brand.name}
            </span>
            <h2
              id="about-heading"
              data-about-reveal
              className="display-md mt-5 text-alethia-dark"
            >
              A new era of ingredient sourcing
            </h2>
            <p
              data-about-reveal
              className="mt-6 text-[1.05rem] leading-relaxed text-alethia-dark/70"
            >
              {brand.founder.name}, Founder of {brand.name}, is building a
              sourcing and distribution company for premium Food &amp; Health
              ingredients, driven by trust, transparency, and long-term
              relationships.
            </p>
            <p
              data-about-reveal
              className="mt-4 text-[1.05rem] leading-relaxed text-alethia-dark/70"
            >
              From our Mumbai sales office and Bhiwandi warehouse, we supply
              food-grade and pharma-grade ingredients to manufacturers across
              India. One roof for the ingredient needs of 6 industries.
            </p>

            <dl
              data-about-reveal
              className="mt-8 grid grid-cols-3 gap-4 border-y border-alethia-dark/10 py-6"
            >
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-dark/45">
                  Established
                </dt>
                <dd className="mt-1 text-[1.5rem] font-medium tracking-[-0.03em] text-alethia-dark">
                  {brand.established}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-dark/45">
                  Product Categories
                </dt>
                <dd className="mt-1 text-[1.5rem] font-medium tracking-[-0.03em] text-alethia-dark">
                  8
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-dark/45">
                  Industries
                </dt>
                <dd className="mt-1 text-[1.5rem] font-medium tracking-[-0.03em] text-alethia-dark">
                  6
                </dd>
              </div>
            </dl>

            <div data-about-reveal className="mt-8 flex flex-wrap gap-4">
              <Button href="/about" variant="filled">
                Our Story
              </Button>
            </div>
          </div>
          <div className="relative">
            <div
              data-about-image
              className="relative overflow-hidden rounded-[28px] border border-alethia-dark/10 shadow-lg"
            >
              <Img
                src={CDN_BASE + "/images/about/office.webp"}
                alt="SourceKart India office"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
