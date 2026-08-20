"use client";
import { CDN_BASE } from "../../lib/cdn";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { ArrowRight } from "@/components/ui/Icons";
import type { IndividualProduct } from "@/lib/products-full";

interface Category {
  slug: string;
  title: string;
  count: number;
}

interface ProductsClientProps {
  products: IndividualProduct[];
  categories: Category[];
}

export default function ProductsClient({ products, categories }: ProductsClientProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.categorySlug === selectedCategory);
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.cas.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [products, search, selectedCategory]);

  return (
    <>
      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="relative flex-1 md:max-w-md">
          <input
            type="text"
            placeholder="Search products by name, CAS number, or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-alethia-dark/10 bg-white px-5 py-3 pl-12 text-sm text-alethia-dark placeholder:text-alethia-dark/40 focus:border-[#22c55e] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/20"
          />
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-alethia-dark/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition ${
              selectedCategory === "all"
                ? "bg-[#22c55e] text-white"
                : "bg-white text-alethia-dark/60 hover:bg-alethia-dark/5"
            }`}
          >
            All ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition ${
                selectedCategory === cat.slug
                  ? "bg-[#22c55e] text-white"
                  : "bg-white text-alethia-dark/60 hover:bg-alethia-dark/5"
              }`}
            >
              {cat.title} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="font-mono text-sm text-alethia-dark/60">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-alethia-dark/10 bg-white p-12 text-center">
          <p className="text-lg text-alethia-dark/60">No products found matching your criteria.</p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("all");
            }}
            className="mt-4 rounded-full bg-[#22c55e] px-6 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-white transition hover:bg-[#16a34a]"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.categorySlug}/${p.slug}`}
              className="group overflow-hidden rounded-[20px] border border-alethia-dark/8 bg-white shadow-sm transition hover:shadow-lg"
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
                <span className="label-pill text-[10px]">{p.categoryTitle}</span>
                <h3 className="mt-2 text-[1rem] font-medium tracking-[-0.01em] text-alethia-dark">
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
      )}
    </>
  );
}
