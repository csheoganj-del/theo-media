import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Does a Restaurant Need a Website If It Has Active Instagram? (2026 Analysis)',
  description:
    'Why relying solely on Instagram and social media costs restaurants bookings. Discover the difference between passive social scrolling and high-intent Google local search.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/insights/does-a-restaurant-need-a-website-with-instagram',
  },
  openGraph: {
    title: 'Does a Restaurant Need a Website with Active Instagram? | TheoMedia',
    description:
      'Why relying solely on Instagram costs UK restaurants bookings, private hires, and high-intent local diner revenue.',
    url: 'https://www.theomedia.co.uk/insights/does-a-restaurant-need-a-website-with-instagram',
    type: 'article',
  },
};

export default function DoesARestaurantNeedAWebsiteWithInstagramPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Does a Restaurant Still Need a Website If It Has an Active Instagram?',
    description:
      'Why relying solely on social media costs restaurants bookings. Discover the difference between passive social scrolling and high-intent Google search.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk',
    },
    datePublished: '2026-02-20T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    mainEntityOfPage: 'https://www.theomedia.co.uk/insights/does-a-restaurant-need-a-website-with-instagram',
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
            <span>DIGITAL STRATEGY · HOSPITALITY</span>
            <span>·</span>
            <span>PUBLISHED FEBRUARY 2026</span>
          </div>

          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            Does a Restaurant Still Need a Website If It Has an Active Instagram?
          </h1>

          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            In modern hospitality, it is common to hear operators say: &ldquo;Everyone finds us on Instagram, so why bother with a website?&rdquo; While Instagram is irreplaceable for lifestyle allure, treating it as your only digital presence is one of the most expensive mistakes a restaurateur can make.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Topic:</strong> Acquisition Channels</div>
            <div><strong>Reading Time:</strong> 5 minutes</div>
            <div><strong>Channel Comparison:</strong> Social vs Organic Local Search</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              1. Passive Scrolling vs High-Intent Commercial Search
            </h2>
            <p className="mb-4">
              To understand why an Instagram-only strategy fails, compare user intent:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 bg-ivory border border-near-black/10">
                <div className="text-[12px] font-mono uppercase text-stone mb-2">Instagram Intent: Passive</div>
                <p className="text-stone text-[15px]">
                  A user is scrolling at 11:00 PM while resting on their sofa. They see a video of your handmade pasta, double-tap to like it, and immediately continue scrolling past sixty other videos. There is zero immediate buying intent.
                </p>
              </div>
              <div className="p-6 bg-charcoal text-bone border border-bone/10">
                <div className="text-[12px] font-mono uppercase text-gold mb-2">Google Search Intent: Active</div>
                <p className="text-bone/80 text-[15px]">
                  A diner types &ldquo;private dining room for 12 Soho&rdquo; or &ldquo;best seafood dinner Edinburgh tonight&rdquo;. They have a credit card in hand and intend to reserve a table within the next 4 minutes.
                </p>
              </div>
            </div>
            <p>
              Instagram does not rank for commercial local search queries. If you don&apos;t have a fast, authoritative website, that high-intent diner is captured entirely by your competitors.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              2. The Menu Accessibility Catastrophe
            </h2>
            <p className="mb-4">
              Have you ever tried finding whether a restaurant caters to celiac disease or peanut allergies on Instagram?
            </p>
            <p className="mb-4">
              The user must click on the profile, tap through 25 circular Story Highlights named &ldquo;Food&rdquo; or &ldquo;Vibe&rdquo;, hope someone uploaded a photo of the menu within the last 6 months, pause the story with their thumb, and zoom in on tiny, blurry text.
            </p>
            <p className="mb-4">
              Most diners will not endure this friction. A bespoke website provides an instant, interactive HTML menu with searchable dietary filters, allergen badges, and wine pricing in a single tap.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              3. Private Dining &amp; Corporate Events Revenue
            </h2>
            <p className="mb-4">
              The most lucrative revenue stream for many restaurants is private hire, brand launches, and wedding receptions. An events manager at a corporate law firm or creative agency booking a £5,000 buyout will <strong>never</strong> negotiate via Instagram direct messages.
            </p>
            <p className="mb-4">
              They require downloadable floorplans, minimum spend terms, audiovisual specifications, and a professional enquiry form. Without a polished website, corporate event organizers will look elsewhere.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              The Winning Playbook: Instagram as the Spark, Website as the Closer
            </h2>
            <p className="mb-4">
              The goal is not to choose between Instagram and a website. The goal is to connect them seamlessly:
            </p>
            <div className="p-6 bg-ivory border-l-4 border-near-black my-6 space-y-2">
              <p className="font-semibold text-near-black">1. Instagram generates brand excitement, cultural cachet, and viral appetite appeal.</p>
              <p className="font-semibold text-near-black">2. The profile bio links directly to an ultra-fast, branded website landing page (not a generic Linktree).</p>
              <p className="font-semibold text-near-black">3. The website immediately confirms table availability, presents the menu, and captures the direct reservation within 15 seconds.</p>
            </div>
          </section>
        </div>

        {/* Call to action */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>HOSPITALITY WEB DESIGN</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Turn your social followers into confirmed table covers.
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            See how our bespoke restaurant architecture captures direct bookings and private hire revenue.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/industries/restaurant-website-design"
              className="px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors"
            >
              View Restaurant Architecture →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-bone/30 text-bone text-[12px] font-semibold tracking-wider uppercase hover:border-bone transition-colors"
            >
              Speak with Our Studio
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
