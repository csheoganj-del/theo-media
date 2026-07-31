import type { Metadata } from 'next';
import { Manrope, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import ScrollToTop from '../components/ScrollToTop';
import FloatingContact from '../components/FloatingContact';
import BrandIntro from '../components/BrandIntro';
import { site } from '../config/site';
import './globals.css';

const sans = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: site.seo.defaultTitle,
    template: site.seo.titleTemplate,
  },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: site.brand, url: site.domain }],
  creator: site.brand,
  publisher: site.brand,
  openGraph: {
    type: 'website',
    locale: site.openGraphLocale,
    siteName: site.brand,
    title: site.seo.defaultTitle,
    description: site.seo.description,
    images: [
      {
        url: '/brand/theomedia-og.jpg',
        width: 1200,
        height: 630,
        alt: site.brand,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.defaultTitle,
    description: site.seo.description,
    images: ['/brand/theomedia-og.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/brand/theomedia-mark.svg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgId = `${site.domain}/#organization`;

  return (
    <html lang={site.htmlLang} className={`${sans.variable} ${serif.variable} ${mono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': orgId,
                  name: site.brand,
                  url: `${site.domain}/`,
                  logo: {
                    '@type': 'ImageObject',
                    url: `${site.domain}/brand/theomedia-symbol-color.svg`,
                  },
                  description: `${site.brand} is a software team for ${site.region.label} building websites, apps, and products: RestroSuite, StaySuite, MediSuite.`,
                  email: site.email,
                  telephone: site.phone.e164,
                  sameAs: [site.productHosts.restrosuite, site.productHosts.medisuite, site.sister.domain],
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': `${site.domain}/#localbusiness`,
                  name: site.brand,
                  url: `${site.domain}/`,
                  logo: `${site.domain}/brand/theomedia-symbol-color.svg`,
                  image: `${site.domain}/brand/theomedia-mark-3d.jpg`,
                  description: `Software team for ${site.region.label} — client projects and product family RestroSuite, StaySuite, MediSuite.`,
                  telephone: site.phone.e164,
                  email: site.email,
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: site.region.addressLocality,
                    addressRegion: site.region.addressRegion,
                    addressCountry: site.region.addressCountry,
                  },
                  priceRange: '$$',
                  currenciesAccepted: site.currency.code,
                  areaServed: [...site.region.areaServed],
                },
                {
                  '@type': 'WebSite',
                  '@id': `${site.domain}/#website`,
                  name: site.brand,
                  url: `${site.domain}/`,
                },
                {
                  '@type': 'Service',
                  '@id': `${site.domain}/#software-services`,
                  name: 'Software design and development services',
                  provider: { '@id': orgId },
                  areaServed: [...site.region.areaServed],
                  serviceType: [
                    'Website design',
                    'Restaurant POS',
                    'Hotel PMS',
                    'Clinic software',
                    'Custom web applications',
                    'Workflow automation',
                  ],
                },
                {
                  '@type': 'SoftwareApplication',
                  '@id': `${site.domain}/#restrosuite`,
                  name: 'RestroSuite',
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: 'Web, Windows, Android',
                  url: `${site.domain}/products/restrosuite`,
                  description: `Offline-first restaurant POS by ${site.brand} — billing, kitchen display, WhatsApp receipts.`,
                  provider: { '@id': orgId },
                },
                {
                  '@type': 'SoftwareApplication',
                  '@id': `${site.domain}/#staysuite`,
                  name: 'StaySuite',
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: 'Web',
                  url: `${site.domain}/products/staysuite`,
                  description: `Hotel PMS by ${site.brand} for rooms, bookings, guest folio and room service.`,
                  provider: { '@id': orgId },
                },
                {
                  '@type': 'SoftwareApplication',
                  '@id': `${site.domain}/#medisuite`,
                  name: 'MediSuite',
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: 'Web',
                  url: `${site.domain}/products/medisuite`,
                  description: `Clinic console by ${site.brand} for appointments, queue and billing.`,
                  provider: { '@id': orgId },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': `${site.domain}/#breadcrumbs`,
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Home',
                      item: `${site.domain}/`,
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Products',
                      item: `${site.domain}/products`,
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#0b0c0b] text-[#f3f0e8] font-sans antialiased overflow-x-hidden">
        <BrandIntro />
        <a href="#main-content" className="v2-skip-link">
          Skip to content
        </a>
        <ScrollToTop />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
