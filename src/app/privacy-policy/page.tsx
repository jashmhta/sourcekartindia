import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/brand";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} />
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section-light py-16 md:py-20">
        <div className="site-container prose prose-neutral max-w-3xl">
          <p>
            {brand.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy.
            Information collected via our contact forms or correspondence is used
            solely to respond to enquiries and provide product/service support.
          </p>
          <p className="mt-4">
            We do not sell personal data. Contact details shared with us may be
            stored for order fulfilment and legitimate business communication.
            For privacy requests, email{" "}
            <a href={`mailto:${brand.email.primary}`}>{brand.email.primary}</a>.
          </p>
          <p className="mt-4 text-sm text-alethia-dark/50">
            Registered office: {brand.address.full}
          </p>
        </div>
      </section>
    </>
  );
}
