import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/brand";
import { ProductPage } from "@/components/ProductPage";
import { ProductSchema, BreadcrumbSchema } from "@/components/Schema";
import { brand } from "@/lib/brand";
import { getProductDetail } from "@/lib/productDetails";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product" };
  return {
    title: `${product.title} | India`,
    description: `${product.blurb} Buy ${product.title.toLowerCase()} from ${brand.name}, trusted Food & Health ingredients supplier since ${brand.established}. COA & Halal/Kosher documentation available.`,
    alternates: { canonical: product.href },
    openGraph: {
      title: `${product.title} | ${brand.name}`,
      description: product.blurb,
      images: [{ url: product.image, alt: product.title }],
    },
  };
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  const detail = getProductDetail(slug);
  const faqSchema =
    detail?.faqs && detail.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: detail.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;
  return (
    <>
      <ProductSchema slug={slug} />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.title, path: product.href },
        ]}
      />
      <ProductPage product={product} />
    </>
  );
}
