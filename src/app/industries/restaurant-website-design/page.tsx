import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Restaurant Website Design UK & Ireland | Table Bookings & Digital Menus',
  description:
    'Bespoke restaurant, gastropub and dining website design. Fast interactive menus, zero-commission table reservation integrations, private dining workflows and local SEO.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/restaurant-website-design',
  },
  openGraph: {
    title: 'Restaurant Website Design UK & Ireland | Table Bookings & Digital Menus | TheoMedia',
    description:
      'Bespoke restaurant, gastropub and dining website design. Zero-commission table booking integrations, fast digital menus, private dining enquiries and local SEO.',
    url: 'https://www.theomedia.co.uk/industries/restaurant-website-design',
    type: 'website',
  },
};

const restaurantProblems = [
  {
    title: 'Cumbersome PDF Menus on Mobile',
    description: 'Over 78% of diners browse restaurant websites on mobile while hungry. Pinching and zooming a multi-megabyte PDF menu loses bookings instantly.',
  },
  {
    title: 'Crippling Third-Party Per-Cover Commissions',
    description: 'Relying exclusively on portal discovery or proprietary booking widgets can cost £1.50 to £3.00+ per cover, quietly eroding hospitality margins.',
  },
  {
    title: 'Generic Templates That Feel Corporate',
    description: 'Generic WordPress and builder templates lack the tactile atmosphere, warmth, and culinary identity of your actual dining room.',
  },
  {
    title: 'Missed Private Hire & Event Enquiries',
    description: 'High-margin private dining, Christmas parties, and corporate hire are frequently lost to buried generic contact forms.',
  },
];

const builtFeatures = [
  {
    title: 'Frictionless Digital Menus',
    description: 'Fast-loading, searchable HTML menus with dietary filter tags (GF, VG, V, DF) that load in under 500ms and look immaculate on mobile screens.',
  },
  {
    title: 'Zero-Commission Reservation Workflows',
    description: 'Direct booking integrations with OpenTable, Resy, SevenRooms, DesignMyNight, ResDiary, or custom booking forms with automated email & SMS confirmations.',
  },
  {
    title: 'Atmospheric Culinary Storytelling',
    description: 'Generous white space, editorial typography, full-bleed imagery, and micro-interactions that mirror the sensory feeling of dining in your space.',
  },
  {
    title: 'High-Margin Private Dining Engines',
    description: 'Dedicated private hire workflows, capacity calculators, sample event menus, and automated enquiry gathering for functions and weddings.',
  },
  {
    title: 'Local SEO & Google Business Profile Architecture',
    description: 'Schema.org Restaurant markup, Google Maps integrations, opening hours synchronization, and neighborhood keyword visibility.',
  },
  {
    title: 'One-Tap WhatsApp & Concierge Access',
    description: 'Pre-filled WhatsApp enquiry buttons for instant concierge questions, VIP table requests, and large group bookings.',
  },
];

