# Aethel Visual Studio

Standalone public showroom for **Aethel Visual Studio**, a custom high-resolution visual-art service operated by Vivek Vala.

## Current verified capability

- Six curated showcase pieces with web previews and verified 8K master files.
- 4K and 8K delivery tiers.
- Manual 100% crop review for common generation, retouching, and upscaling artifacts.
- Higher-resolution delivery considered only after project-specific QA feasibility review.
- Project-scoped commercial-use licensing.

Aethel may use AI-assisted generation, compositing, retouching, and upscaling depending on the brief. The public site does **not** claim native-detail 16K/24K output, professional video-editing capability, certified architectural rendering, or product photography.

## Site structure

- `/` — showroom, pricing, brief intake
- `/art/*` — six individual artwork pages
- `/services/*` — six service landing pages
- `robots.txt` and `sitemap.xml` — crawler discovery
- `vercel.json` — clean URLs, immutable asset caching, and basic security headers

## Local preview

This is a static HTML/CSS/JavaScript site. Serve the repository with any static HTTP server, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

The site is designed for Vercel static deployment. The canonical production target used by metadata and the sitemap is:

`https://aethel-visual-studio.vercel.app`

## Commercial baseline

Until real customer evidence exists, public-facing materials should not imply customer count, revenue, testimonials, guaranteed conversion rates, or guaranteed turnaround times.

## Contact

Vivek Vala — `vivekvala562@gmail.com`
