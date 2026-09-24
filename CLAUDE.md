# Grizzly Business Systems — marketing site

Astro static site. The source of truth for positioning, copy, and constraints is
[docs/website-blueprint.md](docs/website-blueprint.md). Read it before changing copy or structure.

## Non-negotiables (blueprint §20)

1. Do not market AI. No "AI-powered", "digital transformation", "cutting-edge", "full-service agency", "we can build anything", "unlimited", "nationwide".
2. East Texas first: "Serving Tyler, Whitehouse, Longview, and businesses across East Texas."
3. Websites are the entry point; the hero stays website-focused.
4. Pricing is setup + monthly. Never add placeholder or invented amounts. Numbers live only in `src/data/services.ts`, and show only when `showPricing` in `src/config/site.ts` is true.
5. Consulting is not a nav item or page. No standalone SEO page.
6. Don't call anything a "Grizzly Platform" yet.
7. Never invent clients, testimonials, results, stats, years in business, certifications, or partnerships. Use `TODO(owner)` instead.
8. Use only the approved logo (`brand-source/gbs-logo-original.png`, copied from BaresCRM). Never redraw, recolor, or replace it. Derived files come from `scripts/brand-assets.mjs`.
9. One primary CTA: "Tell Us About Your Business" → `/contact`.
10. No profanity, no popups, no chat widget, no autoplay, no fake urgency.

## Product naming (supersedes the blueprint's older names)

- Website service: **Website Build + Care**
- Grizzly CRM product family, in tiers: **Grizzly CRM** → **Grizzly CRM Plus** → **Grizzly CRM Custom**
- Never use "Grizzly CRM + POS" or "CRM + POS" as a product name. POS is a feature of Plus.
- Martial arts software is **BaresTKD CRM**, a separate product. It is not a Grizzly CRM tier. Never call it "Grizzly CRM Martial Arts".
- Descriptive phrases like "custom workflows" or "a CRM with payments and POS" are fine in body copy.

## Where things live

- `src/config/site.ts`: business name, domain, service area, CTA, `showPricing`, contact details
- `src/data/services.ts`: the product ladder and (future) prices
- `src/data/projects.ts`: portfolio and case studies (`published` flag)
- `src/components/`: Logo, CTAButton, ServiceCard, ProjectCard, PricingSection, SystemFlow, HeroVisual, etc.
- `src/styles/global.css`: palette tokens sampled from the logo
- `scripts/optimize-shots.mjs`: turns raw screenshots in `brand-source/shots` into `public/work/*.webp`

## Commands

- `npm run dev`: local server on http://localhost:4321
- `npm run build`: static output in `dist/`
