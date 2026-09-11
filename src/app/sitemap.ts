import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.theomedia.co.uk';
  const now = new Date();

  // Core High-Level Pages
  const corePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/web-design-ireland`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/studio`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Service Capability Pages
  const servicePages: MetadataRoute.Sitemap = [
    '/services/websites',
    '/services/ecommerce',
    '/services/web-applications',
    '/services/business-software',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Industry Specialized Pages
  const industryPages: MetadataRoute.Sitemap = [
    '/industries/restaurant-website-design',
    '/industries/hotel-website-design',
    '/industries/trades-construction-website-design',
    '/industries/healthcare-clinic-website-design',
    '/industries/ecommerce-website-design',
    '/industries/photographer-website-design',
    '/industries/small-business-website-design',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Insights & Commercial Buyer Guides
  const insightPages: MetadataRoute.Sitemap = [
    '/insights/how-much-does-a-website-cost-uk',
    '/insights/squarespace-vs-custom-website',
    '/insights/squarespace-vs-custom-restaurant-website',
    '/insights/odoo-alternative-restaurants',
    '/insights/restaurant-website-cost-uk',
    '/insights/does-a-restaurant-need-a-website-with-instagram',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Case Studies
  const caseStudyPages: MetadataRoute.Sitemap = [
    '/case-studies/restaurant-gastropub-website-design',
    '/case-studies/boutique-hotel-website-design',
    '/case-studies/builder-roofing-website-design',
    '/case-studies/private-healthcare-website-design',
    '/case-studies/ecommerce-website-design',
    '/case-studies/garage-website-design',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic Portfolio Work Projects
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    ...corePages,
    ...servicePages,
    ...industryPages,
    ...insightPages,
    ...caseStudyPages,
    ...projectPages,
  ];
}
