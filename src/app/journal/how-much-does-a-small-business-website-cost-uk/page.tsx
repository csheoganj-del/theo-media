import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How Much Does a Small Business Website Cost in the UK in 2026? | TheoMedia',
  description:
    'An honest, realistic guide to small business website costs in the UK in 2026. Explore pricing factors, DIY vs freelancers vs studios, and what £500 realistically buys.',
  alternates: {
    canonical: 'https://theomedia.co.uk/journal/how-much-does-a-small-business-website-cost-uk',
  },
  openGraph: {
    title: 'How Much Does a Small Business Website Cost in the UK in 2026? | TheoMedia',
    description:
      'Transparent analysis of small business web design costs across the UK: templates, freelancers, boutique studios, and agency overheads.',
    url: 'https://theomedia.co.uk/journal/how-much-does-a-small-business-website-cost-uk',
    type: 'article',
    siteName: 'TheoMedia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How Much Does a Small Business Website Cost in the UK 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does a Small Business Website Cost in the UK in 2026? | TheoMedia',
    description:
      'Transparent analysis of small business website costs across the UK in 2026.',
    images: ['/og-image.jpg'],
  },
};

export default function SmallBusinessWebsiteCostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Should a Small Business Website Cost in the UK?',
    description:
      'A candid, factual examination of small business website design costs in the UK in 2026, comparing freelancers, agencies, DIY platforms, and bespoke studio builds.',
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    datePublished: '2026-03-01T09:00:00+00:00',
    dateModified: '2026-03-10T12:00:00+00:00',
    mainEntityOfPage:
      'https://theomedia.co.uk/journal/how-much-does-a-small-business-website-cost-uk',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much should a small business website cost in the UK in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most professional small business websites in the UK cost between £800 and £3,500. DIY builders require £15–£35 per month plus significant personal time, freelancers range from £400 to £2,000, and traditional regional agencies start from £5,000 to £15,000.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you get a good small business website for £500 in the UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At around £500, most providers rely on generic off-the-shelf templates or outsourced offshore assembly. However, focused studio initiatives like TheoMedia’s Community Build Programme offer bespoke, founder-engineered design at £495 by strictly limiting monthly capacity and scoping projects carefully.',
        },
      },
    ],
  };

  return (
    <main className="bg-bone min-h-screen pt-28 md:pt-36 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <FadeIn>
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-stone uppercase mb-4">
            <SectionLabel>COMMERCIAL RESEARCH</SectionLabel>
            <span>·</span>
            <span>UPDATED 2026</span>
          </div>

          <h1 className="font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.06] text-near-black uppercase mb-8">
            How much should a small business website cost in the UK?
          </h1>

          <p className="font-sans text-[18px] md:text-[21px] text-charcoal/85 leading-relaxed mb-12">
            Pricing for small business website design in the UK can feel bewildering. Request
            quotes from five different web design providers, and you may receive numbers ranging
            from £250 to £12,000 for what seems to be the same brief. This guide breaks down the
            genuine commercial drivers behind web design costs, helps you compare your options,
            and clarifies what different budgets realistically deliver.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div>
              <strong>Topic:</strong> UK Web Design Pricing
            </div>
            <div>
              <strong>Reading Time:</strong> 8 minutes
            </div>
            <div>
              <strong>Market:</strong> UK &amp; Ireland
            </div>
          </div>
        </FadeIn>

        <div className="prose prose-stone max-w-none font-sans text-[16px] md:text-[17px] text-charcoal/90 leading-relaxed space-y-8">
          <FadeIn>
            <h2 className="font-display text-[26px] md:text-[34px] text-near-black uppercase mt-12 mb-4">
              The Key Factors That Determine Website Pricing
            </h2>
            <p>
              When a designer, developer, or studio quotes on a project, their price is not pulled
              out of thin air. It is determined by several core variables:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-charcoal/80">
              <li>
                <strong>Number of core pages:</strong> A single-page landing site requires far less
                architectural structuring than an 8-page website with case studies, service silos,
                and comprehensive FAQs.
              </li>
              <li>
                <strong>Bespoke vs off-the-shelf templates:</strong> Inserting copy and a logo into
                a pre-built WordPress theme or Squarespace template takes a fraction of the time
                required to engineer bespoke, mobile-first typography and custom layouts from scratch.
              </li>
              <li>
                <strong>Copywriting and content readiness:</strong> If you supply polished text,
                high-resolution photography, and clear brand assets, the build moves quickly. If the
                agency must draft copy or organize photo libraries, costs rise accordingly.
              </li>
              <li>
                <strong>Specialized functionality:</strong> E-commerce stores with SKU variations,
                real-time table reservation systems, patient intake forms, or bespoke client portals
                require backend logic, database structures, and payment gateways that naturally push
                costs beyond basic brochure sites.
              </li>
              <li>
                <strong>Technical SEO and performance:</strong> A website that loads in under 500ms
                and features semantic heading hierarchy, Open Graph metadata, schema markup, and
                valid sitemaps requires disciplined technical engineering.
              </li>
              <li>
                <strong>Hosting, maintenance, and support:</strong> Many legacy agencies charge
                mandatory monthly retainers (£75–£200/month) simply to update fragile WordPress
                plugins. Modern serverless architectures eliminate much of this overhead.
              </li>
            </ul>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-[26px] md:text-[34px] text-near-black uppercase mt-12 mb-4">
              Comparing Provider Tiers in the UK
            </h2>
            <p>
              Depending on who you hire, you will encounter drastically different cost ranges and
              trade-offs:
            </p>

            <div className="space-y-6 my-6">
              <div className="p-6 bg-ivory border border-near-black/10 rounded-sm">
                <h3 className="font-display text-xl text-near-black uppercase mb-1">
                  1. DIY Website Builders (Squarespace, Wix, Shopify)
                </h3>
                <p className="text-[14px] text-stone mb-2">
                  <strong>Estimated Cost:</strong> £15 – £45 per month + your time
                </p>
                <p className="text-[15px] text-charcoal/80">
                  Ideal for hobby projects or brand new ventures with zero capital. The trade-off is
                  that you must design, write, troubleshoot, and optimize everything yourself, often
                  resulting in generic looks and sub-optimal mobile conversion.
                </p>
              </div>

              <div className="p-6 bg-ivory border border-near-black/10 rounded-sm">
                <h3 className="font-display text-xl text-near-black uppercase mb-1">
                  2. Freelance Web Designers
                </h3>
                <p className="text-[14px] text-stone mb-2">
                  <strong>Estimated Cost:</strong> £400 – £2,500
                </p>
                <p className="text-[15px] text-charcoal/80">
                  Freelancers offer flexibility and lower rates. Quality varies dramatically: some
                  are exceptional specialists, while others resell bloated theme templates with
                  limited technical longevity and uneven ongoing support.
                </p>
              </div>

              <div className="p-6 bg-ivory border border-near-black/10 rounded-sm">
                <h3 className="font-display text-xl text-near-black uppercase mb-1">
                  3. Boutique Digital Studios
                </h3>
                <p className="text-[14px] text-stone mb-2">
                  <strong>Estimated Cost:</strong> £895 – £4,500
                </p>
                <p className="text-[15px] text-charcoal/80">
                  Focused studios provide direct founder collaboration, high-calibre visual design,
                  and modern web standards without passing on corporate agency overheads like sales
                  commissions or lavish city offices.
                </p>
              </div>

              <div className="p-6 bg-ivory border border-near-black/10 rounded-sm">
                <h3 className="font-display text-xl text-near-black uppercase mb-1">
                  4. Traditional Creative Agencies
                </h3>
                <p className="text-[14px] text-stone mb-2">
                  <strong>Estimated Cost:</strong> £6,000 – £20,000+
                </p>
                <p className="text-[15px] text-charcoal/80">
                  Traditional agencies bring large multi-disciplinary teams (account managers, copy
                  leads, junior designers). For a small independent business, much of that fee pays
                  for agency management rather than direct code craftsmanship.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* DEDICATED SECTION: WHAT CAN YOU REALISTICALLY GET FOR AROUND £500? */}
          <FadeIn>
            <div className="my-12 p-8 bg-ivory border-2 border-near-black/15 rounded-sm">
              <h2 className="font-display text-[26px] md:text-[32px] text-near-black uppercase mb-4">
                What can you realistically get for around £500?
              </h2>
              <div className="space-y-4 text-[15px] md:text-[16px] text-charcoal/85 leading-relaxed">
                <p>
                  If you search for <em>affordable website design</em>, <em>budget website design</em>,
                  or even <em>cheap website design UK</em>, you will see numerous £300 to £500
                  offers. It is essential to understand how providers operate at this price point.
                </p>
                <p>
                  At around £500, most commercial providers use off-the-shelf templates or highly
                  standardised assembly-line processes. They install a standard theme, insert your
                  text into pre-existing demo boxes, and provide little to no strategic attention to
                  how customers actually navigate your services.
                </p>
                <p>
                  <strong>TheoMedia’s Community Build Programme</strong> approaches this
                  differently. Instead of running an assembly line or spending all of our acquisition
                  budget on advertising, our studio opens a small number of lower-cost projects each
                  month during a three-month pilot.
                </p>
                <p>
                  By strictly capping capacity at up to three independent businesses per month and
                  working within a clearly defined scope, we can deliver genuine, bespoke
                  mobile-first design, clean technical SEO foundations, and 12 months of hosting for a
                  fixed £495 programme rate.
                </p>
                <div className="pt-4">
                  <Link
                    href="/community-build"
                    className="inline-flex items-center gap-2 font-sans text-[13px] font-semibold tracking-wider uppercase text-near-black hover:text-warm-accent underline underline-offset-4 transition-colors"
                  >
                    <span>Explore TheoMedia’s Community Build Programme</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-[26px] md:text-[34px] text-near-black uppercase mt-12 mb-4">
              Red Flags to Watch For in Low-Cost Website Quotes
            </h2>
            <p>
              When evaluating affordable web design options, protect your investment by asking
              direct questions before signing any agreement:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-charcoal/80">
              <li>
                <strong>Hidden monthly tie-ins:</strong> Ensure the initial low fee does not lock
                you into an unbreakable 24-month contract at £100/month.
              </li>
              <li>
                <strong>Code and domain ownership:</strong> Clarify that you own the domain and that
                the code is not held hostage on a proprietary, closed-source system.
              </li>
              <li>
                <strong>Mobile responsiveness:</strong> Verify that the quote includes bespoke
                testing on actual mobile devices, not just a desktop screen scaled down.
              </li>
              <li>
                <strong>Realistic scoping:</strong> Beware of providers claiming to build complex
                custom booking engines or multi-currency ecommerce stores for £400; such projects
                invariably fail or trigger surprise invoices midway through.
              </li>
            </ul>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-[26px] md:text-[34px] text-near-black uppercase mt-12 mb-4">
              Making the Right Choice for Your Business
            </h2>
            <p>
              A website is not an artistic indulgence; it is a customer acquisition instrument. For
              independent trades, clinics, hospitality spaces, and professional services, a clean,
              fast, and trustworthy website pays for itself repeatedly by turning casual visitors
              into booked appointments and qualified calls.
            </p>
            <p>
              Take the time to review an agency’s live work. Inspect how their websites behave on
              your own smartphone, and check whether they communicate transparently before you
              commit.
            </p>

            <div className="mt-12 pt-8 border-t border-near-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl text-near-black uppercase mb-1">
                  Ready to discuss your project?
                </h3>
                <p className="text-[14px] text-stone">
                  Browse our portfolio or apply for the Community Build Programme.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/community-build"
                  className="px-6 py-3 bg-near-black text-bone hover:bg-charcoal text-[12px] font-sans font-semibold tracking-wider uppercase transition-colors rounded-sm"
                >
                  Community Build (£495)
                </Link>
                <Link
                  href="/work"
                  className="px-6 py-3 border border-near-black/20 text-charcoal hover:border-near-black text-[12px] font-sans font-semibold tracking-wider uppercase transition-colors rounded-sm"
                >
                  Selected Work
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-stone/30 text-stone hover:text-near-black text-[12px] font-sans font-medium tracking-wider uppercase transition-colors rounded-sm"
                >
                  Contact Studio
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </article>
    </main>
  );
}
