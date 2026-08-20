import { CDN_BASE } from "./cdn";
/** SourceKart brand + product catalogue */

export const brand = {
  name: "SourceKart India",
  shortName: "SourceKart",
  tagline: "The Source You Trust. The Quality You Need.",
  description:
    "SourceKart is a sourcing and distribution company focused on high-quality nutraceutical, food and health ingredients. We connect manufacturers with reliable sources for amino acids, vitamins, minerals, proteins, sweeteners, extracts and other specialty ingredients.",
  url: "https://www.sourcekartindia.com",
  gst: "27GFSPB5688J1ZL",
  logo: CDN_BASE + "/images/brand/logo-final.webp",
  email: {
    primary: "soucekart@gmail.com",
    sales: "soucekart@gmail.com",
  },
  phones: ["+91 93242 62269"],
  whatsapp: "https://wa.me/919324262269",
  address: {
    line1: "403 / 404, KL Accolade, Road 6",
    line2: "Golibar, Santacruz East",
    city: "Mumbai - 400 055",
    country: "India",
    full: "403 / 404, KL Accolade, Road 6, Golibar, Santacruz East, Mumbai - 400 055, India",
  },
  warehouse: "Domestic manufacturing & warehousing at Kalher, Bhiwandi",
  founder: {
    name: "Jainam Bagadia",
    role: "Founder",
    bio: "Founder of SourceKart India, built on trust, transparency, consistency, and long-term relationships across the nutraceutical, food, and health ingredients industry.",
  },
  established: "2026",
} as const;

export const founderStatement =
  "I believe that every successful business begins with a simple idea and grows through strong relationships. My journey in the nutraceutical ingredients industry has given me the opportunity to work closely with manufacturers, suppliers, and businesses, and along the way, I understood one thing clearly. sourcing is not just about finding a product. It's about finding the right quality, the right source, the right value, and someone you can trust.\n\nThat belief became the foundation of SourceKart India. I wanted to build a company that is more than just a supplier. a company that understands its customers, takes their requirements seriously, and works alongside them to find the right solutions.\n\nAs we build SourceKart India, my vision is to create a sourcing network built on trust, transparency, consistency, and long-term relationships. We are starting with a simple purpose: to make sourcing easier.\n\nAnd while there is a long way to go, I'm excited about what we are building. one relationship, one requirement, and one opportunity at a time. This is just the beginning.";

export type Product = {
  slug: string;
  title: string;
  short: string;
  href: string;
  image: string;
  blurb: string;
  items: string[];
};

