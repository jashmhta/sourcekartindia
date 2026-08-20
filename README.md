# Alethia — Next.js replica

A high-fidelity recreation of [alethia.earth](https://www.alethia.earth/) built with Next.js 15, Tailwind CSS, and TypeScript.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 3**
- **Lenis** — smooth scroll (matches live `html.lenis`)
- **GSAP + ScrollTrigger** — pinned narrative, scrub, reveals
- **Framer Motion** — preloader exit, magnetic CTAs
- **Lottie** — brand preloader (scraped JSON)
- **211-frame island sequence** — scroll-scrubbed canvas player from `r2-assets.alethia.earth`
- **WebM loops** — scan / loop1 / loop2 / clouds from production CDN
- **Geist / Geist Mono** + captured WebGL rock stills

## Dynamics (1:1 intent)

| Live Framer behavior | Replica |
|---|---|
| Preloader | Lottie + fade reveal |
| Lenis smooth scroll | `lenis` + GSAP ticker bridge |
| Roca atras/medio/front | 3-layer rocks, mouse parallax + idle float + scroll zoom-out |
| Scan video pin | Sticky narrative stage, `scan.webm` |
| Floating island sequence | Canvas scrub of 211 webp frames |
| Accordion + carbon UI | Animated expand + glass cards |
| Loop video section | Dual `loop1` / `loop2` webms |
| Section reveals | GSAP fade/slide on enter |
| CTA magnetism | Cursor-attract buttons |

## Pages

| Route | Source |
|-------|--------|
| `/` | Homepage |
| `/our-company` | Company |
| `/contact` | Contact |
| `/solutions/nature-based` | Nature-based solutions |
| `/solutions/supply-chain` | Supply chain / insetting |
| `/our-tech/amrv` | aMRV technology |
| `/our-tech/blockchain` | Blockchain |
| `/resources/news-and-media` | News |
| `/resources/case-studies` | Case studies |
| `/resources/research-and-insights` | Research |
| `/privacy-policy` | Privacy |
| `/terms-of-use` | Terms |

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Design tokens (from live site)

- **Background dark:** `#0F1F10`
- **Lime accent:** `#C6F19D`
- **Cream light:** `#F5F4F2`
- **Display type:** Geist Medium, ~72px hero, tight tracking (~-0.05em)
- **UI labels / buttons:** Geist Mono, uppercase

Scraped with `agent-browser` (screenshots + computed styles) from the production Framer site.
