import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Img } from "@/components/ui/Img";
import { ArrowRight } from "@/components/ui/Icons";
import { products, brand } from "@/lib/brand";
import { ItemListSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Products | Food & Health Ingredients Supplier in India",
  description: `Explore ${brand.name} Food & Health ingredients: vitamins, amino acids, herbal extracts, nutraceuticals, sweeteners, nucleotides, proteins, and sports nutrition. Over 100 individual products with CAS numbers, COA, and competitive pricing from Mumbai, India.`,
  alternates: { canonical: "/products" },
  openGraph: {
    title: `Products | ${brand.name}`,
    description: `Explore ${brand.name} Food & Health ingredients: vitamins, amino acids, herbal extracts, nutraceuticals, sweeteners, nucleotides, proteins, and sports nutrition.`,
    images: [{ url: "/images/brand/product-amino-acids.webp", alt: "SourceKart Products" }],
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ]}
      />
      <ItemListSchema
        items={products.map((p) => ({ name: p.title, url: p.href }))}
      />
      <PageHero
        eyebrow="Catalogue"
        title="Our Products"
        subtitle="Over 100 individual products across 8 categories. CAS-referenced, documented, and competitively priced. One stop for quality Food & Health ingredients."
        showScroll
      />
      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={p.href}
              className="group overflow-hidden rounded-[20px] border border-alethia-dark/8 bg-white shadow-sm transition hover:shadow-lg md:rounded-[24px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Img
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6">
                <span className="label-pill">{p.short}</span>
                <h2 className="mt-3 text-[1.2rem] font-medium tracking-[-0.02em] text-alethia-dark md:mt-4 md:text-[1.35rem]">
                  {p.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-[13px] text-alethia-dark/60 md:text-sm">
                  {p.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-alethia-dark/70 group-hover:text-alethia-dark md:mt-5">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
