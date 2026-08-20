import { CDN_BASE } from "../../lib/cdn";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Img } from "@/components/ui/Img";
import { ArrowRight } from "@/components/ui/Icons";
import { products, brand } from "@/lib/brand";
import { individualProducts } from "@/lib/products-full";
import { ItemListSchema, BreadcrumbSchema } from "@/components/Schema";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products | Food & Health Ingredients Supplier in India",
  description: `Explore ${brand.name} Food & Health ingredients: vitamins, amino acids, herbal extracts, nutraceuticals, sweeteners, nucleotides, proteins, and sports nutrition. Over 100 individual products with CAS numbers, COA, and competitive pricing from Mumbai, India.`,
  alternates: { canonical: "/products" },
  openGraph: {
    title: `Products | ${brand.name}`,
    description: `Explore ${brand.name} Food & Health ingredients: vitamins, amino acids, herbal extracts, nutraceuticals, sweeteners, nucleotides, proteins, and sports nutrition.`,
    images: [{ url: CDN_BASE + "/images/brand/product-amino-acids.webp", alt: "SourceKart Products" }],
    type: "website",
  },
};

export default function ProductsPage() {
  const categories = products.map((p) => ({
    slug: p.slug,
    title: p.title,
    count: individualProducts.filter((ip) => ip.categorySlug === p.slug).length,
  }));

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
        bgImage={`${CDN_BASE}/images/brand/product-amino-acids.webp`}
        showScroll
      />

      {/* Category Filter Cards */}
      <section className="section-light py-12 md:py-16">
        <div className="site-container">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-alethia-dark md:text-3xl">
              Browse by Category
            </h2>
            <p className="mt-2 text-alethia-dark/60">
              Select a category to view all products with CAS numbers and documentation
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-alethia-dark/8 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-alethia-dark group-hover:text-[#22c55e]">
                      {cat.title}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-alethia-dark/50">
                      {cat.count} products
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-alethia-dark/30 transition group-hover:translate-x-1 group-hover:text-[#22c55e]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Products with Filters */}
      <section className="section-light pb-16 md:pb-24">
        <div className="site-container">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-alethia-dark md:text-3xl">
              All Products
            </h2>
            <p className="mt-2 text-alethia-dark/60">
              Complete catalog of {individualProducts.length} products with CAS numbers
            </p>
          </div>
          <ProductsClient products={individualProducts} categories={categories} />
        </div>
      </section>
    </>
  );
}
