import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, pageMeta, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Garage Website Design UK | MOT, Servicing & Workshop Booking Sites',
  description:
    'Custom garage and workshop website design. Transparent service menus, MOT booking, fleet pages and WhatsApp enquiries. Built for UK independent garages from £895.',
  path: '/industries/garage-website-design',
});

export default function GarageWebsiteDesignPage() {
  return (
    <div className="bg-bone min-h-screen pt-24 text-near-black">
      <JsonLd
        data={[
          serviceJsonLd({
            name: 'Garage Website Design',
            description: metadata.description as string,
            path: '/industries/garage-website-design',
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/industries' },
            { name: 'Garage Website Design', path: '/industries/garage-website-design' },
          ]),
        ]}
      />
      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>INDUSTRY ARCHITECTURE · AUTOMOTIVE</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              GARAGE &amp; WORKSHOP WEBSITE DESIGN.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              Vehicle owners book the garage that looks competent. We design workshop websites with transparent service menus, MOT and servicing booking, fleet pages and a phone number that is actually tappable.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] uppercase">
                Start a Garage Project →
              </Link>
              <Link href="/work/theo-garage" className="text-[13px] tracking-[0.1em] uppercase text-bone/80 border-b border-bone/30 pb-1">
                View Hartwell Motorworks ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <h2 className="text-editorial-lg text-near-black mb-12">Built for trust before the booking.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Clear service menus', body: 'MOT, servicing, diagnostics and specialist work with prices where you choose to show them. No mystery quote for a standard oil service.' },
            { title: 'Instant contact', body: 'Click-to-call, WhatsApp and a short booking form. Fleet managers and busy owners will not fill a 12-field contact page.' },
            { title: 'Local search', body: 'Garage schema, service-area copy and a site that supports Google Business Profile instead of fighting it.' },
          ].map((item) => (
            <div key={item.title} className="p-8 bg-ivory border border-near-black/10">
              <h3 className="font-display text-[22px] mb-3">{item.title}</h3>
              <p className="text-stone text-[15px] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-near-black text-bone py-24 px-5 text-center">
        <h2 className="text-editorial-lg mb-8">A workshop site that looks as tight as the bay.</h2>
        <Link href="/contact" className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-semibold tracking-widest uppercase">
          Start Consultation →
        </Link>
      </section>
    </div>
  );
}
