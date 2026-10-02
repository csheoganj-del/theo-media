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
    id: 'flagship',
    number: '01',
    name: 'Digital Flagship',
    price: 'From £2,500',
    priceValue: 2500,
    tagline: 'For ambitious businesses upgrading to an authoritative editorial presence.',
    description: 'A distinctive, high-performance digital presence combining refined art direction, bespoke typography, fluid motion, and technical SEO architecture.',
    featured: false,
    includes: [
      'Scope-first bespoke design & art direction',
      'Production-grade Next.js / TypeScript build',
      'Editorial typography & micro-interactions',
      'Technical SEO, schema & Core Web Vitals optimisation',
      'Frictionless enquiry or consultation flows',
      '100% client ownership & source code delivery',
    ],
    expandedIncludes: [
      'Custom responsive layouts across all viewports',
      'Headless CMS or markdown content management',
      'Domain, security & high-performance edge hosting setup',
      '30 days dedicated launch warranty & documentation',
      'Multi-currency billing (from €3,000 / $3,500)',
    ],
    ctaText: 'DISCUSS DIGITAL FLAGSHIP',
    whatsappText: "Hi TheoMedia, I'd like to discuss a Digital Flagship project (from £2,500).",
  },
  {
    id: 'commercial',
    number: '02',
    name: 'Commercial Platform',
    price: 'From £5,000',
    priceValue: 5000,
    tagline: 'For expanding businesses requiring multi-market scale, CMS, and dynamic flows.',
    description: 'Comprehensive digital platform engineered for multi-market reach, content publishing, custom booking flows, or ecommerce.',
    featured: true,
    includes: [
      'Multi-market or comprehensive page architecture',
      'Headless CMS with custom structured schemas',
      'Advanced enquiry, reservation, or ecommerce integrations',
      'Speed-optimised asset pipelines & analytics foundation',
      'Direct founder-led engineering & strategy',
      '100% proprietary code with zero vendor lock-in',
    ],
    expandedIncludes: [
      'Dynamic filtering, search, and catalog architecture',
      'Conversion-focused UX auditing & user journey mapping',
      'Third-party API, CRM, or payment gateway integrations',
      '60 days priority launch warranty & team handover',
      'Multi-currency billing (from €6,000 / $6,500)',
    ],
    ctaText: 'DISCUSS COMMERCIAL PLATFORM',
    whatsappText: "Hi TheoMedia, I'd like to discuss a Commercial Platform project (from £5,000).",
  },
  {
    id: 'systems',
    number: '03',
    name: 'Digital Systems',
    price: 'From £8,000',
    priceValue: 8000,
    tagline: 'For custom web applications, customer portals, and internal business tools.',
    description: 'Custom web applications, booking engines, client dashboards, and business software built to replace legacy spreadsheets and high-fee SaaS.',
    featured: false,
    includes: [
      'Custom system architecture & database design',
      'Secure authentication, roles & permissions',
      'Real-time dashboards, operational workflows & reporting',
      'Custom API integrations & automated pipeline logic',
      'Full source code ownership & zero recurring seat licenses',
    ],
    expandedIncludes: [
      'Scalable cloud infrastructure deployment',
      'Comprehensive technical documentation & runbooks',
      '90 days architectural support & warranty',
      'Multi-currency billing (from €9,500 / $10,000)',
    ],
    ctaText: 'DISCUSS DIGITAL SYSTEMS',
    whatsappText: "Hi TheoMedia, I'd like to discuss a Digital Systems or Custom Software project (from £8,000).",
  },
];

export const specialistProjects: SpecialistProject[] = [
  {
    id: 'ecommerce',
    tag: 'ECOMMERCE',
    name: 'Ecommerce Platforms',
    price: 'From £4,500',
    priceValue: 4500,
    description: 'Conversion-focused online stores with bespoke catalog navigation, Stripe & Shopify integration, inventory syncing, and frictionless mobile checkouts.',
    whatsappText: "Hi TheoMedia, I'd like to get a quote for an Ecommerce Platform (from £4,500).",
  },
  {
    id: 'hospitality',
    tag: 'HOSPITALITY & STAYS',
    name: 'Hotels & Hospitality',
    price: 'From £6,500',
    priceValue: 6500,
    description: 'Direct room booking engines, PMS connectivity, table reservations, digital dining menus, and guest experience portals.',
    whatsappText: "Hi TheoMedia, I'd like to get a quote for a Hotel or Hospitality System (from £6,500).",
  },
  {
    id: 'software',
    tag: 'SAAS & SOFTWARE',
    name: 'Web Apps & Custom Software',
    price: 'From £8,000',
    priceValue: 8000,
    description: 'Bespoke SaaS products, client dashboards, counter POS/billing software, and internal operational tools built to eliminate manual spreadsheets.',
    whatsappText: "Hi TheoMedia, I'd like to get a quote for a Custom Web App or Software project (from £8,000).",
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
  'Care Plans begin after the launch support period included with your project ends.',
  'Digital Flagships: after 30 days of included launch support.',
  'Commercial Platforms and Digital Systems: after 60 days of included launch support.',
  'Unused included time does not roll over.',
  'Work outside the plan is quoted separately and only carried out after agreement.',
  'Hosting, domain renewals and paid third-party services are separate unless specifically included in your project agreement.',
  'Cancel anytime, effective at the end of the current billing month.',
  'Your website, source code, content and data remain entirely yours whether you continue a Care Plan or not.',
];


