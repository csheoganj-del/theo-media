import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import JsonLd from '@/components/seo/JsonLd';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Does a Restaurant Need a Website If It Has Instagram? (UK 2026)',
  description:
    'Instagram is not a restaurant website. Why UK and Irish restaurants still need a fast site for menus, table bookings, Google search and Google Business Profile.',
  path: '/journal/does-a-restaurant-need-a-website',
  type: 'article',
});

const faqs = [
  {
    question: 'Can a restaurant just use Instagram instead of a website?',
    answer:
      'Instagram is a feed, not a booking system. It does not rank reliably in Google for “restaurant near me”, cannot host a fast HTML menu, and can throttle reach overnight. A website is the asset you own.',
  },
  {
    question: 'What should a restaurant website include?',
    answer:
      'A mobile HTML menu, location and hours, reservation or WhatsApp path, private dining enquiry, photography that matches the room, and Restaurant schema so Google can show the right rich results.',
  },
];

export default function DoesRestaurantNeedWebsitePage() {
  return (
    <div className="bg-bone min-h-screen pt-24 text-near-black">
      <JsonLd
        data={[
          articleJsonLd({
            headline: 'Does a Restaurant Need a Website If It Has Instagram?',
            description: metadata.description as string,
            path: '/journal/does-a-restaurant-need-a-website',
            datePublished: '2026-09-14T09:00:00+00:00',
          }),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Journal', path: '/journal' },
            { name: 'Does a Restaurant Need a Website', path: '/journal/does-a-restaurant-need-a-website' },
          ]),
        ]}
      />
      <article className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <div className="flex items-center gap-3 text-[12px] font-mono tracking-widest text-stone uppercase mb-4">
            <span>HOSPITALITY STRATEGY</span>
            <span>·</span>
            <span>UPDATED SEPTEMBER 2026</span>
          </div>
          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            Does a Restaurant Need a Website If It Already Has Instagram?
          </h1>
          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            Short answer: yes, if you want Google search, Google Maps, a readable menu, and table bookings that do not depend on an algorithm. Instagram is marketing. A website is infrastructure.
          </p>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">People searching to eat are not scrolling Reels</h2>
            <p>
              A diner with high intent types “gastropub near me”, “Sunday roast [city]” or the restaurant name plus “menu”. That query hits Google, not Instagram. If your Google Business Profile links to a Facebook page or a PDF, you lose the booking to the room that made it easy.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">Instagram cannot be your menu</h2>
            <p>
              Stories expire. Highlights are slow. PDFs pinch-zoom. Over three-quarters of menu checks happen on a phone, often while walking. An HTML menu with dietary tags loads in milliseconds and can be updated the morning the specials change. That is{' '}
              <Link href="/industries/restaurant-website-design" className="underline">
                restaurant website design
              </Link>
              , not social media.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">Third-party apps tax every cover</h2>
            <p>
              Relying on delivery or booking apps as the website replacement costs £1.50–£3+ per cover, or 15–30% on delivery. A direct reservation flow on your own domain pays for a custom site in weeks if you are busy. See{' '}
              <Link href="/journal/restaurant-website-cost-uk" className="underline">
                restaurant website cost in the UK
              </Link>
              .
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">You do not own Instagram</h2>
            <p>
              Accounts get restricted. Reach drops. Links are buried. A website on a domain you own, with code you own, is a business asset. Social should point at it — not replace it.
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>SEE IT LIVE</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            A restaurant site built for menus and bookings.
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            Explore the Cinder &amp; Field project, then start a hospitality project.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/industries/restaurant-website-design" className="px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors">
              Restaurant Web Design →
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-bone/30 text-bone text-[12px] font-semibold tracking-wider uppercase hover:border-bone transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
