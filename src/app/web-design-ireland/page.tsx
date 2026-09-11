import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Web Design Ireland | Bespoke Web Design & Development Studio',
  description:
    'Independent web design and digital product studio for Irish businesses. Custom websites, direct booking engines and high-conversion ecommerce across Dublin, Cork, Galway and nationwide.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/web-design-ireland',
    languages: {
      'en-IE': 'https://www.theomedia.co.uk/web-design-ireland',
      'en-GB': 'https://www.theomedia.co.uk',
    },
  },
  openGraph: {
    title: 'Web Design Ireland | Bespoke Web Design & Development Studio | TheoMedia',
    description:
      'Independent web design and digital product studio for Irish businesses. Custom website development, direct booking engines and artisan ecommerce.',
    url: 'https://www.theomedia.co.uk/web-design-ireland',
    locale: 'en_IE',
    type: 'website',
  },
};

const irishSectors = [
  {
    number: '01',
    title: 'Hospitality & Boutique Retreats',
    focus: 'Direct bookings along the Wild Atlantic Way & Dublin',
    description:
      'Irish hotels and guesthouses surrender 15–25% commission to OTAs. We engineer custom booking engines and cinematic room showcases that convert direct visitors at guaranteed best rates.',
    slug: '/case-studies/boutique-hotel-website-design',
  },
  {
    number: '02',
    title: 'Restaurants & Gastropubs',
    focus: 'Commission-free table bookings and seasonal menus',
    description:
      'From Dublin city dining to coastal seafood kitchens, we build fast, atmospheric digital menus and direct reservation flows that eliminate third-party per-cover fees.',
    slug: '/case-studies/restaurant-gastropub-website-design',
  },
  {
    number: '03',
    title: 'Artisan & Premium Ecommerce',
    focus: 'Direct-to-consumer Irish brands, crafts & distillers',
    description:
      'Sub-second browsing with native Apple Pay and Stripe checkout in Euros (€). Engineered for Irish makers who need product storytelling rather than generic template catalogues.',
    slug: '/case-studies/ecommerce-website-design',
  },
  {
    number: '04',
    title: 'Private Healthcare & Clinics',
    focus: 'Consultation scheduling and patient trust',
    description:
      'GDPR-compliant consultation scheduling, practitioner credentials, and transparent treatment pricing for private practices in Dublin, Cork, and Galway.',
    slug: '/case-studies/private-healthcare-website-design',
  },
];

const irishPricing = [
  {
    name: 'Starter',
    euroPrice: '€1,050',
    description: 'Bespoke high-performance website for emerging businesses and independent practices.',
    features: ['1–3 custom engineered pages', 'Mobile-first responsive build', 'WhatsApp & phone enquiry integration', 'Basic SEO & Google indexing setup'],
  },
  {
    name: 'Professional',
    euroPrice: '€2,950',
    featured: true,
    description: 'Comprehensive commercial website with multi-page architecture, CMS and conversion workflows.',
    features: ['Up to 8 custom pages', 'Interactive CMS for menus or services', 'Direct booking or enquiry flows', 'Technical SEO audit & local discovery'],
  },
  {
    name: 'Bespoke Systems',
    euroPrice: '€5,850+',
    description: 'Custom web applications, commission-free booking engines, and advanced digital platforms.',
    features: ['Bespoke booking or client portal', 'Custom Stripe/payment integration', 'Automated customer workflows', 'Dedicated launch support'],
  },
];

