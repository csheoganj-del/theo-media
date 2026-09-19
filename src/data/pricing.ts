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

export interface CarePlanFeature {
  title: string;
  explanation?: string;
}

export interface CarePlan {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  intro: string;
  features: CarePlanFeature[];
  ctaText: string;
  href: string;
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

export const carePlans: CarePlan[] = [
  {
    id: 'essential',
    name: 'ESSENTIAL CARE',
    price: '£45',
    billingPeriod: '/ month',
    intro: 'For businesses that want their website looked after without having to think about the technical side.',
    features: [
      {
        title: 'Website monitoring',
        explanation: 'We keep an eye on your website and check that it remains accessible and working as expected.',
      },
      {
        title: 'Security & software maintenance',
        explanation: 'The technology behind websites changes over time. We review relevant security fixes and routine software updates so your site is not simply left untouched after launch.',
      },
      {
        title: 'Backup & recovery checks',
        explanation: 'We maintain the recovery options needed to help restore a previous working version if something goes wrong.',
      },
      {
        title: '1 small content change each month',
        explanation: 'Need to change a phone number, sentence, opening time, photo or similar piece of content? Send it to us.',
      },
      {
        title: 'Email support',
        explanation: "If something doesn't look right, you have someone who already knows your website to contact.",
      },
    ],
    ctaText: 'ADD TO MY PROJECT',
    href: '/contact?care=essential',
  },
  {
    id: 'growth',
    name: 'GROWTH CARE',
    price: '£95',
    billingPeriod: '/ month',
    intro: 'For businesses that regularly make small changes and want more active oversight of their website.',
    features: [
      {
        title: 'Everything in Essential Care',
      },
      {
        title: 'Up to 1 hour of website changes each month',
        explanation: 'Small design adjustments, content changes, replacing images, updating sections and similar ongoing work.',
      },
      {
        title: 'Monthly performance check',
        explanation: "We review the site's general performance and look for obvious issues that may be affecting speed or usability.",
      },
      {
        title: 'Technical SEO & indexing check',
        explanation: 'We check the technical foundations that help search engines access and understand your website. This is website health monitoring, not an ongoing SEO campaign.',
      },
      {
        title: 'Monthly website health summary',
        explanation: 'A short, understandable update on what we checked, what we changed and anything we think you should know about.',
      },
      {
        title: 'Priority email support',
      },
    ],
    ctaText: 'ADD TO MY PROJECT',
    href: '/contact?care=growth',
  },
];

export const carePlanScope = {
  heading: 'SMALL CHANGES VS NEW WORK',
  intro: 'Care Plans are designed for maintaining your existing website and making small ongoing changes.',
  normallyCovered: [
    'Updating existing text',
    'Replacing existing images',
    'Changing contact details',
    'Updating opening hours',
    'Small layout adjustments',
    'Routine software maintenance',
    'Relevant security fixes',
    'Minor fixes',
  ],
  quotedSeparately: [
    'New pages or major sections',
    'New booking or payment systems',
    'Ecommerce functionality',
    'New integrations',
    'Major redesigns',
    'Large development changes',
    'Significant platform/framework migrations',
  ],
  footerNote: "If something falls outside your plan, we'll tell you before doing the work and agree the cost first.",
};

export const carePlanTerms = [
  'Care Plans begin after the launch support included with your project ends.',
  'Starter: after 14 days.',
  'Professional: after 60 days.',
  'Bespoke: after 90 days.',
  'Community Build: after the included 12 months.',
  'Unused included time does not roll over.',
  'Work outside the plan is quoted separately and only carried out after agreement.',
  'Hosting, domain renewals and paid third-party services are separate unless specifically included in your project.',
  'Cancel anytime, effective at the end of the current billing month.',
  'Your website, source code, content and data remain yours whether you continue a Care Plan or not.',
];


