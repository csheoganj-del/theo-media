import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, pageMeta, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Barber Website Design UK | Grooming Studios & Chair Booking',
  description:
    'Bespoke barber and grooming website design. Cut menus, barber profiles and instant chair booking for UK and Irish barbershops. Custom-built from £895.',
  path: '/industries/barber-website-design',
});

export default function BarberWebsiteDesignPage() {
  return (
    <div className="bg-bone min-h-screen pt-24 text-near-black">
      <JsonLd
        data={[
          serviceJsonLd({
            name: 'Barber Website Design',
            description: metadata.description as string,
            path: '/industries/barber-website-design',
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/industries' },
            { name: 'Barber Website Design', path: '/industries/barber-website-design' },
          ]),
        ]}
      />
      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>INDUSTRY ARCHITECTURE · BARBERING</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              BARBER &amp; GROOMING WEBSITE DESIGN.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              Walk-ins still matter. So does a site that lets a regular book their barber in twenty seconds. We design heritage-led barbershop websites with cut menus, profiles and chair booking — without looking like a marketplace app.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] uppercase">
                Start a Barber Project →
              </Link>
              <Link href="/work/wren-crown" className="text-[13px] tracking-[0.1em] uppercase text-bone/80 border-b border-bone/30 pb-1">
                View Wren &amp; Crown ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <h2 className="text-editorial-lg text-near-black mb-12">Chair booking with a brand, not a widget farm.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Cut and grooming menus', body: 'Haircut, beard, hot towel and combo pricing that is obvious on a phone between meetings.' },
            { title: 'Barber profiles', body: 'Regulars book people, not shops. Show who is on the floor and let them pick a chair.' },
            { title: 'Local discovery', body: 'Maps, hours and neighbourhood copy so “barber near me” can land on a site you own.' },
          ].map((item) => (
            <div key={item.title} className="p-8 bg-ivory border border-near-black/10">
              <h3 className="font-display text-[22px] mb-3">{item.title}</h3>
              <p className="text-stone text-[15px] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-near-black text-bone py-24 px-5 text-center">
        <h2 className="text-editorial-lg mb-8">A barbershop site with some spine.</h2>
        <Link href="/contact" className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-semibold tracking-widest uppercase">
          Start Consultation →
        </Link>
      </section>
    </div>
  );
}
