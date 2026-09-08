export interface Service {
  number: string;
  title: string;
  description: string;
  slug: string;
  features: string[];
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Websites',
    description: 'Brand-led commercial websites designed to create attention, trust and enquiries.',
    slug: 'websites',
    features: ['Custom Design', 'Mobile-First', 'SEO Foundations', 'Conversion Architecture', 'CMS Integration', 'Performance Tuning'],
  },
  {
    number: '02',
    title: 'Ecommerce',
    description: 'Premium shopping experiences built around product presentation and frictionless conversion.',
    slug: 'ecommerce',
    features: ['Product Storytelling', 'Stripe & Shopify', 'Mobile Checkout', 'Inventory Sync', 'Currency Support', 'Analytics'],
  },
  {
    number: '03',
    title: 'Booking & Enquiry',
    description: 'Restaurant reservations, hotel enquiries, consultations, quotations and custom customer journeys.',
    slug: 'web-applications',
    features: ['Table Reservations', 'Room Booking', 'Consultation Scheduling', 'Quote Generators', 'Payment Collection', 'Confirmation Flows'],
  },
  {
    number: '04',
    title: 'Web Applications',
    description: 'Portals, dashboards and business tools designed around real workflows.',
    slug: 'web-applications',
    features: ['Client Portals', 'Staff Dashboards', 'Real-time Data', 'Secure Authentication', 'Role Management', 'API Integration'],
  },
  {
    number: '05',
    title: 'Business Systems',
    description: 'POS, hospitality, clinic and operational software.',
    slug: 'business-software',
    features: ['Point of Sale', 'Property Management', 'Clinic Management', 'Inventory Control', 'Reporting', 'Offline Resilience'],
  },
  {
    number: '06',
    title: 'Integrations',
    description: 'Payments, booking providers, CRM, WhatsApp, analytics and APIs.',
    slug: 'business-software',
    features: ['Stripe & PayPal', 'OpenTable & Calendly', 'WhatsApp Business', 'Google Analytics', 'CRM Systems', 'Custom APIs'],
  },
];
