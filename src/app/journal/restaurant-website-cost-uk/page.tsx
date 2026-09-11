import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'How Much Does a Restaurant Website Cost in the UK? (2026 Operator Guide)',
  description:
    'A candid financial breakdown of restaurant web design costs in the UK. Design fees, professional food photography budgets, reservation software comparisons, and commission savings.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/journal/restaurant-website-cost-uk',
  },
  openGraph: {
    title: 'How Much Does a Restaurant Website Cost in the UK? | TheoMedia',
    description:
      'Financial breakdown of restaurant web design costs in the UK: setup fees, food photography, booking integrations, and commission payback.',
    url: 'https://www.theomedia.co.uk/journal/restaurant-website-cost-uk',
    type: 'article',
  },
};

export default function RestaurantWebsiteCostUKPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does a Restaurant Website Cost in the UK? (2026 Operator Guide)',
    description:
      'A candid financial breakdown of restaurant web design costs in the UK. Design fees, photography budgets, reservation software comparisons, and commission savings.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk',
    },
    datePublished: '2026-02-15T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    mainEntityOfPage: 'https://www.theomedia.co.uk/journal/restaurant-website-cost-uk',
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
            <span>HOSPITALITY ECONOMICS</span>
            <span>·</span>
            <span>PUBLISHED FEBRUARY 2026</span>
          </div>

          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            How Much Does a Restaurant Website Cost in the UK?
          </h1>

          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            Restaurant margins in the UK and Ireland are famously tight. Between rising food costs, utility bills, and business rates, every pound invested must generate a measurable return. Here is an honest breakdown of what an effective hospitality website costs, what to allocate for photography, and how direct bookings recoup the investment.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Sector:</strong> Restaurants, Gastropubs, Wine Bars</div>
            <div><strong>Reading Time:</strong> 6 minutes</div>
            <div><strong>Currency:</strong> GBP (£) &amp; EUR (€)</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-6">
              Core Cost Breakdown: Design &amp; Build
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-ivory border border-near-black/10">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-[20px] text-near-black">Boutique Hospitality Studio (TheoMedia)</h3>
                  <span className="font-mono text-[14px] text-near-black font-semibold">£1,250 – £2,850 fixed</span>
                </div>
                <p className="text-stone text-[15px]">
                  Custom Next.js website with responsive mobile HTML menus (no PDFs), direct reservation modal integrations (SevenRooms, Resy, OpenTable, Tablein), Instagram sync, gift voucher integration, and Google Restaurant Schema.
                </p>
              </div>

              <div className="p-6 bg-ivory border border-near-black/10">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-[20px] text-near-black">DIY Restaurant Builder (Squarespace / BentoBox)</h3>
                  <span className="font-mono text-[14px] text-stone">£25 – £95 / month</span>
                </div>
                <p className="text-stone text-[15px]">
                  Template-based setups. Good for pre-launch or tight initial budgets, but often results in PDF menu reliance and ongoing subscription fees.
                </p>
              </div>

              <div className="p-6 bg-ivory border border-near-black/10">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-[20px] text-near-black">City Creative Agency</h3>
                  <span className="font-mono text-[14px] text-stone">£6,000 – £15,000+</span>
                </div>
                <p className="text-stone text-[15px]">
                  Often includes comprehensive branding, interior spatial consulting, and print menus, but carries substantial agency overheads that independent restaurateurs rarely require.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              The Critical Ancillary Investment: Professional Food Photography
            </h2>
            <p className="mb-4">
              Even the finest web code cannot compensate for poorly lit smartphone photos taken during busy service. In hospitality, visual appetite appeal is the primary conversion trigger.
            </p>
            <div className="p-6 bg-ivory border-l-4 border-near-black my-6">
              <p className="font-medium text-near-black mb-1">Recommended Photography Budget: £450 – £950</p>
              <p className="text-stone text-[15px]">
                A half-day shoot with an experienced food and interior photographer produces 25–40 high-resolution hero images: signature dishes, dining room atmosphere, cocktail pours, and exterior architectural shots. This asset elevates your website, press kit, and social channels for 12–18 months.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Reservation Software Costs Compared
            </h2>
            <p className="mb-4">
              Your website must connect effortlessly to your reservation management software. Here are the common options in the UK and Ireland:
            </p>
            <ul className="space-y-3 font-sans text-stone text-[15px]">
              <li><strong>SevenRooms:</strong> Premium enterprise guest CRM and direct reservations. Ideal for venues focused on capturing direct guest data.</li>
              <li><strong>OpenTable:</strong> Strong consumer network, but charges £1.50–£2.50 per cover booked through their marketplace. We embed direct widgets so you pay £0 in per-cover fees on your own website traffic.</li>
              <li><strong>Resy:</strong> Popular demographic fit for trendy, casual-fine dining and chef-led concepts.</li>
              <li><strong>Tablein / ResDiary:</strong> Highly cost-effective flat-monthly-fee models for independent neighborhood bistros.</li>
            </ul>
          </section>

          {/* Payback Calculation */}
          <section className="p-8 bg-charcoal text-bone">
            <h2 className="font-display text-[24px] text-bone mb-4">
              The Payback Math: Recapturing Direct Covers
            </h2>
            <p className="text-bone/80 text-[15px] leading-relaxed mb-4">
              If an aggregator marketplace charges £2.00 per cover, and your bespoke TheoMedia website redirects just <strong>25 covers per week</strong> from third-party apps to your direct booking widget:
            </p>
            <div className="font-mono text-[16px] text-gold mb-4">
              25 covers × £2.00 = £50 saved per week = £2,600 saved per year.
            </div>
            <p className="text-bone/80 text-[15px] leading-relaxed">
              At a typical studio build cost of £1,850, your website achieves a <strong>100% net payback in under 9 months</strong>, while establishing direct ownership of your customer list.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/industries/restaurant-website-design"
            className="inline-block px-8 py-4 bg-near-black text-bone text-[13px] font-semibold tracking-wider uppercase hover:bg-stone transition-colors"
          >
            Explore Restaurant Web Architecture →
          </Link>
        </div>
      </article>
    </main>
  );
}
