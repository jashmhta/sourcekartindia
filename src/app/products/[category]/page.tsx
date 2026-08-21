import { CDN_BASE } from "../../../lib/cdn";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { PageHero } from "@/components/PageHero";
import { Img } from "@/components/ui/Img";
import { ArrowRight } from "@/components/ui/Icons";
import { brand } from "@/lib/brand";
import { individualProducts } from "@/lib/products-full";
import { BreadcrumbSchema } from "@/components/Schema";
import CategoryProductsClient from "./CategoryProductsClient";

type Props = { params: Promise<{ category: string }> };
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Known category slugs for metadata generation
const categorySlugs = [
  "amino-acids",
  "herbal-extracts",
  "nutraceuticals",
  "sweeteners",
  "nucleotides",
  "proteins",
  "sports-nutrition",
  "vitamins",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const firstProduct = individualProducts.find((p) => p.categorySlug === category);
  if (!firstProduct) return { title: "Products" };
  return {
    title: `${firstProduct.categoryTitle} | ${brand.name}`,
    description: `Explore our ${firstProduct.categoryTitle.toLowerCase()} range from ${brand.name}. ${individualProducts.filter((p) => p.categorySlug === category).length}+ products with CAS-referenced documentation, COA, and competitive pricing from India.`,
    alternates: { canonical: `/products/${category}` },
    openGraph: {
      title: `${firstProduct.categoryTitle} | ${brand.name}`,
      description: `Explore our ${firstProduct.categoryTitle.toLowerCase()} range from ${brand.name}.`,
      images: [
        {
          url: `${CDN_BASE}/images/brand/product-${category}.webp`,
          alt: firstProduct.categoryTitle,
        },
      ],
      type: "website",
    },
  };
}

export default async function CategoryProductPage({ params }: Props) {
  // Prevent any edge/ISR caching - always render fresh
  (await headers()).set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0");
  (await headers()).set("Surrogate-Control", "no-store");
  const { category } = await params;
  const categoryProducts = individualProducts.filter(
    (p) => p.categorySlug === category
  );
  if (categoryProducts.length === 0) notFound();

  const categoryTitle = categoryProducts[0].categoryTitle;
  const categoryDescriptions: Record<string, string> = {
    "amino-acids":
      "A broad portfolio of amino acids for nutraceuticals, sports nutrition, food, feed, and cosmetics, supplied with CAS-referenced documentation and consistent purity.",
    "herbal-extracts":
      "Standardized botanical extracts for nutraceutical and functional food applications, sourced from verified manufacturers with consistent active content.",
    "nutraceuticals":
      "High-purity nutraceutical actives for supplements, functional foods, and wellness formulations, backed by documentation and consistent supply.",
    "sweeteners":
      "Natural and artificial sweeteners for food, beverage, and pharmaceutical applications with full regulatory documentation.",
    "nucleotides":
      "Specialty nucleotides and NAD+ precursors for longevity, cognitive health, and cellular energy formulations.",
    "proteins":
      "Plant-based and dairy protein ingredients for sports nutrition, clean-label foods, and hypoallergenic formulations.",
    "sports-nutrition":
      "Performance-driven ingredients for pre-workout, recovery, and endurance formulations, backed by batch-level consistency.",
    "vitamins":
      "Feed and food-grade vitamin premises and single units, formulated for animal nutrition, pharmaceuticals, and nutraceuticals.",
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: categoryTitle, path: `/products/${category}` },
        ]}
      />
      <PageHero
        eyebrow={`Products · ${categoryTitle}`}
        title={categoryTitle}
        subtitle={categoryDescriptions[category] || `${categoryTitle} from ${brand.name}.`}
        bgImage={`${CDN_BASE}/images/brand/product-${category}.webp`}
        showScroll
      />

      <section className="section-light py-14 md:py-24">
        <div className="site-container">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="label-pill">
                {categoryProducts.length} Products
              </span>
              <p className="mt-2 text-[15px] text-alethia-dark/60">
                Click on any product to view details, CAS number, and
                documentation.
              </p>
            </div>
          </div>
          {/* Client-side product rendering - always fetches fresh data from API */}
          <CategoryProductsClient categorySlug={category} categoryTitle={categoryTitle} />
        </div>
      </section>
    </>
  );
}

// Dynamic mode above bypasses all ISR/static caching
