import type { Metadata } from 'next';
import { site } from '../config/site';

/** Absolute OG/Twitter share image (WhatsApp, LinkedIn, iMessage, etc.) */
export const OG_IMAGE_PATH = '/brand/theomedia-og.jpg';

export const ogImage = {
  url: OG_IMAGE_PATH,
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

  return {
    openGraph: {
      type,
      locale: site.openGraphLocale,
      siteName: site.brand,
      title,
      description,
      url,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
