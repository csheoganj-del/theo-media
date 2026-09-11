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
    title: 'Bespoke Websites',
    description: 'Brand-led commercial websites designed to create attention, trust and enquiries. 100% client-owned with zero lock-in.',
    slug: 'websites',
    href: '/web-design',
    features: ['Custom Next.js Build', 'Mobile-First Design', 'SEO Foundations', 'Conversion Architecture', 'CMS Integration', 'Zero Lock-in'],
  },
  {
    number: '02',
    title: 'Luxury Ecommerce',
    description: 'Premium shopping experiences built around editorial product presentation and sub-second mobile checkout.',
    slug: 'ecommerce',
    href: '/industries/ecommerce-website-design',
    features: ['Product Storytelling', 'Native Apple Pay', 'Sub-Second Checkout', 'Inventory Sync', 'Currency Support', 'Zero App Bloat'],
  },
  {
    number: '03',
    title: 'Booking & Enquiry Engines',
    description: 'Direct table reservations, boutique stay booking, consultation scheduling and custom quote workflows without third-party fees.',
    slug: 'web-applications',
    href: '/business-software',
    features: ['Direct Reservations', 'Room Booking', 'Consultation Scheduling', 'Quote Generators', 'Stripe Integration', 'Confirmation Flows'],
  },
  {
    number: '04',
    title: 'Web Applications',
    description: 'Client portals, operational dashboards and internal business tools designed around real workflows.',
    slug: 'web-applications',
    href: '/business-software',
    features: ['Client Portals', 'Staff Dashboards', 'Real-time Data', 'Secure Authentication', 'Role Management', 'API Integration'],
  },
  {
    number: '05',
    title: 'Business Systems & ERPs',
    description: 'Operational software and decoupled frontends for hospitality, clinics, and trade enterprises.',
    slug: 'business-software',
    href: '/business-software',
    features: ['Decoupled Architecture', 'ERP Synchronization', 'Inventory Control', 'Reporting', 'Custom Webhooks', '100% IP Ownership'],
  },
];
