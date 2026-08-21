"use client";
import { CDN_BASE } from "../../../lib/cdn";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { ArrowRight } from "@/components/ui/Icons";
import type { IndividualProduct } from "@/lib/products-full";

interface CategoryProductsClientProps {
  categorySlug: string;
  categoryTitle: string;
}

export default function CategoryProductsClient({ categorySlug, categoryTitle }: CategoryProductsClientProps) {
  const [products, setProducts] = useState<IndividualProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Always fetch fresh data from the API - never cached
    fetch(`/api/products?category=${categorySlug}&_=${Date.now()}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-64 animate-pulse rounded-[24px] bg-alethia-dark/5" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <Link
          key={p.slug}
          href={`/products/${p.categorySlug}/${p.slug}`}
          className="group overflow-hidden rounded-[20px] border border-alethia-dark/8 bg-[#e8f5e2] shadow-sm transition hover:shadow-lg md:rounded-[24px]"
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
            <h3 className="text-[1rem] font-bold tracking-[-0.01em] text-alethia-dark">
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
  );
}
