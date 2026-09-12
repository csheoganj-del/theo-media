import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'How Much Does a Website Cost in the UK? (2026 Honest Pricing Guide)',
  description:
    'A realistic, transparent breakdown of web design pricing across the UK in 2026. Compare DIY builders, freelancers, boutique studios (£895–£4,995+), and traditional agencies (£10k+).',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/journal/how-much-does-a-website-cost-uk',
  },
  openGraph: {
    title: 'How Much Does a Website Cost in the UK? (2026 Honest Guide) | TheoMedia',
    description:
      'Transparent analysis of website costs in the UK: DIY, freelancers, boutique studios, and large agencies.',
    url: 'https://www.theomedia.co.uk/journal/how-much-does-a-website-cost-uk',
    type: 'article',
  },
};

export default function HowMuchDoesAWebsiteCostUKPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the average cost of a small business website in the UK in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In 2026, a professional small business website in the UK typically costs between £895 and £3,500 from an independent boutique studio. DIY website builders cost £15 to £35 per month, while traditional creative agencies quote between £5,000 and £20,000+ for equivalent commercial deliverables.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the genuine ongoing costs of owning a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The mandatory ongoing costs are a domain name (£10–£25 per year) and hosting. On modern serverless stacks like Next.js on Vercel, hosting is typically £0 to £20 per month for standard traffic. Unlike legacy WordPress agencies that charge £150+ monthly retainers for plugin security patches, clean custom code eliminates compulsory monthly maintenance fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do web design quotes vary so widely between providers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Price variation comes down to code ownership and overhead. A £300 freelancer often installs a £40 off-the-shelf WordPress theme. A £15,000 agency has city-centre offices, account managers, and sales overheads. A boutique studio like TheoMedia (£895–£4,995) delivers bespoke custom code and direct founder collaboration without corporate agency markups.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does a Website Cost in the UK? (2026 Honest Pricing Guide)',
    description:
      'A realistic, transparent breakdown of web design pricing across the UK in 2026. Compare DIY builders, freelancers, boutique studios, and agencies.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk',
    },
    datePublished: '2026-01-20T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    mainEntityOfPage: 'https://www.theomedia.co.uk/journal/how-much-does-a-website-cost-uk',
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
            <span>COMMERCIAL BUYER GUIDE</span>
            <span>·</span>
            <span>UPDATED MARCH 2026</span>
          </div>

          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            How Much Does a Website Cost in the UK? (2026 Honest Guide).
          </h1>

          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            Ask five web design providers for a quote in the UK, and you will receive estimates ranging from £300 to £25,000 for what appears to be the exact same brief. Here is an honest, transparent breakdown of what web design really costs, what you receive at each tier, and where budgets are routinely misallocated.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Currency:</strong> GBP (£) &amp; EUR (€)</div>
            <div><strong>Reading Time:</strong> 7 minutes</div>
            <div><strong>Scope:</strong> UK &amp; Ireland Market</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-6">
              The 4 Distinct Tiers of Web Design in the UK
            </h2>

            <div className="space-y-8">
              <div className="p-8 bg-ivory border border-near-black/10">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-[22px] text-near-black">Tier 1: DIY Site Builders (Squarespace, Wix, Shopify)</h3>
                  <span className="font-mono text-[14px] text-stone">£15 – £35 / month</span>
                </div>
                <p className="text-stone text-[15px] mb-4">
                  <strong>Best for:</strong> Early-stage startups, hobby ventures, and non-commercial portfolios with zero upfront capital.
                </p>
                <p className="text-stone text-[15px]">
                  <strong>The Reality:</strong> You do 100% of the work yourself. While the monthly cost seems low, you pay with dozens of hours of your own time. Mobile responsiveness often requires manual tinkering, and you never own the underlying code.
                </p>
              </div>

              <div className="p-8 bg-ivory border border-near-black/10">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-[22px] text-near-black">Tier 2: Freelance Marketplace / Budget Developers</h3>
                  <span className="font-mono text-[14px] text-stone">£300 – £800 one-off</span>
                </div>
                <p className="text-stone text-[15px] mb-4">
                  <strong>Best for:</strong> Micro-businesses that simply need an online placeholder to show suppliers or trade credit lines.
                </p>
                <p className="text-stone text-[15px]">
                  <strong>The Reality:</strong> Developers in this tier almost always purchase a pre-made WordPress theme and swap in your logo. Code is usually heavy, structured schema is absent, and ongoing support can be unpredictable once the initial fee is paid.
                </p>
              </div>

              <div className="p-8 bg-ivory border-2 border-near-black">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-[22px] text-near-black">Tier 3: Boutique Independent Studio (TheoMedia)</h3>
                  <span className="font-mono text-[14px] text-near-black font-semibold">£895 – £4,995 one-off</span>
                </div>
                <p className="text-stone text-[15px] mb-4">
                  <strong>Best for:</strong> High-ticket services, restaurants, healthcare clinics, trades, and ambitious brands wanting custom digital equity.
                </p>
                <p className="text-stone text-[15px]">
                  <strong>The Reality:</strong> Direct collaboration with a founder-level designer and engineer. Websites are custom-built in modern stacks (Next.js, Tailwind), achieving 95+ Google Lighthouse performance scores and green Core Web Vitals. Full source code ownership, zero monthly platform lock-in, and conversion-engineered layouts.
                </p>
              </div>

              <div className="p-8 bg-ivory border border-near-black/10">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-[22px] text-near-black">Tier 4: Traditional Full-Service Agencies</h3>
                  <span className="font-mono text-[14px] text-stone">£10,000 – £50,000+</span>
                </div>
                <p className="text-stone text-[15px] mb-4">
                  <strong>Best for:</strong> Large enterprises, national institutions, or corporations requiring multi-layered committee governance.
                </p>
                <p className="text-stone text-[15px]">
                  <strong>The Reality:</strong> You are paying for prime commercial office leases, account managers, and extensive discovery meetings. The actual code is frequently written by mid-level developers working within the agency.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Ongoing Maintenance Costs: What to Expect
            </h2>
            <p className="mb-4">
              Here are the genuine ongoing overheads to expect after launch:
            </p>
            <ul className="space-y-3 list-disc pl-6 text-stone mb-6">
              <li><strong>Domain Name (.co.uk or .ie):</strong> £10 to £25 per year, paid directly to your domain registrar.</li>
              <li><strong>Modern Serverless Edge Hosting:</strong> £0 to £20 per month (e.g. Vercel, Netlify, Cloudflare). For 90% of businesses, high-speed hosting costs almost nothing.</li>
              <li><strong>Maintenance Retainers:</strong> Traditional agencies often mandate £150–£500/month retainers to patch fragile WordPress databases. With clean custom static Next.js code, there are no vulnerable databases or plugins to break, eliminating compulsory maintenance retainers.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              How to Evaluate Return on Investment (ROI)
            </h2>
            <p className="mb-4">
              A website should not be treated as a decorative graphic design expense. It is a commercial acquisition asset.
            </p>
            <div className="p-6 bg-ivory border-l-4 border-near-black my-6">
              <p className="font-medium text-near-black mb-2">Example: Specialist Building Contractor</p>
              <p className="text-stone text-[15px]">
                If your average project value is £7,500 with a 35% margin (£2,625 profit per contract), a bespoke website costing £2,450 achieves complete payback on the <strong>very first client</strong> it captures from search or referral. Every subsequent lead generates pure commercial profit.
              </p>
            </div>
          </section>
        </div>

        {/* Pricing link */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>FIXED-PRICE TRANSPARENCY</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Explore our fixed investment packages.
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            We publish all our pricing openly. No mystery quotes or post-sale surprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors"
            >
              View Pricing Tiers (£895+) →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-bone/30 text-bone text-[12px] font-semibold tracking-wider uppercase hover:border-bone transition-colors"
            >
              Request a Fixed Proposal
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
