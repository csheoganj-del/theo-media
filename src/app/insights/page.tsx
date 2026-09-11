import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Insights, Guides & Comparisons | TheoMedia Web Studio',
  description:
    'In-depth guides on UK & Ireland website costs, Squarespace vs custom Next.js comparisons, restaurant digital strategy, and technical SEO architecture.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/insights',
  },
  openGraph: {
    title: 'Insights, Guides & Comparisons | TheoMedia',
    description:
      'In-depth guides on UK & Ireland website costs, platform comparisons, and high-performance digital strategy.',
    url: 'https://www.theomedia.co.uk/insights',
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
    title: 'Squarespace vs Custom Next.js: An Honest Technical & Commercial Review',
    slug: 'squarespace-vs-custom-website',
    description:
      'When is Squarespace genuinely enough, and when does its bloated code, monthly price creep, and limited SEO hurt growing UK and Irish businesses?',
    readTime: '8 min read',
  },
  {
    category: 'Hospitality Strategy',
    title: 'Squarespace vs Custom Website for Restaurants: The Commission Trap',
    slug: 'squarespace-vs-custom-restaurant-website',
    description:
      'Why PDF menus, slow mobile reservations, and third-party widgets cost restaurants thousands in missed bookings each month.',
    readTime: '6 min read',
  },
  {
    category: 'Hospitality Architecture',
    title: 'Odoo Alternative for Restaurants: ERP Power vs Consumer Dining Experience',
    slug: 'odoo-alternative-restaurants',
    description:
      'Odoo is great for back-of-house inventory and POS, but its website builder creates clunky dining experiences. Why leading venues pair ERP backends with bespoke frontends.',
    readTime: '6 min read',
  },
  {
    category: 'Hospitality Economics',
    title: 'How Much Does a Restaurant Website Cost in the UK?',
    slug: 'restaurant-website-cost-uk',
    description:
      'From budget DIY setups to bespoke hospitality flagships: setup costs, OpenTable vs SevenRooms integrations, photography budgets, and payback periods.',
    readTime: '6 min read',
  },
  {
    category: 'Digital Strategy',
    title: 'Does a Restaurant Still Need a Website If It Has an Active Instagram?',
    slug: 'does-a-restaurant-need-a-website-with-instagram',
    description:
      'The Instagram-only trap: algorithmic suppression, inaccessible menu highlights, zero Google local search visibility, and lost reservation revenue.',
    readTime: '5 min read',
  },
];

export default function InsightsIndexPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>STUDIO JOURNAL · GUIDES &amp; ANALYSIS</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              INSIGHTS &amp; STRATEGY.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              Unfiltered analysis on digital architecture, web design economics, platform comparisons, and commercial performance for founders and operators across the UK and Ireland.
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
                  <Link href={`/insights/${item.slug}`}>
                    {item.title}
                  </Link>
                </h2>
                <p className="font-sans text-stone text-[15px] leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-near-black/10">
                <Link
                  href={`/insights/${item.slug}`}
                  className="text-[13px] font-sans font-semibold tracking-wider uppercase text-near-black group-hover:translate-x-1 transition-transform inline-flex items-center gap-2"
                >
                  <span>Read Full Guide</span>
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
            <SectionLabel>PRODUCTION EXPERIENCES</SectionLabel>
            <h2 className="font-display text-[32px] text-near-black mt-2">
              Prefer to see how our engineering works in practice?
            </h2>
            <p className="font-sans text-stone text-[16px] mt-2">
              Explore our live industry showcases across hospitality, luxury ecommerce, healthcare, and trade sectors.
            </p>
          </div>
          <Link
            href="/industries"
            className="px-8 py-4 bg-near-black text-bone text-[13px] font-semibold tracking-wider uppercase hover:bg-stone transition-colors shrink-0"
          >
            Explore Industry Prototypes →
          </Link>
        </div>
      </section>
    </main>
  );
}
