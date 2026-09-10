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
      {
        source: '/work/garage',
        destination: 'https://hartwell-motorworks.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/hartwell-motorworks',
        destination: 'https://hartwell-motorworks.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/build',
        destination: 'https://alder-rowe.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/alder-rowe',
        destination: 'https://alder-rowe.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/velora',
        destination: 'https://velora-house.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/velora-house',
        destination: 'https://velora-house.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/table',
        destination: 'https://cinder-field.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/cinder-field',
        destination: 'https://cinder-field.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/clinic',
        destination: 'https://elowen-clinic.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/elowen-clinic',
        destination: 'https://elowen-clinic.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/leather',
        destination: 'https://morrow-hide.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/morrow-hide',
        destination: 'https://morrow-hide.theomedia.co.uk',
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
