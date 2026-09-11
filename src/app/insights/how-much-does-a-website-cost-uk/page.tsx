import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'How Much Does a Website Cost in the UK? (2026 Honest Pricing Guide)',
  description:
    'A realistic, transparent breakdown of web design pricing across the UK in 2026. Compare DIY builders, freelancers, boutique studios (£895–£4,850+), and traditional agencies (£10k+).',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/insights/how-much-does-a-website-cost-uk',
  },
  openGraph: {
    title: 'How Much Does a Website Cost in the UK? (2026 Honest Guide) | TheoMedia',
    description:
      'Transparent analysis of website costs in the UK: DIY, freelancers, boutique studios, and large agencies.',
    url: 'https://www.theomedia.co.uk/insights/how-much-does-a-website-cost-uk',
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
          text: 'In 2026, a professional small business website in the UK typically costs between £895 and £3,500 from an independent studio. DIY website builders cost £15 to £35 per month, while traditional marketing agencies quote between £5,000 and £20,000 for equivalent functionality.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the hidden ongoing costs of owning a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The mandatory ongoing costs are a domain name (£10–£20 per year) and hosting. On modern serverless stacks like Next.js on Vercel, hosting is typically £0 to £20 per month. Watch out for agencies charging £150+ monthly retainer fees for simple security updates on outdated WordPress sites.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do website quotes vary so drastically between providers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The variation comes down to code ownership and overhead. A £300 freelancer is usually installing a £40 WordPress theme with pre-made demo content. A £15,000 agency has high office overheads, account managers, and sales reps. A boutique specialist studio like TheoMedia (£895–£4,850) delivers bespoke custom code and founder-level design without enterprise agency markups.',
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
    mainEntityOfPage: 'https://www.theomedia.co.uk/insights/how-much-does-a-website-cost-uk',
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
            Ask five web design providers for a quote in the UK, and you will receive quotes ranging from £300 to £25,000 for what appears to be the exact same requirement. Here is an honest, transparent breakdown of what web design really costs, what you get at each price point, and where money is routinely wasted.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Currency:</strong> GBP (£) &amp; EUR (€)</div>
            <div><strong>Reading Time:</strong> 7 minutes</div>
            <div><strong>Scope:</strong> UK &amp; Ireland Market</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          {/* Tiers */}
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-6">
              The 4 Distinct Tiers of Web Design in the UK
            </h2>

            <div className="space-y-8">
              <div className="p-8 bg-ivory border border-near-black/10">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-[22px] text-near-black">Tier 1: DIY Site Builders (Wix, Squarespace, Shopify)</h3>
                  <span className="font-mono text-[14px] text-stone">£15 – £35 / month</span>
                </div>
                <p className="text-stone text-[15px] mb-4">
                  <strong>Best for:</strong> Early-stage startups, hobby projects, and non-commercial portfolios with zero upfront capital.
                </p>
                <p className="text-stone text-[15px]">
                  <strong>The Reality:</strong> You do 100% of the work yourself. While the monthly cost seems low, you pay with dozens of hours of your own time. Mobile responsiveness often breaks, page speeds are mediocre, and you never own your software.
                </p>
              </div>

              <div className="p-8 bg-ivory border border-near-black/10">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-[22px] text-near-black">Tier 2: Freelance Marketplace / Budget Developers</h3>
                  <span className="font-mono text-[14px] text-stone">£300 – £800 one-off</span>
                </div>
                <p className="text-stone text-[15px] mb-4">
                  <strong>Best for:</strong> Tight-budget businesses who simply need an online placeholder to show suppliers.
                </p>
                <p className="text-stone text-[15px]">
                  <strong>The Reality:</strong> Developers in this tier almost always purchase a £40 off-the-shelf WordPress or Elementor theme and swap in your logo. Code is usually bloated, technical SEO is non-existent, and after launch, the freelancer frequently disappears when maintenance issues arise.
                </p>
              </div>

              <div className="p-8 bg-ivory border-2 border-near-black">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-[22px] text-near-black">Tier 3: Boutique Independent Studio (TheoMedia)</h3>
                  <span className="font-mono text-[14px] text-near-black font-semibold">£895 – £4,850 one-off</span>
                </div>
                <p className="text-stone text-[15px] mb-4">
                  <strong>Best for:</strong> High-ticket services, ambitious restaurants, healthcare practices, trades, and luxury DTC brands wanting bespoke digital equity.
                </p>
                <p className="text-stone text-[15px]">
                  <strong>The Reality:</strong> You work directly with a founder-level designer and engineer. Websites are custom-coded in modern stacks (Next.js, Tailwind), passing Google Core Web Vitals with 95+ scores. Full source code ownership, zero monthly platform lock-in, and tailored commercial conversion architecture.
                </p>
              </div>

              <div className="p-8 bg-ivory border border-near-black/10">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-[22px] text-near-black">Tier 4: Traditional Full-Service Agencies</h3>
                  <span className="font-mono text-[14px] text-stone">£10,000 – £50,000+</span>
                </div>
                <p className="text-stone text-[15px] mb-4">
                  <strong>Best for:</strong> FTSE 250 enterprises, government bodies, or multi-national corporations requiring committee sign-offs.
                </p>
                <p className="text-stone text-[15px]">
                  <strong>The Reality:</strong> You are paying for prime city-centre office space, account managers, project managers, and elaborate 6-week &ldquo;discovery workshops&rdquo;. The actual code is often built by the same level of developers found in boutique studios.
                </p>
              </div>
            </div>
          </section>

          {/* Ongoing Costs */}
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              What Are the Real Ongoing Maintenance Costs?
            </h2>
            <p className="mb-4">
              A major complaint among UK business owners is being blindsided by hidden fees after a website launches. Here are the genuine ongoing overheads:
            </p>
            <ul className="space-y-3 list-disc pl-6 text-stone mb-6">
              <li><strong>Domain Name (.co.uk or .ie):</strong> £8 to £25 per year. Paid directly to Nominet or your domain registrar.</li>
              <li><strong>Modern Serverless Hosting:</strong> £0 to £20 per month (e.g. Vercel, Netlify, Cloudflare). For 90% of small-to-medium businesses, high-speed hosting costs almost nothing.</li>
              <li><strong>Content Management &amp; Database:</strong> Many modern headless CMS platforms (Sanity, Strapi, Decap) have generous free or low-cost tiers for single sites.</li>
              <li><strong>Legacy Agency Retainers:</strong> Traditional agencies often insist on £150–£500/month &ldquo;maintenance retainers&rdquo; to patch fragile WordPress plugins. With bespoke static Next.js code, there are no vulnerable databases or plugins to break, eliminating compulsory maintenance retainers.</li>
            </ul>
          </section>

          {/* ROI Framework */}
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              How to Calculate Your Return on Investment (ROI)
            </h2>
            <p className="mb-4">
              Never view a website as a graphic design expense. View it as an automated commercial acquisition channel.
            </p>
            <div className="p-6 bg-ivory border-l-4 border-near-black my-6">
              <p className="font-medium text-near-black mb-2">Example: Architectural Joinery or High-End Contractor</p>
              <p className="text-stone text-[15px]">
                If your average project value is £8,500 with a 35% margin (£2,975 profit per job), a bespoke TheoMedia website costing £2,450 achieves complete payback on the <strong>very first client</strong> it captures from organic search or referrals. Every subsequent lead is pure commercial profit.
              </p>
            </div>
          </section>
        </div>

        {/* Pricing link */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>TRANSPARENT STUDIO PRICING</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Explore our fixed-fee investment tiers.
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            We publish all our pricing openly. No hidden sales calls or surprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors"
            >
              View Pricing Tiers →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-bone/30 text-bone text-[12px] font-semibold tracking-wider uppercase hover:border-bone transition-colors"
            >
              Get a Fixed-Price Proposal
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
