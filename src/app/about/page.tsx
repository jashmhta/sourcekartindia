import { CDN_BASE } from "../../lib/cdn";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { brand, industries, whatWeBring, ourApproach, founderStatement } from "@/lib/brand";
import { BreadcrumbSchema } from "@/components/Schema";
import AboutReveal from "./AboutReveal";

export const metadata: Metadata = {
  title: "About Us | Sourcing Better. Supplying Smarter.",
  description: `SourceKart is a sourcing and distribution company focused on high-quality nutraceutical, food and health ingredients, led by ${brand.founder.name}, connecting manufacturers with reliable sources.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />
      <PageHero
        eyebrow="About Us"
        title="Sourcing Better. Supplying Smarter."
        subtitle="SourceKart is a sourcing and distribution company focused on high-quality nutraceutical, food and health ingredients."
        bgImage={CDN_BASE + "/images/brand/banner1.webp"}
        showScroll
      />

      {/* About SourceKart */}
      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <span className="label-pill">About SourceKart</span>
              <h2 className="display-md mt-5 max-w-xl text-alethia-dark">
                We make ingredient sourcing simpler, more reliable, and more
                efficient.
              </h2>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-alethia-dark/70">
                SourceKart is a sourcing and distribution company focused on
                high-quality nutraceutical, food and health ingredients.
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-alethia-dark/70">
                We connect manufacturers with reliable sources for amino acids,
                vitamins, minerals, proteins, sweeteners, extracts and other
                specialty ingredients. With a focus on quality, competitive
                sourcing and dependable supply, we make procurement simpler for
                businesses across the industry.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[28px] border border-alethia-dark/10 shadow-lg">
                <Img
                  src={CDN_BASE + "/images/about/office.webp"}
                  alt="SourceKart India office"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Bring */}
      <section className="section-dark py-16 md:py-24">
        <div className="site-container">
          <Reveal>
            <span className="label-pill">What We Bring</span>
            <h2 className="display-md mt-5 max-w-2xl text-white">
              Built to make sourcing work for your business.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {whatWeBring.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-[24px] border border-white/10 bg-white/[0.03] p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#c6f19d]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-[1.3rem] font-medium tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-y border-alethia-dark/8 bg-[#f7f6f3] py-16 md:py-24">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <span className="label-pill">{ourApproach.label}</span>
              <h2 className="display-md mt-5 text-alethia-dark">
                Source &rarr; Verify &rarr; Supply
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="body-lg text-alethia-dark/70">{ourApproach.body}</p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {ourApproach.steps.map((step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="rounded-[20px] border border-alethia-dark/10 bg-white p-6 shadow-sm">
                  <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-[#5c8a3f]">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-3 text-[1.2rem] font-medium tracking-[-0.02em] text-alethia-dark">
                    {step}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hear It From the Owner */}
      <section className="section-light py-16 md:py-24">
        <div className="site-container">
          <Reveal>
            <span className="label-pill font-bold">Hear It From the Owner</span>
            <h2 className="display-md mt-5 max-w-2xl text-alethia-dark">
              {brand.founder.name} | Founder, {brand.name}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <blockquote className="space-y-4 border-l-2 border-alethia-lime pl-6 md:pl-8">
                {founderStatement.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-[1.05rem] leading-relaxed text-alethia-dark/75 md:text-[1.1rem]"
                  >
                    {para}
                  </p>
                ))}
                <p className="pt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-alethia-dark/45">
                  This is just the beginning.
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://in.linkedin.com/in/jainam-bagadia-9509161b8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-alethia-dark/10 bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-alethia-dark/70 transition hover:border-alethia-lime hover:text-alethia-dark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-alethia-dark/70"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission */}
      <AboutReveal />

      {/* Industries */}
      <section className="section-light py-16 md:py-24">
        <div className="site-container">
          <Reveal>
            <span className="label-pill">Industries</span>
            <h2 className="display-md mt-5 max-w-3xl text-alethia-dark">
              Distributing premium ingredients for important segments of
              Indian industry
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((name, i) => (
              <Reveal key={name} delay={(i % 3) * 0.05}>
                <div className="rounded-2xl border border-alethia-dark/10 bg-white px-5 py-4 font-mono text-[12px] uppercase tracking-[0.08em] text-alethia-dark/75">
                  {name}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/contact" variant="filled">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
