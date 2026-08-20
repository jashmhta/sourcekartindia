import { CDN_BASE } from "../../lib/cdn";
import Link from "next/link";
import { ArrowRight } from "../ui/Icons";
import { Img } from "../ui/Img";
import { brand } from "@/lib/brand";

const stories = [
  {
    href: "/about",
    tag: "Company",
    title: `M/s ${brand.name} | Trusted Since ${brand.established}`,
    meta: "About the company",
    author: brand.founder.name,
    role: brand.founder.role,
    image: CDN_BASE + "/images/brand/banner2.webp",
  },
  {
    href: "/applications",
    tag: "Industries",
    title: "From Cosmetics to Construction | Chemicals That Perform",
    meta: "Application segments",
    author: brand.name,
    role: "Specialty Chemicals",
    image: CDN_BASE + "/images/brand/banner3.webp",
  },
];

export function CaseStudies() {
  return (
    <section className="bg-[#EFEDE8] py-20 md:py-28">
      <div className="site-container">
        <span className="label-pill">Company Spotlight</span>
        <h2 className="display-lg mt-6 max-w-3xl text-alethia-dark">
          Explore how {brand.name} supports industry with specialty chemicals
          and reliable supply.
        </h2>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x md:mt-12 md:gap-5">
          {stories.map((s) => (
            <Link
              key={s.href + s.title}
              href={s.href}
              className="group relative flex min-w-[min(100%,860px)] snap-start overflow-hidden rounded-[20px] bg-white shadow-sm md:min-h-[360px] md:rounded-[28px]"
            >
              <div className="relative hidden w-[42%] md:block">
                <Img
                  src={s.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 md:p-10">
                <div>
                  <span className="label-pill">{s.tag}</span>
                  <h3 className="mt-4 text-[1.5rem] font-medium leading-snug tracking-[-0.03em] text-alethia-dark md:mt-5 md:text-[2rem]">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-alethia-dark/45 md:text-[12px]">
                    {s.meta}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between md:mt-8">
                  <div>
                    <p className="font-medium text-alethia-dark">{s.author}</p>
                    <p className="text-sm text-alethia-dark/50">{s.role}</p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-alethia-lime text-alethia-dark transition group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
