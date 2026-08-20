import { CDN_BASE } from "../../lib/cdn";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { faqs, brand } from "@/lib/brand";
import { FaqSchema, BreadcrumbSchema } from "@/components/Schema";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ordering, MOQ, documentation, and delivery from ${brand.name}.`,
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <FaqSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions we answer every day."
        subtitle="From minimum order quantity to documentation and dispatch timelines: the practical details buyers need before they reach out."
        bgImage={`${CDN_BASE}/images/brand/warehouse-quality.webp`}
        showScroll
      />

      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container">
          <div className="mx-auto max-w-3xl">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="section-dark py-16 md:py-24">
        <div className="site-container">
          <div className="mx-auto max-w-2xl rounded-[28px] bg-alethia-lime p-8 text-center text-alethia-dark md:p-12">
            <h2 className="display-md">Did not find your answer?</h2>
            <p className="mt-4 text-alethia-dark/70">
              Our sales team responds to enquiries within working hours. Share
              your product, grade, and quantity, we will confirm MOQ, pricing,
              and dispatch.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="filled-dark">
                Contact the team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
