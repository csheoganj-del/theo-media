/**
 * TheoMedia market profile — UK / Ireland / Europe branch.
 * CodeArc (India) lives at codearc.co.in with its own market config.
 * Keep contact, currency, tax, SEO, and legal driven from this file.
 */

export type MarketId = 'IN' | 'GB';

export const site = {
  market: 'GB' as const satisfies MarketId,
  brand: 'TheoMedia',
  legalName: 'TheoMedia',
  /** Canonical origin (no www). Both apex and www resolve on Vercel. */
  domain: 'https://www.theomedia.co.uk',
  email: 'hello@theomedia.co.uk',

  phone: {
    display: '+353 85 225 8004',
    e164: '+353852258004',
    /** Digits only for wa.me */
    whatsapp: '353852258004',
  },

  /** BCP 47 locale for dates, currency display, HTML lang */
  locale: 'en-GB',
  openGraphLocale: 'en_GB',
  htmlLang: 'en-GB',

  region: {
    label: 'UK, Ireland and Europe',
    shortLabel: 'UK · Ireland · Europe',
    proofLabel: 'UK & Ireland',
    proofDetail: 'Remote-friendly with businesses across Europe',
    addressLocality: 'United Kingdom',
    addressRegion: 'England',
    addressCountry: 'GB',
    areaServed: ['GB', 'IE', 'EU'] as const,
  },

  currency: {
    code: 'GBP' as const,
    /** Smallest unit name (pence) — Stripe amounts use this */
    minorUnitName: 'pence',
    /** Display formatter locale */
    displayLocale: 'en-GB',
  },

  tax: {
    /** Shown in product copy and legal */
    label: 'VAT',
    longLabel: 'VAT (value-added tax)',
    invoiceNote: 'Invoices can include VAT where applicable for UK and EU clients.',
  },

  payments: {
    /**
     * Planned / target gateway for this market.
     * Razorpay is India-only (CodeArc). TheoMedia uses Stripe when enabled.
     */
    provider: 'Stripe' as const,
    providerLabel: 'Secured by Stripe',
    /**
     * Flip to true only after Stripe Checkout + webhook routes are implemented
     * and STRIPE_* env vars are set. Until then /pay is catalogue + invoice enquiry.
     */
    onlineCheckoutEnabled: false,
    methodsNote:
      'Stripe card checkout coming soon. For now we take payment by invoice or bank transfer in GBP.',
    methodsList: 'card (Stripe, soon) and bank transfer / invoice',
    /** Do not mention UPI/COD — those are India-only on CodeArc */
    forbiddenMethods: ['UPI', 'COD', 'cash-on-delivery', 'Razorpay'] as const,
  },

  seo: {
    defaultTitle: 'TheoMedia — websites, apps & RestroSuite',
    titleTemplate: '%s | TheoMedia',
    description:
      'TheoMedia builds websites, apps and business tools for UK, Ireland and Europe. Product family: RestroSuite, StaySuite, MediSuite.',
    keywords: [
      'Web Development Company UK',
      'Website Design Ireland',
      'Restaurant POS Software Europe',
      'RestroSuite',
      'StaySuite',
      'MediSuite',
      'Software company UK Ireland Europe',
    ],
  },

  /** Sister branch — India market */
  sister: {
    brand: 'CodeArc',
    domain: 'https://codearc.co.in',
    marketLabel: 'India',
    blurb: 'Looking for India pricing, GST and local support? Visit our India branch.',
  },

  /** Product demos still hosted on the shared product infrastructure */
  productHosts: {
    restrosuite: 'https://restrosuite.codearc.co.in',
    medisuite: 'https://codearc-medisuite.vercel.app',
  },
} as const;

export type SiteConfig = typeof site;

export function mailTo(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const q = params.toString();
  return q ? `mailto:${site.email}?${q}` : `mailto:${site.email}`;
}

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${site.phone.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function telHref(): string {
  return `tel:${site.phone.e164}`;
}

/** Format amount in minor units (pence) for this market's currency. */
export function formatMoney(amountMinor: number, maximumFractionDigits = 0): string {
  return (amountMinor / 100).toLocaleString(site.currency.displayLocale, {
    style: 'currency',
    currency: site.currency.code,
    maximumFractionDigits,
  });
}
