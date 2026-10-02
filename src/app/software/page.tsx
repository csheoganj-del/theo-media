import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { PRODUCTS_SITE, softwareProducts } from '@/data/software';

const pageUrl = `${PRODUCTS_SITE.url}/software`;

export const metadata: Metadata = {
  title: 'Original software | Gurjar',
  description:
    'TrafficLedger, Face Ledger, Space Ledger and Speed Ledger — original local-first software from Gurjar. Home: mansinghgurjar.in.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Original software | Gurjar',
    description: 'Four ledgers from the same table. Local-first. Licensed from mansinghgurjar.in.',
    url: pageUrl,
    type: 'website',
    images: [{ url: '/images/software/traffic-ledger-v2.jpg', width: 1152, height: 784, alt: 'TrafficLedger' }],
  },
};

export default function SoftwareIndexPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>GURJAR · ORIGINAL SOFTWARE</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              FOUR LEDGERS.<br />ONE TABLE.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed">
              Traffic, faces, space and speed — local-first Mac and Windows tools from Gurjar.
              Home, licenses and support live at {PRODUCTS_SITE.url.replace('https://', '')}.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {softwareProducts.map((product, index) => (
            <FadeIn key={product.slug} delay={index * 0.08}>
              <Link
                href={`/software/${product.slug}`}
                className="group flex flex-col h-full border border-near-black/10 p-4 md:p-6 bg-ivory hover:border-near-black/30 transition-colors duration-300"
              >
                <div className="relative aspect-[4/3] bg-charcoal overflow-hidden mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] font-sans font-medium tracking-[0.2em] text-stone uppercase">
                    {product.platforms}
                  </span>
                  <span className="text-[9px] font-sans font-semibold tracking-widest uppercase px-2.5 py-0.5 border border-near-black/15">
                    {product.status}
                  </span>
                </div>
                <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-3 leading-tight group-hover:text-stone transition-colors">
                  {product.name}
                </h2>
                <p className="font-sans text-[15px] text-stone leading-relaxed mb-4 flex-grow">
                  {product.tagline}
                </p>
                <p className="text-[11px] font-sans font-semibold tracking-[0.15em] uppercase text-near-black">
                  {product.buyLabel} →
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