export const products: Product[] = [
  {
    slug: "vitamins",
    title: "Vitamins",
    short: "Vitamin portfolio",
    href: "/products/vitamins",
    image: CDN_BASE + "/images/brand/product-vitamins.webp",
    blurb:
      "Feed and food-grade vitamin premises and single units, from biotin to vitamin K1, formulated for animal nutrition, pharmaceuticals, and nutraceuticals.",
    items: [
      "Biotin",
      "Calcium D Pantothenate (Vitamin B5)",
      "Inositol (Vitamin B8)",
      "Vitamin A Acetate 325/500 cws",
      "Vitamin A Palmitate 250/500 cws",
      "Vitamin D2 100/500 cws",
      "Vitamin D3 100/500 cws",
      "Vitamin E 50%",
      "Vitamin K1 5% 10%",
    ],
  },
  {
    slug: "amino-acids",
    title: "Amino Acids",
    short: "Amino acid range",
    href: "/products/amino-acids",
    image: CDN_BASE + "/images/brand/product-amino-acids.webp",
    blurb:
      "A broad portfolio of amino acids for nutraceuticals, sports nutrition, food, feed, and cosmetics, supplied with CAS-referenced documentation and consistent purity.",
    items: [
      "Glycine",
      "L Alanine",
      "L Arginine Aspartate",
      "L Arginine HCL",
      "L Arginine Nitrate",
      "L Asparagine Monohydrate",
      "L Aspartic Acid",
      "L Carnitine Fumarate",
      "L Carnitine HCL",
      "L Carnitine Tartrate",
      "L Cysteine Base",
      "L Cysteine HCL",
      "L Cystine",
      "L Glutamic Acid",
      "L Histidine Base",
      "L Histidine HCL",
      "L Isoleucine",
      "L Leucine",
      "L Lysine Acetate",
      "L Lysine Base",
      "L Lysine HCL",
      "L Malic Acid",
      "L Methionine",
      "L Norvaline",
      "L Ornithine Alpha Ketoglutarate",
      "L Ornithine HCL",
      "L Ornithine L Aspartate",
      "L Phenylalanine",
      "L Proline",
      "L Pyroglutamic Acid",
      "L Serine",
      "L Theanine",
      "L Threonine",
      "L Tryptophan",
      "L Tyrosine",
      "L Valine",
      "N Acetyl L Tyrosine",
      "N Acetyl L-Carnitine",
      "N Acetyl L-Cysteine",
      "Soy Protein Isolate 90%",
      "Whey Protein Isolate",
    ],
  },
  {
    slug: "herbal-extracts",
    title: "Herbal Extracts",
    short: "Botanical actives",
    href: "/products/herbal-extracts",
    image: CDN_BASE + "/images/brand/product-herbal-extracts.webp",
    blurb:
      "Standardised plant extracts and bioactives for supplements, beverages, and wellness formulations, clean and traceable from source to shelf.",
    items: [
      "5-HTP",
      "Ginseng Extract",
      "Grape Seed Extract",
      "Quercetin",
      "Resveratrol",
      "Rutin",
      "Silymarin 80%",
    ],
  },
  {
    slug: "nutraceuticals",
    title: "Nutraceuticals",
    short: "Functional ingredients",
    href: "/products/nutraceuticals",
    image: CDN_BASE + "/images/brand/product-nutraceuticals.webp",
    blurb:
      "Functional and specialty ingredients for dietary supplements, from coenzyme Q10 and creatine variants to nootropics, sweeteners, and joint-health actives.",
    items: [
      "Adenine",
      "Adenosine Triphosphate",
      "Agmatine Sulfate",
      "Alanyl Glutamine",
      "ARA 10%",
      "Betaine HCL",
      "Carnosine",
      "Choline Bitartarate",
      "Coenzyme Q10",
      "Conjugated Linoleic Acid (CLA 60%)",
      "Creatine HCL",
      "Creatine Malate",
      "Creatine Nitrate",
      "DHA 10%",
      "DMAE Bitartarate",
      "EPA 10%",
      "Gamma Aminobutyric Acid (GABA)",
      "Glutathione",
      "Melatonin",
      "Methylsulfonylmethane (MSM)",
      "Palmitoylethanolamide",
      "S-Adenosyl Methionine (SAMe)",
      "Sodium Hyaluronate",
    ],
  },
  {
    slug: "sweeteners",
    title: "Sweeteners",
    short: "Sugar alternatives",
    href: "/products/sweeteners",
    image: CDN_BASE + "/images/brand/product-sweeteners.webp",
    blurb:
      "High-intensity and polyol sweeteners for food, beverage, and confectionery formulations, from sucralose and stevia-adjacent options to xylitol and erythritol.",
    items: [
      "Acesulfame K",
      "Allulose",
      "Aspartame",
      "Erythritol",
      "Mannitol",
      "Neotame",
      "Potassium Sorbate",
      "Sorbic Acid",
      "Sucralose",
      "Trehalose",
      "Xylitol",
    ],
  },
  {
    slug: "nucleotides",
    title: "Nucleotides",
    short: "NAD+ & nucleotide actives",
    href: "/products/nucleotides",
    image: CDN_BASE + "/images/brand/product-nucleotides.webp",
    blurb:
      "Nucleotides and NAD+ precursors, including NMN, NR Chloride, and nicotinamide adenine dinucleotide, for longevity and cellular-health formulations.",
    items: [
      "Adenosine",
      "B Nicotinamide Mononucleotide",
      "Cytidine",
      "Ergothioneine",
      "Guanosine",
      "Inosine",
      "Nicotinamide Adenine Dinucleotide",
      "Nicotinamide Mononucleotide",
      "Nicotinamide Riboside Chloride",
      "Uridine",
    ],
  },
  {
    slug: "proteins",
    title: "Proteins",
    short: "Plant & dairy proteins",
    href: "/products/proteins",
    image: CDN_BASE + "/images/brand/product-proteins.webp",
    blurb:
      "Plant-based and dairy proteins for sports nutrition, functional foods, and beverages, clean label and backed by full documentation.",
    items: ["Pea Protein", "Rice Protein Powder", "Whey Protein Concentrate"],
  },
  {
    slug: "sports-nutrition",
    title: "Sports Nutrition",
    short: "Performance actives",
    href: "/products/sports-nutrition",
    image: CDN_BASE + "/images/brand/product-sports-nutrition.webp",
    blurb:
      "Performance and recovery ingredients for sports nutrition brands, from creatine monohydrate and beta alanine to BCAA, EAA, and citrulline blends.",
    items: [
      "BCAA 2:1:1/4:1:1/8:1:1",
      "Beta Alanine",
      "Betaine Anhydrous",
      "Creatine Monohydrate",
      "D-Aspartic Acid",
      "EAA (Essential Amino Acid)",
      "HMB Calcium",
      "L Arginine",
      "L Arginine Alpha Ketoglutarate (AAKG)",
      "L Carnitine Base",
      "L Citrulline",
      "L Citrulline DL Malate 2:1",
      "L Glutamine",
      "Taurine",
    ],
  },
];

