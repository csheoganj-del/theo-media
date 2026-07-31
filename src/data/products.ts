import { site } from '../config/site';

export type ProductStatus = 'live' | 'building' | 'planned';

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  category: string;
  image: string;
  href: string;
  externalUrl?: string;
  highlights: string[];
  audience: string;
  story: string;
  metaTitle: string;
  metaDescription: string;
}

/**
 * Product family (shared with CodeArc India).
 * Copy is market-local: VAT, UK/EU venues, no GST/dhaba framing.
 */
export const productsData: Product[] = [
  {
    slug: 'restrosuite',
    name: 'RestroSuite',
    tagline: 'Offline-first restaurant POS — bill even when Wi-Fi drops.',
    description:
      'POS billing, kitchen display, WhatsApp receipts, inventory and multi-outlet management. Built for cafés, bars and restaurants that need something solid at rush hour.',
    status: 'live',
    category: 'Restaurants',
    image: '/assets/restrosuite_preview.png',
    href: '/products/restrosuite',
    externalUrl: site.productHosts.restrosuite,
    highlights: [
      'Offline-first billing at the counter',
      'Kitchen display (KDS) for order flow',
      'WhatsApp receipts for guests',
      'QR table ordering',
      'Windows + Android installers',
    ],
    audience: 'Restaurants, cafés and food outlets across the UK, Ireland and Europe.',
    story:
      'RestroSuite is our live product under TheoMedia for non-India markets. Web, Windows and Android options are available. We keep tightening it with every outlet that uses it.',
    metaTitle: 'RestroSuite — Restaurant POS for UK & Europe',
    metaDescription:
      'RestroSuite by TheoMedia: offline-first restaurant POS with billing, kitchen display, WhatsApp receipts and QR ordering for UK and European venues.',
  },
  {
    slug: 'staysuite',
    name: 'StaySuite',
    tagline: 'Hotel PMS — rooms, bookings, folio and room service.',
    description:
      'Property management for boutique hotels and lodges: rooms, check-in/out, guest folio, VAT-ready invoicing and room service. Sibling of RestroSuite — hotel and café can wire together when you need it.',
    status: 'building',
    category: 'Hotels',
    image: '/assets/staysuite_preview.jpg',
    href: '/products/staysuite',
    highlights: [
      'Rooms and booking calendar',
      'Check-in / check-out and guest folio',
      'VAT-ready hotel reporting',
      'Room service linked to kitchen flow',
    ],
    audience: 'Boutique hotels, lodges and properties that also run food service.',
    story:
      'StaySuite grew out of real hotel work. It sits next to RestroSuite in the TheoMedia family — built for the front desk first, not a generic hotel template.',
    metaTitle: 'StaySuite — Hotel PMS for UK & Europe',
    metaDescription:
      'StaySuite by TheoMedia: hotel PMS for rooms, bookings, guest folio, VAT and room service. Sibling of RestroSuite.',
  },
  {
    slug: 'medisuite',
    name: 'MediSuite',
    tagline: 'Clinic desk — appointments, queue and billing.',
    description:
      'A simple console for clinics: appointments, patient queue and billing in one place. Same TheoMedia product family as RestroSuite and StaySuite.',
    status: 'building',
    category: 'Clinics',
    image: '/assets/medisuite_preview.jpg',
    href: '/products/medisuite',
    externalUrl: site.productHosts.medisuite,
    highlights: [
      'Clinic appointments',
      'Patient queue on the desk',
      'Billing for everyday visits',
      'Clean ink-and-copper brand for clinics',
    ],
    audience: 'Clinics and practices that want one calm desk, not hospital enterprise software.',
    story:
      'MediSuite is the clinic sibling in the TheoMedia suite family. A live preview is up; we are still shaping it with real clinic feedback.',
    metaTitle: 'MediSuite — Clinic management',
    metaDescription:
      'MediSuite by TheoMedia: clinic software for appointments, queue and billing. Sibling of RestroSuite and StaySuite.',
  },
];

export function getProduct(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function statusLabel(status: ProductStatus): string {
  switch (status) {
    case 'live':
      return 'Live';
    case 'building':
      return 'Early access';
    case 'planned':
      return 'Planned';
  }
}

export function productStatusClass(status: ProductStatus): string {
  if (status === 'live') return 'v2-status-live';
  if (status === 'building') return 'v2-status-building';
  return 'v2-status-planned';
}
