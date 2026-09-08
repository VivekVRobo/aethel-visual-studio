# Aethel Visual Studio

A standalone, premium multi-page website for **Aethel Visual Studio**, an independent high-resolution visual-art service operated by Vivek Vala.

## Current verified capability

- Six curated showcase pieces with web previews and verified 8K master files.
- Verified 4K and 8K standard delivery tiers.
- Manual 100% crop review for common generation, retouching, and upscaling artifacts.
- Higher-resolution delivery considered only after project-specific QA feasibility review.
- Project-scoped commercial-use licensing.
- AI-assisted generation, compositing, retouching, and upscaling may be used depending on the brief.

The site intentionally does **not** claim native-detail 16K/24K as a standard capability, professional video-editing capability, certified architectural rendering, real product photography, fabricated clients, fabricated testimonials, or guaranteed turnaround/conversion rates.

## Premium information architecture

### Main client journey

- `/` — premium studio entry point and selected work
- `/work` — dedicated six-piece visual catalog
- `/services` — service overview
- `/process` — production workflow, QA, licensing, and transparency
- `/pricing` — launch pricing, scope factors, and FAQ
- `/about` — studio/operator identity and operating principles
- `/contact` — structured project brief and direct email route

### Artwork case pages

- `/art/neo-kyoto-2099`
- `/art/vedic-citadel`
- `/art/astral-guardian`
- `/art/cyber-ronin`
- `/art/alpine-villa`
- `/art/quantum-chronometer`

### Service detail pages

- `/services/custom-game-concept-art`
- `/services/custom-youtube-artwork`
- `/services/fantasy-book-cover-art`
- `/services/cyberpunk-concept-art`
- `/services/high-resolution-brand-visuals`
- `/services/custom-8k-artwork`

### Trust and operational pages

- `/terms` — plain-language studio terms
- `/privacy` — privacy and inquiry-flow disclosure
- `404.html` — branded fallback page
- `robots.txt` / `sitemap.xml` — crawler discovery
- `favicon.svg` — studio monogram icon

## Design system

The premium V2 direction uses:

- restrained obsidian / warm ivory / champagne-metal palette
- editorial serif display typography paired with clean sans-serif UI text
- large image-led layouts instead of decorative dashboard UI
- consistent navigation/footer across major pages and detail pages
- accessibility-aware reduced-motion behavior
- responsive mobile navigation
- minimal reveal motion rather than excessive animation

## Inquiry model

The website remains a static HTML/CSS/JavaScript site. The contact form uses a `mailto:` workflow: it prepares a structured email in the visitor's own email client rather than silently posting project information to an Aethel backend.

## Local preview

Because production uses Vercel `cleanUrls`, preview with the Vercel development server when possible:

```bash
npx vercel dev
```

A generic static server can still display individual `.html` files, but clean paths such as `/work` may not resolve the same way they do on Vercel.

## Deployment

Designed for Vercel static deployment with clean URLs and basic security/cache headers.

Canonical production target:

`https://aethel-visual-studio.vercel.app`

## Commercial baseline rule

Until real customer evidence exists, public-facing materials must not imply customer count, revenue, testimonials, client logos, guaranteed conversion rates, or guaranteed turnaround times.

## Contact

Vivek Vala — `vivekvala562@gmail.com`
