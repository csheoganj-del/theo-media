import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import JsonLd from '@/components/seo/JsonLd';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Website SEO for Small Business UK: A Practical 2026 Checklist',
  description:
    'A no-fluff SEO checklist for UK small businesses: titles, H1s, Google Business Profile, schema, speed, internal links and the pages that actually generate enquiries.',
  path: '/journal/website-seo-for-small-business-uk',
  type: 'article',
});

const faqs = [
  {
    question: 'What is the most important SEO task for a UK small business?',
    answer:
      'A fast, indexable website with a unique title and H1 for each service, plus a complete Google Business Profile. Content farms and keyword stuffing do not outperform a clear service page that matches how customers search.',
  },
  {
    question: 'How long does SEO take for a new UK website?',
    answer:
      'Technical foundations (indexation, titles, schema, speed) should be live on day one. Rankings for competitive terms take months. Local and long-tail queries (“garage website design”, “restaurant website cost UK”) can move in weeks if the page is genuinely useful.',
  },
];

export default function WebsiteSeoSmallBusinessPage() {
  return (
    <div className="bg-bone min-h-screen pt-24 text-near-black">
      <JsonLd
        data={[
          articleJsonLd({
            headline: 'Website SEO for Small Business UK: A Practical 2026 Checklist',
            description: metadata.description as string,
            path: '/journal/website-seo-for-small-business-uk',
            datePublished: '2026-09-14T09:00:00+00:00',
          }),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Journal', path: '/journal' },
            { name: 'Website SEO for Small Business', path: '/journal/website-seo-for-small-business-uk' },
          ]),
        ]}
      />
      <article className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <div className="flex items-center gap-3 text-[12px] font-mono tracking-widest text-stone uppercase mb-4">
            <span>TECHNICAL &amp; LOCAL SEO</span>
            <span>·</span>
            <span>UPDATED SEPTEMBER 2026</span>
          </div>
          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            Website SEO for Small Business in the UK: A Practical Checklist.
          </h1>
          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            SEO for a small UK business is not a 40-page strategy deck. It is a handful of pages that match real searches, a site Google can crawl, and a Google Business Profile that agrees with the website.
          </p>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">1. One page per service people actually search</h2>
            <p>
              Do not hide everything on the homepage. If you design restaurant websites, that needs its own URL, title and H1. Same for pricing, location and comparisons. TheoMedia’s own{' '}
              <Link href="/industries" className="underline">industry pages</Link> exist for this reason.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">2. Unique title, meta description and H1</h2>
            <p>
              Every indexable URL needs a unique title under ~60 characters of intent, a description that earns the click, and a single H1 that matches the query in natural language. Duplicate “Home | Brand” titles waste the SERP.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">3. Canonicals, sitemap, robots</h2>
            <p>
              One canonical per page. An XML sitemap of real URLs only. Robots.txt that does not block CSS or key sections. HTTP 301s for old paths. These are boring and they are why sites get indexed.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">4. Speed on a UK mobile connection</h2>
            <p>
              Core Web Vitals still matter. Compress images, avoid live iframes above the fold where possible, and ship less JavaScript. A pretty site that takes four seconds to paint will lose to a plainer one that answers the query immediately.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">5. Local SEO: NAP, GBP, city pages only if they are real</h2>
            <p>
              Name, phone and service area must match Google Business Profile. City pages only help if they contain unique local content — not the same paragraph with the city name swapped. Thin doorway pages get ignored or demoted.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">6. Schema that describes the business honestly</h2>
            <p>
              Organization, Service, FAQ, Article and BreadcrumbList help machines. Fake Review markup does not. If you publish prices, Offer schema should match the page.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">7. Internal links with descriptive anchors</h2>
            <p>
              “Click here” wastes equity. Link from cost guides to{' '}
              <Link href="/pricing" className="underline">pricing</Link>, from industry pages to case studies, from the homepage to the journal. That is how Google discovers commercial pages.
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>BUILT IN FROM DAY ONE</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Technical SEO is part of every TheoMedia website.
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            Schema, canonicals, sitemaps and Core Web Vitals are in the build — not a later upsell.
          </p>
          <Link href="/web-design" className="inline-block px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors">
            Bespoke Web Design →
          </Link>
        </div>
      </article>
    </div>
  );
}
