import { CDN_BASE } from "../../../lib/cdn";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Img } from "@/components/ui/Img";
import { ArrowRight } from "@/components/ui/Icons";
import { brand } from "@/lib/brand";
import { individualProducts } from "@/lib/products-full";
import { BreadcrumbSchema } from "@/components/Schema";

type Props = { params: Promise<{ category: string }> };
export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return [
    "amino-acids",
    "herbal-extracts",
    "nutraceuticals",
    "sweeteners",
    "nucleotides",
    "proteins",
    "sports-nutrition",
    "vitamins",
  ].map((c) => ({ category: c }));
}

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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.categorySlug}/${p.slug}`}
                className="group overflow-hidden rounded-[20px] border border-alethia-dark/8 bg-white shadow-sm transition hover:shadow-lg md:rounded-[24px]"
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Img
                    src={`${CDN_BASE}/images/products/${p.slug}.png`}
                    alt={p.name}
                    fill
                    sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-contain p-4 transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-[1rem] font-medium tracking-[-0.01em] text-alethia-dark">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-alethia-dark/50">
                    CAS: {p.cas}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-dark/60 group-hover:text-alethia-dark">
                    View Details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Dynamic mode above bypasses all ISR/static caching
