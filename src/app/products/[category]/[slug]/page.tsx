import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { individualProducts } from "@/lib/products-full";
import { IndividualProductPage } from "@/components/IndividualProductPage";
import { brand } from "@/lib/brand";
import { BreadcrumbSchema } from "@/components/Schema";

type Props = { params: Promise<{ category: string; slug: string }> };

export function generateStaticParams() {
  return individualProducts.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = individualProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Product" };
  const casText = product.cas !== "N/A" ? ` | CAS ${product.cas}` : "";
  return {
    title: `${product.name}${casText} | ${brand.name}`,
    description: `${product.description} Buy ${product.name.toLowerCase()} from ${brand.name}, India's trusted Food & Health ingredients supplier. COA & Halal/Kosher documentation available.`,
    alternates: { canonical: `/products/${product.categorySlug}/${product.slug}` },
    openGraph: {
      title: `${product.name} | ${brand.name}`,
      description: product.description,
      images: [
        {
          url: `/images/products/${product.slug}.png`,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${brand.name}`,
      description: product.description,
      images: [`/images/products/${product.slug}.png`],
    },
  };
}

export default async function IndividualProductPageRoute({ params }: Props) {
  const { slug } = await params;
  const product = individualProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.categoryTitle, path: `/products/${product.categorySlug}` },
          { name: product.name, path: `/products/${product.categorySlug}/${product.slug}` },
        ]}
      />
      <IndividualProductPage product={product} />
    </>
  );
}
