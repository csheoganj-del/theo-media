import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Bespoke Web Design UK & Ireland | TheoMedia Studio',
  description:
    'Independent web design studio engineering custom, high-performance websites for ambitious businesses across the UK and Ireland. 100% client-owned with zero platform lock-in.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/web-design',
  },
  openGraph: {
    title: 'Bespoke Web Design UK & Ireland | TheoMedia Studio',
    description:
      'Independent web design studio engineering custom, high-performance websites for ambitious businesses across the UK and Ireland.',
    url: 'https://www.theomedia.co.uk/web-design',
    type: 'website',
  },
};

const capabilities = [
  {
    title: 'Zero-Template Custom Design',
    description:
      'Every interface is designed from a blank canvas. We do not use WordPress themes, Elementor bloat, or off-the-shelf templates. Your brand world is entirely unique.',
  },
  {
    title: 'Sub-Second Edge Performance',
    description:
      'Built with Next.js and Tailwind CSS deployed on global edge CDNs. Pages render in under 1 second, achieving 95+ Google Lighthouse performance scores and green Core Web Vitals (sub-second LCP, minimal CLS, instant INP).',
  },
  {
    title: '100% Code & Asset Ownership',
    description:
      'You receive complete source code, GitHub repository access, and full domain control upon project completion. Zero ongoing software lock-in or proprietary agency captivity.',
  },
  {
    title: 'Foundational Technical SEO',
    description:
      'Granular Schema.org JSON-LD structured data, clean semantic headings, automated OpenGraph cards, and fast mobile indexing baked in from day one.',
  },
  {
    title: 'Conversion-Focused Architecture',
    description:
      'Strategic visual hierarchy that guides visitors naturally toward enquiry forms, direct phone calls, WhatsApp chats, or reservation bookings.',
  },
  {
    title: 'Modern CMS & Easy Editing',
    description:
      'Seamless content management integration allowing you to update copy, menus, case studies, and pricing without touching code or risking layout breaks.',
  },
];

export default function WebDesignPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Bespoke Web Design',
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
              'Custom website design and engineering for ambitious businesses across the UK and Ireland. Bespoke Next.js code, sub-second speed, 100% ownership, zero platform lock-in.',
          }),
        }}
      />

      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>STUDIO CAPABILITY · WEB DESIGN</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              BESPOKE WEB DESIGN. BUILT LIKE PRODUCTS.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              We design and engineer distinctive digital flagships for businesses that have outgrown generic templates. High-speed, beautifully typeset, and 100% client-owned.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
              >
                Start a Web Project →
              </Link>
              <Link
                href="/pricing"
                className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/80 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
              >
                View Fixed-Price Packages (£895+) ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>OUR ENGINEERING STANDARD</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Why custom code outperforms proprietary builders.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, idx) => (
            <div key={idx} className="p-8 bg-ivory border border-near-black/10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-stone uppercase block mb-3">
                  Feature 0{idx + 1}
                </span>
                <h3 className="font-display text-[22px] text-near-black mb-3">{item.title}</h3>
                <p className="font-sans text-stone text-[15px] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sector Specialisations */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>SPECIALISED SECTORS</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Architecture tailored to your industry mechanics.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/industries/restaurant-website-design"
            className="p-8 bg-ivory border border-near-black/10 hover:border-near-black transition-colors block group"
          >
            <h3 className="font-display text-[22px] text-near-black group-hover:text-stone transition-colors mb-2">
              Restaurants &amp; Hospitality →
            </h3>
            <p className="font-sans text-[14px] text-stone">
              Live seasonal menus, direct reservation modals, and zero third-party commission leakage.
            </p>
          </Link>
          <Link
            href="/industries/trades-construction-website-design"
            className="p-8 bg-ivory border border-near-black/10 hover:border-near-black transition-colors block group"
          >
            <h3 className="font-display text-[22px] text-near-black group-hover:text-stone transition-colors mb-2">
              Trades &amp; Construction →
            </h3>
            <p className="font-sans text-[14px] text-stone">
              High-ticket project galleries, quote calculators, and direct WhatsApp lead capture.
            </p>
          </Link>
          <Link
            href="/industries/healthcare-clinic-website-design"
            className="p-8 bg-ivory border border-near-black/10 hover:border-near-black transition-colors block group"
          >
            <h3 className="font-display text-[22px] text-near-black group-hover:text-stone transition-colors mb-2">
              Healthcare &amp; Private Clinics →
            </h3>
            <p className="font-sans text-[14px] text-stone">
              Practitioner credentials, transparent treatment menus, and confidential consultation scheduling.
            </p>
          </Link>
        </div>
      </section>

      {/* Comparison guide callout */}
      <section className="bg-ivory border-b border-near-black/10 py-20 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <SectionLabel>COMMERCIAL BUYER GUIDE</SectionLabel>
            <h2 className="font-display text-[32px] text-near-black mt-2">
              How much does a website really cost in the UK?
            </h2>
            <p className="font-sans text-stone text-[16px] mt-2">
              Read our transparent analysis comparing DIY builders, freelance developers, and independent studios.
            </p>
          </div>
          <Link
            href="/journal/how-much-does-a-website-cost-uk"
            className="px-8 py-4 bg-near-black text-bone text-[13px] font-semibold tracking-wider uppercase hover:bg-stone transition-colors shrink-0"
          >
            Read 2026 Cost Guide →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel dark>START YOUR PROJECT</SectionLabel>
          <h2 className="text-editorial-lg text-bone mt-6 mb-8">
            Build a website you actually own.
          </h2>
          <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
            Tell us about your brand, requirements, and timeline. We provide a direct, fixed-price proposal within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
          >
            Start Web Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
