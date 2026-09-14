import type { Metadata } from 'next';
import { SITE } from './constants';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  locale?: 'en_GB' | 'en_IE';
};

export function absoluteUrl(path: string): string {
  if (!path || path === '/') return SITE.url;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pageMeta({
  title,
  description,
  path,
  type = 'website',
  locale = 'en_GB',
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      locale,
      siteName: SITE.name,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: Array<{ '@type': 'Country' | 'City'; name: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      '@id': `${SITE.url}/#organization`,
    },
    areaServed: areaServed ?? [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Ireland' },
    ],
    serviceType: 'Web Design',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: '895',
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}/pricing`,
    },
  };
}

export function articleJsonLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: 'en-GB',
    author: {
      '@id': `${SITE.url}/#organization`,
    },
    publisher: {
      '@id': `${SITE.url}/#organization`,
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: `${SITE.url}/og-image.jpg`,
  };
}

export function offerCatalogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'TheoMedia Web Design Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter Website',
        price: '895',
        priceCurrency: 'GBP',
        url: `${SITE.url}/pricing`,
        availability: 'https://schema.org/InStock',
        description: 'Bespoke 1–3 page website for new and small businesses in the UK and Ireland.',
      },
      {
        '@type': 'Offer',
        name: 'Professional Website',
        price: '2495',
        priceCurrency: 'GBP',
        url: `${SITE.url}/pricing`,
        availability: 'https://schema.org/InStock',
        description: 'Multi-page commercial website with CMS, enquiry flows and technical SEO.',
      },
      {
        '@type': 'Offer',
        name: 'Bespoke Systems',
        price: '4995',
        priceCurrency: 'GBP',
        url: `${SITE.url}/pricing`,
        availability: 'https://schema.org/InStock',
        description: 'Custom booking engines, ecommerce and operational software.',
      },
    ],
  };
}
