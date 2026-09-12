import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Industry Web Design Solutions | Specialized Digital Architecture UK & Ireland',
  description:
    'Tailored website design and digital architecture for hospitality, healthcare, trades, luxury ecommerce, and independent businesses across the UK and Ireland.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries',
  },
  openGraph: {
    title: 'Industry Web Design Solutions | TheoMedia',
    description:
      'Tailored website design and digital architecture for hospitality, healthcare, trades, luxury ecommerce, and independent businesses across the UK and Ireland.',
    url: 'https://www.theomedia.co.uk/industries',
    type: 'website',
  },
};

const industries = [
  {
    title: 'Restaurants & Hospitality',
    href: '/industries/restaurant-website-design',
    tagline: 'Direct table reservations, live seasonal menus, and zero third-party commissions.',
    demoTitle: 'View Cinder & Field Live ↗',
    demoUrl: 'https://cinder-field.theomedia.co.uk',
  },
  {
    title: 'Hotels & Boutique Stays',
    href: '/industries/hotel-website-design',
    tagline: 'Direct room bookings, visual atmosphere storytelling, and OTA commission reduction.',
    demoTitle: 'View Velora House Live ↗',
    demoUrl: 'https://velora-house.theomedia.co.uk',
  },
  {
    title: 'Trades & Construction',
    href: '/industries/trades-construction-website-design',
    tagline: 'High-ticket residential and commercial quotes, WhatsApp lead capture, and portfolio galleries.',
    demoTitle: 'View Alder & Rowe Live ↗',
    demoUrl: 'https://alder-rowe.theomedia.co.uk',
  },
  {
    title: 'Private Healthcare & Clinics',
    href: '/industries/healthcare-clinic-website-design',
    tagline: 'Medical practitioner authority, transparent pricing, and confidential consultation workflows.',
    demoTitle: 'View Elowen Clinic Live ↗',
    demoUrl: 'https://elowen-clinic.theomedia.co.uk',
  },
  {
    title: 'Luxury & DTC Ecommerce',
    href: '/industries/ecommerce-website-design',
    tagline: 'Sub-second mobile checkout, Apple Pay integration, and zero recurring plugin bloat.',
    demoTitle: 'View Morrow & Hide Live ↗',
    demoUrl: 'https://morrow-hide.theomedia.co.uk',
  },
  {
    title: 'Photographers & Visual Artists',
    href: '/industries/photographer-website-design',
    tagline: 'Full-bleed responsive imagery, fast portfolio rendering, and editorial client presentation.',
    demoTitle: 'Read Photography Guide →',
    demoUrl: '/industries/photographer-website-design',
  },
  {
    title: 'Small & Independent Businesses',
    href: '/industries/small-business-website-design',
    tagline: 'Fixed-price launch packages from £895 / €1,050 with 100% source code ownership and zero lock-in.',
    demoTitle: 'View Package Options →',
    demoUrl: '/industries/small-business-website-design',
  },
];

export default function IndustriesIndexPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>SECTOR EXPERTISE · UK &amp; IRELAND</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              SPECIALISED SECTOR ARCHITECTURE.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              Every industry has distinct commercial mechanics. A restaurant needs immediate table bookings without OpenTable fees. A clinic needs calm medical authority. We build tailored digital systems purpose-crafted for your sector.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 bg-ivory border border-near-black/10 flex flex-col justify-between hover:border-near-black transition-all duration-300"
            >
              <div>
                <span className="text-[11px] font-mono tracking-widest text-stone uppercase block mb-3">
                  Sector 0{idx + 1}
                </span>
                <h2 className="font-display text-[26px] text-near-black mb-3">
                  <Link href={ind.href} className="hover:text-stone transition-colors">
                    {ind.title}
                  </Link>
                </h2>
                <p className="font-sans text-stone text-[15px] leading-relaxed mb-8">
                  {ind.tagline}
                </p>
              </div>

              <div className="pt-6 border-t border-near-black/10 flex flex-col gap-3">
                <Link
                  href={ind.href}
                  className="text-[13px] font-sans font-semibold tracking-wider uppercase text-near-black hover:text-stone flex items-center justify-between"
                >
                  <span>Explore Sector Architecture</span>
                  <span>→</span>
                </Link>
                {ind.demoUrl.startsWith('http') && (
                  <Link
                    href={ind.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-mono text-stone hover:text-near-black"
                  >
                    {ind.demoTitle}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel dark>BESPOKE ADVICE</SectionLabel>
          <h2 className="text-editorial-lg text-bone mt-6 mb-8">
            Don&apos;t see your exact industry listed?
          </h2>
          <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
            We work across niche sectors including legal practices, architectural studios, and artisanal manufacturing. Speak directly with our founder to explore custom architecture for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
          >
            Schedule a Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
