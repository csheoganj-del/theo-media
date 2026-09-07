export interface PricingTier {
  id: string;
  number: string;
  name: string;
  price: string;
  priceValue: number;
  tagline: string;
  description: string;
  featured: boolean;
  includes: string[];
  expandedIncludes: string[];
  ctaText: string;
  whatsappText: string;
}

export interface SpecialistProject {
  id: string;
  tag: string;
  name: string;
  price: string;
  priceValue: number;
  description: string;
  whatsappText: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    number: '01',
    name: 'Starter',
    price: '£895',
    priceValue: 895,
    tagline: 'For new and small businesses.',
    description: 'A clean, fast, professional website built to give your business instant credibility and a clear conversion path.',
    featured: false,
    includes: [
      '1–3 custom pages',
      'Custom TheoMedia design',
      'Mobile-first responsive build',
      'Contact / enquiry form',
      'WhatsApp / call integration',
      'Basic SEO & Google indexing',
    ],
    expandedIncludes: [
      'SSL & domain setup',
      'High-speed performance tuning',
      'Social links & favicon',
      '1 revision round',
      '14 days launch support',
    ],
    ctaText: 'CHOOSE STARTER',
    whatsappText: "Hi TheoMedia, I'm interested in the Starter website package (£895). Could you tell me the next steps?",
  },
  {
    id: 'professional',
    number: '02',
    name: 'Professional',
    price: '£2,495',
    priceValue: 2495,
    tagline: 'For established SMEs ready to scale.',
    description: 'Our comprehensive commercial website build with CMS management, dynamic animations, and conversion architecture.',
    featured: true,
    includes: [
      'Up to 8 custom pages',
      'Intuitive CMS (edit text, blogs & media)',
      'Kinetic scroll animations & motion',
      'Copywriting polishing on key pages',
      'Google Analytics & Search Console setup',
    ],
    expandedIncludes: [
      'Local SEO & schema foundation',
      'Advanced enquiry & booking forms',
      'Up to 2 business integrations',
      'Conversion-focused CTAs',
      '2 revision rounds',
      '60 days dedicated post-launch support',
    ],
    ctaText: 'CHOOSE PROFESSIONAL',
    whatsappText: "Hi TheoMedia, I'm interested in the Professional website package (£2,495). Could you tell me the next steps?",
  },
  {
    id: 'bespoke',
    number: '03',
    name: 'Bespoke',
    price: '£4,995',
    priceValue: 4995,
    tagline: 'For premium, custom brand experiences.',
    description: 'Tailored creative direction, bespoke UX design, and custom technical execution for brands that refuse to look ordinary.',
    featured: false,
    includes: [
      'Bespoke art direction & luxury layout',
      'Custom interactive experiences & motion',
      'Multi-page architecture & advanced CMS',
      'Bespoke workflows or client portals',
      'Custom API & database integrations',
    ],
    expandedIncludes: [
      'Advanced technical SEO architecture',
      'Performance & Core Web Vitals tuning',
      'Custom animations & interactive elements',
      '3 revision rounds',
      '90 days priority support',
    ],
    ctaText: 'DISCUSS BESPOKE',
    whatsappText: "Hi TheoMedia, I'd like to discuss a Bespoke website project starting from £4,995.",
  },
];

export const specialistProjects: SpecialistProject[] = [
  {
    id: 'ecommerce',
    tag: 'ECOMMERCE',
    name: 'Ecommerce Platforms',
    price: '£3,995',
    priceValue: 3995,
    description: 'High-conversion online stores with bespoke catalog navigation, Stripe & Shopify integration, inventory syncing, and frictionless mobile checkouts.',
    whatsappText: "Hi TheoMedia, I'd like to get a quote for an Ecommerce Platform (from £3,995).",
  },
  {
    id: 'hospitality',
    tag: 'HOSPITALITY & STAYS',
    name: 'Hotels & Hospitality',
    price: '£5,995',
    priceValue: 5995,
    description: 'Direct commission-free room booking engines, PMS connectivity, table reservations, digital dining menus, and guest experience portals.',
    whatsappText: "Hi TheoMedia, I'd like to get a quote for a Hotel or Hospitality System (from £5,995).",
  },
  {
    id: 'software',
    tag: 'SAAS & SOFTWARE',
    name: 'Web Apps & Custom Software',
    price: '£9,500',
    priceValue: 9500,
    description: 'Bespoke SaaS products, client dashboards, counter POS/billing software, and internal operational tools built to eliminate manual spreadsheets.',
    whatsappText: "Hi TheoMedia, I'd like to get a quote for a Custom Web App or Software project (from £9,500).",
  },
];

export const sharedInclusions = [
  'Custom design',
  'Mobile-first build',
  'Fast loading',
  'SSL & Security',
  'Contact setup',
  'SEO foundations',
  'Accessibility standards',
  'Full client ownership',
];
