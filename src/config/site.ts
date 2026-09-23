// Single source of truth for site-wide settings.
// Values marked TODO are waiting on the owner and are hidden on the site while null.

export const siteConfig = {
  businessName: 'Grizzly Business Systems',
  shortName: 'GBS',
  // TODO(owner): confirm the production domain. Used for canonical URLs, sitemap, and share tags.
  url: 'https://grizzlybusinesssystems.com',
  description:
    'Websites, website care, and business systems for small businesses in Tyler, Whitehouse, Longview, and across East Texas.',
  serviceArea: ['Tyler', 'Whitehouse', 'Longview', 'East Texas'],
  serviceAreaLine: 'Serving Tyler, Whitehouse, Longview, and businesses across East Texas.',
  primaryCTA: { label: 'Tell Us About Your Business', href: '/contact' },

  // Flip to true once every service in src/data/services.ts has real numbers.
  showPricing: false,

  contact: {
    // TODO(owner): add public contact details. Anything left null is not shown.
    email: null as string | null,
    phone: null as string | null,
    city: 'Tyler',
    region: 'TX',
  },
  // The intake form endpoint lives in .env as PUBLIC_FORM_ENDPOINT. See README "Contact form".
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Websites & Systems', href: '/websites-and-systems' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
