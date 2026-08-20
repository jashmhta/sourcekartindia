import { CDN_BASE } from "../../lib/cdn";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { certifications, brand } from "@/lib/brand";
import { Shield } from "@/components/ui/Icons";
import QAReveal from "./QAReveal";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description: `Quality assurance at ${brand.name}, COA/TDS documentation, lot checks, and the compliance standards we hold.`,
  alternates: { canonical: "/quality" },
};

const qaSteps = [
  {
    title: "Specification agreement",
    body: "Before the first dispatch we agree the exact grade, parameters, and acceptable tolerances in writing.",
  },
  {
    title: "Manufacturer verification",
    body: "We work with vetted manufacturers and confirm each batch meets specification before it enters our warehouse.",
  },
  {
    title: "Incoming lot check",
    body: "Lots arriving at our warehouse are checked against the agreed spec and supported with a Certificate of Analysis.",
  },
  {
    title: "Documentation pack",
    body: "Each dispatch ships with a COA from the manufacturer, with Halal and Kosher documentation across the portfolio. Additional certificates are available on request.",
  },
  {
    title: "Customer follow-up",
    body: "After delivery our team follows up to confirm the lot performed as expected in your process.",
  },
];

export default function QualityPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Quality & Compliance", path: "/quality" }]} />
      <PageHero
        eyebrow="Quality & Compliance"
        title="Every lot. Documented. Checked. Repeatable."
        subtitle="Quality is not a marketing line. It is the documentation and checks that let you plan production around our dispatch."
        bgImage={`${CDN_BASE}/images/brand/warehouse-quality.webp`}
        showScroll
      />

      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill">Quality Assurance</span>
            <h2 className="display-lg mt-6 text-alethia-dark">
              Five checks between your enquiry and your dispatch.
            </h2>
          </div>
          <div className="mx-auto mt-14 max-w-3xl">
            <QAReveal steps={qaSteps} />
          </div>
        </div>
      </section>

      <section className="section-dark py-16 md:py-24">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="label-pill">Compliance</span>
            <h2 className="display-lg mt-6 text-white">
              Standards we hold and can document.
            </h2>
            <p className="body-lg mx-auto mt-6 max-w-xl text-white/60">
              Availability of a specific certification depends on product line
              and grade, confirm with our team for your requirement.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="rounded-[20px] border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-alethia-lime text-alethia-dark">
                  <Shield className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[1.15rem] font-medium tracking-[-0.02em] text-white">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-white/50">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button href="/contact" variant="filled">
              Request a compliance pack
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
