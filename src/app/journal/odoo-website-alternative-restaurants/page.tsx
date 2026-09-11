import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Odoo Website Alternative for Restaurants: ERP Scope vs Guest Dining Experience | TheoMedia',
  description:
    'Why leading hospitality groups keep Odoo for back-of-house ERP and POS, while pairing it with custom, high-speed Next.js frontends for consumer dining websites and menus.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/journal/odoo-website-alternative-restaurants',
  },
  openGraph: {
    title: 'Odoo Website Alternative for Restaurants | TheoMedia',
    description:
      'Why hospitality venues pair back-of-house ERPs with bespoke Next.js dining frontends rather than using built-in ERP website builders.',
    url: 'https://www.theomedia.co.uk/journal/odoo-website-alternative-restaurants',
    type: 'article',
  },
};

export default function OdooWebsiteAlternativeRestaurantsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Odoo Website Alternative for Restaurants: ERP Scope vs Guest Dining Experience',
    description:
      'A balanced architectural assessment of Odoo in hospitality: why ERP platforms excel at inventory and accounting, but struggle with front-of-house consumer web experiences.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk',
    },
    datePublished: '2026-02-10T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    mainEntityOfPage: 'https://www.theomedia.co.uk/journal/odoo-website-alternative-restaurants',
  };

  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <div className="flex items-center gap-3 text-[12px] font-mono tracking-widest text-stone uppercase mb-4">
            <span>HOSPITALITY SYSTEMS &amp; ARCHITECTURE</span>
            <span>·</span>
            <span>PUBLISHED FEBRUARY 2026</span>
          </div>

          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            Odoo for Restaurants: Why Back-of-House ERPs Fail the Dining Room.
          </h1>

          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            Odoo is an extraordinary piece of enterprise software. Its modular suite handles accounting, supplier invoices, inventory counts, and POS terminals with remarkable coherence. But when operators attempt to use Odoo&apos;s built-in website builder as their public guest flagship, significant conversion issues arise.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Architecture Focus:</strong> Decoupled Frontends</div>
            <div><strong>Reading Time:</strong> 6 minutes</div>
            <div><strong>Scope:</strong> UK &amp; Ireland Multi-Unit &amp; Independent Venues</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Acknowledging Odoo&apos;s Real Operational Strengths
            </h2>
            <p className="mb-4">
              To be absolutely clear: <strong>we do not advise restaurateurs to replace Odoo as an operational ERP</strong>. For calculating dish recipe costs, tracking beverage cellar stock, managing table registers, and exporting VAT returns, Odoo is difficult to beat at its price point.
            </p>
            <p>
              The mistake is not using Odoo. The mistake is asking an operational ERP database to design an alluring, sensual dining storefront for prospective guests.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              The Divide Between Database Software and Dining Allure
            </h2>
            <p className="mb-4">
              Dining out is an emotional, aesthetic decision. Before someone reserves an £85-a-head dinner or anniversary table, they want to see the warmth of the room, browse an elegant seasonal menu, and feel the atmosphere.
            </p>
            <p className="mb-4">
              Odoo&apos;s CMS is engineered by enterprise database architects. As a result:
            </p>
            <div className="space-y-6 my-6">
              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[20px] text-near-black mb-2">Clunky, Form-Driven Layouts</h3>
                <p className="text-stone text-[15px]">
                  Odoo web pages feel like software portals. Menus resemble inventory spreadsheets rather than tactile culinary presentations.
                </p>
              </div>
              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[20px] text-near-black mb-2">Monolithic Server Latency</h3>
                <p className="text-stone text-[15px]">
                  Serving public website traffic from an active ERP server adds database query latency to every mobile page request. Without global edge CDN caching, mobile loading can be noticeably sluggish.
                </p>
              </div>
              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[20px] text-near-black mb-2">Rigid Hospitality Schema</h3>
                <p className="text-stone text-[15px]">
                  Odoo does not automatically generate the granular Schema.org <code>Restaurant</code> and <code>Menu</code> tags required for Google to index opening hours and dishes for local search packs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              The Modern Solution: Decoupled &ldquo;Headless&rdquo; Architecture
            </h2>
            <p className="mb-4">
              The most successful multi-unit operators do not replace Odoo. They decouple it:
            </p>
            <div className="p-8 bg-ivory border-2 border-near-black my-6 space-y-4">
              <div className="font-mono text-[13px] text-stone uppercase tracking-wider">The Decoupled Architecture Model</div>
              <ul className="space-y-3 font-sans text-[15px] text-near-black">
                <li><strong>Back of House:</strong> Keep Odoo (or your POS) for inventory, recipe costing, staff rotas, and accounting.</li>
                <li><strong>Guest Front of House:</strong> A bespoke, high-performance Next.js website deployed on edge infrastructure by TheoMedia.</li>
                <li><strong>Reservations &amp; Booking:</strong> Direct OpenTable, SevenRooms, or ResDiary modal integration embedded smoothly without interrupting the guest journey.</li>
              </ul>
            </div>
            <p>
              This gives you the best of both worlds: rigorous backend operational control, and an editorial, high-speed digital flagship that turns casual visitors into confirmed bookings.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>ARCHITECTURAL CONSULTATION</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Pairing your ERP with a bespoke guest website?
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            We help hospitality groups decouple their consumer website from heavy enterprise backends.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors"
            >
              Schedule Architecture Call →
            </Link>
            <Link
              href="/industries/restaurant-website-design"
              className="px-6 py-3 border border-bone/30 text-bone text-[12px] font-semibold tracking-wider uppercase hover:border-bone transition-colors"
            >
              View Restaurant Architecture
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
