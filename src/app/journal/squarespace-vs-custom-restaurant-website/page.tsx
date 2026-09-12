import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Squarespace vs Custom Website for Restaurants: The Commission & Menu Balance',
  description:
    'A balanced analysis of restaurant website platforms in the UK. How mobile menus, reservation integrations, and aggregator commission leakage affect dining venue profitability.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/journal/squarespace-vs-custom-restaurant-website',
  },
  openGraph: {
    title: 'Squarespace vs Custom Website for Restaurants | TheoMedia',
    description:
      'How restaurant web design choices impact mobile menu browsing, table bookings, and third-party commission leakage.',
    url: 'https://www.theomedia.co.uk/journal/squarespace-vs-custom-restaurant-website',
    type: 'article',
  },
};

export default function SquarespaceVsCustomRestaurantWebsitePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Squarespace vs Custom Website for Restaurants: The Commission & Menu Balance',
    description:
      'A balanced, factual analysis of Squarespace vs bespoke hospitality web architecture for UK and Irish dining venues.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk',
    },
    datePublished: '2026-02-01T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    mainEntityOfPage: 'https://www.theomedia.co.uk/journal/squarespace-vs-custom-restaurant-website',
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
            <span>HOSPITALITY ARCHITECTURE</span>
            <span>·</span>
            <span>PUBLISHED FEBRUARY 2026</span>
          </div>

          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            Squarespace vs Custom Restaurant Websites: The Commission &amp; Menu Balance.
          </h1>

          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            In the chaos of opening a restaurant, choosing a convenient website builder is completely understandable. But as service settles into a regular rhythm, the friction between generic site builders and the real commercial mechanics of dining becomes clear.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Sector:</strong> Hospitality &amp; Dining</div>
            <div><strong>Reading Time:</strong> 6 minutes</div>
            <div><strong>Featured Project:</strong> Cinder &amp; Field Restaurant</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              1. The Mobile Menu Experience
            </h2>
            <p className="mb-4">
              More than 80% of dining website traffic happens on mobile devices. Guests are checking menus while commuting, standing outside, or deciding where to meet friends.
            </p>
            <p className="mb-4">
              When a venue uploads a print PDF menu to a website builder, mobile users are forced to download a large document and pinch-zoom to read tiny text. A responsive HTML menu renders instantly, adapts to any screen size, and can be crawled directly by search engines for dietary keywords like &ldquo;gluten-free pasta&rdquo; or &ldquo;vegan tasting menu&rdquo;.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              2. The Direct Booking vs Aggregator Dilemma
            </h2>
            <p className="mb-4">
              When a guest visits your website, the primary goal is capturing a direct reservation. If the booking widget is hidden behind multiple clicks or redirects to an external portal, many diners fall back to third-party aggregator apps (OpenTable, Resy, Deliveroo).
            </p>
            <p className="mb-4">
              While aggregators are valuable for initial discovery, paying £1.50 to £2.50 per cover on guests who already intended to visit your venue represents significant margin erosion:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-stone mb-6">
              <li>Just 30 covers per week diverted = £45–£75 weekly fee</li>
              <li>Annual cost: <strong>£2,300 to £3,900+ per year</strong> in unnecessary third-party fees</li>
            </ul>
            <p>
              A clean, bespoke website with an embedded direct booking workflow ensures that guests book on your terms, with 100% of guest data captured for your venue.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              3. Structured Schema for Local Search
            </h2>
            <p className="mb-4">
              Google Maps and local search engines rely on <code>Restaurant</code> and <code>Menu</code> Schema.org metadata to understand opening hours, price bands, cuisine categories, and current menus. Custom code allows full, granular schema implementation that feeds search engines clean, structured data.
            </p>
          </section>

          {/* Project Callout */}
          <div className="p-8 bg-ivory border border-near-black/10 my-10">
            <SectionLabel>LIVE PROJECT BENCHMARK</SectionLabel>
            <h3 className="font-display text-[24px] text-near-black mt-2 mb-3">
              Experience the Difference: Cinder &amp; Field
            </h3>
            <p className="text-stone text-[15px] mb-6">
              Explore our live restaurant project featuring instant mobile menus, tactile wine pairings, and a seamless direct reservation workflow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://cinder-field.theomedia.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-near-black text-bone text-[12px] font-semibold tracking-wider uppercase hover:bg-stone transition-colors"
              >
                View Live Website ↗
              </Link>
              <Link
                href="/industries/restaurant-website-design"
                className="px-6 py-3 border border-near-black text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-near-black hover:text-bone transition-colors"
              >
                Restaurant Web Architecture →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>HOSPITALITY WEB DESIGN</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Build a direct booking engine for your venue.
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            We build bespoke digital flagships for restaurants, gastropubs, and boutique hotels across the UK and Ireland.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors"
          >
            Request Hospitality Proposal →
          </Link>
        </div>
      </article>
    </main>
  );
}
