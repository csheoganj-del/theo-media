import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Squarespace vs Custom Website: An Honest Technical & Cost Review (UK)',
  description:
    'An objective comparison of Squarespace vs custom Next.js web development for UK businesses. Examine speed, Core Web Vitals, total cost of ownership, SEO limitations, and code portability.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/insights/squarespace-vs-custom-website',
  },
  openGraph: {
    title: 'Squarespace vs Custom Website: An Honest Technical & Cost Review | TheoMedia',
    description:
      'Compare Squarespace and custom Next.js websites on speed, SEO, total cost of ownership, and long-term business scalability.',
    url: 'https://www.theomedia.co.uk/insights/squarespace-vs-custom-website',
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
          text: 'Squarespace covers basic on-page SEO (meta titles, tags, clean URLs). However, its drag-and-drop layout engine injects heavy JavaScript and CSS bloat, often resulting in mediocre Core Web Vitals scores (LCP and CLS) on mobile devices. For competitive commercial keywords where page speed and structural schema matter, custom Next.js builds hold a measurable ranking advantage.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does Squarespace really cost compared to a custom website over 3 years?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Squarespace Business costs approximately £20–£30/month, plus extra fees for scheduling (£12/mo), member areas, transaction fees (3% on Business), and custom plugins. Over 3 years, an operator pays £1,200 to £2,500 without ever owning the underlying software. A bespoke starter website from TheoMedia (£895) requires minimal hosting (£0–£10/mo on Vercel) and is 100% client-owned.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I export my website out of Squarespace if I outgrow it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Squarespace does not allow you to export website code or design assets. You can only export basic blog posts and product XML data. If you leave Squarespace, you must rebuild your entire website from scratch. With a custom Next.js website, you own the entire Git repository and can host it anywhere.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Squarespace vs Custom Website: An Honest Technical & Commercial Review',
    description:
      'An objective comparison of Squarespace vs bespoke Next.js web development for UK businesses examining speed, total cost of ownership, and SEO.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TheoMedia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.theomedia.co.uk/logo.png',
      },
    },
    datePublished: '2026-01-15T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    mainEntityOfPage: 'https://www.theomedia.co.uk/insights/squarespace-vs-custom-website',
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
            Most web design agencies immediately dismiss Squarespace as amateur software. That is disingenuous. Squarespace is an extraordinary tool for specific use cases. However, for ambitious UK and Irish businesses seeking organic search dominance and brand prestige, its structural constraints quickly become costly liabilities.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Author:</strong> TheoMedia Studio Architecture</div>
            <div><strong>Reading Time:</strong> 8 minutes</div>
            <div><strong>Target Audience:</strong> Founders, MDs, Hospitality Operators</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              When Is Squarespace the Correct Choice?
            </h2>
            <p className="mb-4">
              If you are launching a side project, validating a speculative concept with zero budget, or need a clean 2-page personal portfolio in 48 hours without writing a line of code, Squarespace is sensible. It bundles hosting, visual dragging, and SSL certificates into an intuitive subscription.
            </p>
            <p>
              For solo freelancers who do not depend on competitive organic search traffic to win five-figure contracts, paying £20 a month to Squarespace is practical.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Where Squarespace Breaks Down for Commercial Businesses
            </h2>
            <p className="mb-4">
              The friction begins when your business matures. To achieve visual drag-and-drop flexibility for non-coders, Squarespace wraps every element in layers of layout containers, polyfills, and universal scripts.
            </p>
            <div className="p-6 bg-ivory border border-near-black/10 my-6">
              <h3 className="font-display text-[20px] mb-2 text-near-black">1. Mobile Core Web Vitals Latency</h3>
              <p className="text-stone text-[15px]">
                A default Squarespace page regularly requests 2.5MB to 4MB of assets on initial load, triggering significant JavaScript execution delays on mobile devices. Google penalises slow Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) in competitive search rankings.
              </p>
            </div>
            <div className="p-6 bg-ivory border border-near-black/10 my-6">
              <h3 className="font-display text-[20px] mb-2 text-near-black">2. The Subscription &amp; Fee Creep</h3>
              <p className="text-stone text-[15px]">
                Squarespace advertises low headline rates, but commercial features demand upgrades. Custom CSS requires the Business tier. Online booking requires Acuity add-ons. Custom forms require integrations. Furthermore, the Business tier levies an additional 3% transaction fee on sales above standard payment processing.
              </p>
            </div>
            <div className="p-6 bg-ivory border border-near-black/10 my-6">
              <h3 className="font-display text-[20px] mb-2 text-near-black">3. Zero Code Portability &amp; Walled Garden Lock-in</h3>
              <p className="text-stone text-[15px]">
                You can never download or export your website. If Squarespace increases pricing or introduces platform changes that degrade your workflows, you cannot migrate your design. You are renting a closed ecosystem.
              </p>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="my-12">
            <h2 className="font-display text-[28px] text-near-black mb-6">
              Side-by-Side Comparison: Squarespace vs Bespoke Next.js
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-near-black/10 text-[14px]">
                <thead>
                  <tr className="bg-near-black text-bone">
                    <th className="p-4 border border-bone/20 font-semibold">Evaluation Criteria</th>
                    <th className="p-4 border border-bone/20 font-semibold">Squarespace</th>
                    <th className="p-4 border border-bone/20 font-semibold">TheoMedia Custom Next.js</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-near-black/10 bg-ivory">
                  <tr>
                    <td className="p-4 font-semibold text-near-black">Mobile Load Speed</td>
                    <td className="p-4 text-stone">2.8s – 5.5s (heavy JS payload)</td>
                    <td className="p-4 text-near-black font-medium">0.4s – 1.2s (edge pre-rendered)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-near-black">Google Core Web Vitals</td>
                    <td className="p-4 text-stone">Often fails LCP/CLS on mobile</td>
                    <td className="p-4 text-near-black font-medium">Passes (95–100/100 score)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-near-black">Code &amp; Asset Ownership</td>
                    <td className="p-4 text-stone">0% (proprietary closed cloud)</td>
                    <td className="p-4 text-near-black font-medium">100% full source code ownership</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-near-black">3-Year Platform Cost</td>
                    <td className="p-4 text-stone">£1,200 – £2,800+ in subscriptions</td>
                    <td className="p-4 text-near-black font-medium">£0 – £360 (edge hosting tiers)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-near-black">Schema &amp; Technical SEO</td>
                    <td className="p-4 text-stone">Rigid, basic schema only</td>
                    <td className="p-4 text-near-black font-medium">Full granular JSON-LD architecture</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-near-black">Design Distinction</td>
                    <td className="p-4 text-stone">Limited by grid template blocks</td>
                    <td className="p-4 text-near-black font-medium">Tailored typography &amp; brand world</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              The Bottom Line Recommendation
            </h2>
            <p className="mb-4">
              Choose Squarespace if you have under £500 total startup budget and are testing an unproven idea.
            </p>
            <p>
              Invest in a bespoke, custom-built website if your business sells high-ticket services, relies on local organic search to generate weekly inbound enquiries, or wants a distinct brand identity that commands premium pricing.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>READY TO MIGRATE?</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Outgrowing your Squarespace website?
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            We migrate established businesses from proprietary builders to custom Next.js architectures with zero SEO downtime and noticeable conversion uplifts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors"
            >
              Discuss Your Migration →
            </Link>
            <Link
              href="/industries/small-business-website-design"
              className="px-6 py-3 border border-bone/30 text-bone text-[12px] font-semibold tracking-wider uppercase hover:border-bone transition-colors"
            >
              View Fixed-Price Packages
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
