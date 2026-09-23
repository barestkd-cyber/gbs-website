# Grizzly Business Systems website

Marketing site for Grizzly Business Systems (GBS), built with [Astro](https://astro.build) as a fast static site.
Positioning and content rules: [docs/website-blueprint.md](docs/website-blueprint.md).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve the built site
```

## Pages

| Page | File |
| --- | --- |
| Home | `src/pages/index.astro` |
| Websites & Systems | `src/pages/websites-and-systems.astro` |
| Our Work | `src/pages/our-work.astro` |
| About | `src/pages/about.astro` |
| Contact / intake | `src/pages/contact.astro` |

Sitemap, `robots.txt`, canonical URLs, OpenGraph tags, and `ProfessionalService` structured data are generated automatically.

## Editing content

- **Business details, domain, contact info:** `src/config/site.ts`
- **Services and prices:** `src/data/services.ts`
- **Portfolio:** `src/data/projects.ts`. Set `published: false` to hide a project.
- **New screenshots:** save `name-desktop.png` (1440×900) and `name-mobile.png` (390 wide) into `brand-source/shots/`, then run `node scripts/optimize-shots.mjs`.

### Turning on pricing

1. Fill in `setupPrice` / `monthlyPrice` for each service in `src/data/services.ts` (whole dollars). Leave `null` to show "Quoted after a short conversation" for that line.
2. Set `showPricing: true` in `src/config/site.ts`.

The pricing section appears on the Websites & Systems page. No markup changes needed.

## Contact form

The form POSTs multipart form data (with `Accept: application/json`) to `PUBLIC_FORM_ENDPOINT`.
Copy `.env.example` to `.env` and set it. Formspree, Basin, or a Supabase edge function (like the
`notify-lead` pattern used on the RELI / 4K sites) all work. Set the same variable in your host's build settings.
Until it's set, the form validates but tells visitors it isn't connected yet.

Fields: `name`, `business`, `email`, `phone`, `website`, `need`, `message`, `contact_method`, plus a hidden
honeypot `company_url` (drop any submission where it's filled).

## Brand assets

`brand-source/gbs-logo-original.png` is the approved logo (copied from BaresCRM). `node scripts/brand-assets.mjs`
regenerates the transparent logo, bear-G favicon/app icons, and the share image from it. Don't edit those outputs by hand.

## Deploying

Any static host works (GitHub Pages, Netlify, Cloudflare Pages, Vercel). Pages are built as `about.html` etc. and linked without
the extension, which GitHub Pages, Netlify, and Cloudflare serve automatically.

## Launch checklist (owner)

- [ ] Confirm the production domain in `src/config/site.ts` (currently `grizzlybusinesssystems.com`, unconfirmed)
- [ ] Add a public phone and/or email in `src/config/site.ts`
- [ ] Set `PUBLIC_FORM_ENDPOINT`
- [ ] Review the wording of each project in `src/data/projects.ts` and confirm each client is OK being listed
- [ ] Add BaresCRM screenshots (customer info removed); see the TODOs in `index.astro` and `our-work.astro`
- [ ] Add the founder's name (and an optional photo) on the About page
- [ ] Final prices, when ready
