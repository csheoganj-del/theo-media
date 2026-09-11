import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Custom Business Software & Web Applications UK & Ireland | TheoMedia',
  description:
    'Custom web applications, client portals, booking systems, and operational software built for UK and Irish businesses. 100% client-owned code without per-seat software taxes.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/business-software',
  },
  openGraph: {
    title: 'Custom Business Software & Web Applications UK & Ireland | TheoMedia',
    description:
      'Custom web applications, client portals, booking systems, and operational software built for UK and Irish businesses.',
    url: 'https://www.theomedia.co.uk/business-software',
    type: 'website',
  },
};

const solutions = [
  {
    title: 'Client Portals & Dashboards',
    description:
      'Secure, branded environments for your customers to review project progress, download invoices, approve drafts, and exchange sensitive documents.',
  },
  {
    title: 'Custom Booking & Scheduling Engines',
    description:
      'Multi-staff, multi-location reservation workflows integrated directly into your operations without per-booking fees or third-party iframe redirects.',
  },
  {
    title: 'Internal Workflow Automation',
    description:
      'Replace messy spreadsheets with dedicated web tools that synchronize enquiries, manage project pipelines, and streamline staff tasks.',
  },
  {
    title: 'API & ERP Integration',
    description:
      'Connect modern frontends to existing backend systems (Stripe, Xero, Odoo, Lightspeed, Cliniko) so data flows effortlessly across your business.',
  },
  {
    title: 'Headless Commerce Architecture',
    description:
      'Fast, bespoke storefronts with customized product configurators, multi-currency checkouts, and clean database synchronization.',
  },
  {
    title: '100% Intellectual Property Ownership',
    description:
      'Full source code transfer. You are never trapped in proprietary software retainers or per-seat licensing price hikes.',
  },
];

export default function BusinessSoftwarePage() {
  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Custom Business Software & Web Applications',
            provider: {
              '@type': 'Organization',
              name: 'TheoMedia',
              url: 'https://www.theomedia.co.uk',
            },
            areaServed: [
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'Ireland' },
            ],
            description:
              'Custom business software, web applications, client portals and workflow automation for businesses in the UK and Ireland.',
          }),
        }}
      />

      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>STUDIO CAPABILITY · SOFTWARE &amp; SYSTEMS</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              BUSINESS SOFTWARE, BUILT LIKE PRODUCTS.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              When off-the-shelf SaaS apps force your team into rigid workflows and levy endless monthly seat fees, custom software gives you total operational control.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
              >
                Discuss a Software Project →
              </Link>
              <Link
                href="/journal/odoo-website-alternative-restaurants"
                className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/80 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
              >
                Read Architectural Case Note ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>TAILORED OPERATIONAL ARCHITECTURE</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Software built around how your business actually works.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="p-8 bg-ivory border border-near-black/10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-stone uppercase block mb-3">
                  System 0{idx + 1}
                </span>
                <h3 className="font-display text-[22px] text-near-black mb-3">{item.title}</h3>
                <p className="font-sans text-stone text-[15px] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture note */}
      <section className="py-20 md:py-28 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>DECOUPLED SYSTEMS</SectionLabel>
            <h2 className="text-editorial-md text-near-black mt-4 mb-6">
              Connect your front-of-house to robust backends.
            </h2>
            <p className="font-sans text-stone text-[16px] leading-relaxed mb-6">
              You don&apos;t need to rip out your existing accounting or POS platform. We frequently build high-performance Next.js interfaces that talk directly to backend databases, Stripe billing, or ERP systems like Odoo or Lightspeed via secure APIs.
            </p>
            <Link
              href="/journal/odoo-website-alternative-restaurants"
              className="text-[13px] font-sans font-semibold tracking-wider uppercase text-near-black border-b border-near-black pb-1 hover:text-stone transition-colors"
            >
              Read: Why Venues Decouple ERPs from Web Frontends →
            </Link>
          </div>
          <div className="bg-charcoal text-bone p-8 md:p-12 border border-bone/10">
            <h3 className="font-display text-[24px] text-bone mb-6">Tech Stack &amp; Standards</h3>
            <ul className="space-y-4 font-sans text-[15px] text-bone/80">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>Next.js, TypeScript, React, Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>PostgreSQL, Supabase, Redis edge caching</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>Stripe Billing, Invoicing &amp; Connect marketplaces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">✓</span>
                <span>100% full source code ownership on handoff</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel dark>ENGINEER YOUR TOOL</SectionLabel>
          <h2 className="text-editorial-lg text-bone mt-6 mb-8">
            Build software that powers your business.
          </h2>
          <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
            Book a direct technical architecture call with our studio founder. We will discuss your workflows, APIs, and project feasibility.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
          >
            Start Software Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
