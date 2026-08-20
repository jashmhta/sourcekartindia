import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { applicationsData, getApplication, applicationsBySector } from "@/lib/applications";
import { products, brand } from "@/lib/brand";
import { BreadcrumbSchema } from "@/components/Schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return applicationsData.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApplication(slug);
  if (!app) return {};
  return {
    title: `${app.title} | Ingredients & Raw Materials`,
    description: `${app.description} ${brand.name}, Mumbai, trusted Food & Health ingredients supplier since ${brand.established}.`,
    alternates: { canonical: `/applications/${app.slug}` },
    openGraph: {
      title: `${app.title} | ${brand.name}`,
      description: app.description,
      images: [{ url: app.image }],
    },
  };
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const app = getApplication(slug);
  if (!app) notFound();

  const related = products.filter((p) => app.relatedProducts.includes(p.slug));
  const siblings = applicationsBySector(app.sector)
    .filter((a) => a.slug !== app.slug)
    .slice(0, 4);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Applications", path: "/applications" },
          { name: app.title, path: `/applications/${app.slug}` },
        ]}
      />
      <PageHero
        eyebrow={app.sector}
        title={app.title}
        subtitle={app.description}
        bgImage={app.image}
        showScroll
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="filled">
            Request Quote
          </Button>
          <Button href="/applications">All Applications</Button>
        </div>
      </PageHero>

      <section id="content" className="section-light py-14 md:py-24">
        <div className="site-container grid gap-10 md:gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] md:rounded-[28px]">
              <Img
                src={app.image}
                alt={`${app.title}, ingredients supplied by ${brand.name}`}
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="label-pill">{app.sector}</span>
              <h2 className="display-md mt-4 text-alethia-dark md:mt-5">
                Ingredients for {app.title.toLowerCase()}
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-alethia-dark/70 md:text-[1.05rem]">
                {app.detail}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 md:mt-8">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.1em] text-alethia-dark/45 md:text-[12px]">
                  Key ingredients we supply
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2 md:mt-4">
                  {app.chemicals.map((c) => (
                    <li
                      key={c}
                      className="rounded-xl border border-alethia-dark/10 bg-white px-3.5 py-2.5 text-[13px] text-alethia-dark/80 md:px-4 md:py-3 md:text-sm"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
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
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-dark py-14 md:py-20">
          <div className="site-container">
            <Reveal>
              <span className="label-pill">Product Lines</span>
              <h2 className="display-md mt-4 text-white">
                Product lines for {app.title.toLowerCase()}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link
                    href={p.href}
                    className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-[#c6f19d]/40"
                  >
                    <div className="relative aspect-[4/3]">
                      <Img
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-medium text-white">{p.title}</p>
                      <p className="mt-1 text-xs text-white/50">{p.short}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {siblings.length > 0 && (
        <section className="section-light py-14 md:py-20">
          <div className="site-container">
            <Reveal>
              <h2 className="display-md text-alethia-dark">
                More in {app.sector}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siblings.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.06}>
                  <Link
                    href={`/applications/${a.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-alethia-dark/10 bg-white transition hover:border-alethia-dark/30"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Img
                        src={a.image}
                        alt={a.title}
                        fill
                        sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-medium text-alethia-dark">{a.title}</p>
                      <p className="mt-1 line-clamp-2 text-xs text-alethia-dark/55">
                        {a.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
