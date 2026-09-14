import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import BottomBar from '@/components/ui/BottomBar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.theomedia.co.uk'),
  title: {
    default: 'Web Design Studio UK & Ireland | Bespoke Websites from £895 | TheoMedia',
    template: '%s',
  },
  description:
    'Independent web design studio for UK and Ireland businesses. Custom websites, booking engines and ecommerce from £895 / €1,050. 100% client-owned. No templates, no lock-in.',
  keywords: [
    'web design UK',
    'web design studio UK',
    'custom website development UK',
    'bespoke website design UK',
    'web design Ireland',
    'web design London',
    'web design Dublin',
    'restaurant website design UK',
    'hotel website design UK',
    'small business website design UK',
    'Squarespace alternative UK',
  ],
  authors: [{ name: 'TheoMedia' }],
  creator: 'TheoMedia',
  publisher: 'TheoMedia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['en_IE'],
    url: 'https://www.theomedia.co.uk',
    siteName: 'TheoMedia',
    title: 'Web Design Studio UK & Ireland | Bespoke Websites from £895 | TheoMedia',
    description:
      'Independent web design studio. Custom websites, booking engines and ecommerce for ambitious businesses across the UK and Ireland. From £895 / €1,050.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TheoMedia — Independent Web Design & Digital Product Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Studio UK & Ireland | Bespoke Websites from £895 | TheoMedia',
    description:
      'Custom websites and business software from £895 / €1,050. Founder-led, 100% client-owned, zero platform lock-in.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'><rect width='128' height='128' rx='30' fill='%23141210'/><text x='64' y='82' font-family='Georgia,serif' font-size='64' fill='%23F5F0E8' text-anchor='middle' font-weight='400'>T</text></svg>",
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.theomedia.co.uk/#website',
                  url: 'https://www.theomedia.co.uk/',
                  name: 'TheoMedia',
                  alternateName: [
                    'TheoMedia Independent Web Design Studio',
                    'TheoMedia Web Design UK',
                  ],
                  description:
                    'Independent web design and digital product studio engineering bespoke websites, ecommerce platforms and custom systems across the UK and Ireland.',
                  inLanguage: 'en-GB',
                  publisher: {
                    '@id': 'https://www.theomedia.co.uk/#organization',
                  },
                },
                {
                  '@type': ['Organization', 'ProfessionalService'],
                  '@id': 'https://www.theomedia.co.uk/#organization',
                  name: 'TheoMedia',
                  legalName: 'TheoMedia',
                  url: 'https://www.theomedia.co.uk/',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.theomedia.co.uk/og-image.jpg',
                    width: 1200,
                    height: 630,
                  },
                  image: 'https://www.theomedia.co.uk/og-image.jpg',
                  description:
                    'Independent web design and digital product studio engineering distinctive bespoke websites, ecommerce platforms and custom digital systems across the UK and Ireland.',
                  email: 'hello@theomedia.co.uk',
                  telephone: '+353852258004',
                  slogan: 'Websites and business software, built like products.',
                  priceRange: '£895 – £9,500+ (€1,050 – €11,000+)',
                  currenciesAccepted: 'GBP, EUR',
                  paymentAccepted: 'Bank Transfer, Credit Card, Stripe, Apple Pay',
                  foundingLocation: {
                    '@type': 'Country',
                    name: 'Ireland',
                  },
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      telephone: '+353852258004',
                      contactType: 'sales',
                      email: 'hello@theomedia.co.uk',
                      areaServed: ['GB', 'IE'],
                      availableLanguage: ['English'],
                    },
                  ],
                  sameAs: [
                    'https://instagram.com/theomedia.co.uk',
                    'https://www.facebook.com/profile.php?id=61594428231748',
                  ],
                  areaServed: [
                    { '@type': 'Country', name: 'United Kingdom' },
                    { '@type': 'Country', name: 'Ireland' },
                    { '@type': 'City', name: 'London' },
                    { '@type': 'City', name: 'Manchester' },
                    { '@type': 'City', name: 'Birmingham' },
                    { '@type': 'City', name: 'Edinburgh' },
                    { '@type': 'City', name: 'Dublin' },
                  ],
                  serviceType: [
                    'Web Design',
                    'Custom Website Development',
                    'Ecommerce Website Design',
                    'Restaurant Website Design',
                    'Hotel Website Design',
                    'Business Software Development',
                  ],
                  knowsAbout: [
                    'Web Design',
                    'Bespoke Website Development',
                    'Web Application Development',
                    'Ecommerce Development',
                    'UI/UX Design',
                    'Custom Software Engineering',
                    'Restaurant Website Design',
                    'Hotel & Hospitality Booking Engines',
                    'Conversion Optimization',
                    'Technical SEO',
                    'Next.js Web Development',
                  ],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Web Design Packages',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Starter Website Design',
                        },
                        price: '895',
                        priceCurrency: 'GBP',
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Professional Website Design',
                        },
                        price: '2495',
                        priceCurrency: 'GBP',
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bone text-near-black font-sans">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <BottomBar />
        <Footer />
      </body>
    </html>
  );
}
