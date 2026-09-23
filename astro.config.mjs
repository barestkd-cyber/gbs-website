import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site.ts';

// SITE_URL / BASE_PATH let the same code deploy to a preview (GitHub Pages project site)
// or the real domain. Leave both unset for production.
export default defineConfig({
  site: process.env.SITE_URL || siteConfig.url,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'never',
  build: { format: 'file' },
  devToolbar: { enabled: false },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
