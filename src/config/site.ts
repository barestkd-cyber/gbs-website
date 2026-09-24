// Single source of truth for site-wide settings.
// Values marked TODO are waiting on the owner and are hidden on the site while null.

export const siteConfig = {
  businessName: 'Grizzly Business Systems',
  shortName: 'GBS',
  // TODO(owner): confirm the production domain. Used for canonical URLs, sitemap, and share tags.
  url: 'https://grizzlybusinesssystems.com',
  description:
    'Websites, website care, and business systems for small businesses. Based in Tyler, Texas, working with businesses in East Texas and beyond.',
  // East Texas is home base, not a service boundary. City names stay for local SEO (structured data, About page).
  serviceArea: ['Tyler', 'Whitehouse', 'Longview', 'East Texas'],
  serviceAreaLine: 'Based in East Texas. Working with small businesses here and beyond.',
  footerAreaLine: 'Based in Tyler, Texas. Working with businesses in East Texas and beyond.',
  localAreaLine: 'Serving local clients throughout Tyler, Whitehouse, Longview, and East Texas, and working with businesses beyond.',
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
