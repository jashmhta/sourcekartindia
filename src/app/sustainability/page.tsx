import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { sustainabilityPillars, brand } from "@/lib/brand";
import { Leaf } from "@/components/ui/Icons";
import StatsClient from "./StatsClient";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Sustainability",
  description: `How ${brand.name} approaches responsible sourcing, certified clean supply, and traceable ingredients for food, health, and nutrition.`,
  alternates: { canonical: "/sustainability" },
};

export default function SustainabilityPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Sustainability", path: "/sustainability" }]} />
      <PageHero
        eyebrow="Sustainability"
        title="Responsible ingredients, traceable supply."
        subtitle="We prioritise certified clean supply chains, compliant documentation, and sourcing choices that let you prove your own claims."
        showScroll
      />

      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container">
          <div className="grid gap-5 sm:grid-cols-2">
            {sustainabilityPillars.map((p, i) => (
              <div
                key={p.title}
                className="rounded-[24px] border border-alethia-dark/10 bg-white p-8 shadow-sm md:p-10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-alethia-dark text-alethia-lime">
                  <Leaf className="h-5 w-5" />
                </span>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-alethia-dark/40">
                  Pillar {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-[1.4rem] font-medium tracking-[-0.02em] text-alethia-dark">
                  {p.title}
                </h2>
                <p className="mt-3 leading-relaxed text-alethia-dark/65">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-16 md:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="label-pill">Certified Supply</span>
            <h2 className="display-md mt-6 max-w-md text-white">
              Every ingredient line we carry is clean and documented.
            </h2>
            <p className="mt-6 max-w-md text-white/60">
              Halal, Kosher, MQA, and UKCert credentials span our vitamins,
              amino acids, extracts, and nutraceutical portfolio, so your
              finished goods inherit verifiable compliance.
            </p>
            <div className="mt-8">
              <Button href="/products" variant="filled">
                Explore our portfolio
              </Button>
            </div>
          </div>
          <StatsClient />
        </div>
      </section>

      <section className="section-light py-16 md:py-24">
        <div className="site-container">
          <div className="rounded-[28px] bg-alethia-dark p-8 text-white md:p-12">
            <h2 className="display-md max-w-2xl">
              Want documentation for your compliance claim?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Share your claim and product line, we will confirm available
              certifications, origin, and lot documentation before you commit.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="filled">
                Request documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
