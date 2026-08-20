import { CDN_BASE } from "../lib/cdn";
import { PageHero } from "./PageHero";
import { Button } from "./ui/Button";
import { Img } from "./ui/Img";
import { Reveal } from "./ui/Reveal";
import { brand } from "@/lib/brand";
import type { IndividualProduct } from "@/lib/products-full";

const appLabels: Record<string, string> = {
  "pharmaceuticals": "Pharmaceuticals",
  "nutraceuticals": "Nutraceuticals",
  "sports-nutrition": "Sports Nutrition",
  "animal-nutrition": "Animal Nutrition",
  "industrial-chemicals": "Industrial Chemicals",
};

export function IndividualProductPage({
  product,
}: {
  product: IndividualProduct;
}) {
  const subject = encodeURIComponent(
    `Product Enquiry: ${product.name} (${product.cas})`
  );
  const body = encodeURIComponent(
    `Dear ${brand.name} Team,\n\n` +
    `I am writing to enquire about the following product:\n\n` +
    `Product: ${product.name}\n` +
    `CAS Number: ${product.cas}\n` +
    `Category: ${product.categoryTitle}\n\n` +
    `Please provide the following information:\n` +
    `- Availability and lead time\n` +
    `- Pricing (indicative)\n` +
    `- Packaging options\n` +
    `- COA and relevant certifications\n\n` +
    `Company: \n` +
    `Contact Person: \n` +
    `Email: \n` +
    `Phone: \n\n` +
    `Thank you.\n` +
    `Best regards`
  );

  return (
    <>
      <PageHero
        eyebrow={`Products · ${product.categoryTitle}`}
        title={product.name}
        subtitle={`${product.description} CAS: ${product.cas}.`}
        bgImage={`${CDN_BASE}/images/products/${product.slug}.png`}
        showScroll
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            href={`mailto:info@sourcekart.in?subject=${subject}&body=${body}`}
            variant="filled"
          >
            Enquire Now
          </Button>
          <Button href={`/products/${product.categorySlug}`}>
            Back to {product.categoryTitle}
          </Button>
        </div>
      </PageHero>

      {/* Product Details */}
      <section className="section-light py-14 md:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="label-pill">Product Details</span>
              <h2 className="display-md mt-4 text-alethia-dark">
                {product.name}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-4">
              <Reveal delay={0.06}>
                <p className="text-[1rem] leading-relaxed text-alethia-dark/70 md:text-[1.05rem]">
                  {product.description}
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="rounded-[24px] border border-alethia-dark/10 bg-white p-6 shadow-sm md:p-7">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.1em] text-alethia-dark/45">
                    Key Information
                  </h3>
                  <dl className="mt-4 divide-y divide-alethia-dark/8">
                    <div className="flex items-start justify-between gap-4 py-3">
                      <dt className="text-[13px] text-alethia-dark/55">CAS Number</dt>
                      <dd className="text-right font-mono text-[13px] font-medium text-alethia-dark">
                        {product.cas}
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-4 py-3">
                      <dt className="text-[13px] text-alethia-dark/55">Category</dt>
                      <dd className="text-right text-[13px] font-medium text-alethia-dark">
                        {product.categoryTitle}
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-4 py-3">
                      <dt className="text-[13px] text-alethia-dark/55">Supplier</dt>
                      <dd className="text-right text-[13px] font-medium text-alethia-dark">
                        {brand.name}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="relative aspect-square overflow-hidden rounded-[24px] bg-white shadow-sm">
                <Img
                  src={`${CDN_BASE}/images/products/${product.slug}.png`}
                  alt={`${product.name}, ${brand.name}`}
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-contain"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-[24px] border border-alethia-dark/10 bg-white p-6 shadow-sm">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.1em] text-alethia-dark/45">
                  Industries Served
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <li
                      key={app}
                      className="rounded-full border border-alethia-dark/15 bg-[#f7f6f3] px-3 py-1.5 text-[12px] font-medium text-alethia-dark/70"
                    >
                      {appLabels[app] || app}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Documentation & Supply */}
      <section className="border-t border-alethia-dark/8 bg-[#f7f6f3] py-14 md:py-20">
        <div className="site-container">
          <Reveal>
            <span className="label-pill">Supply &amp; Documentation</span>
            <h2 className="display-md mt-4 max-w-3xl text-alethia-dark">
              Reliable supply with full documentation
            </h2>
            <p className="mt-3 max-w-xl text-[15px] text-alethia-dark/60">
              Every shipment from {brand.name} includes Certificate of
              Analysis (COA), batch traceability, and regulatory documentation.
              COA, MSDS, and Halal/Kosher certificates available on request.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              href={`mailto:info@sourcekart.in?subject=${subject}&body=${body}`}
              variant="filled"
            >
              Request Quote
            </Button>
            <a
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-alethia-dark/20 px-6 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-alethia-dark transition hover:border-alethia-dark/40"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
