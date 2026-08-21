import { brand, faqs } from "@/lib/brand";
import { individualProducts } from "@/lib/products-full";

/** Organization + WebSite schema, rendered on every page via layout. */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${brand.url}/#organization`,
    name: brand.name,
    alternateName: `M/s ${brand.name}`,
    url: brand.url,
    logo: brand.logo,
    image: brand.logo,
    description: brand.description,
    foundingDate: brand.established,
    vatID: brand.gst,
    founder: { "@type": "Person", name: brand.founder.name, jobTitle: brand.founder.role },
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: [
      "Vitamins",
      "Amino Acids",
      "Herbal Extracts",
      "Nutraceuticals",
      "Sweeteners",
      "Nucleotides",
      "Proteins",
      "Sports Nutrition",
      "Food & Health Ingredients",
      "Ingredient Supplier India",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: brand.url,
    publisher: { "@type": "Organization", name: brand.name },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ProductSchema({ slug }: { slug: string }) {
  const product = individualProducts.find((p) => p.slug === slug);
  if (!product) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://sourcekart-cdn.binaryjash.workers.dev/images/products/${product.slug}.png`,
    brand: { "@type": "Brand", name: brand.name },
    category: "Food & Health Ingredients",
    manufacturer: { "@type": "Organization", name: brand.name },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        valueAddedTaxIncluded: false,
      },
      seller: { "@type": "Organization", name: brand.name },
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${brand.url}${item.path}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FaqSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ItemListSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${brand.url}${item.url}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function HowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { title: string; body: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
