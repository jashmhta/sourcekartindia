import { CDN_BASE } from "../../lib/cdn";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/brand";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${brand.name} with your sourcing requirements. We connect you with trusted manufacturers for premium Food & Health ingredients.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Let's Talk"
        subtitle="One stop for quality Food & Health ingredients at competitive prices. Send us your requirement and we take it from there."
        bgImage={`${CDN_BASE}/images/brand/warehouse-interior.webp`}
      >
        <form
          className="mt-12 grid max-w-2xl gap-4"
          action="mailto:info@sourcekart.in"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-alethia-lime"
              placeholder="First name"
              name="firstName"
              required
            />
            <input
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-alethia-lime"
              placeholder="Last name"
              name="lastName"
            />
          </div>
          <input
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-alethia-lime"
            placeholder="Work email"
            type="email"
            name="email"
            required
          />
          <input
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-alethia-lime"
            placeholder="Phone"
            name="phone"
            type="tel"
          />
          <input
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-alethia-lime"
            placeholder="Company"
            name="company"
          />
          <textarea
            className="min-h-[140px] rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-alethia-lime"
            placeholder="How can we help? Product interest, grades, quantity…"
            name="message"
            required
          />
          <button type="submit" className="btn-filled w-fit">
            <span>Send message</span>
          </button>
        </form>
      </PageHero>
    </>
  );
}
