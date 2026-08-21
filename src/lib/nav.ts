import { products } from "./brand";

export const nav = {
  products: [
    { label: "All Products", href: "/products" },
    ...products.map((p) => ({
      label: p.title,
      href: p.href,
    })),
  ],
  company: [
    { label: "About Us", href: "/about" },
  ],
  capabilities: [
    { label: "Our Process", href: "/process" },
    { label: "Quality & Compliance", href: "/quality" },
    { label: "Logistics", href: "/logistics" },
  ],
  applications: { label: "Industries", href: "/applications" },
  faq: { label: "FAQ", href: "/faq" },
  contact: { label: "Contact Us", href: "/contact" },
} as const;

export const footer = {
  columns: [
    {
      title: "company",
      links: [
        { label: "about us", href: "/about" },
        { label: "contact us", href: "/contact" },
      ],
    },
    {
      title: "capabilities",
      links: [
        { label: "our process", href: "/process" },
        { label: "quality & compliance", href: "/quality" },
        { label: "logistics", href: "/logistics" },
        { label: "industries", href: "/applications" },
        { label: "faq", href: "/faq" },
      ],
    },
    {
      title: "products",
      links: [
        { label: "all products", href: "/products" },
        ...products.slice(0, 5).map((p) => ({
          label: p.title.toLowerCase(),
          href: p.href,
        })),
      ],
    },
    {
      title: "more products",
      links: products.slice(5).map((p) => ({
        label: p.title.toLowerCase(),
        href: p.href,
      })),
    },
    {
      title: "legals",
      links: [
        { label: "privacy policy", href: "/privacy-policy" },
        { label: "terms of use", href: "/terms-of-use" },
      ],
    },
  ],
  social: [
    {
      label: "email sales",
      href: "mailto:info@sourcekart.in",
    },
    ],
} as const;
