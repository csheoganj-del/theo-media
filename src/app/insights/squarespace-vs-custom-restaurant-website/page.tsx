import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Squarespace vs Custom Website for Restaurants: The Hidden Commission Trap',
  description:
    'Why generic Squarespace templates cost UK restaurants thousands in PDF menu bounces, sluggish mobile reservations, and third-party booking commissions.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/insights/squarespace-vs-custom-restaurant-website',
  },
  openGraph: {
    title: 'Squarespace vs Custom Website for Restaurants | TheoMedia',
    description:
      'Why generic Squarespace templates cost restaurants thousands in PDF menu bounces and third-party booking commissions.',
    url: 'https://www.theomedia.co.uk/insights/squarespace-vs-custom-restaurant-website',
    type: 'article',
  },
};

export default function SquarespaceVsCustomRestaurantWebsitePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Squarespace vs Custom Website for Restaurants: The Hidden Commission Trap',
    description:
      'Why generic Squarespace templates cost UK restaurants thousands in PDF menu bounces, sluggish mobile reservations, and third-party booking commissions.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk',
    },
    datePublished: '2026-02-01T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    mainEntityOfPage: 'https://www.theomedia.co.uk/insights/squarespace-vs-custom-restaurant-website',
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
            Squarespace vs Custom Restaurant Websites: The Commission Trap.
          </h1>

          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            Many UK restaurant owners choose Squarespace because it is quick to set up during the chaotic pre-launch rush. But six months in, that £25/month convenience quietly leaks tens of thousands of pounds in lost direct bookings and aggregator commissions.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Sector:</strong> Hospitality &amp; Dining</div>
            <div><strong>Reading Time:</strong> 6 minutes</div>
            <div><strong>Relevant Demo:</strong> Cinder &amp; Field Restaurant</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              1. The Mobile PDF Menu Nightmare
            </h2>
            <p className="mb-4">
              Over 82% of restaurant website traffic happens on mobile phones. Diners are standing outside in the rain, sitting in an Uber, or texting friends while deciding where to dine tonight.
            </p>
            <p className="mb-4">
              On Squarespace, restaurant owners routinely upload uncompressed print PDF menus. When a mobile user taps &ldquo;Menu&rdquo;, their phone either forces a 15MB file download or opens an illegible document requiring two-finger pinch-zooming.
            </p>
            <div className="p-6 bg-ivory border-l-4 border-near-black my-6">
              <p className="font-medium text-near-black">
                The Result: Up to 40% of prospective diners abandon the page within 6 seconds and choose a competing restaurant whose menu loads instantly in HTML.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              2. The Cost of Third-Party Commission Leakage
            </h2>
            <p className="mb-4">
              When a guest cannot easily find availability on your website, where do they go? They open OpenTable, Resy, or Deliveroo.
            </p>
            <p className="mb-4">
              Aggregator platforms charge restaurants anywhere from <strong>£1.00 to £2.50+ per seated cover</strong> acquired through their marketplace. For a 60-cover restaurant seating 200 covers a weekend:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-stone mb-6">
              <li>Just 50 covers/week diverted to aggregators = £50–£125 weekly commission</li>
              <li>Annual commission loss: <strong>£2,600 to £6,500+ every single year</strong></li>
            </ul>
            <p>
              A custom hospitality website with a frictionless, native direct reservation widget pays for its entire design and engineering cost in less than six months.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              3. Structured Schema: Feeding Google &amp; Apple Maps Directly
            </h2>
            <p className="mb-4">
              Modern diners search via Google Maps: &ldquo;best natural wine bar near Soho&rdquo; or &ldquo;seafood restaurant Dublin 2&rdquo;.
            </p>
            <p className="mb-4">
              A bespoke Next.js website implements granular <code>Restaurant</code> and <code>Menu</code> schema. Google can crawl individual dishes, dietary tags (vegan, gluten-free), opening hours, and price ranges without even opening a page. Squarespace cannot inject rich, multi-tiered restaurant schema with this level of granularity.
            </p>
          </section>

          {/* Demonstration Callout */}
          <div className="p-8 bg-ivory border border-near-black/10 my-10">
            <SectionLabel>LIVE PROTOTYPE BENCHMARK</SectionLabel>
            <h3 className="font-display text-[24px] text-near-black mt-2 mb-3">
              See the Difference: Cinder &amp; Field Restaurant
            </h3>
            <p className="text-stone text-[15px] mb-6">
              Experience our live hospitality showcase featuring sub-second responsive HTML menus, tactile wine pairings, and a seamless OpenTable/SevenRooms booking modal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://cinder-field.theomedia.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-near-black text-bone text-[12px] font-semibold tracking-wider uppercase hover:bg-stone transition-colors"
              >
                Experience Live Demo ↗
              </Link>
              <Link
                href="/industries/restaurant-website-design"
                className="px-6 py-3 border border-near-black text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-near-black hover:text-bone transition-colors"
              >
                Restaurant Web Design Architecture →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>HOSPITALITY REVENUE STRATEGY</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Stop losing table covers to third-party portals.
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            We build bespoke digital flagships for restaurants, gastropubs, and cocktail lounges across the UK and Ireland.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors"
          >
            Request Restaurant Proposal →
          </Link>
        </div>
      </article>
    </main>
  );
}
