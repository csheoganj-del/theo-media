import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Journal & Insights | Web Design & Technology Strategy | TheoMedia',
  description:
    'Balanced, factual guides on website costs in the UK, Squarespace alternatives, hospitality tech architecture, and custom development vs site builders.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/journal',
  },
  openGraph: {
    title: 'Journal & Insights | TheoMedia',
    description:
      'Balanced guides on web design costs, platform comparisons, and digital architecture for UK & Irish businesses.',
    url: 'https://www.theomedia.co.uk/journal',
    type: 'website',
  },
};

const articles = [
  {
    category: 'Commercial Analysis',
    title: 'How Much Does a Website Cost in the UK? (2026 Honest Guide)',
    slug: 'how-much-does-a-website-cost-uk',
    description:
      'A candid breakdown of web design pricing in the UK: DIY builders vs freelance developers vs boutique studios vs traditional agencies, including hidden ongoing costs.',
    readTime: '7 min read',
  },
  {
    category: 'Platform Comparison',
    title: 'Squarespace vs Custom Website: An Honest Technical & Commercial Review',
    slug: 'squarespace-vs-custom-website',
    description:
      'A balanced, factual comparison of Squarespace and custom Next.js development. When Squarespace is genuinely the right choice, and where growing businesses face structural limits.',
    readTime: '8 min read',
  },
  {
    category: 'Buyer Guide',
    title: 'Squarespace Alternative UK: When and Why Ambitious Brands Move On',
    slug: 'squarespace-alternative-uk',
    description:
      'Exploring independent, custom alternatives to Squarespace in the UK. Evaluating total cost of ownership, code portability, and brand distinction.',
    readTime: '6 min read',
  },
  {
    category: 'Hospitality Strategy',
    title: 'Squarespace vs Custom Website for Restaurants: The Commission & Menu Balance',
    slug: 'squarespace-vs-custom-restaurant-website',
    description:
      'Examining how restaurant websites affect mobile menu reading, table reservations, and third-party aggregator commissions.',
    readTime: '6 min read',
  },
  {
    category: 'Founder Decision',
    title: 'Should I Hire a Web Designer or Use Squarespace? A Decision Framework',
    slug: 'should-i-hire-a-web-designer-or-use-squarespace',
    description:
      'An objective decision framework based on your business stage, technical confidence, revenue per customer, and the true commercial role of your website.',
    readTime: '7 min read',
  },
  {
    category: 'Systems Architecture',
    title: 'Odoo Website Alternative for Restaurants: ERP Scope vs Guest Experience',
    slug: 'odoo-website-alternative-restaurants',
    description:
      'Odoo excels at back-of-house ERP, inventory, and POS. Why hospitality groups decouple consumer-facing websites rather than replacing Odoo entirely.',
    readTime: '6 min read',
  },
  {
    category: 'Hospitality Economics',
    title: 'How Much Does a Restaurant Website Cost in the UK?',
    slug: 'restaurant-website-cost-uk',
    description:
      'From budget setups to bespoke hospitality flagships: design costs, professional food photography budgets, reservation software comparisons, and payback math.',
    readTime: '6 min read',
  },
];

export default function JournalIndexPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>STUDIO JOURNAL · GUIDES &amp; ANALYSIS</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              THE JOURNAL.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              Factual, balanced analysis on digital strategy, platform comparisons, web design economics, and system architecture for founders and operators across the UK and Ireland.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="p-8 md:p-10 bg-ivory border border-near-black/10 flex flex-col justify-between hover:border-near-black transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-stone uppercase mb-4">
                  <span>{item.category}</span>
                  <span>{item.readTime}</span>
                </div>
                <h2 className="font-display text-[24px] text-near-black group-hover:text-stone transition-colors mb-4">
                  <Link href={`/journal/${item.slug}`}>
                    {item.title}
                  </Link>
                </h2>
                <p className="font-sans text-stone text-[15px] leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-near-black/10">
                <Link
                  href={`/journal/${item.slug}`}
                  className="text-[13px] font-sans font-semibold tracking-wider uppercase text-near-black group-hover:translate-x-1 transition-transform inline-flex items-center gap-2"
                >
                  <span>Read Full Article</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cross link to industry prototypes */}
      <section className="bg-ivory border-t border-b border-near-black/10 py-20 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <SectionLabel>OUR WORK</SectionLabel>
            <h2 className="font-display text-[32px] text-near-black mt-2">
              Explore our production prototypes and case studies.
            </h2>
            <p className="font-sans text-stone text-[16px] mt-2">
              See how our digital architecture works across hospitality, trades, healthcare, and ecommerce.
            </p>
          </div>
          <Link
            href="/industries"
            className="px-8 py-4 bg-near-black text-bone text-[13px] font-semibold tracking-wider uppercase hover:bg-stone transition-colors shrink-0"
          >
            Explore Industry Solutions →
          </Link>
        </div>
      </section>
    </main>
  );
}
