import { NextResponse } from "next/server";
import { individualProducts } from "@/lib/products-full";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let products = individualProducts;
  if (category) {
    products = individualProducts.filter((p) => p.categorySlug === category);
  }

  return NextResponse.json({ products }, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
