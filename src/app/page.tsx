import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ScrollNarrative } from "@/components/dynamics/ScrollNarrative";
import { AboutSection } from "@/components/home/AboutSection";
import { Testimonials } from "@/components/home/Testimonials";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Stats } from "@/components/home/Stats";
import { Manifesto } from "@/components/home/Manifesto";
import { Process } from "@/components/home/Process";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { Certifications } from "@/components/home/Certifications";
import { Trust } from "@/components/home/Trust";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { News } from "@/components/home/News";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero, eco background image */}
      <Hero />
      {/* 2. Rock 3D island, eco-friendly narrative */}
      <ScrollNarrative />
      {/* 3. About Us, founder + company years */}
      <AboutSection />
      {/* 4. Testimonials */}
      <Testimonials />
      {/* 5. Products, eco-friendly green */}
      <ProductShowcase />
      {/* Supporting sections */}
      <Stats />
      <Manifesto />
      <Process />
      <IndustriesGrid />
      <Certifications />
      <Trust />
      <WhyChooseUs />
      <News />
    </>
  );
}
