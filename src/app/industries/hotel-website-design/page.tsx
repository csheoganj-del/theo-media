import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export const metadata: Metadata = {
  title: 'Hotel & Boutique Hospitality Website Design UK & Ireland',
  description:
    'Bespoke website design for luxury boutique hotels, retreats and guesthouses. Commission-free direct room booking engines, PMS synchronization, and cinematic storytelling.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/hotel-website-design',
  },
  openGraph: {
    title: 'Hotel & Boutique Hospitality Website Design UK & Ireland | TheoMedia',
    description:
      'Bespoke website design for luxury boutique hotels, retreats and guesthouses. Commission-free direct room booking engines, PMS synchronization, and cinematic storytelling.',
    url: 'https://www.theomedia.co.uk/industries/hotel-website-design',
    type: 'website',
  },
};

export default function HotelWebsiteDesignPage() {
  const demoUrl = 'https://velora-house.theomedia.co.uk';

  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Hotel & Boutique Hospitality Website Design',
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
              'Bespoke website design for luxury boutique hotels, country houses and retreats. Commission-free direct booking engines, PMS connectivity and cinematic guest journeys.',
          }),
        }}
      />

      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>INDUSTRY ARCHITECTURE · HOSPITALITY &amp; STAYS</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              HOTEL &amp; BOUTIQUE RETREAT WEBSITE DESIGN.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              Every booking made through Booking.com, Expedia, or Airbnb costs you 15–25% in fees. We engineer cinematic, high-speed hotel platforms that turn prospective guests into direct, commission-free reservations.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
              >
                Start a Hotel Project →
              </Link>
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/80 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
              >
                Experience Live Demo (Velora House) ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Live Demonstration Showcase */}
      <section className="py-20 md:py-28 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-4xl mb-12">
          <SectionLabel>PRODUCTION PROTOTYPE</SectionLabel>
          <h2 className="text-editorial-md text-near-black mt-4">
            Interactive Experience: Velora House Luxury Retreat
          </h2>
          <p className="font-sans text-stone text-[16px] mt-2">
            Explore our production hotel showcase featuring seamless room selection, dining integration, and mobile booking flows.
          </p>
        </div>
        <div className="w-full aspect-[16/10] bg-charcoal relative overflow-hidden group shadow-2xl border border-near-black/10">
          <ProjectPreview url={demoUrl} title="Velora House Boutique Hotel Demo" />
          <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/10 transition-colors duration-500 z-30 pointer-events-none" />
        </div>
        <div className="mt-6 flex justify-between items-center text-[12px] font-sans text-stone uppercase tracking-wider">
          <span>Luxury Boutique Hotel &amp; Spa</span>
          <Link href="/case-studies/boutique-hotel-website-design" className="text-near-black border-b border-near-black pb-0.5 hover:text-stone">
            Read Complete Hotel Case Study →
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>CRITICAL ARCHITECTURE</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Engineered for direct booking revenue.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">PMS &amp; Engine Connectivity</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Seamlessly link with your existing Property Management System (Mews, Cloudbeds, Guestline, SiteMinder) or bespoke booking engines.
            </p>
          </div>
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Cinematic Room Showcases</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Full-bleed photography, floor plans, amenity galleries, and clear bed/occupancy specifications that build confidence and elevate ADR.
            </p>
          </div>
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Direct Best Rate Incentives</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Highlight direct booking perks (complimentary breakfast, flexible cancellation, early check-in) directly in the reservation journey.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel dark>START YOUR PROJECT</SectionLabel>
          <h2 className="text-editorial-lg text-bone mt-6 mb-8">
            Reclaim your direct booking revenue.
          </h2>
          <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
            Tell us about your property, suites, and current booking engine. We deliver fixed scopes, transparent timelines, and bespoke designs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
          >
            Start Hotel Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
