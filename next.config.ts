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
        destination: 'https://garage.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/build',
        destination: 'https://build.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/velora',
        destination: 'https://velora.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/table',
        destination: 'https://table.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/clinic',
        destination: 'https://clinic.theomedia.co.uk',
        permanent: false,
      },
      {
        source: '/work/leather',
        destination: 'https://leather.theomedia.co.uk',
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
