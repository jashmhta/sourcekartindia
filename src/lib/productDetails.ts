/**
 * Per-product enrichment content for SourceKart - reconstructed from the
 * live sourcekart.in product pages.
 */

export type ProductDetail = {
  overview: string[];
  specs?: { label: string; value: string }[];
  pdfs?: { name: string; file: string }[];
  applications: string[]; // application slugs from applications.ts
  faqs?: { q: string; a: string }[];
};

const commonFaqs = [
  {
    q: "What documentation do you provide with each lot?",
    a: "Every dispatched lot ships with a Certificate of Analysis (COA) from the manufacturer, with Halal and Kosher documentation available across the portfolio. Additional documentation is available on request.",
  },
  {
    q: "Can I request samples and small batches?",
    a: "Yes. Samples and small packing materials are routinely provided so you can evaluate quality before committing to bulk volumes. Contact our sales team for specifics.",
  },
];

export const productDetails: Record<string, ProductDetail> = {
  vitamins: {
    overview: [
      "Feed and food-grade vitamins cover single units and premises for animal feed compounders, pharmaceutical manufacturers, and nutraceutical brands.",
      "The Vitamins portfolio spans Biotin, Calcium D Pantothenate (Vitamin B5), Inositol (Vitamin B8), Vitamin A Acetate 325/500 cws, Vitamin A Palmitate 250/500 cws, Vitamin D2 100/500 cws, Vitamin D3 100/500 cws, Vitamin E 50%, Vitamin K1 5% 10%, supplied with COA, Halal, and Kosher documentation and available in sample, small-pack, drum, and bulk quantities from our Mumbai sales office and Bhiwandi facility.",
    ],
    specs: [
      { label: "Grades", value: "Feed · Food · Pharmaceutical" },
      { label: "Forms", value: "Powder · CWS · Oil-based (as applicable)" },
      { label: "Documentation", value: "COA · Halal · Kosher per lot" },
      { label: "Packaging", value: "Sample · Small pack · Drum / bag · Bulk" },
    ],
    applications: ["pharmaceuticals", "animal-nutrition", "food-and-beverages", "personal-care-and-beauty"],
    faqs: commonFaqs,
  },
  "amino-acids": {
    overview: [
      "Amino acid grades are differentiated by purity, particle size, and route of synthesis, matched to formulation requirements in supplements, pharmaceuticals, food, feed, and personal care.",
      "The Amino Acids portfolio spans Glycine, L Alanine, L Arginine Aspartate, L Arginine HCL, L Arginine Nitrate, L Asparagine Monohydrate, L Aspartic Acid, L Carnitine Fumarate, L Carnitine HCL, L Carnitine Tartrate, L Cysteine Base, L Cysteine HCL, L Cystine, L Glutamic Acid, L Histidine Base, L Histidine HCL, L Isoleucine, L Leucine, L Lysine Acetate, L Lysine Base, L Lysine HCL, L Malic Acid, L Methionine, L Norvaline, L Ornithine Alpha Ketoglutarate, L Ornithine HCL, L Ornithine L Aspartate, L Phenylalanine, L Proline, L Pyroglutamic Acid, L Serine, L Theanine, L Threonine, L Tryptophan, L Tyrosine, L Valine, N Acetyl L Tyrosine, N Acetyl L-Carnitine, N Acetyl L-Cysteine, Soy Protein Isolate 90%, Whey Protein Isolate, supplied with COA, Halal, and Kosher documentation and available in sample, small-pack, drum, and bulk quantities from our Mumbai sales office and Bhiwandi facility.",
    ],
    specs: [
      { label: "Grades", value: "Nutraceutical · Pharma · Feed · Personal Care" },
      { label: "Forms", value: "Powder · Granules · HCL / base variants" },
      { label: "Documentation", value: "COA · Halal · Kosher per lot" },
      { label: "Packaging", value: "Sample · Small pack · Drum / bag · Bulk" },
    ],
    applications: ["nutraceuticals", "sports-nutrition", "pharmaceuticals", "food-and-beverages", "animal-nutrition", "personal-care-and-beauty", "industrial-chemicals", "agriculture"],
    faqs: commonFaqs,
  },
  "herbal-extracts": {
    overview: [
      "Botanical extracts are standardised to consistent active content, with origin, extraction, and assay details documented per lot for clean-label supplement and beverage brands.",
      "The Herbal Extracts portfolio spans 5-HTP, Ginseng Extract, Grape Seed Extract, Quercetin, Resveratrol, Rutin, Silymarin 80%, supplied with COA, Halal, and Kosher documentation and available in sample, small-pack, drum, and bulk quantities from our Mumbai sales office and Bhiwandi facility.",
    ],
    specs: [
      { label: "Standardisation", value: "Active content per product" },
      { label: "Forms", value: "Powder · Extract (ratio/percent)" },
      { label: "Documentation", value: "COA · Halal · Kosher per lot" },
      { label: "Packaging", value: "Sample · Small pack · Drum / bag" },
    ],
    applications: ["nutraceuticals", "personal-care-and-beauty", "food-and-beverages", "agriculture"],
    faqs: commonFaqs,
  },
  nutraceuticals: {
    overview: [
      "Specialty actives serve sports, longevity, mood, joint, and immunity formulations, with purity, assay, and origin traceable to the manufacturer.",
      "The Nutraceuticals portfolio spans Adenine, Adenosine Triphosphate, Agmatine Sulfate, Alanyl Glutamine, ARA 10%, Betaine HCL, Carnosine, Choline Bitartarate, Coenzyme Q10, Conjugated Linoleic Acid (CLA 60%), Creatine HCL, Creatine Malate, Creatine Nitrate, DHA 10%, DMAE Bitartarate, EPA 10%, Gamma Aminobutyric Acid (GABA), Glutathione, Melatonin, Methylsulfonylmethane (MSM), Palmitoylethanolamide, S-Adenosyl Methionine (SAMe), Sodium Hyaluronate, supplied with COA, Halal, and Kosher documentation and available in sample, small-pack, drum, and bulk quantities from our Mumbai sales office and Bhiwandi facility.",
    ],
    specs: [
      { label: "Grades", value: "Nutraceutical · Food" },
      { label: "Forms", value: "Powder · Granules · Oil-based (as applicable)" },
      { label: "Documentation", value: "COA · Halal · Kosher per lot" },
      { label: "Packaging", value: "Sample · Small pack · Drum / bag · Bulk" },
    ],
    applications: ["nutraceuticals", "sports-nutrition", "pharmaceuticals", "personal-care-and-beauty", "animal-nutrition", "industrial-chemicals"],
    faqs: commonFaqs,
  },
  sweeteners: {
    overview: [
      "Sweetener specifications cover purity, moisture, and sweetness equivalence, suited to food, beverage, confectionery, and pharmaceutical formulations.",
      "The Sweeteners portfolio spans Acesulfame K, Allulose, Aspartame, Erythritol, Mannitol, Neotame, Potassium Sorbate, Sorbic Acid, Sucralose, Trehalose, Xylitol, supplied with COA, Halal, and Kosher documentation and available in sample, small-pack, drum, and bulk quantities from our Mumbai sales office and Bhiwandi facility.",
    ],
    specs: [
      { label: "Grades", value: "Food · Beverage · Pharma (as applicable)" },
      { label: "Forms", value: "Powder · Granular · Liquid" },
      { label: "Documentation", value: "COA · Halal · Kosher per lot" },
      { label: "Packaging", value: "Sample · Small pack · Drum / bag" },
    ],
    applications: ["food-and-beverages", "pharmaceuticals"],
    faqs: commonFaqs,
  },
  nucleotides: {
    overview: [
      "Nucleotides and NAD+ precursors are supplied in high-purity powder forms with full assay and stability documentation for cellular-health and longevity supplements.",
      "The Nucleotides portfolio spans Adenosine, B Nicotinamide Mononucleotide, Cytidine, Ergothioneine, Guanosine, Inosine, Nicotinamide Adenine Dinucleotide, Nicotinamide Mononucleotide, Nicotinamide Riboside Chloride, Uridine, supplied with COA, Halal, and Kosher documentation and available in sample, small-pack, drum, and bulk quantities from our Mumbai sales office and Bhiwandi facility.",
    ],
    specs: [
      { label: "Grades", value: "Nutraceutical" },
      { label: "Forms", value: "Powder" },
      { label: "Documentation", value: "COA · Halal · Kosher per lot" },
      { label: "Packaging", value: "Sample · Small pack · Drum / bag" },
    ],
    applications: ["nutraceuticals"],
    faqs: commonFaqs,
  },
  proteins: {
    overview: [
      "Plant and dairy proteins are specified by protein content, particle size, and sensory profile, with allergen and origin documentation for clean-label claims.",
      "The Proteins portfolio spans Pea Protein, Rice Protein Powder, Whey Protein Concentrate, supplied with COA, Halal, and Kosher documentation and available in sample, small-pack, drum, and bulk quantities from our Mumbai sales office and Bhiwandi facility.",
    ],
    specs: [
      { label: "Grades", value: "Food · Nutraceutical" },
      { label: "Protein content", value: "70, 90%+ (as applicable)" },
      { label: "Documentation", value: "COA · Halal · Kosher · Allergen per lot" },
      { label: "Packaging", value: "Sample · Small pack · Bag / drum" },
    ],
    applications: ["food-and-beverages", "sports-nutrition", "nutraceuticals"],
    faqs: commonFaqs,
  },
  "sports-nutrition": {
    overview: [
      "Sports nutrition actives ship with assay, particle size, and functionality documentation suited to regulated supplement production.",
      "The Sports Nutrition portfolio spans BCAA 2:1:1/4:1:1/8:1:1, Beta Alanine, Betaine Anhydrous, Creatine Monohydrate, D-Aspartic Acid, EAA (Essential Amino Acid), HMB Calcium, L Arginine, L Arginine Alpha Ketoglutarate (AAKG), L Carnitine Base, L Citrulline, L Citrulline DL Malate 2:1, L Glutamine, Taurine, supplied with COA, Halal, and Kosher documentation and available in sample, small-pack, drum, and bulk quantities from our Mumbai sales office and Bhiwandi facility.",
    ],
    specs: [
      { label: "Grades", value: "Nutraceutical" },
      { label: "Forms", value: "Powder · Granules" },
      { label: "Documentation", value: "COA · Halal · Kosher per lot" },
      { label: "Packaging", value: "Sample · Small pack · Drum / bag" },
    ],
    applications: ["sports-nutrition", "nutraceuticals"],
    faqs: commonFaqs,
  },
};

export function getProductDetail(slug: string): ProductDetail | undefined {
  return productDetails[slug];
}
