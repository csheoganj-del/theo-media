import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.theomedia.co.uk',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      },
    ],
  },
  async redirects() {
    return [
      // ── Canonical Service & Architecture Migrations (301 Permanent) ──
      {
        source: '/services/websites',
        destination: '/web-design',
        permanent: true,
      },
      {
        source: '/website-design',
        destination: '/web-design',
        permanent: true,
      },
      {
        source: '/website-design.html',
        destination: '/web-design',
        permanent: true,
      },
      {
        source: '/services/business-software',
        destination: '/business-software',
        permanent: true,
      },
      {
        source: '/services/web-applications',
        destination: '/business-software',
        permanent: true,
      },
      {
        source: '/services/ecommerce',
        destination: '/industries/ecommerce-website-design',
        permanent: true,
      },
      {
        source: '/ecommerce-development',
        destination: '/industries/ecommerce-website-design',
        permanent: true,
      },
      {
        source: '/ecommerce-development.html',
        destination: '/industries/ecommerce-website-design',
        permanent: true,
      },

      // ── Journal & Insights Consolidation (301 Permanent) ──
      {
        source: '/insights',
        destination: '/journal',
        permanent: true,
      },
      {
        source: '/insights/how-much-does-a-website-cost-uk',
        destination: '/journal/how-much-does-a-website-cost-uk',
        permanent: true,
      },
      {
        source: '/insights/squarespace-vs-custom-website',
        destination: '/journal/squarespace-vs-custom-website',
        permanent: true,
      },
      {
        source: '/insights/squarespace-vs-custom-restaurant-website',
        destination: '/journal/squarespace-vs-custom-restaurant-website',
        permanent: true,
      },
      {
        source: '/insights/odoo-alternative-restaurants',
        destination: '/journal/odoo-website-alternative-restaurants',
        permanent: true,
      },
      {
        source: '/insights/restaurant-website-cost-uk',
        destination: '/journal/restaurant-website-cost-uk',
        permanent: true,
      },
      {
        source: '/insights/:slug*',
        destination: '/journal/:slug*',
        permanent: true,
      },

      // ── Compliance, Legal & Old HTML Cleanups (301 Permanent) ──
      {
        source: '/privacy.html',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/compliance',
        destination: '/privacy',
        permanent: true,
      },

      // ── Live Subdomain Prototype Routing (301 Permanent) ──
      {
        source: '/work/garage',
        destination: 'https://hartwell-motorworks.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/hartwell-motorworks',
        destination: 'https://hartwell-motorworks.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/build',
        destination: 'https://alder-rowe.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/alder-rowe',
        destination: 'https://alder-rowe.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/velora',
        destination: 'https://velora-house.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/velora-house',
        destination: 'https://velora-house.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/table',
        destination: 'https://cinder-field.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/cinder-field',
        destination: 'https://cinder-field.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/clinic',
        destination: 'https://elowen-clinic.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/elowen-clinic',
        destination: 'https://elowen-clinic.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/leather',
        destination: 'https://morrow-hide.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/morrow-hide',
        destination: 'https://morrow-hide.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/nick',
        destination: 'https://nick.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/nick-gaven',
        destination: 'https://nick.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/falakstudio',
        destination: 'https://falakstudio.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/falak-studio',
        destination: 'https://falakstudio.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/nick2',
        destination: 'https://falakstudio.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/theomedianick2',
        destination: 'https://falakstudio.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/nick-gaven-v2',
        destination: 'https://falakstudio.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/rose-and-ivy',
        destination: 'https://rose-and-ivy.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/rose-and-ivy-hair',
        destination: 'https://rose-and-ivy.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/barber',
        destination: 'https://wren-crown.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/work/wren-crown',
        destination: 'https://wren-crown.theomedia.co.uk',
        permanent: true,
      },
      {
        source: '/case-studies/clinic-website-design',
        destination: '/case-studies/private-healthcare-website-design',
        permanent: true,
      },
      {
        source: '/case-studies/luxury-salon-website-design',
        destination: '/work/rose-and-ivy',
        permanent: false,
      },
      {
        source: '/case-studies/cinematography-website-design',
        destination: '/work/nick-gaven',
        permanent: false,
      },
      {
        source: '/case-studies/falak-studio-website-design',
        destination: '/work/falakstudio',
        permanent: false,
      },
      {
        source: '/case-studies/filmmaker-dop-website-design',
        destination: '/work/falakstudio',
        permanent: false,
      },
      {
        source: '/case-studies/barber-grooming-website-design',
        destination: '/work/wren-crown',
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
