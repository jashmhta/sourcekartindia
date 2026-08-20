import { PageHero } from "./PageHero";
import { Button } from "./ui/Button";
import { Img } from "./ui/Img";
import { Reveal } from "./ui/Reveal";
import type { Product } from "@/lib/brand";
import { brand } from "@/lib/brand";
import { getProductDetail } from "@/lib/productDetails";


export function ProductPage({ product }: { product: Product }) {
  const detail = getProductDetail(product.slug);

  return (
    <>
      <PageHero
        eyebrow={`Products · ${product.short}`}
        title={product.title}
        subtitle={product.blurb}
        bgImage={product.image}
        showScroll
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="filled">
            Request Quote
          </Button>
          <Button href="/products">All Products</Button>
        </div>
      </PageHero>

      {/* Overview / analysis */}
      {detail && (
        <section id="content" className="section-light py-14 md:py-24">
          <div className="site-container grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="label-pill">Overview</span>
                <h2 className="display-md mt-4 text-alethia-dark">
                  {product.title}: supply, grades &amp; analysis
                </h2>
              </Reveal>
              <div className="mt-6 space-y-4">
                {detail.overview.map((para, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <p className="text-[1rem] leading-relaxed text-alethia-dark/70 md:text-[1.05rem]">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {detail.specs && (
                <Reveal delay={0.1}>
                  <div className="rounded-[24px] border border-alethia-dark/10 bg-white p-6 shadow-sm md:p-7">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.1em] text-alethia-dark/45">
                      At a glance
                    </h3>
                    <dl className="mt-4 divide-y divide-alethia-dark/8">
                      {detail.specs.map((s) => (
                        <div key={s.label} className="flex items-start justify-between gap-4 py-3">
                          <dt className="text-[13px] text-alethia-dark/55">{s.label}</dt>
                          <dd className="text-right text-[13px] font-medium text-alethia-dark">
                            {s.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Reveal>
              )}
              <Reveal delay={0.15}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                  <Img
                    src={product.image}
                    alt={`${product.title}, ${brand.name}`}
                    fill
                    sizes="(min-width:1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Product range */}
      <section
        id={detail ? undefined : "content"}
        className="border-t border-alethia-dark/8 bg-[#f7f6f3] py-14 md:py-20"
      >
        <div className="site-container">
          <Reveal>
            <span className="label-pill">Product Range</span>
            <h2 className="display-md mt-4 max-w-3xl text-alethia-dark">
              {product.items.length}+ items available under {product.title.toLowerCase()}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] text-alethia-dark/60">
              Enquire for grades, packaging, and bulk supply from our
              office and warehouse.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {product.items.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-alethia-dark/10 bg-white px-3.5 py-2.5 text-[13px] text-alethia-dark/80 transition hover:border-[#5c8a3f]/40 md:px-4 md:py-3 md:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" variant="filled">
              Contact Sales
            </Button>
            <a
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-alethia-dark/20 px-6 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-alethia-dark transition hover:border-alethia-dark/40"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section-light py-14 md:py-20">
        <div className="site-container">
          <Reveal>
            <span className="label-pill">Documentation</span>
            <h2 className="display-md mt-4 text-alethia-dark">
              Technical documentation
            </h2>
            <p className="mt-3 max-w-xl text-[15px] text-alethia-dark/60">
              COA, MSDS, and additional documents available on request.
              Enquire via the contact page or WhatsApp.
            </p>
          </Reveal>
          <div className="mt-8">
            <Button href="/contact" variant="filled">
              Request Documentation
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}
