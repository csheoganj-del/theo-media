import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TheoMedia — Web Design Studio UK & Ireland',
    short_name: 'TheoMedia',
    description:
      'Independent web design and digital product studio. Bespoke websites, ecommerce and custom software for UK and Ireland businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#141210',
    theme_color: '#F5F0E8',
    lang: 'en-GB',
    categories: ['business', 'design', 'productivity'],
    icons: [
      {
        src: '/og-image.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
        purpose: 'any',
      },
    ],
  };
}
