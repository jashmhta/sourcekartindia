import { CDN_BASE } from "./cdn";
/** SourceKart application segments (4 industries served) */

export type Application = {
  slug: string;
  name: string;
  title: string;
  image: string;
  description: string;
  detail: string;
  chemicals: string[];
  relatedProducts: string[]; // product slugs
  sector: string;
};

const defs: Application[] = [
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    title: "Pharmaceuticals",
    image: CDN_BASE + "/images/brand/product-vitamins.webp",
    sector: "Health & Wellness",
    description:
      "Pharma-grade vitamins, amino acids, and excipients for tablets, syrups, and nutra-pharma formulations.",
    detail:
      "Pharmaceutical manufacturers source pharmacopeia-aligned raw materials from SourceKart, from vitamins and amino acids to sweeteners and specialty actives used across tablet, capsule, oral liquid, and topical dosage forms. Every lot ships with COA, Halal, and Kosher documentation, and GMP-compliant handling with full traceability supports regulatory and customer audits.",
    chemicals: [
      "Vitamin C",
      "Vitamin D3",
      "L Lysine HCL",
      "Glycine",
      "Choline Bitartarate",
      "Coenzyme Q10",
      "Sucralose",
      "Mannitol",
      "Niacinamide",
    ],
    relatedProducts: ["vitamins", "amino-acids", "nutraceuticals", "sweeteners"],
  },
  {
    slug: "nutraceuticals",
    name: "Nutraceuticals & Supplements",
    title: "Nutraceuticals & Supplements",
    image: CDN_BASE + "/images/brand/product-nutraceuticals.webp",
    sector: "Health & Wellness",
    description:
      "Specialty actives, amino acids, and botanical extracts for dietary supplements and wellness brands.",
    detail:
      "Nutraceutical brands rely on SourceKart for a complete ingredient basket, amino acids, vitamins, herbal extracts, nucleotides, and functional actives for immunity, longevity, joint, mood, and sports formulations. Ingredients are supplied with full assay documentation, small-packing support, and fast dispatch to keep supplement production on schedule.",
    chemicals: [
      "L Glutamine",
      "Creatine Monohydrate",
      "NMN",
      "Quercetin",
      "Silymarin 80%",
      "GABA",
      "Glutathione",
      "Taurine",
      "Magnesium Glycinate",
    ],
    relatedProducts: ["amino-acids", "herbal-extracts", "nutraceuticals", "nucleotides", "sports-nutrition"],
  },
  {
    slug: "sports-nutrition",
    name: "Sports Nutrition",
    title: "Sports Nutrition",
    image: CDN_BASE + "/images/brand/product-sports-nutrition.webp",
    sector: "Health & Wellness",
    description:
      "Performance and recovery actives for sports nutrition brands, from creatine and Beta Alanine to BCAA, EAA, and citrulline blends.",
    detail:
      "Sports nutrition brands build their formulas on SourceKart actives, creatine monohydrate and its variants, Beta Alanine, BCAA and EAA blends, citrulline malate, HMB, and taurine, supplied with assay documentation, small-packing support, and dependable dispatch to keep launches on time.",
    chemicals: [
      "Creatine Monohydrate",
      "Beta Alanine",
      "BCAA 2:1:1",
      "L Citrulline DL Malate 2:1",
      "L Glutamine",
      "Taurine",
      "HMB Calcium",
      "Betaine Anhydrous",
      "L Arginine Alpha Ketoglutarate",
    ],
    relatedProducts: ["amino-acids", "nutraceuticals", "proteins", "sports-nutrition"],
  },
  {
    slug: "animal-nutrition",
    name: "Animal Nutrition",
    title: "Animal Nutrition",
    image: CDN_BASE + "/images/brand/product-vitamins.webp",
    sector: "Food & Nutrition",
    description:
      "Feed-grade vitamins, amino acids, and minerals for poultry, swine, aqua, and companion animal feed.",
    detail:
      "Compound feed manufacturers source feed-grade vitamins, amino acids, and specialty nutrients from SourceKart to build consistent, cost-efficient premixes and finished feeds. Products are supplied with feed-grade specifications, COA, Halal, and Kosher documentation, with drum and bag quantities dispatched to support production schedules.",
    chemicals: [
      "Biotin",
      "Vitamin A Acetate",
      "Vitamin D3 100",
      "Vitamin K1",
      "L Lysine Base",
      "L Threonine",
      "L Tryptophan",
      "L Methionine",
      "Betaine HCL",
    ],
    relatedProducts: ["vitamins", "amino-acids", "nutraceuticals"],
  },
];

export const applicationsData: Application[] = defs;

export const sectors = [
  "Health & Wellness",
  "Food & Nutrition",
] as const;

export function getApplication(slug: string): Application | undefined {
  return applicationsData.find((a) => a.slug === slug);
}

export function applicationsBySector(sector: string): Application[] {
  return applicationsData.filter((a) => a.sector === sector);
}
