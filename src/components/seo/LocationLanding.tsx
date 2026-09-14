import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import Accordion from '@/components/ui/Accordion';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo';
import { locations, type LocationPageData } from '@/data/locations';
import { SITE } from '@/lib/constants';

export default function LocationLanding({ location }: { location: LocationPageData }) {
  const otherCities = locations.filter((item) => item.slug !== location.slug);
  const path = `/${location.slug}`;

  return (
    <div className="bg-bone min-h-screen pt-24 text-near-black">
      <JsonLd
        data={[
          serviceJsonLd({
            name: `Web Design ${location.city}`,
            description: location.description,
            path,
            areaServed: [
              { '@type': 'City', name: location.city },
              { '@type': 'Country', name: location.country },
            ],
          }),
          faqJsonLd(location.faqs),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Web Design', path: '/web-design' },
            { name: `Web Design ${location.city}`, path },
          ]),
        ]}
      />

      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>
              WEB DESIGN · {location.city.toUpperCase()} · {location.country.toUpperCase()}
            </SectionLabel>
            <h1 className="font-display text-[40px] md:text-[60px] lg:text-[76px] leading-[1.05] text-bone mt-6 mb-8 max-w-5xl">
              {location.h1}
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              {location.intro}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
              >
                Start a {location.city} Project →
              </Link>
              <Link
                href="/pricing"
                className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/80 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
              >
                Packages from {location.starterPrice} ↗
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionLabel>THE LOCAL MARKET</SectionLabel>
            <h2 className="text-editorial-lg text-near-black mt-6 mb-6">
              Why {location.city} businesses need a custom website.
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-stone leading-relaxed mb-6">
              {location.market}
            </p>
            <p className="font-sans text-[16px] md:text-[18px] text-stone leading-relaxed">
              TheoMedia is an independent studio, not a local franchise. You work directly with the people who design and engineer the site. {location.currency === 'EUR' ? 'Invoices and packages are in Euro.' : 'Packages are published in GBP, with Euro equivalents for Irish clients.'} You own the code.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-ivory border border-near-black/10 p-8 h-full">
              <h3 className="font-display text-[22px] text-near-black mb-4">
                Areas we work across
              </h3>
              <ul className="space-y-3">
                {location.neighbourhoods.map((place) => (
                  <li key={place} className="text-[15px] text-charcoal flex items-start gap-3">
                    <span className="text-near-black/40 mt-1 text-[10px]">✦</span>
                    {place}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[13px] text-stone">
                Remote, founder-led delivery. Phone {SITE.phone}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <SectionLabel>SECTORS IN {location.city.toUpperCase()}</SectionLabel>
        <h2 className="text-editorial-lg text-near-black mt-6 mb-12 max-w-3xl">
          Architecture matched to how {location.city} businesses actually sell.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {location.sectors.map((sector) => (
            <Link
              key={sector.href}
              href={sector.href}
              className="p-8 bg-ivory border border-near-black/10 hover:border-near-black transition-colors block group"
            >
              <h3 className="font-display text-[22px] text-near-black mb-2 group-hover:text-stone">
                {sector.title} →
              </h3>
              <p className="font-sans text-[15px] text-stone leading-relaxed">{sector.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <SectionLabel>SELECTED WORK</SectionLabel>
        <h2 className="text-editorial-lg text-near-black mt-6 mb-12">
          Relevant studio work.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {location.relatedWork.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-8 bg-ivory border border-near-black/10 hover:border-near-black transition-colors"
            >
              <p className="text-[11px] font-mono tracking-widest uppercase text-stone mb-3">{item.sector}</p>
              <h3 className="font-display text-[24px] text-near-black">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[900px] mx-auto border-b border-near-black/10">
        <SectionLabel>FAQ · {location.city.toUpperCase()}</SectionLabel>
        <h2 className="text-editorial-lg text-near-black mt-6 mb-12">
          Questions from {location.city} operators.
        </h2>
        <Accordion items={location.faqs} />
      </section>

      <section className="py-20 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <h2 className="font-display text-[28px] text-near-black mb-8">
          Also serving
        </h2>
        <div className="flex flex-wrap gap-4">
          {otherCities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="px-5 py-3 border border-near-black/15 text-[13px] uppercase tracking-wider hover:border-near-black transition-colors"
            >
              Web Design {city.city}
            </Link>
          ))}
          <Link
            href="/web-design-ireland"
            className="px-5 py-3 border border-near-black/15 text-[13px] uppercase tracking-wider hover:border-near-black transition-colors"
          >
            Web Design Ireland
          </Link>
        </div>
      </section>

      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel dark>START A PROJECT</SectionLabel>
          <h2 className="text-editorial-lg text-bone mt-6 mb-8">
            Build a {location.city} website you actually own.
          </h2>
          <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
            Fixed packages from {location.starterPrice}. Founder-led. Reply within one working day.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
          >
            Start Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}
