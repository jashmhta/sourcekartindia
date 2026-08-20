import { products } from "./brand";

export const nav = {
  products: products.map((p) => ({
    label: p.title,
    href: p.href,
  })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Sustainability", href: "/sustainability" },
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
  locations: ["Mumbai, India", "Factory · Bhiwandi"],
  columns: [
    {
      title: "company",
      links: [
        { label: "about us", href: "/about" },
        { label: "leadership", href: "/leadership" },
        { label: "sustainability", href: "/sustainability" },
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
      links: products.slice(0, 5).map((p) => ({
        label: p.title.toLowerCase(),
        href: p.href,
      })),
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
      label: "whatsapp",
      href: "https://wa.me/919324262269",
    },
    {
      label: "email sales",
      href: "mailto:soucekart@gmail.com",
    },
  ],
} as const;
