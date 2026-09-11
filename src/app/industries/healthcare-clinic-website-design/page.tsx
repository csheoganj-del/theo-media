import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export const metadata: Metadata = {
  title: 'Private Healthcare & Clinic Website Design UK & Ireland',
  description:
    'Bespoke website design for private medical practices, dental clinics, and aesthetic practitioners. GDPR-compliant consultation booking, patient trust architecture and treatment menus.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/healthcare-clinic-website-design',
  },
  openGraph: {
    title: 'Private Healthcare & Clinic Website Design UK & Ireland | TheoMedia',
    description:
      'Bespoke website design for private healthcare clinics, dental surgeries and aesthetic practices. Patient trust architecture, treatment menus, and consultation scheduling.',
    url: 'https://www.theomedia.co.uk/industries/healthcare-clinic-website-design',
    type: 'website',
  },
};

export default function HealthcareClinicWebsiteDesignPage() {
  const demoUrl = 'https://elowen-clinic.theomedia.co.uk';

  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Healthcare & Clinic Website Design',
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
              'Bespoke website design for private medical clinics, dental practices and aesthetic doctors. Transparent pricing, practitioner credentials, and GDPR-compliant consultation booking.',
          }),
        }}
      />

      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>INDUSTRY ARCHITECTURE · HEALTHCARE &amp; CLINICAL</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              PRIVATE HEALTHCARE &amp; CLINIC WEBSITES.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              Patients seeking private medical, dental, or aesthetic care require exceptional reassurance. We engineer calm, authoritative clinical platforms that build immediate medical trust and facilitate seamless consultation bookings.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
              >
                Discuss a Clinic Project →
              </Link>
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/80 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
              >
                Experience Live Demo (Elowen Clinic) ↗
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
            Interactive Experience: Elowen Private Clinic
          </h2>
          <p className="font-sans text-stone text-[16px] mt-2">
            Explore our clinical showcase engineered for patient trust, transparent treatment menus, and online consultation scheduling.
          </p>
        </div>
        <div className="w-full aspect-[16/10] bg-charcoal relative overflow-hidden group shadow-2xl border border-near-black/10">
          <ProjectPreview url={demoUrl} title="Elowen Clinic Healthcare Demo" />
          <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/10 transition-colors duration-500 z-30 pointer-events-none" />
        </div>
        <div className="mt-6 flex justify-between items-center text-[12px] font-sans text-stone uppercase tracking-wider">
          <span>Private Medical &amp; Aesthetic Practice</span>
          <Link href="/case-studies/private-healthcare-website-design" className="text-near-black border-b border-near-black pb-0.5 hover:text-stone">
            Read Complete Healthcare Case Study →
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>CLINICAL TRUST ARCHITECTURE</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Calm, authoritative patient journeys.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Transparent Treatment Menus</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Clear pricing guidelines, treatment durations, and recovery timelines that eliminate patient apprehension and pre-qualify leads.
            </p>
          </div>
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">Doctor &amp; Practitioner Credentials</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              GMC, GDC, and Save Face accreditation badges, medical backgrounds, and specialized clinical qualifications prominently validated.
            </p>
          </div>
          <div className="p-8 bg-ivory border border-near-black/10 flex flex-col">
            <h3 className="font-display text-[22px] text-near-black mb-3">GDPR Consultation Workflows</h3>
            <p className="font-sans text-stone text-[15px] leading-relaxed">
              Secure consultation enquiry forms and appointment booking integrations (Semble, Pabau, Cliniko) respecting patient privacy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel dark>START YOUR PROJECT</SectionLabel>
          <h2 className="text-editorial-lg text-bone mt-6 mb-8">
            Build authority for your medical practice.
          </h2>
          <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
            Tell us about your clinic, treatments, and patient journey. We build digital spaces that inspire confidence.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
          >
            Start Clinic Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
