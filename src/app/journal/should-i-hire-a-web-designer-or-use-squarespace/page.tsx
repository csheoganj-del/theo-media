import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Should I Hire a Web Designer or Use Squarespace? A Decision Framework | TheoMedia',
  description:
    'An objective decision framework for UK and Irish business owners deciding between DIY Squarespace and hiring an independent web designer or studio.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/journal/should-i-hire-a-web-designer-or-use-squarespace',
  },
  openGraph: {
    title: 'Should I Hire a Web Designer or Use Squarespace? | TheoMedia',
    description:
      'An objective decision framework for business owners deciding between DIY site builders and professional web design.',
    url: 'https://www.theomedia.co.uk/journal/should-i-hire-a-web-designer-or-use-squarespace',
    type: 'article',
  },
};

export default function ShouldIHireAWebDesignerOrUseSquarespacePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When is it better to use Squarespace yourself?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Using Squarespace yourself is ideal when you are testing a brand-new business idea with unproven demand, when your total startup budget is under £1,000, or when your business does not rely on local organic search to generate revenue.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is hiring an independent web designer worth the investment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hiring a professional designer or boutique studio is worth the investment when your average customer or project value is high (e.g. trades, clinics, private dining buyouts), where winning even one or two additional clients from search pays for the entire build.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the real time cost of DIY web design for founders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Business owners routinely report spending 30 to 60 hours assembling, troubleshooting, and copywriting their own DIY site. If your billable time is worth £50–£100/hour, the true opportunity cost of a DIY site is £1,500 to £6,000 in diverted founder time.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Should I Hire a Web Designer or Use Squarespace? A Decision Framework',
    description:
      'An objective decision framework for UK business owners deciding between DIY Squarespace and hiring a professional studio.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk',
    },
    datePublished: '2026-02-25T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    mainEntityOfPage: 'https://www.theomedia.co.uk/journal/should-i-hire-a-web-designer-or-use-squarespace',
  };

  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <div className="flex items-center gap-3 text-[12px] font-mono tracking-widest text-stone uppercase mb-4">
            <span>DECISION FRAMEWORK · FOUNDER STRATEGY</span>
            <span>·</span>
            <span>PUBLISHED FEBRUARY 2026</span>
          </div>

          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            Should I Hire a Web Designer or Use Squarespace? A Practical Framework.
          </h1>

          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            Every business owner faces this question at some stage. Doing it yourself on Squarespace costs under £30 a month, while hiring a reputable studio or designer costs between £895 and £5,000+. Here is an objective, mathematical way to decide which path makes sense for your business right now.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Format:</strong> Objective Decision Matrix</div>
            <div><strong>Reading Time:</strong> 7 minutes</div>
            <div><strong>Market:</strong> UK &amp; Ireland</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Criterion 1: Your Average Customer Transaction Value
            </h2>
            <p className="mb-4">
              The single clearest indicator of whether you should hire a professional is your <strong>average customer value</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[20px] text-near-black mb-2">Low-Value Transactions (£10 – £50)</h3>
                <p className="text-stone text-[15px]">
                  If you sell low-margin items or casual consumer products, you need thousands of transactions to break even on a bespoke site. Starting with DIY Squarespace or Shopify is the sensible financial approach.
                </p>
              </div>
              <div className="p-6 bg-charcoal text-bone border border-bone/10">
                <h3 className="font-display text-[20px] text-bone mb-2">High-Value Services (£1,000 – £20,000+)</h3>
                <p className="text-bone/80 text-[15px]">
                  If you are a high-end contractor, private aesthetic doctor, boutique hotelier, or specialist consultant, winning <strong>just one or two extra clients</strong> covers the entire cost of a £1,500–£3,500 professional build.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Criterion 2: The True Opportunity Cost of Founder Time
            </h2>
            <p className="mb-4">
              Squarespace marketing implies that building a website takes an afternoon. In reality, most founders spend <strong>40 to 60 hours</strong> wrestling with column alignment, writing copy, formatting images, configuring domain records, and troubleshooting mobile layouts.
            </p>
            <div className="p-6 bg-ivory border-l-4 border-near-black my-6">
              <p className="font-medium text-near-black mb-2">The Hidden Math of &ldquo;Free&rdquo; DIY</p>
              <p className="text-stone text-[15px]">
                If your time as a director or specialist is worth £60 per hour, spending 50 hours on a DIY website represents <strong>£3,000 in diverted productive labor</strong>. For many founders, hiring an experienced studio is actually the cheaper financial option when opportunity cost is accounted for.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Criterion 3: The Commercial Role of Your Website
            </h2>
            <p className="mb-4">
              Ask yourself honestly: what must this website accomplish?
            </p>
            <ul className="space-y-3 font-sans text-[15px] text-stone mb-6">
              <li><strong>If it is an online brochure:</strong> You already have strong word-of-mouth referrals and simply need a clean page where people can find your telephone number. Squarespace is completely sufficient.</li>
              <li><strong>If it is an acquisition engine:</strong> You need to rank for commercial search terms, outshine established regional competitors, build immediate trust for £5,000+ quotes, or capture direct bookings without platform commissions. In this case, a bespoke studio build is an essential commercial investment.</li>
            </ul>
          </section>

          {/* Decision Checklist */}
          <section className="p-8 bg-ivory border border-near-black/10 my-8">
            <h2 className="font-display text-[24px] text-near-black mb-4">Summary Decision Checklist</h2>
            <div className="space-y-4 text-[15px] text-stone">
              <div className="flex items-start gap-3">
                <span className="text-near-black font-bold">Choose Squarespace if:</span>
                <span>You have under £800 total budget, your concept is unproven, and you have time to learn the editor.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-near-black font-bold">Hire TheoMedia if:</span>
                <span>Your business has proven revenue, high customer lifetime value, and you want a 100% owned digital flagship with zero ongoing platform lock-in.</span>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>GET AN HONEST EVALUATION</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Unsure which approach is right for your stage?
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            We will tell you honestly if Squarespace is better suited to your current scale, or provide a fixed-price proposal if custom architecture is justified.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors"
            >
              Start Free Consultation →
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 border border-bone/30 text-bone text-[12px] font-semibold tracking-wider uppercase hover:border-bone transition-colors"
            >
              View Pricing Tiers (£895+)
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
