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
    default: 'TheoMedia — Bespoke Websites & Digital Experiences | UK, Ireland & Europe',
    template: '%s | TheoMedia',
  },
  description:
    'TheoMedia is a digital studio designing and engineering distinctive websites, ecommerce experiences and digital systems for ambitious businesses across the UK, Ireland, and Europe.',
  keywords: [
    'web design UK',
    'web development Ireland',
    'bespoke website agency',
    'custom web applications',
    'digital studio UK',
    'ecommerce development',
    'hotel website design',
    'restaurant website',
    'business website packages',
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
    alternateLocale: ['en_IE', 'en_US'],
    url: 'https://www.theomedia.co.uk',
    siteName: 'TheoMedia',
    title: 'TheoMedia — We Build Websites People Remember',
    description:
      'Distinctive websites, ecommerce experiences and digital systems for ambitious businesses across the UK, Ireland, and Europe.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TheoMedia — Digital Studio for Websites & Digital Experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheoMedia — Digital Studio | UK & Europe',
    description:
      'We build websites and digital experiences people remember. Bespoke design from £895.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.theomedia.co.uk',
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
      lang="en"
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
                  alternateName: 'TheoMedia Digital Studio',
                  description:
                    'TheoMedia designs and builds distinctive websites, ecommerce experiences and digital systems for ambitious businesses across the UK, Ireland, and Europe.',
                  inLanguage: 'en-GB',
                  publisher: {
                    '@id': 'https://www.theomedia.co.uk/#organization',
                  },
                },
                {
                  '@type': ['Organization', 'ProfessionalService'],
                  '@id': 'https://www.theomedia.co.uk/#organization',
                  name: 'TheoMedia',
                  url: 'https://www.theomedia.co.uk/',
                  description:
                    'Digital studio designing distinctive websites, ecommerce experiences and digital systems for ambitious businesses across the UK, Ireland, and Europe.',
                  email: 'hello@theomedia.co.uk',
                  telephone: '+353852258004',
                  priceRange: '£895 - £9,500+',
                  currenciesAccepted: 'GBP, EUR',
                  paymentAccepted: 'Bank Transfer, Credit Card, Stripe, Apple Pay',
                  areaServed: [
                    { '@type': 'Country', name: 'United Kingdom' },
                    { '@type': 'Country', name: 'Ireland' },
                    { '@type': 'AdministrativeArea', name: 'Europe' },
                  ],
                  knowsAbout: [
                    'Web Design',
                    'Web Application Development',
                    'Ecommerce Development',
                    'UI/UX Design',
                    'Custom Software Engineering',
                    'SEO Optimization',
                  ],
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