export default function WebDesignIrelandPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'TheoMedia Ireland',
            url: 'https://www.theomedia.co.uk/web-design-ireland',
            telephone: '+353852258004',
            email: 'hello@theomedia.co.uk',
            priceRange: '€1,050 - €11,000+',
            currenciesAccepted: 'EUR',
            paymentAccepted: 'Bank Transfer, Credit Card, Stripe, Apple Pay',
            areaServed: {
              '@type': 'Country',
              name: 'Ireland',
            },
            description:
              'Independent web design and digital product studio serving businesses across Ireland, including Dublin, Cork, Galway and Limerick.',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-near-black text-bone pt-32 pb-24 md:pt-44 md:pb-36 px-5 md:px-8 lg:px-12 border-b border-bone/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <SectionLabel dark>IRELAND STUDIO</SectionLabel>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[1.02] text-bone mt-6 mb-8 max-w-5xl">
              BESPOKE WEB DESIGN &amp; DIGITAL PRODUCTS FOR IRISH BUSINESSES.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-bone/70 max-w-3xl leading-relaxed mb-12">
              We design and engineer distinctive websites, direct booking engines, and digital platforms for ambitious businesses across Dublin, Cork, Galway, and nationwide. No templates, no agency markups, and zero platform lock-in.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 uppercase"
              >
                Discuss an Irish Project →
              </Link>
              <a
                href={SITE.phoneTel}
                className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/80 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
              >
                Direct Line: {SITE.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy / Value */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <SectionLabel>THE APPROACH</SectionLabel>
            <h2 className="text-editorial-lg font-display text-near-black mt-6 leading-tight">
              Why Irish brands choose bespoke engineering over generic builders.
            </h2>
          </div>
          <div className="lg:col-span-7 font-sans text-stone text-[16px] md:text-[18px] leading-relaxed space-y-6">
            <p>
              Many growing Irish businesses are sold off-the-shelf templates or slow DIY builders that feel generic from day one. In competitive sectors like Irish hospitality, artisan food, and private healthcare, a template signals a commodity.
            </p>
            <p>
              At TheoMedia, every website is engineered from scratch. We combine tactile editorial art direction with sub-second performance, structured technical SEO, and dedicated conversion journeys tailored to how people actually browse and buy in Ireland.
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[14px] text-near-black font-medium">
              <div className="p-5 bg-ivory border border-near-black/10">
                <div className="text-stone text-[11px] uppercase tracking-widest mb-1">Direct ROI</div>
                <div className="text-[16px] font-display">Zero Commission Leakage</div>
                <p className="text-stone text-[13px] font-normal mt-1">Direct booking and enquiry flows keep your revenue inside your business.</p>
              </div>
              <div className="p-5 bg-ivory border border-near-black/10">
                <div className="text-stone text-[11px] uppercase tracking-widest mb-1">Independence</div>
                <div className="text-[16px] font-display">100% Client Code Ownership</div>
                <p className="text-stone text-[13px] font-normal mt-1">You own all source code and assets. No proprietary vendor lock-in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors in Ireland */}
      <section className="bg-ivory py-24 md:py-32 px-5 md:px-8 lg:px-12 border-b border-near-black/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16 md:mb-24">
            <SectionLabel>COMMERCIAL SECTORS</SectionLabel>
            <h2 className="text-editorial-lg text-near-black mt-6">
              Tailored digital solutions for Irish industry.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {irishSectors.map((sector) => (
              <FadeIn key={sector.number}>
                <div className="p-8 md:p-10 bg-white border border-near-black/10 flex flex-col h-full hover:border-near-black/30 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-[13px] text-stone font-bold">{sector.number}</span>
                    <span className="text-[11px] tracking-widest font-sans uppercase text-stone font-medium">{sector.focus}</span>
                  </div>
                  <h3 className="font-display text-[28px] md:text-[32px] text-near-black mb-4">{sector.title}</h3>
                  <p className="font-sans text-stone text-[15px] leading-relaxed mb-8 flex-grow">{sector.description}</p>
                  <Link
                    href={sector.slug}
                    className="text-[12px] font-sans font-semibold tracking-widest uppercase text-near-black border-b border-near-black/30 pb-1 hover:border-near-black transition-colors self-start"
                  >
                    View Relevant Case Study →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Euro Pricing */}
      <section className="py-24 md:py-32 px-5 md:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-near-black/10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <SectionLabel>TRANSPARENT INVESTMENT</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6">
            Fixed Pricing in Euros (€). No Hidden Quotes.
          </h2>
          <p className="font-sans text-stone text-[16px] md:text-[18px] mt-4">
            Clear project milestones and fixed pricing for Irish businesses. All tiers include full client ownership and launch warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {irishPricing.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 lg:p-10 bg-white flex flex-col h-full ${
                tier.featured ? 'border-2 border-near-black' : 'border border-near-black/10'
              }`}
            >
              <h3 className="text-[20px] font-sans font-semibold uppercase tracking-wider text-near-black mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-[13px] text-stone uppercase tracking-wide">From</span>
                <span className="block text-[36px] md:text-[44px] font-display text-near-black mt-1">{tier.euroPrice}</span>
              </div>
              <p className="text-stone text-[14px] mb-6 pb-6 border-b border-near-black/10 min-h-[60px]">{tier.description}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-near-black">
                    <span className="text-stone text-[11px] mt-0.5">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="w-full text-center py-3.5 bg-near-black text-bone text-[12px] font-sans font-semibold tracking-widest uppercase hover:bg-charcoal transition-colors"
              >
                Inquire in Ireland →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="bg-near-black text-bone py-24 md:py-32 px-5 md:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionLabel dark>START YOUR PROJECT</SectionLabel>
            <h2 className="text-editorial-lg text-bone mt-6 mb-8">
              Let&apos;s build something memorable for your business in Ireland.
            </h2>
            <p className="font-sans text-bone/70 text-[17px] leading-relaxed mb-10">
              Speak directly with our studio team. We respond within 24 hours with honest recommendations, clear timelines, and fixed pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-bone text-near-black text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-ivory transition-colors"
              >
                Start an Enquiry
              </Link>
              <a
                href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hi TheoMedia, I'm based in Ireland and would like to discuss a website project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-bone/30 text-bone text-[13px] font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-bone/10 transition-colors"
              >
                WhatsApp Us Directly
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
