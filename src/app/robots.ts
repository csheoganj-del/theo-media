import { MetadataRoute } from 'next';
import { site } from '../config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${site.domain}/sitemap.xml`,
  };
}
