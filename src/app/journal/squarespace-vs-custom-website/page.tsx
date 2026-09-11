import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Squarespace vs Custom Website: An Honest Technical & Commercial Review (UK)',
  description:
    'A balanced, factual comparison of Squarespace vs bespoke web development for UK businesses. Examine speed, total cost of ownership, SEO flexibility, and code portability.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/journal/squarespace-vs-custom-website',
  },
  openGraph: {
    title: 'Squarespace vs Custom Website: An Honest Technical & Commercial Review | TheoMedia',
    description:
      'Compare Squarespace and custom Next.js websites objectively on speed, total cost of ownership, and long-term scalability.',
    url: 'https://www.theomedia.co.uk/journal/squarespace-vs-custom-website',
    type: 'article',
  },
};

export default function SquarespaceVsCustomWebsitePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Squarespace good for SEO in the UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Squarespace covers essential on-page SEO: custom page titles, meta descriptions, SSL, and clean URLs. For local small businesses with low keyword competition, it can rank well. However, its visual layout engine bundles considerable JavaScript and CSS, which can impact mobile Core Web Vitals (LCP and CLS) compared to lean custom static code.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the total cost of Squarespace compare to a custom website over 3 years?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Squarespace Business plans run approximately £20–£30 per month, plus optional scheduling or plugin add-ons. Over 3 years, an operator invests £700 to £1,500+ in ongoing subscription fees. A custom starter website with TheoMedia starts at £895 fixed, with zero mandatory monthly builder fees and free or low-cost edge hosting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you export or transfer a Squarespace website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Squarespace does not provide an export of layout code, design files, or templates. You can export basic blog and product XML data, but if you choose to leave the platform, your frontend design must be rebuilt from scratch.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Squarespace vs Custom Website: An Honest Technical & Commercial Review',
    description:
      'A balanced, factual comparison of Squarespace vs bespoke web development for UK businesses.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk',
    },
    datePublished: '2026-01-15T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    mainEntityOfPage: 'https://www.theomedia.co.uk/journal/squarespace-vs-custom-website',
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
            <span>PLATFORM COMPARISON</span>
            <span>·</span>
            <span>PUBLISHED MARCH 2026</span>
          </div>

          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            Squarespace vs Custom Website: An Honest Technical &amp; Commercial Review.
          </h1>

          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            Too many web agencies dismiss Squarespace out of hand, while software-as-a-service evangelists claim custom code is obsolete. The reality is far more nuanced. Here is an objective, balanced review of where each approach genuinely excels.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Author:</strong> TheoMedia Studio Architecture</div>
            <div><strong>Reading Time:</strong> 8 minutes</div>
            <div><strong>Scope:</strong> UK &amp; Ireland Market</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Where Squarespace Genuinely Excels
            </h2>
            <p className="mb-4">
              Squarespace has earned its popularity for good reason. For early-stage startups, solo freelancers, community groups, and businesses testing a concept on a budget under £500, it provides remarkable convenience:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-stone mb-6">
              <li><strong>All-in-One Package:</strong> Hosting, SSL certificates, software maintenance, and visual editing are bundled into one monthly or annual subscription.</li>
              <li><strong>Tasteful Base Templates:</strong> Even without design experience, a user can assemble a clean, presentable website in a weekend.</li>
              <li><strong>Zero Code Requirement:</strong> Content changes can be made visually by anyone on the team without contacting a developer.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Where Custom Web Development Offers Distinct Advantages
            </h2>
            <p className="mb-4">
              When a business relies on its website as a primary customer acquisition channel or high-ticket brand flag, the constraints of universal site builders become noticeable:
            </p>
            <div className="space-y-6 my-6">
              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[20px] text-near-black mb-2">1. Code Portability &amp; Asset Ownership</h3>
                <p className="text-stone text-[15px]">
                  With Squarespace, you rent the ecosystem. If platform pricing changes or you want to migrate hosts, your layout cannot be exported. With custom Next.js development, you own the entire Git repository, design system, and code forever.
                </p>
              </div>
              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[20px] text-near-black mb-2">2. Performance &amp; Asset Weight</h3>
                <p className="text-stone text-[15px]">
                  Universal drag-and-drop builders must load generic scripts to support every possible layout permutation. A carefully crafted custom website loads only the exact CSS and JavaScript required for that page, typically resulting in leaner payloads and stronger mobile Core Web Vitals.
                </p>
              </div>
              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[20px] text-near-black mb-2">3. Granular Schema &amp; Deep Technical SEO</h3>
                <p className="text-stone text-[15px]">
                  While Squarespace covers standard meta tags and basic schema, custom development allows granular JSON-LD architectures tailored to specific industries (e.g. restaurant menus with allergen tags, clinical practitioner credentials, or multi-location service areas).
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="my-12">
            <h2 className="font-display text-[28px] text-near-black mb-6">
              Objective Comparison Matrix
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-near-black/10 text-[14px]">
                <thead>
                  <tr className="bg-near-black text-bone">
                    <th className="p-4 border border-bone/20 font-semibold">Evaluation Factor</th>
                    <th className="p-4 border border-bone/20 font-semibold">Squarespace</th>
                    <th className="p-4 border border-bone/20 font-semibold">TheoMedia Custom Next.js</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-near-black/10 bg-ivory">
                  <tr>
                    <td className="p-4 font-semibold text-near-black">Best Suited For</td>
                    <td className="p-4 text-stone">Early startups, blogs, low-budget brochures</td>
                    <td className="p-4 text-near-black">Ambitious brands, restaurants, clinics, trades</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-near-black">Upfront Investment</td>
                    <td className="p-4 text-stone">Very low (£0 – £30/mo DIY)</td>
                    <td className="p-4 text-near-black">Fixed investment (£895 – £4,850+)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-near-black">3-Year Ongoing Cost</td>
                    <td className="p-4 text-stone">£720 – £1,800+ in mandatory subscriptions</td>
                    <td className="p-4 text-near-black">£0 – £360 (edge serverless hosting)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-near-black">Code Ownership</td>
                    <td className="p-4 text-stone">0% (proprietary closed cloud)</td>
                    <td className="p-4 text-near-black">100% full source code ownership</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-near-black">Brand Uniqueness</td>
                    <td className="p-4 text-stone">Constrained by template layout grids</td>
                    <td className="p-4 text-near-black">Bespoke typography &amp; art direction</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Our Recommendation
            </h2>
            <p className="mb-4">
              If your business is in its earliest validation phase with unpredictable cash flow, start on Squarespace. It allows you to prove your offer without major upfront capital.
            </p>
            <p>
              When your business reaches a stage where brand credibility, search visibility, and customer acquisition volume drive substantial revenue, investing in a custom-engineered digital flagship is a proven commercial decision.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>DISCUSS YOUR MIGRATION</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Considering moving beyond a site builder?
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            We help ambitious businesses migrate to custom Next.js architectures with seamless SEO continuity and transparent fixed pricing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors"
            >
              Start Consultation →
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 border border-bone/30 text-bone text-[12px] font-semibold tracking-wider uppercase hover:border-bone transition-colors"
            >
              View Fixed Pricing (£895+)
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
