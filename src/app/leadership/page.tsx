import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/brand";
import { Users } from "@/components/ui/Icons";
import LeadershipReveal from "./LeadershipReveal";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Leadership",
  description: `The team behind ${brand.name}, founder, technical sales, and warehouse operations.`,
  alternates: { canonical: "/leadership" },
};

export default function LeadershipPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Leadership", path: "/leadership" }]} />
      <PageHero
        eyebrow="Leadership"
        title="People who keep the supply reliable."
        subtitle="From a 50 sq. ft. Mumbai office to a national distributor, built on people who treat every order as a promise."
        showScroll
      />

      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container">
          <LeadershipReveal />
        </div>
      </section>

      <section className="section-dark py-16 md:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="label-pill">Our Founder</span>
            <h2 className="display-lg mt-6 max-w-md text-white">
              {brand.founder.name}
            </h2>
            <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.1em] text-alethia-lime">
              {brand.founder.role}
            </p>
            <p className="body-lg mt-6 max-w-md text-white/65">
              {brand.founder.bio}
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="filled">
                Talk to our team
              </Button>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-alethia-lime text-alethia-dark">
              <Users className="h-6 w-6" />
            </span>
            <p className="mt-6 text-[1.2rem] font-medium leading-snug tracking-[-0.02em] text-white">
              &ldquo;A strong satisfied customer base is the result of timely
              service, quality products, and correct competitive pricing.&rdquo;
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-white/40">
              Established {brand.established} · Mumbai
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
