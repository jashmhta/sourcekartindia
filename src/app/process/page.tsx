import { CDN_BASE } from "../../lib/cdn";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { process, brand } from "@/lib/brand";
import { HowToSchema, BreadcrumbSchema } from "@/components/Schema";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "Our Process",
  description: `From enquiry to after-sales, the ${brand.name} supply process, step by step.`,
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Our Process", path: "/process" },
        ]}
      />
      <HowToSchema
        name={`How ${brand.name} supplies ingredients`}
        description="From enquiry to dispatch in five disciplined steps."
        steps={process.map((s) => ({ title: s.title, body: s.body }))}
      />
      <PageHero
        eyebrow="Our Process"
        title="From enquiry to after-sales. Five disciplined steps."
        subtitle="A transparent supply chain you can plan production around. You always know which step your order is on and what lands when."
        bgImage={`${CDN_BASE}/images/brand/warehouse-dispatch.webp`}
        showScroll
      />

      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <div
                key={step.n}
                className="flex flex-col rounded-[24px] border border-alethia-dark/10 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[2.5rem] font-medium leading-none text-alethia-dark/12">
                    {step.n}
                  </span>
                  <span className="rounded-full bg-alethia-lime px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-dark">
                    {step.tag}
                  </span>
                </div>
                <h2 className="mt-6 text-[1.3rem] font-medium leading-snug tracking-[-0.02em] text-alethia-dark">
                  {step.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-alethia-dark/65">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-16 md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="label-pill">Logistics</span>
            <h2 className="display-lg mt-6 max-w-md text-white">
              Dispatched from Bhiwandi, coordinated for your timeline.
            </h2>
            <p className="body-lg mt-6 max-w-md text-white/60">
              Our central warehouse at Bhiwandi keeps stocked items ready for
              1-3 day dispatch. Tanker loads and make-to-order items follow the
              confirmed manufacturer lead time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/logistics" variant="filled">
                Logistics details
              </Button>
              <Button href="/contact">Get a quote</Button>
            </div>
          </div>
          <ProcessClient />
        </div>
      </section>
    </>
  );
}
