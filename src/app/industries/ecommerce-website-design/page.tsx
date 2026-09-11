import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export const metadata: Metadata = {
  title: 'Luxury & DTC Ecommerce Website Design UK & Ireland',
  description:
    'High-conversion, bespoke ecommerce website design for luxury brands, artisans, and direct-to-consumer labels across the UK and Ireland. Sub-second checkout, headless architecture, and zero app bloat.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/ecommerce-website-design',
  },
  openGraph: {
    title: 'Luxury & DTC Ecommerce Website Design UK & Ireland | TheoMedia',
    description:
      'High-conversion, bespoke ecommerce web design for luxury brands and direct-to-consumer labels. Fast headless checkouts, editorial product storytelling, and zero app bloat.',
    url: 'https://www.theomedia.co.uk/industries/ecommerce-website-design',
    type: 'website',
  },
};

export default function EcommerceWebsiteDesignPage() {
  const demoUrl = 'https://morrow-hide.theomedia.co.uk';

  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Luxury & DTC Ecommerce Website Design',
            provider: {
              '@type': 'Organization',
              name: 'TheoMedia',
              url: 'https://www.theomedia.co.uk',
            },
            areaServed: [
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'Ireland' },
            ],
            description:
              'Custom ecommerce website design and engineering for direct-to-consumer brands and boutique retailers. High-speed headless checkouts, editorial visual direction, and clean payment gateways.',
          }),
        }}
      />

      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>INDUSTRY ARCHITECTURE · COMMERCE &amp; RETAIL</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              LUXURY &amp; DTC ECOMMERCE WEBSITES.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              Template-based stores slow down under plugin weight and look indistinguishable from competitors. We engineer editorial, ultra-fast commerce flagships that honor your brand aesthetics and turn casual visitors into loyal collectors.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
              >
                Discuss an Ecommerce Project →
              </Link>
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/80 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
              >
                Experience Live Demo (Morrow &amp; Hide) ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Demonstration Showcase */}
      <section className="py-20 md:py-28 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-4xl mb-12">
          <SectionLabel>PRODUCTION PROTOTYPE</SectionLabel>
          <h2 className="text-editorial-md text-near-black mt-4">
            Interactive Experience: Morrow &amp; Hide Leathercraft
          </h2>
          <p className="font-sans text-stone text-[16px] mt-2">
            Explore our artisanal ecommerce flagship showcase featuring fluid micro-interactions, responsive sizing guides, and a sub-second mobile checkout architecture.
          </p>
        </div>
        <div className="w-full aspect-[16/10] bg-charcoal relative overflow-hidden group shadow-2xl border border-near-black/10">
          <ProjectPreview url={demoUrl} title="Morrow & Hide Ecommerce Demo" />
          <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/10 transition-colors duration-500 z-30 pointer-events-none" />
        </div>
        <div className="mt-6 flex justify-between items-center text-[12px] font-sans text-stone uppercase tracking-wider">
          <span>Artisanal Goods &amp; Direct-to-Consumer Flagship</span>
          <Link href="/services/ecommerce-development" className="text-near-black border-b border-near-black pb-0.5 hover:text-stone">
            Explore Ecommerce Engineering Services →
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>COMMERCE ARCHITECTURE</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Engineered for speed, retention, and conversion.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Sub-Second Mobile Checkout</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Native Apple Pay, Google Pay, and Stripe Elements integration eliminating multi-step friction. When buying takes 15 seconds, conversion rates soar.
            </p>
          </div>
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Editorial Product Storytelling</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Luxury goods cannot be sold in generic product grids. We combine video, material provenance, artisan stories, and high-resolution zooming.
            </p>
          </div>
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Zero App Bloat &amp; Clean Code</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              No twenty monthly recurring apps crashing into each other. We build bespoke functionality into Next.js or clean Shopify Liquid with total client ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Standards */}
      <section className="py-20 md:py-28 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>PERFORMANCE BENCHMARK</SectionLabel>
            <h2 className="text-editorial-md text-near-black mt-4 mb-6">
              Why luxury brands migrate away from standard templates.
            </h2>
            <p className="font-sans text-stone text-[16px] leading-relaxed mb-6">
              Every additional 100ms of latency on mobile ecommerce reduces conversion by up to 7%. Standard templates laden with tracking scripts and unoptimised images create high bounce rates.
            </p>
            <p className="font-sans text-stone text-[16px] leading-relaxed mb-8">
              TheoMedia stores run on edge infrastructure, delivering instantaneous page transitions, automated next-gen image compression, and rock-solid SEO indexability.
            </p>
            <Link
              href="/insights/how-much-does-a-website-cost-uk"
              className="text-[13px] font-sans font-semibold tracking-wider uppercase text-near-black border-b border-near-black pb-1 hover:text-stone transition-colors"
            >
              Read Our Guide on Ecommerce Investment Costs →
            </Link>
          </div>
          <div className="bg-charcoal text-bone p-8 md:p-12 border border-bone/10">
            <h3 className="font-display text-[24px] text-bone mb-6">Store Performance Standards</h3>
            <ul className="space-y-4 font-sans text-[15px] text-bone/80">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>Core Web Vitals rated in top 95th percentile</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>Automated WebP/AVIF imagery with blur placeholders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>Stripe, Klarna &amp; express digital wallet integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>Headless or custom Liquid — 100% owned, zero recurring lock-in</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel dark>START YOUR PROJECT</SectionLabel>
          <h2 className="text-editorial-lg text-bone mt-6 mb-8">
            Elevate your online commerce flagship.
          </h2>
          <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
            Whether launching a bespoke direct-to-consumer label or rebuilding an established catalogue, let&apos;s build an online store you truly own.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
          >
            Start Commerce Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
