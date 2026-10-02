export interface Service {
  number: string;
  title: string;
  description: string;
  slug: string;
  href?: string;
  features: string[];
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Bespoke Websites / Digital Flagships',
    description: 'Brand-led commercial websites engineered to establish authority and capture qualified enquiries. 100% client-owned with zero platform lock-in.',
    slug: 'websites',
    href: '/web-design',
    features: ['Custom Next.js Architecture', 'Tactile Art Direction', 'Technical SEO Foundations', 'Conversion Flow', 'Modern CMS Integration', '100% Code Ownership'],
  },
  {
    number: '02',
    title: 'Commerce & Booking',
    description: 'Direct commerce and booking platforms designed to reduce marketplace dependency and elevate customer checkout journeys.',
    slug: 'ecommerce',
    href: '/industries/ecommerce-website-design',
    features: ['Tactile Product Storytelling', 'Direct Room & Table Booking', 'Stripe & Apple Pay Integration', 'Consultation Scheduling', 'Automated Confirmations', 'Zero App Bloat'],
  },
  {
    number: '03',
    title: 'Web Applications',
    description: 'Custom web software, client portals, and operational dashboards engineered around specific commercial workflows.',
    slug: 'web-applications',
    href: '/business-software',
    features: ['Client Portals', 'Operational Dashboards', 'Role-Based Authentication', 'Bespoke Database Schema', 'API Integrations', 'High-Speed Modern Stack'],
  },
  {
    number: '04',
    title: 'Business Systems',
    description: 'Operational software and bespoke digital tools built to streamline internal processes across hospitality, healthcare, and trade operations.',
    slug: 'business-software',
    href: '/business-software',
    features: ['Decoupled Architecture', 'Inventory & Booking Engines', 'Workflow Automation', 'Operational Reporting', 'Custom Webhooks', 'Full IP Ownership'],
  },
  {
    number: '05',
    title: 'Integrations & Automation',
    description: 'Connecting payment gateways, booking APIs, CRMs, and messaging workflows into reliable, unified business systems.',
    slug: 'business-software',
    href: '/business-software',
    features: ['Payment Gateway Architecture', 'Calendar & Scheduling APIs', 'CRM & Lead Pipelines', 'WhatsApp Direct Triggers', 'Data Synchronization', 'Webhook Infrastructure'],
  },
];
