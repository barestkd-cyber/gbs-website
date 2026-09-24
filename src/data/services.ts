// Services and products. Every page that lists them reads from here.
//
// Two separate families:
//   'website' — Website Build + Care (a service)
//   'crm'     — the Grizzly CRM product family: Grizzly CRM → Grizzly CRM Plus → Grizzly CRM Custom
// BaresTKD CRM (martial arts) is a separate product and is NOT a Grizzly CRM tier.
//
// Pricing: leave setupPrice / monthlyPrice as null until the owner finalizes numbers.
// Pricing only renders when siteConfig.showPricing is true AND a price is set.
// Never put placeholder amounts here.

export interface Service {
  id: 'website' | 'crm' | 'crm-plus' | 'custom';
  family: 'website' | 'crm';
  // Tier number within the Grizzly CRM family; null for website services.
  step: number | null;
  name: string;
  tagline: string;
  message: string;
  features: string[];
  setupPrice: number | null;
  monthlyPrice: number | null;
  startingAt: boolean;
  setupCovers: string;
  monthlyCovers: string;
}

export const services: Service[] = [
  {
    id: 'website',
    family: 'website',
    step: null,
    name: 'Website Build + Care',
    tagline: 'A good website, kept in good shape.',
    message:
      'Get the website right first, then keep it running without having to become your own web department.',
    features: [
      'Modern, mobile-first design',
      'Contact and intake forms that reach you',
      'Hosting, security, and backups',
      'Technical updates and small ongoing changes',
      'Basic search visibility and analytics',
      'Someone local to call when something needs attention',
    ],
    setupPrice: null,
    monthlyPrice: null,
    startingAt: false,
    setupCovers: 'Planning, design, writing help, and building the site.',
    monthlyCovers: 'Hosting, security, backups, updates, small changes, and search upkeep.',
  },
  {
    id: 'crm',
    family: 'crm',
    step: 1,
    name: 'Grizzly CRM',
    tagline: 'Your customers and leads in one place.',
    message:
      'Stop piecing the business together across notes, spreadsheets, inboxes, and disconnected tools.',
    features: [
      'Contacts, leads, and customer records',
      'Notes and statuses',
      'Search and filtering',
      'Calendar and basic scheduling',
      'Forms and intake',
      'Basic reporting',
      'Fields set up for how your business works',
      'General customer and business organization',
    ],
    setupPrice: null,
    monthlyPrice: null,
    startingAt: false,
    setupCovers: 'Setting up the system around your business, including your fields and importing existing records.',
    monthlyCovers: 'Hosting, support, updates, and keeping the system running.',
  },
  {
    id: 'crm-plus',
    family: 'crm',
    step: 2,
    name: 'Grizzly CRM Plus',
    tagline: 'Customers and payments in the same system.',
    message: 'Manage the customer relationship and the money in the same system.',
    features: [
      'Everything in Grizzly CRM',
      'Products and services',
      'Point of sale and checkout pages',
      'One-time payments and recurring billing',
      'Event and registration checkout',
      'Invoices and payment records',
      'Transaction history and receipts',
    ],
    setupPrice: null,
    monthlyPrice: null,
    startingAt: false,
    setupCovers: 'CRM setup plus products, payment connection, and checkout configuration.',
    monthlyCovers: 'Hosting, support, updates, and payment system upkeep.',
  },
  {
    id: 'custom',
    family: 'crm',
    step: 3,
    name: 'Grizzly CRM Custom',
    tagline: 'Built around the way your business works.',
    message:
      'Start with the Grizzly foundation, then adapt the system where your business needs something different.',
    features: [
      'Starts from Grizzly CRM or Grizzly CRM Plus',
      'Business-specific workflows',
      'Custom fields and screens',
      'Internal process tools',
      'Industry-specific functionality',
      'Connections between your CRM, payments, forms, calendar, website, and reporting',
    ],
    setupPrice: null,
    monthlyPrice: null,
    startingAt: true,
    setupCovers: 'Scoped, built on top of Grizzly CRM or Grizzly CRM Plus, and agreed before work starts.',
    monthlyCovers: 'Support for the added pieces, where needed.',
  },
];

export const getService = (id: Service['id']) => services.find((s) => s.id === id)!;
export const websiteServices = services.filter((s) => s.family === 'website');
export const crmProducts = services.filter((s) => s.family === 'crm');