export const industries = [
  "Food & Beverages",
  "Animal Nutrition",
  "Personal Care & Beauty",
  "Sports Nutrition",
  "Industrial Chemicals",
  "Agriculture",
  "Pharmaceuticals",
  "Nutraceuticals",
] as const;

export const stats = [
  { value: 8, suffix: "", label: "Product Categories", sub: "Vitamins to sports nutrition under one roof" },
  { value: 100, suffix: "+", label: "Individual Products", sub: "Each with CAS reference and full documentation" },
] as const;

export const process = [
  {
    n: "01",
    title: "Enquiry & Specification",
    body: "Share your product, grade, and quantity. Our team maps the requirement to the right ingredient and source within hours.",
    tag: "Day 0",
  },
  {
    n: "02",
    title: "Sourcing & Quotation",
    body: "We draw from vetted global ingredient manufacturers and our stocked inventory to quote competitive pricing with clear lead times.",
    tag: "Day 1-2",
  },
  {
    n: "03",
    title: "Quality Assurance",
    body: "Each lot is checked against agreed specifications and supported with COA, Halal, and Kosher documentation before dispatch.",
    tag: "Day 2-3",
  },
  {
    n: "04",
    title: "Dispatch & Logistics",
    body: "Packed, labelled, and shipped from our Bhiwandi facility, coordinated for timely delivery across India.",
    tag: "Day 3-5",
  },
  {
    n: "05",
    title: "After-Sales Support",
    body: "Samples, small packing, technical follow-up, and repeat-order scheduling for long-term partners.",
    tag: "Ongoing",
  },
] as const;

export const certifications = [
  { name: "MQA", desc: "Management quality certification" },
  { name: "UKCert", desc: "UK product certification" },
  { name: "Halal", desc: "Halal certified supply" },
  { name: "Kosher", desc: "Kosher certified supply" },
  { name: "ISO 9001", desc: "Quality management" },
  { name: "GMP Aligned", desc: "Good manufacturing practice" },
] as const;

export const testimonials: readonly never[] = [];

export const team = [
  {
    name: "Jainam Bagadia",
    role: "Founder",
    bio: "Founder of SourceKart India, building a sourcing network on trust, transparency, consistency, and long-term relationships across the ingredient industry.",
    focus: "Strategy & Key Accounts",
  },
  {
    name: "Anna Mehta",
    role: "Marketing Head",
    bio: "Drives brand, communication, and market development across food, health, and nutrition ingredient segments.",
    focus: "Brand & Growth",
  },
  {
    name: "Rashmi Pawar",
    role: "Manager - Sales",
    bio: "Owns customer engagement, quotations, and relationship management across all product lines.",
    focus: "Enquiry to Order",
  },
  {
    name: "Afrin Shaikh",
    role: "Manager, Logistics & Billing",
    bio: "Coordinates warehousing, dispatch, and billing so every order moves on time and documented.",
    focus: "Dispatch Operations",
  },
  {
    name: "Meenakshi Sawant",
    role: "Manager IMPEX",
    bio: "Manages imports, exports, and customs clearance for our global ingredient supply network.",
    focus: "Global Sourcing",
  },
  {
    name: "Farheen Khan",
    role: "HR Executive",
    bio: "Builds the team that keeps SourceKart's service promise, from hiring to workplace culture.",
    focus: "People & Culture",
  },
] as const;