export default function RestaurantWebsiteDesignPage() {
  const demoUrl = 'https://cinder-field.theomedia.co.uk';

  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Restaurant Website Design & Engineering',
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
              'Bespoke restaurant, gastropub and dining website design. Fast interactive menus, zero-commission table reservations, private hire workflows, and local SEO.',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>INDUSTRY ARCHITECTURE · HOSPITALITY</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              RESTAURANT &amp; GASTROPUB WEBSITE DESIGN.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              Diners decide where to eat in seconds. We build tactile, high-speed restaurant websites engineered for instant mobile menu browsing, direct table bookings, private hire enquiries, and local search dominance across the UK and Ireland.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
              >
                Start a Restaurant Project →
              </Link>
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/80 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
              >
                View Live Website (Cinder &amp; Field) ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Live Project Showcase */}
      <section className="py-20 md:py-28 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-4xl mb-12">
          <SectionLabel>FEATURED PROJECT</SectionLabel>
          <h2 className="text-editorial-md text-near-black mt-4">
            Interactive Experience: Cinder &amp; Field Gastropub
          </h2>
          <p className="font-sans text-stone text-[16px] mt-2">
            Explore our live production showcase engineered specifically for dining, seasonal menus, and table reservations.
          </p>
        </div>
        <div className="w-full aspect-[16/10] bg-charcoal relative overflow-hidden group shadow-2xl border border-near-black/10">
          <ProjectPreview url={demoUrl} title="Cinder & Field" />
          <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/10 transition-colors duration-500 z-30 pointer-events-none" />
        </div>
        <div className="mt-6 flex justify-between items-center text-[12px] font-sans text-stone uppercase tracking-wider">
          <span>Atmospheric Gastropub &amp; Kitchen</span>
          <Link href="/case-studies/restaurant-gastropub-website-design" className="text-near-black border-b border-near-black pb-0.5 hover:text-stone">
            Read Complete Design Case Study →
          </Link>
        </div>
      </section>

      {/* The Core Problems */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>THE FRICTION</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Where traditional restaurant websites fail diners.
          </h2>
          <p className="font-sans text-stone text-[16px] md:text-[18px] mt-4">
            When a guest lands on your site, they are usually hungry, on a phone, and evaluating several options. Unnecessary friction costs covers every single night.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {restaurantProblems.map((problem, i) => (
            <div key={i} className="p-8 bg-ivory border border-near-black/10">
              <span className="font-mono text-stone text-[12px] font-bold block mb-3">0{i + 1}</span>
              <h3 className="font-display text-[22px] md:text-[26px] text-near-black mb-3">{problem.title}</h3>
              <p className="font-sans text-stone text-[15px] leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What TheoMedia Builds */}
      <section className="bg-near-black text-bone py-24 md:py-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-16 md:mb-24">
            <SectionLabel dark>ENGINEERED CAPABILITIES</SectionLabel>
            <h2 className="text-editorial-lg text-bone mt-6">
              Purpose-built for hospitality conversion.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builtFeatures.map((feat, i) => (
              <div key={i} className="p-8 bg-charcoal border border-bone/10 flex flex-col">
                <h3 className="font-display text-[22px] text-bone mb-3">{feat.title}</h3>
                <p className="font-sans text-bone/60 text-[14px] leading-relaxed flex-grow">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision & Comparisons Guides */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>EDITORIAL INSIGHTS</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Evaluating your restaurant digital options.
          </h2>
          <p className="font-sans text-stone text-[16px] md:text-[18px] mt-4">
            Clear, honest comparisons written for restaurateurs making decisions between builders, ERP systems, and custom engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-stone block mb-3">Platform Comparison</span>
              <h3 className="font-display text-[22px] text-near-black mb-4">
                Squarespace vs Custom Restaurant Website
              </h3>
              <p className="font-sans text-stone text-[14px] leading-relaxed mb-6">
                When is Squarespace enough for a small cafe, and when do mobile menu friction and booking lock-in demand a bespoke build?
              </p>
            </div>
            <Link href="/journal/squarespace-vs-custom-restaurant-website" className="text-[12px] font-sans font-semibold tracking-wider uppercase text-near-black border-b border-near-black/30 pb-1 self-start hover:border-near-black">
              Read Analysis →
            </Link>
          </div>

          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-stone block mb-3">System Architecture</span>
              <h3 className="font-display text-[22px] text-near-black mb-4">
                Odoo Alternative for Restaurants
              </h3>
              <p className="font-sans text-stone text-[14px] leading-relaxed mb-6">
                Understanding the difference between an all-in-one ERP back-office and a high-conversion, consumer-facing digital dining experience.
              </p>
            </div>
            <Link href="/journal/odoo-alternative-restaurants" className="text-[12px] font-sans font-semibold tracking-wider uppercase text-near-black border-b border-near-black/30 pb-1 self-start hover:border-near-black">
              Read Breakdown →
            </Link>
          </div>

          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-stone block mb-3">Cost Analysis</span>
              <h3 className="font-display text-[22px] text-near-black mb-4">
                Restaurant Website Cost in the UK
              </h3>
              <p className="font-sans text-stone text-[14px] leading-relaxed mb-6">
                A transparent breakdown of upfront costs, booking system commissions, ongoing hosting, and return on investment.
              </p>
            </div>
            <Link href="/journal/restaurant-website-cost-uk" className="text-[12px] font-sans font-semibold tracking-wider uppercase text-near-black border-b border-near-black/30 pb-1 self-start hover:border-near-black">
              Read Cost Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel dark>GET STARTED</SectionLabel>
          <h2 className="text-editorial-lg text-bone mt-6 mb-8">
            Upgrade your restaurant&apos;s digital presence.
          </h2>
          <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
            Tell us about your restaurant, bar or dining group. We provide a bespoke project review, fixed timeline, and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
            >
              Start Restaurant Enquiry →
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 border border-bone/30 text-bone text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-bone/10 transition-colors"
            >
              View Studio Pricing (£895 – £4,995+)
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
