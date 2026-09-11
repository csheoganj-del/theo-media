export interface Industry {
  name: string;
  priorities: string[];
  href?: string;
}

export const industries: Industry[] = [
  {
    name: 'Hospitality & Boutique Hotels',
    priorities: ['Atmosphere', 'Direct Booking', 'OTA Reduction'],
    href: '/industries/hotel-website-design',
  },
  {
    name: 'Restaurants & Gastropubs',
    priorities: ['Live Menus', 'Reservations', 'Zero Commissions'],
    href: '/industries/restaurant-website-design',
  },
  {
    name: 'Trades & Construction',
    priorities: ['Project Portfolios', 'High-Ticket Quotes', 'WhatsApp Leads'],
    href: '/industries/trades-construction-website-design',
  },
  {
    name: 'Private Healthcare & Clinics',
    priorities: ['Medical Authority', 'Treatment Menus', 'GDPR Consultations'],
    href: '/industries/healthcare-clinic-website-design',
  },
  {
    name: 'Luxury & DTC Ecommerce',
    priorities: ['Sub-Second Checkout', 'Apple Pay', 'Zero App Bloat'],
    href: '/industries/ecommerce-website-design',
  },
  {
    name: 'Photographers & Visual Artists',
    priorities: ['Full-Bleed Portfolios', 'Fast CDN Rendering', 'Client Inquiries'],
    href: '/industries/photographer-website-design',
  },
  {
    name: 'Small & Independent Businesses',
    priorities: ['Fixed Price £895+', '100% Owned Code', 'Zero Lock-in'],
    href: '/industries/small-business-website-design',
  },
  {
    name: 'Automotive & Performance',
    priorities: ['Engineering Trust', 'Service Menus', 'Booking Enquiries'],
    href: '/industries',
  },
];
