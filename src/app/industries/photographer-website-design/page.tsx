import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Photographer & Creative Studio Website Design UK & Ireland',
  description:
    'Bespoke website design for commercial photographers, editorial studios and artists. Ultra-fast high-definition portfolios, zero compression artifacts, and seamless client enquiry journeys.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/photographer-website-design',
  },
  openGraph: {
    title: 'Photographer & Creative Studio Website Design UK & Ireland | TheoMedia',
    description:
      'Bespoke portfolio websites for commercial photographers and creative studios. Fast image delivery, editorial typography, and high-trust client booking.',
    url: 'https://www.theomedia.co.uk/industries/photographer-website-design',
    type: 'website',
  },
};

export default function PhotographerWebsiteDesignPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Photographer & Creative Studio Website Design',
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
              'Bespoke portfolio websites for commercial photographers, directors and creative studios. Fast high-resolution imagery, editorial layouts, and client enquiry flows.',
          }),
        }}
      />

      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>INDUSTRY ARCHITECTURE · CREATIVE &amp; EDITORIAL</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              PHOTOGRAPHER &amp; CREATIVE STUDIO WEBSITES.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              Commercial clients and art directors judge your caliber in seconds. We build ultra-responsive, editorial portfolio platforms that render high-definition imagery flawlessly without lag, layout shifts, or template clichés.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
              >
                Discuss a Portfolio Project →
              </Link>
              <Link
                href="/work"
                className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/80 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
              >
                Explore Studio Capabilities ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Engineering Differences */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>THE ENGINEERING</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Why template builders destroy photographic imagery.
          </h2>
          <p className="font-sans text-stone text-[16px] md:text-[18px] mt-4">
            Most website builders either over-compress imagery into blurry artifacts or serve massive unoptimized files that freeze mobile browsers. We engineer custom image pipelines with Next.js modern formats (AVIF/WebP) and adaptive resolution srcsets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Sub-Second Image Delivery</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Automated multi-resolution responsive sets deliver crisp detail on Retina displays while keeping total payload minimal for mobile cellular networks.
            </p>
          </div>
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Curated Series &amp; Editorial Flow</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Showcase photo essays, advertising campaigns, and architectural series with dynamic horizontal scrolls, full-bleed spreads, and clean captions.
            </p>
          </div>
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Direct Commission Enquiries</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Structured commission inquiry forms that capture shoot dates, usage rights, location specs, and budgets directly into your inbox.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel dark>GET IN TOUCH</SectionLabel>
          <h2 className="text-editorial-lg text-bone mt-6 mb-8">
            Let&apos;s build an unforgettable portfolio.
          </h2>
          <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
            Showcase your work with the precision, typographic restraint, and technical speed it deserves.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
          >
            Start a Portfolio Enquiry →
          </Link>
        </div>
      </section>
    </main>
  );
}
