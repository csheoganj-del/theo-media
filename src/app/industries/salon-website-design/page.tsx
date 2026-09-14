import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, pageMeta, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Salon Website Design UK & Ireland | Hair & Beauty Booking Sites',
  description:
    'Bespoke salon website design for hair, beauty and treatment studios. Editorial design, treatment menus and frictionless appointment booking. From £895 / €1,050.',
  path: '/industries/salon-website-design',
});

export default function SalonWebsiteDesignPage() {
  return (
    <div className="bg-bone min-h-screen pt-24 text-near-black">
      <JsonLd
        data={[
          serviceJsonLd({
            name: 'Salon Website Design',
            description: metadata.description as string,
            path: '/industries/salon-website-design',
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/industries' },
            { name: 'Salon Website Design', path: '/industries/salon-website-design' },
          ]),
        ]}
      />
      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>INDUSTRY ARCHITECTURE · SALON &amp; BEAUTY</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              SALON WEBSITE DESIGN.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              High-end hair and beauty studios are judged in three seconds. We build editorial salon websites with treatment menus, stylist credentials and appointment booking that does not send clients to a generic third-party app.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] uppercase">
                Start a Salon Project →
              </Link>
              <Link href="/work/rose-and-ivy" className="text-[13px] tracking-[0.1em] uppercase text-bone/80 border-b border-bone/30 pb-1">
                View Rose &amp; Ivy ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <h2 className="text-editorial-lg text-near-black mb-12">What a salon website has to do.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Treatment menus that read well on mobile', body: 'Colour, cut, treatments and pricing in HTML — not a PDF that salon guests pinch-zoom in the Uber.' },
            { title: 'Booking without brand dilution', body: 'Direct appointment flows or a branded embed. The site stays yours; the calendar still fills.' },
            { title: 'Editorial atmosphere', body: 'Photography, type and space that match the chair, not a beauty-template carousel from 2018.' },
          ].map((item) => (
            <div key={item.title} className="p-8 bg-ivory border border-near-black/10">
              <h3 className="font-display text-[22px] mb-3">{item.title}</h3>
              <p className="text-stone text-[15px] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-near-black text-bone py-24 px-5 text-center">
        <h2 className="text-editorial-lg mb-8">Build a salon site as considered as the work.</h2>
        <Link href="/contact" className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-semibold tracking-widest uppercase">
          Start Consultation →
        </Link>
      </section>
    </div>
  );
}
