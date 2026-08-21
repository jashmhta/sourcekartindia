import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Preloader from "@/components/dynamics/Preloader";
import { SmoothScroll } from "@/components/dynamics/SmoothScroll";
import { OrganizationSchema, WebsiteSchema } from "@/components/Schema";
import { brand } from "@/lib/brand";
import { MobileCTA } from "@/components/MobileCTA";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} | Food & Health Ingredients`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "vitamins",
    "amino acids",
    "herbal extracts",
    "nutraceuticals",
    "sweeteners",
    "nucleotides",
    "proteins",
    "sports nutrition",
    "food ingredients",
    "health ingredients",
    "ingredient supplier India",
    "B2B ingredient sourcing",
    "SourceKart India",
    brand.name,
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  openGraph: {
    title: brand.name,
    description: brand.description,
    url: brand.url,
    siteName: brand.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: brand.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  manifest: "/manifest.json",
  themeColor: "#0f1f10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body id="top" className="font-geist antialiased">
        <OrganizationSchema />
        <WebsiteSchema />
        <Preloader />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
