import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export const metadata: Metadata = {
  title: 'Trades & Construction Website Design UK & Ireland | Contractor Websites',
  description:
    'Bespoke website design for architectural builders, contractors, roofing and trade specialists. High-trust project galleries, interactive quote requests, and local search visibility.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/trades-construction-website-design',
  },
  openGraph: {
    title: 'Trades & Construction Website Design UK & Ireland | TheoMedia',
    description:
      'Bespoke website design for architectural builders, contractors and trades. Interactive quote request flows, project proof galleries and local SEO.',
    url: 'https://www.theomedia.co.uk/industries/trades-construction-website-design',
    type: 'website',
  },
};

export default function TradesConstructionWebsiteDesignPage() {
  const demoUrl = 'https://alder-rowe.theomedia.co.uk';

  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Trades & Construction Website Design',
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
              'Bespoke website design for architectural builders, main contractors and specialist trades. Interactive quote engines, before/after project proof, and local SEO.',
          }),
        }}
      />

      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>INDUSTRY ARCHITECTURE · TRADES &amp; CONSTRUCTION</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              BUILDER, CONTRACTOR &amp; TRADES WEBSITE DESIGN.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              High-value homeowners and commercial clients judge your craftsmanship by your website before they ever request a site visit. We build solid, trust-led digital platforms that win five-figure and six-figure contracts.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
              >
                Discuss a Contractor Project →
              </Link>
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/80 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
              >
                Experience Live Demo (Alder &amp; Rowe) ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Demonstration Showcase */}
      <section className="py-20 md:py-28 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-4xl mb-12">
          <SectionLabel>PRODUCTION PROTOTYPE</SectionLabel>
          <h2 className="text-editorial-md text-near-black mt-4">
            Interactive Experience: Alder &amp; Rowe Architectural Builders
          </h2>
          <p className="font-sans text-stone text-[16px] mt-2">
            Explore our construction showcase featuring project timeline galleries, accreditation display, and interactive quote requests.
          </p>
        </div>
        <div className="w-full aspect-[16/10] bg-charcoal relative overflow-hidden group shadow-2xl border border-near-black/10">
          <ProjectPreview url={demoUrl} title="Alder & Rowe Builder Demo" />
          <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/10 transition-colors duration-500 z-30 pointer-events-none" />
        </div>
        <div className="mt-6 flex justify-between items-center text-[12px] font-sans text-stone uppercase tracking-wider">
          <span>Architectural Build &amp; Renovation Platform</span>
          <Link href="/case-studies/builder-roofing-website-design" className="text-near-black border-b border-near-black pb-0.5 hover:text-stone">
            Read Complete Contractor Case Study →
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>CONTRACTOR TRUST ARCHITECTURE</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Eliminating doubt before the initial consultation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Structured Quote Workflows</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Step-by-step quote enquiry forms that gather architectural drawings, project scopes, timelines, and postcodes upfront.
            </p>
          </div>
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Before &amp; After Proof Galleries</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Side-by-side transformation sliders and high-resolution build galleries that demonstrate flawless finish quality.
            </p>
          </div>
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Accreditation &amp; Insurance Badges</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Prominent display of FMB, TrustMark, Gas Safe, NHBC, and public liability insurance coverage that removes client risk.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel dark>GET IN TOUCH</SectionLabel>
          <h2 className="text-editorial-lg text-bone mt-6 mb-8">
            Position your construction business as the premium choice.
          </h2>
          <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
            Tell us about your trade or building firm. We build websites that attract high-margin architectural projects.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
          >
            Start Contractor Enquiry →
          </Link>
        </div>
      </section>
    </main>
  );
}
