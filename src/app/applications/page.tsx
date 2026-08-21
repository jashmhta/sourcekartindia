import { CDN_BASE } from "../../lib/cdn";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { brand } from "@/lib/brand";
import { sectors, applicationsBySector } from "@/lib/applications";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Industries Served",
  description: `4 industries served by ${brand.name}: pharmaceuticals, nutraceuticals, sports nutrition, and animal nutrition. Premium Food & Health ingredients for every sector.`,
  alternates: { canonical: "/applications" },
};

export default function ApplicationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/applications" },
        ]}
      />
      <PageHero
        eyebrow="Industries · Sectors"
        title="Where Our Ingredients Work"
        subtitle="4 industries across Health & Wellness and Food & Nutrition, supplied with premium ingredients from one roof."
        bgImage={CDN_BASE + "/images/brand/banner1.webp"}
        showScroll
      />
      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container">
          {sectors.map((sector) => {
            const apps = applicationsBySector(sector);
            if (apps.length === 0) return null;
            return (
              <div key={sector} className="mb-16 last:mb-0">
                <Reveal>
                  <span className="label-pill">{sector}</span>
                  <h2 className="display-md mt-4 max-w-2xl text-alethia-dark">
                    {sector}
                  </h2>
                </Reveal>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {apps.map((app, i) => (
                    <Reveal key={app.slug} delay={(i % 4) * 0.06}>
                      <Link
                        href={`/applications/${app.slug}`}
                        className="group block overflow-hidden rounded-2xl border border-alethia-dark/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Img
                            src={app.image}
                            alt={`${app.title}, ingredients by ${brand.name}`}
                            fill
                            sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                            className="object-cover transition duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <p className="font-medium text-alethia-dark">
                            {app.title}
                          </p>
                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-alethia-dark/55">
                            {app.description}
                          </p>
                          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#5c8a3f]">
                            View ingredients →
                          </p>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-14 rounded-[28px] bg-alethia-dark p-8 text-white md:p-12">
            <h2 className="display-md max-w-2xl">
              Need an ingredient for your product?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Tell us your industry and application, our team will recommend
              grades and arrange competitive supply.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="filled">
                Contact Us
              </Button>
              <Link
                href="/products"
                className="inline-flex items-center font-mono text-[12px] uppercase tracking-[0.1em] text-[#c6f19d]"
              >
                Browse products →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
