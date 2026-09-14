import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import JsonLd from '@/components/seo/JsonLd';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'How to Choose a Web Designer in the UK (2026 Checklist)',
  description:
    'A practical UK checklist for hiring a web designer: portfolio quality, code ownership, pricing, SEO, timelines and the questions that separate studios from template resellers.',
  path: '/journal/how-to-choose-a-web-designer-uk',
  type: 'article',
});

const faqs = [
  {
    question: 'Should I hire a freelancer, agency or boutique studio in the UK?',
    answer:
      'Freelancers suit tiny budgets if you can manage risk. Large agencies suit enterprises that need account teams. A boutique studio is the usual best fit for independent UK businesses: senior people, fixed prices, owned code, no junior relay.',
  },
  {
    question: 'What should I ask a web designer before signing?',
    answer:
      'Who writes the code? Do I own the repository? What is excluded from the quote? How is SEO handled? What happens after launch? If those answers are vague, keep looking.',
  },
];

export default function HowToChooseWebDesignerPage() {
  return (
    <div className="bg-bone min-h-screen pt-24 text-near-black">
      <JsonLd
        data={[
          articleJsonLd({
            headline: 'How to Choose a Web Designer in the UK (2026 Checklist)',
            description: metadata.description as string,
            path: '/journal/how-to-choose-a-web-designer-uk',
            datePublished: '2026-09-14T09:00:00+00:00',
          }),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Journal', path: '/journal' },
            { name: 'How to Choose a Web Designer', path: '/journal/how-to-choose-a-web-designer-uk' },
          ]),
        ]}
      />
      <article className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <div className="flex items-center gap-3 text-[12px] font-mono tracking-widest text-stone uppercase mb-4">
            <span>BUYER CHECKLIST</span>
            <span>·</span>
            <span>UPDATED SEPTEMBER 2026</span>
          </div>
          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            How to Choose a Web Designer in the UK.
          </h1>
          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            Most UK businesses hire a web designer the wrong way: they compare mockups, ignore ownership, and sign a quote that hides monthly lock-in. Use this checklist before you pay a deposit.
          </p>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">1. Look at live websites, not Dribbble shots</h2>
            <p>
              Ask for production URLs. Open them on your phone. If they are slow, use a PDF menu, or look like a ThemeForest template, that is the quality you will receive. TheoMedia publishes live websites and case studies for exactly this reason — see{' '}
              <Link href="/work" className="underline">selected work</Link>.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">2. Demand source-code ownership in writing</h2>
            <p>
              If the designer hosts the site on a proprietary account and will not give you the repo, you are renting. At launch you should receive domain control, hosting access and a GitHub (or equivalent) repository. That is non-negotiable for a commercial site.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">3. Separate design from a page builder</h2>
            <p>
              “Custom design” on Elementor or Squarespace is still a rented platform. Ask what the site is built with. Next.js, modern static generation and a proper CMS is a different product from a £49 theme with your logo swapped in.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">4. Price the three-year cost, not the deposit</h2>
            <p>
              A cheap build with a £150/month retainer is not cheap.{' '}
              <Link href="/journal/how-much-does-a-website-cost-uk" className="underline">
                UK website pricing
              </Link>{' '}
              ranges from DIY subscriptions to £20k agencies. Independent studios quoting £895–£4,995 with no lock-in are usually the honest middle.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">5. Ask who you will actually speak to</h2>
            <p>
              If sales hands you to a junior after the contract, quality drops. Founder-led studios keep the same people on discovery, design and engineering. That is slower to scale and better for a £2k–£10k project.
            </p>
          </section>
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">6. Confirm SEO is in the build, not a later upsell</h2>
            <p>
              Titles, H1, canonicals, schema, sitemap, internal links and Core Web Vitals should be in the statement of work. “We can add SEO later” means it was never designed in. See our{' '}
              <Link href="/journal/website-seo-for-small-business-uk" className="underline">
                small-business SEO checklist
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>WORK WITH THEOMEDIA</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            A studio that publishes prices and owns the outcome.
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            Fixed packages from £895 / €1,050. 100% client-owned. UK and Ireland.
          </p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors">
            Start a Project →
          </Link>
        </div>
      </article>
    </div>
  );
}
