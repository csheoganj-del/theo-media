import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Squarespace Alternative UK: When and Why Ambitious Brands Move On | TheoMedia',
  description:
    'Looking for a Squarespace alternative in the UK? Compare Webflow, WordPress, and custom Next.js web development on code ownership, mobile performance, and total costs.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/journal/squarespace-alternative-uk',
  },
  openGraph: {
    title: 'Squarespace Alternative UK: When and Why Ambitious Brands Move On | TheoMedia',
    description:
      'Compare modern alternatives to Squarespace for UK businesses seeking true brand distinction and code ownership.',
    url: 'https://www.theomedia.co.uk/journal/squarespace-alternative-uk',
    type: 'article',
  },
};

export default function SquarespaceAlternativeUKPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Squarespace Alternative UK: When and Why Ambitious Brands Move On',
    description:
      'An objective guide to modern Squarespace alternatives in the UK, comparing Webflow, WordPress, and bespoke Next.js architecture.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk',
    },
    datePublished: '2026-02-18T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    mainEntityOfPage: 'https://www.theomedia.co.uk/journal/squarespace-alternative-uk',
  };

  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <div className="flex items-center gap-3 text-[12px] font-mono tracking-widest text-stone uppercase mb-4">
            <span>BUYER GUIDE · PLATFORM STRATEGY</span>
            <span>·</span>
            <span>UPDATED FEBRUARY 2026</span>
          </div>

          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            Squarespace Alternative UK: When and Why Ambitious Brands Move On.
          </h1>

          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            Squarespace is often the first tool a UK business owner turns to. But as turnover grows and brand credibility directly impacts high-ticket enquiries, many founders begin searching for alternatives. Here is an objective evaluation of the options available in the UK today.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Market:</strong> UK &amp; Ireland</div>
            <div><strong>Reading Time:</strong> 6 minutes</div>
            <div><strong>Target Audience:</strong> Founders, Managing Directors, Brand Owners</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Why UK Businesses Seek Alternatives to Squarespace
            </h2>
            <p className="mb-4">
              Founders rarely switch away from Squarespace because it is &ldquo;broken&rdquo;. They switch because their business needs have outpaced the software&apos;s architectural assumptions:
            </p>
            <ul className="space-y-3 list-disc pl-6 text-stone mb-6">
              <li><strong>Template Familiarity:</strong> In crowded markets (hospitality, private health, high-end construction), discerning customers can easily recognise standard template components.</li>
              <li><strong>The Desire for Real Asset Ownership:</strong> Business owners increasingly want their digital assets on balance sheets as owned intellectual property rather than rented subscriptions.</li>
              <li><strong>Custom Integrations:</strong> Connecting proprietary booking flows, custom CRM webhooks, or bespoke quotation calculators often strains closed-ecosystem platforms.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Comparing the Main Alternatives in the UK
            </h2>

            <div className="space-y-6 my-6">
              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[22px] text-near-black mb-2">Option 1: Webflow</h3>
                <p className="text-stone text-[15px] mb-3">
                  <strong>Pros:</strong> Exceptional visual animation capabilities and much finer CSS layout control than Squarespace.
                </p>
                <p className="text-stone text-[15px]">
                  <strong>Trade-offs:</strong> Webflow has a steep learning curve for non-designers, and its hosting pricing escalates quickly as traffic or form submissions increase. You remain locked in their closed hosting environment.
                </p>
              </div>

              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[22px] text-near-black mb-2">Option 2: WordPress / WooCommerce</h3>
                <p className="text-stone text-[15px] mb-3">
                  <strong>Pros:</strong> Open-source, self-hosted, with an immense plugin ecosystem.
                </p>
                <p className="text-stone text-[15px]">
                  <strong>Trade-offs:</strong> High maintenance overhead. WordPress sites require frequent plugin updates, security monitoring, and database optimisations to prevent vulnerabilities and slowdowns.
                </p>
              </div>

              <div className="p-6 bg-ivory border-2 border-near-black">
                <h3 className="font-display text-[22px] text-near-black mb-2">Option 3: Independent Studio Custom Build (TheoMedia)</h3>
                <p className="text-stone text-[15px] mb-3">
                  <strong>Pros:</strong> Modern edge-rendered Next.js architecture, 100% full source code ownership on handoff, fixed-price delivery from £895 / €1,050, and zero monthly software tax.
                </p>
                <p className="text-stone text-[15px]">
                  <strong>Trade-offs:</strong> Higher upfront investment than a DIY monthly plan, and structural layout changes post-launch are managed via code or structured CMS fields rather than casual drag-and-drop.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Making the Decision for Your Business
            </h2>
            <p className="mb-4">
              If your website exists merely as an online business card, staying on Squarespace is a sensible, cost-effective choice.
            </p>
            <p>
              If your website is expected to generate qualified inbound phone calls, direct bookings, or high-value quote requests in a competitive UK market, a custom-built studio flagship offers lasting commercial advantages.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>EXPLORE BESPOKE ALTERNATIVES</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Ready to build a digital asset you truly own?
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            Speak directly with our studio founder about crafting a bespoke, high-performance website for your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors"
            >
              Start Consultation →
            </Link>
            <Link
              href="/web-design"
              className="px-6 py-3 border border-bone/30 text-bone text-[12px] font-semibold tracking-wider uppercase hover:border-bone transition-colors"
            >
              Explore Web Design Services
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