export const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "MOQ varies by product and grade. For most ingredients we support sample-size and small packing quantities, moving up to drum and bulk volumes. Contact us with your requirement and we will confirm MOQ and pricing.",
  },
  {
    q: "Do you provide COA, Halal, and Kosher documentation?",
    a: "Yes. Every dispatched lot ships with a Certificate of Analysis from the manufacturer, with Halal, Kosher, MQA, and UKCert documentation available across the portfolio. Additional documentation is available on request.",
  },
  {
    q: "Which geographies do you serve?",
    a: "We supply across India from our Mumbai sales office and Bhiwandi facility, and support export enquiries for select ingredients through our IMPEX team. Confirm with our sales team for your destination.",
  },
  {
    q: "Do you supply samples and small packing?",
    a: "Yes. Samples and small packing materials are routinely provided so you can evaluate quality before committing to bulk volumes.",
  },
  {
    q: "What are your payment terms?",
    a: "Standard terms are mutually agreed based on order size, customer relationship, and credit profile. First orders are typically advance; established accounts get credit terms on approval.",
  },
  {
    q: "How quickly can you dispatch?",
    a: "Stocked items from our Bhiwandi facility dispatch within 1-3 working days. Make-to-order or bulk loads follow the manufacturer lead time, which we confirm at quotation.",
  },
] as const;

export const sustainabilityPillars = [
  {
    title: "Responsible Sourcing",
    body: "We partner with global ingredient manufacturers that meet strict guidelines for purity, safety, and sustainability, bringing premium quality to every supply line.",
  },
  {
    title: "Certified Clean Supply",
    body: "Halal, Kosher, MQA, and UKCert credentials across the portfolio mean every ingredient we source and supply adheres to global regulatory requirements and industry benchmarks.",
  },
  {
    title: "Traceability at Every Step",
    body: "Full COA, origin, and compliance documentation on every lot, so your own claims are backed by verifiable records.",
  },
  {
    title: "Responsible Logistics",
    body: "Consolidated dispatch from our central Bhiwandi facility cuts repeated transport legs and the emissions per delivery.",
  },
] as const;

export const whatWeBring = [
  {
    title: "Reliable Sourcing",
    body: "Access to trusted manufacturers and global supply partners.",
  },
  {
    title: "Quality Focused",
    body: "Products supported by the right documentation and quality standards.",
  },
  {
    title: "Built for Business",
    body: "Competitive solutions, responsive service and dependable supply for manufacturers.",
  },
] as const;

export const ourApproach = {
  label: "Our Approach",
  steps: ["Source", "Verify", "Supply"],
  body: "From identifying the right raw material to coordinating supply, we aim to make every step of ingredient procurement simpler and more transparent.",
} as const;

export const whyChooseUs = [
  {
    title: "Smart Sourcing",
    body: "We identify reliable sources and competitive opportunities to help you procure the ingredients you need with confidence.",
  },
  {
    title: "Quality You Can Rely On",
    body: "We focus on consistent product quality, proper documentation, and dependable sources across our ingredient portfolio.",
  },
  {
    title: "Wide Ingredient Portfolio",
    body: "From amino acids and vitamins to proteins, sweeteners, minerals and specialty ingredients, we bring multiple requirements under one roof.",
  },
  {
    title: "Competitive Solutions",
    body: "We work to deliver the right balance of quality, availability, and pricing to support your business requirements.",
  },
  {
    title: "Responsive Support",
    body: "From product enquiries and samples to documentation and order coordination, our team stays involved throughout the process.",
  },
  {
    title: "Supply That Keeps Moving",
    body: "We coordinate sourcing and supply with a focus on timely execution, clear communication, and dependable service.",
  },
] as const;

export const ourPromise = {
  title: "Right Source. Right Ingredient. Right Supply.",
  body: "We're building SourceKart to become a dependable sourcing partner for manufacturers across the nutraceutical, food, health, and allied industries.",
} as const;
