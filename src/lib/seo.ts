import type { Metadata } from 'next';
import { site } from '../config/site';

/**
 * Prefer a short root path for share crawlers (WhatsApp, iMessage, LinkedIn).
 * Exact 1200×630 JPEG lives at public/og.jpg.
 */
export const OG_IMAGE_PATH = '/og.jpg';

/** Absolute HTTPS URL — required by WhatsApp / Facebook share scrapers. */
export function absoluteOgImageUrl(): string {
  return `${site.domain}${OG_IMAGE_PATH}`;
}

export const ogImage = {
  url: absoluteOgImageUrl(),
  secureUrl: absoluteOgImageUrl(),
  width: 1200,
  height: 630,
  alt: `${site.brand} — websites, apps and business software for ${site.region.label}`,
  type: 'image/jpeg',
} as const;

/**
 * Full Open Graph + Twitter card block for share previews.
 * Always include images — page-level openGraph that omits images
 * strips the layout default and WhatsApp shows a bare link.
 */
export function socialMetadata(options: {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}): Pick<Metadata, 'openGraph' | 'twitter'> {
  const { title, description, url, type = 'website', publishedTime } = options;
  const imageUrl = absoluteOgImageUrl();

  return {
    openGraph: {
      type,
      locale: site.openGraphLocale,
      siteName: site.brand,
      title,
      description,
      url,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1200,
          height: 630,
          alt: ogImage.alt,
          type: 'image/jpeg',
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
