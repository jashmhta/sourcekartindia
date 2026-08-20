import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/brand";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${brand.name}, ${brand.address.full}. Phone ${brand.phones[0]}. Email ${brand.email.sales}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Let’s Talk"
        subtitle="One stop for quality Food & Health ingredients at competitive prices. Call or email with your requirement, and we take it from there."
      >
        <div className="mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
          <div>
            <p className="eyebrow text-white/40">Registered Office</p>
            <p className="mt-3 text-white/80">{brand.address.line1}</p>
            <p className="text-white/80">{brand.address.line2}</p>
            <p className="text-white/80">
              {brand.address.city}, {brand.address.country}
            </p>
          </div>
          <div>
            <p className="eyebrow text-white/40">Phone</p>
            <div className="mt-3 flex flex-col gap-1">
              {brand.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="text-alethia-lime transition hover:underline"
                >
                  {p}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-white/40">Email</p>
            <div className="mt-3 flex flex-col gap-1">
              <a
                href={`mailto:${brand.email.primary}`}
                className="text-alethia-lime transition hover:underline"
              >
                {brand.email.primary}
              </a>
              <a
                href={`mailto:${brand.email.sales}`}
                className="text-alethia-lime transition hover:underline"
              >
                {brand.email.sales}
              </a>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-white/70 transition hover:text-alethia-lime"
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </div>

        <form
          className="mt-14 grid max-w-2xl gap-4"
          action={`mailto:${brand.email.sales}`}
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
