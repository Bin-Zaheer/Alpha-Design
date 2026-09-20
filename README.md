# Alpha Design — Website

A Next.js 14 (App Router) + Tailwind CSS + Motion (Framer Motion) rebuild of
the reference interior-design portfolio, rebranded from "Bin Zaheer" to
"Alpha Design" using the provided logo.

## What's included

- **Next.js 14 App Router**, TypeScript, Tailwind CSS
- **Motion** (`motion/react`, the renamed Framer Motion) for all animations:
  fade/slide-ins on scroll, hover lift/scale effects, animated nav links,
  animated progress bar in the Process section
- **A working, auto-playing image slider** (`components/FeaturedSlider.tsx`)
  for the featured project — autoplay + manual prev/next + dot navigation,
  built with `AnimatePresence` (no broken shortcode issues!)
- **Smooth scrolling** (`scroll-behavior: smooth` + anchor nav links)
- **Fully responsive** layout (mobile menu, responsive grids)
- Your logo (`public/logo.png`) used site-wide instead of "Bin Zaheer" text

## Sections (matching the reference 1:1)

1. Sticky Navbar with logo + anchor links + "Start a Project" CTA
2. Hero — full-bleed image, headline, tagline, CTA button
3. About/Intro — heading + description + project thumbnail grid + quote block
4. Featured Project slider + "What We Do" list + staircase image
5. Process steps (01–04) with animated progress line
6. Final CTA banner
7. Footer with logo + social/contact links

## Images

Placeholder interior photography from Unsplash is used throughout (free to
use). **Swap these out** for the client's real project photography before
launch — just replace the `image` URLs in `lib/data.ts` and the `src`
attributes in `Hero.tsx`, `Intro.tsx`, and `CTA.tsx`.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploying

Push to GitHub and import the repo on Vercel (same as your other projects) —
zero config needed, it will just work.
