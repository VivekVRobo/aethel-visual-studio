# Aethel Visual Studio

A standalone multi page website for **Aethel Visual Studio**, an independent visual art service operated by Vivek Vala.

## Current capability

- Six curated showcase pieces with web previews and verified 8K master files.
- 4K and 8K standard delivery tiers.
- Manual full size review for visible artifacts, edge problems, texture issues and upscaling problems.
- Larger delivery sizes are considered only when the artwork still holds up after review.
- Project scoped commercial use licensing.

The site does **not** claim native detail 16K or 24K as a standard capability, professional video editing, certified architectural rendering, real product photography, fabricated clients, fabricated testimonials, or guaranteed turnaround and conversion rates.

## Site structure

### Main client journey

- `/` studio entry point and selected work
- `/work` six piece visual catalog
- `/services` service overview
- `/process` project workflow and quality review
- `/pricing` starting prices, scope factors and common questions
- `/about` studio and operator information
- `/contact` project brief and direct email route

### Artwork pages

- `/art/neo-kyoto-2099`
- `/art/vedic-citadel`
- `/art/astral-guardian`
- `/art/cyber-ronin`
- `/art/alpine-villa`
- `/art/quantum-chronometer`

### Service pages

- `/services/custom-game-concept-art`
- `/services/custom-youtube-artwork`
- `/services/fantasy-book-cover-art`
- `/services/cyberpunk-concept-art`
- `/services/high-resolution-brand-visuals`
- `/services/custom-8k-artwork`

### Other pages

- `/terms`
- `/privacy`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `favicon.svg`

## Design

The site uses a dark editorial style with warm neutral accents, large artwork, restrained motion, responsive layouts and a consistent navigation and footer system.

## Inquiry model

The website is static HTML, CSS and JavaScript. The contact form uses a `mailto:` workflow. It prepares an email in the visitor's own email client rather than sending project information to an Aethel server.

## Local preview

Production uses Vercel `cleanUrls`, so preview with the Vercel development server when possible:

```bash
npx vercel dev
```

A generic static server can still display individual `.html` files, but clean paths such as `/work` may behave differently.

## Deployment

Designed for Vercel static deployment with clean URLs and basic security and cache headers.

Production target:

`https://aethel-visual-studio.vercel.app`

## Commercial baseline

Until real customer evidence exists, public material must not imply customer count, revenue, testimonials, client logos, guaranteed conversion rates, or guaranteed turnaround times.

## Contact

Vivek Vala

`vivekvala562@gmail.com`
