import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Independent Business Website Design UK & Ireland | TheoMedia',
  description:
    'Bespoke, high-performance website design for ambitious independent businesses across the UK and Ireland. Studio engagements from £2,500 / €3,000 with 100% code ownership and zero monthly lock-in.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/small-business-website-design',
  },
  openGraph: {
    title: 'Independent Business Website Design UK & Ireland | TheoMedia',
    description:
      'Bespoke, high-performance web design for independent and small businesses. Engagements from £2,500 / €3,000 with zero platform lock-in.',
    url: 'https://www.theomedia.co.uk/industries/small-business-website-design',
    type: 'website',
  },
};

export default function SmallBusinessWebsiteDesignPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Independent Business Website Design',
            provider: {
              '@type': 'Organization',
              name: 'TheoMedia',
              url: 'https://www.theomedia.co.uk',
            },
            areaServed: [
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'Ireland' },
            ],
            offers: {
              '@type': 'Offer',
              price: '2500',
              priceCurrency: 'GBP',
              description: 'Digital Flagship Engagement for UK & Ireland independent businesses',
            },
            description:
              'Scope-first bespoke website design for independent businesses in the UK and Ireland. 100% code ownership, rapid turnaround, and zero monthly subscription lock-in.',
          }),
        }}
      />

      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>COMMERCIAL ARCHITECTURE · INDEPENDENT BUSINESS</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              INDEPENDENT BUSINESS WEBSITES. ZERO LOCK-IN.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              Most businesses are trapped between fragile DIY builders and agency retainers that cost thousands each month. We deliver bespoke, founder-crafted websites starting from £2,500 with 100% code ownership.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
              >
                Discuss a Project →
              </Link>
              <Link
                href="/journal/how-much-does-a-website-cost-uk"
                className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/80 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
              >
                Read UK Investment Guide ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Honest Comparison Banner */}
      <section className="py-20 md:py-28 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>THE INDEPENDENT BUSINESS REALITY</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Why rent your digital storefront when you can own it?
          </h2>
          <p className="font-sans text-stone text-[16px] leading-relaxed mt-4">
            Proprietary site builders hook businesses with cheap introductory offers, then increase prices year after year while locking your data and code inside their walled gardens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 md:p-12 bg-ivory border border-near-black/10 flex flex-col">
            <div className="text-[12px] font-mono tracking-wider text-stone uppercase mb-4">The Template / Agency Model</div>
            <h3 className="font-display text-[24px] text-near-black mb-6">Recurring Monthly Dependency</h3>
            <ul className="space-y-4 font-sans text-[15px] text-stone">
              <li className="flex items-start gap-3">
                <span className="text-near-black/40 font-bold">✕</span>
                <span>£50–£200/month in mandatory software, plugin, and hosting fees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-near-black/40 font-bold">✕</span>
                <span>Slow page loads caused by bloated drag-and-drop code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-near-black/40 font-bold">✕</span>
                <span>If you cancel your subscription, your website disappears completely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-near-black/40 font-bold">✕</span>
                <span>Junior account managers handed off your project post-sale</span>
              </li>
            </ul>
          </div>

          <div className="p-8 md:p-12 bg-charcoal text-bone border border-bone/10 flex flex-col">
            <div className="text-[12px] font-mono tracking-wider text-gold uppercase mb-4">The TheoMedia Studio Standard</div>
            <h3 className="font-display text-[24px] text-bone mb-6">100% Owned Digital Equity</h3>
            <ul className="space-y-4 font-sans text-[15px] text-bone/80">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>Scope-first milestone billing from £2,500 / €3,000</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>Complete source code and GitHub repository handed over to you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>Engineered on modern Next.js & TypeScript for rapid mobile speed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>Direct collaboration with the studio founder from start to launch</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Package Breakdown */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>STUDIO ENGAGEMENT OPTIONS</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Transparent investment built around the problem, not a page count.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-mono tracking-wider text-stone uppercase mb-2">01 · Digital Flagship</div>
              <div className="font-display text-[32px] text-near-black mb-1">From £2,500 / €3,000</div>
              <div className="text-[13px] text-stone mb-6">Essential Authority</div>
              <p className="font-sans text-[14px] text-stone leading-relaxed mb-6">
                Perfect for independent specialists, boutique studios, and consultants needing immediate commercial credibility.
              </p>
              <ul className="space-y-2 text-[13px] text-near-black font-sans border-t border-near-black/10 pt-4">
                <li>• Bespoke art direction and editorial typography</li>
                <li>• Mobile-optimised with fluid micro-interactions</li>
                <li>• Contact form &amp; WhatsApp/Call consultation integration</li>
                <li>• Foundational technical SEO and schema markup</li>
              </ul>
            </div>
            <Link
              href="/contact?engagement=flagship"
              className="mt-8 block text-center py-3 bg-near-black text-bone text-[12px] font-semibold tracking-wider uppercase hover:bg-stone transition-colors"
            >
              Discuss Flagship →
            </Link>
          </div>

          <div className="p-8 bg-ivory border-2 border-near-black flex flex-col justify-between relative shadow-lg">
            <div className="absolute -top-3 right-6 bg-near-black text-bone text-[10px] font-mono uppercase tracking-widest px-3 py-1">
              Most Requested
            </div>
            <div>
              <div className="text-[12px] font-mono tracking-wider text-stone uppercase mb-2">02 · Commercial Platform</div>
              <div className="font-display text-[32px] text-near-black mb-1">From £5,000 / €6,000</div>
              <div className="text-[13px] text-stone mb-6">Multi-Market Commercial Hub</div>
              <p className="font-sans text-[14px] text-stone leading-relaxed mb-6">
                For established businesses ready to outrank competitors, publish dynamic content, and capture qualified enquiries.
              </p>
              <ul className="space-y-2 text-[13px] text-near-black font-sans border-t border-near-black/10 pt-4">
                <li>• Comprehensive multi-page architectural layout</li>
                <li>• Headless CMS integration for effortless updates</li>
                <li>• Advanced booking, reservation, or quote capture flows</li>
                <li>• Conversion architecture &amp; analytics setup</li>
              </ul>
            </div>
            <Link
              href="/contact?engagement=commercial"
              className="mt-8 block text-center py-3 bg-near-black text-bone text-[12px] font-semibold tracking-wider uppercase hover:bg-stone transition-colors"
            >
              Discuss Platform →
            </Link>
          </div>

          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-mono tracking-wider text-stone uppercase mb-2">03 · Digital Systems</div>
              <div className="font-display text-[32px] text-near-black mb-1">From £8,000 / €9,500</div>
              <div className="text-[13px] text-stone mb-6">Custom Digital Systems</div>
              <p className="font-sans text-[14px] text-stone leading-relaxed mb-6">
                Engineered for complex workflows: customer portals, headless ecommerce, custom booking engines, and internal tools.
              </p>
              <ul className="space-y-2 text-[13px] text-near-black font-sans border-t border-near-black/10 pt-4">
                <li>• Custom Next.js web application architecture</li>
                <li>• Stripe, booking API, or custom backend integration</li>
                <li>• Proprietary operational software &amp; dashboards</li>
                <li>• 100% source code ownership with zero seat licenses</li>
              </ul>
            </div>
            <Link
              href="/contact?engagement=systems"
              className="mt-8 block text-center py-3 bg-near-black text-bone text-[12px] font-semibold tracking-wider uppercase hover:bg-stone transition-colors"
            >
              Discuss Systems →
            </Link>
          </div>
        </div>
      </section>

      {/* Sector Links */}
      <section className="py-20 md:py-28 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <SectionLabel>SPECIALISED SECTOR SOLUTIONS</SectionLabel>
        <h2 className="text-editorial-md text-near-black mt-4 mb-8">
          Looking for industry-specific web design?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/industries/restaurant-website-design"
            className="p-6 bg-ivory border border-near-black/10 hover:border-near-black transition-colors block"
          >
            <div className="font-display text-[18px] text-near-black mb-1">Restaurants &amp; Hospitality →</div>
            <p className="font-sans text-[13px] text-stone">Direct reservations, live menus, zero commissions.</p>
          </Link>
          <Link
            href="/industries/trades-construction-website-design"
            className="p-6 bg-ivory border border-near-black/10 hover:border-near-black transition-colors block"
          >
            <div className="font-display text-[18px] text-near-black mb-1">Trades &amp; Construction →</div>
            <p className="font-sans text-[13px] text-stone">High-ticket enquiries, WhatsApp leads, project galleries.</p>
          </Link>
          <Link
            href="/industries/healthcare-clinic-website-design"
            className="p-6 bg-ivory border border-near-black/10 hover:border-near-black transition-colors block"
          >
            <div className="font-display text-[18px] text-near-black mb-1">Healthcare &amp; Clinics →</div>
            <p className="font-sans text-[13px] text-stone">Private clinics, medical trust, confidential consultation bookings.</p>
          </Link>
        </div>
      </section>

      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel dark>START A PROJECT</SectionLabel>
          <h2 className="text-editorial-lg text-bone mt-6 mb-8">
            Ready to upgrade your digital presence?
          </h2>
          <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
            Tell us about your business goals and current pain points. We will provide a direct, founder-led scoping response.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
          >
            Discuss a Project →
          </Link>
        </div>
      </section>
    </main>
  );
}
