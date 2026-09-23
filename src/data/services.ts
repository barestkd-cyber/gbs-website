// The product ladder. Every page that lists services reads from here.
//
// Pricing: leave setupPrice / monthlyPrice as null until the owner finalizes numbers.
// Pricing only renders when siteConfig.showPricing is true AND a price is set.
// Never put placeholder amounts here.

export interface Service {
  id: 'website' | 'crm' | 'crm-pos' | 'custom';
  step: number;
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
    step: 1,
    name: 'Website + Care',
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
    step: 2,
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
    ],
    setupPrice: null,
    monthlyPrice: null,
    startingAt: false,
    setupCovers: 'Setting up the system around your business, including your fields and importing existing records.',
    monthlyCovers: 'Hosting, support, updates, and keeping the system running.',
  },
  {
    id: 'crm-pos',
    step: 3,
    name: 'Grizzly CRM + POS',
    tagline: 'Customers and payments in the same system.',
    message: 'Manage the customer relationship and the money in the same system.',
    features: [
      'Everything in Grizzly CRM',
      'Products and services',
      'Point of sale and checkout pages',
      'One-time payments and recurring billing',
      'Event and registration checkout',
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
    step: 4,
    name: 'Custom Workflows',
    tagline: 'When the standard version almost fits.',
    message:
      'When the off-the-shelf version almost works, Grizzly can adapt the system around the way your business actually operates.',
    features: [
      'Business-specific workflows and screens',
      'Industry-specific fields',
      'Internal process tools',
      'Connections between your website, CRM, payments, scheduling, and forms',
    ],
    setupPrice: null,
    monthlyPrice: null,
    startingAt: true,
    setupCovers: 'Scoped, built on top of Grizzly CRM or CRM + POS, and agreed before work starts.',
    monthlyCovers: 'Support for the added pieces, where needed.',
  },
];

export const getService = (id: Service['id']) => services.find((s) => s.id === id)!;
