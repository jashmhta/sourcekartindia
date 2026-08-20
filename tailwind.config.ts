import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alethia: {
          dark: "#0F1F10",
          forest: "#0f1f10",
          ink: "#0f0f0f",
          black: "#000000",
          cream: "#F5F4F2",
          paper: "#F3F3F1",
          lime: "#C6F19D",
          limeSoft: "#D5EEBC",
          muted: "#999D97",
          mist: "#E8E6E1",
        },
      },
      fontFamily: {
        geist: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        fragment: ["var(--font-fragment)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        hero: "-0.05em",
      },
      maxWidth: {
        site: "1440px",
      },
      borderRadius: {
        card: "24px",
        pill: "9999px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
