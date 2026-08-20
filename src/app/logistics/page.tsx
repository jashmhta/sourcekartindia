import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/brand";
import { Truck } from "@/components/ui/Icons";
import LogisticsReveal from "./LogisticsReveal";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Logistics & Supply",
  description: `Warehousing, dispatch, and supply capability at ${brand.name}, Bhiwandi warehouse, India-wide delivery.`,
  alternates: { canonical: "/logistics" },
};

const capabilities = [
  {
    title: "Central Facility",
    body: "Well-equipped domestic manufacturing & warehousing facility at Kalher, Bhiwandi, a central location that keeps stocked items ready for fast dispatch across India.",
  },
  {
    title: "Multi-Grade Inventory",
    body: "Drum, bag, and small-packing for the majority of our eight product categories, supplemented by bulk loads for larger buyers.",
  },
  {
    title: "Trained Dispatch Team",
    body: "Dedicated staff handle packing, labelling, quality checks, and dispatch coordination so you get the right lot on the right date.",
  },
  {
    title: "India-Wide Delivery",
    body: "We coordinate transport to customers across India, from multinational corporates to medium and small-scale units and trade houses.",
  },
];

export default function LogisticsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Logistics", path: "/logistics" }]} />
      <PageHero
        eyebrow="Logistics"
        title="Stocked, checked, and dispatched from Bhiwandi."
        subtitle="A central warehouse and trained team mean your order moves from enquiry to dispatch in days, not weeks, with documentation on every lot."
        showScroll
      />

      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-[24px] border border-alethia-dark/10 bg-white p-8 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-alethia-dark text-alethia-lime">
                  <Truck className="h-5 w-5" />
                </span>
                <h2 className="mt-6 text-[1.3rem] font-medium tracking-[-0.02em] text-alethia-dark">
                  {c.title}
                </h2>
                <p className="mt-3 leading-relaxed text-alethia-dark/65">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-16 md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="label-pill">Dispatch Timelines</span>
            <h2 className="display-lg mt-6 max-w-md text-white">
              Plan your production around our dispatch.
            </h2>
            <p className="body-lg mt-6 max-w-md text-white/60">
              Stocked items leave Bhiwandi within 1-3 working days. Make-to-order
              and tanker loads follow the manufacturer lead time, which we
              confirm in writing at quotation.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="filled">
                Check a lead time
              </Button>
            </div>
          </div>
          <LogisticsReveal />
        </div>
      </section>

      <section className="section-light py-16 md:py-24">
        <div className="site-container">
          <div className="rounded-[28px] bg-alethia-dark p-8 text-white md:p-12">
            <h2 className="display-md max-w-2xl">
              {brand.warehouse}
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Our Bhiwandi facility is the operational heart of {brand.name} -
              central, equipped, and staffed to keep your supply moving.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
