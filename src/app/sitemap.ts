import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";
import { individualProducts } from "@/lib/products-full";
import { applicationsData } from "@/lib/applications";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/applications",
    "/contact",
    "/faq",
    "/leadership",
    "/logistics",
    "/process",
    "/quality",
    "/sustainability",
    "/products",
    "/privacy-policy",
    "/terms-of-use",
  ];

  // Category listing routes
  const categoryRoutes = individualProducts
    .map((p) => `/products/${p.categorySlug}`)
    .filter((v, i, arr) => arr.indexOf(v) === i);

  // Individual product routes
  const productRoutes = individualProducts.map(
    (p) => `/products/${p.categorySlug}/${p.slug}`
  );

  const applicationRoutes = applicationsData.map(
    (a) => `/applications/${a.slug}`
  );

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...applicationRoutes,
  ].map(
    (path) => ({
      url: `${base}${path === "" ? "/" : path}`,
      lastModified: now,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority:
        path === ""
          ? 1
          : path.startsWith("/products/")
            ? 0.8
            : path.startsWith("/applications/")
              ? 0.7
              : 0.6,
    })
  );
}
