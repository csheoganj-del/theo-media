import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Odoo Alternative for Restaurants: ERP Scope vs Guest Dining Experience',
  description:
    'Why leading hospitality groups separate back-of-house ERP systems from consumer-facing websites. Compare Odoo website builder with headless Next.js hospitality architecture.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/insights/odoo-alternative-restaurants',
  },
  openGraph: {
    title: 'Odoo Alternative for Restaurants: ERP Scope vs Guest Experience | TheoMedia',
    description:
      'Why leading hospitality venues separate back-of-house ERP systems from consumer-facing dining websites.',
    url: 'https://www.theomedia.co.uk/insights/odoo-alternative-restaurants',
    type: 'article',
  },
};

export default function OdooAlternativeRestaurantsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Odoo Alternative for Restaurants: ERP Scope vs Guest Dining Experience',
    description:
      'An objective technical assessment of Odoo for restaurants: why ERP platforms excel at inventory and accounting, but struggle with front-of-house consumer web experiences.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk',
    },
    datePublished: '2026-02-10T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    mainEntityOfPage: 'https://www.theomedia.co.uk/insights/odoo-alternative-restaurants',
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
            Odoo is an extraordinary piece of business engineering. Its modular suite manages accounting, warehouse inventory, employee rotas, and POS terminals with remarkable cohesion. But when hospitality operators attempt to use Odoo’s built-in website builder as their public dining storefront, serious conversion problems emerge.
          </p>

          <div className="border-t border-b border-near-black/10 py-6 mb-12 flex flex-wrap gap-8 text-[13px] font-sans text-stone">
            <div><strong>Focus:</strong> Enterprise Hospitality Architecture</div>
            <div><strong>Reading Time:</strong> 6 minutes</div>
            <div><strong>Applicable Sectors:</strong> Multi-Unit Venues, Gastropubs, Restaurant Groups</div>
          </div>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              Acknowledging Odoo’s Real Strengths
            </h2>
            <p className="mb-4">
              Let us be clear: we do not advise restaurant operators to abandon Odoo if they already rely on it for back-of-house operations. For calculating food costs, tracking supplier invoices, managing table turnover at the register, and synchronising VAT reports, Odoo is difficult to beat at its price point.
            </p>
            <p>
              The mistake is assuming that an enterprise resource planning system should also be your guest experience designer.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              The Tension Between Enterprise Software and Dining Romance
            </h2>
            <p className="mb-4">
              Dining is an emotional, sensorial purchase. Before a guest books an £85-per-head anniversary dinner or corporate lunch, they want to feel the warmth of the lighting, study the provenance of the ingredients, and immerse themselves in the room’s atmosphere.
            </p>
            <p className="mb-4">
              Odoo’s web builder is engineered by database architects, not editorial designers. The consequences are predictable:
            </p>
            <div className="space-y-6 my-6">
              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[20px] text-near-black mb-2">Clunky, Form-Driven Navigation</h3>
                <p className="text-stone text-[15px]">
                  Odoo pages feel like software portals. Menus resemble product inventory tables rather than tactile culinary narratives.
                </p>
              </div>
              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[20px] text-near-black mb-2">Monolithic Hosting Latency</h3>
                <p className="text-stone text-[15px]">
                  Odoo servers must process complex relational database queries for each web session. Without dedicated global edge CDN caching, mobile page loads lag significantly behind modern web standards.
                </p>
              </div>
              <div className="p-6 bg-ivory border border-near-black/10">
                <h3 className="font-display text-[20px] text-near-black mb-2">Rigid Hospitality Schema</h3>
                <p className="text-stone text-[15px]">
                  Odoo’s CMS lacks automated structured JSON-LD schemas tailored for hospitality, making it harder for Google to parse menu items, dietary flags, and opening hours for local pack results.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">
              The Modern Architecture: Decoupled &ldquo;Headless&rdquo; Hospitality
            </h2>
            <p className="mb-4">
              The most profitable hospitality groups in London, Dublin, and Edinburgh do not compromise. They use a <strong>decoupled (headless) architecture</strong>:
            </p>
            <div className="p-8 bg-ivory border-2 border-near-black my-6 space-y-4">
              <div className="font-mono text-[13px] text-stone uppercase tracking-wider">The Hybrid Architecture Model</div>
              <ul className="space-y-3 font-sans text-[15px] text-near-black">
                <li><strong>Back of House:</strong> Odoo / Lightspeed / Toast handles inventory, POS, staff rotas, and accounting.</li>
                <li><strong>Guest Front of House:</strong> A custom TheoMedia Next.js digital flagship deployed on Vercel edge infrastructure.</li>
                <li><strong>Reservations &amp; Enquiries:</strong> Seamless OpenTable, SevenRooms, or Resy integration embedded cleanly without redirecting or breaking brand immersion.</li>
              </ul>
            </div>
            <p>
              This gives you the best of both worlds: robust inventory control behind the scenes, and a lightning-fast, Michelin-grade digital flagship for your guests.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>ARCHITECTURAL CONSULTATION</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Pairing Odoo with a bespoke guest frontend?
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            We help multi-venue operators and dining groups decouple their consumer website from heavy enterprise backends.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors"
          >
            Schedule a Technical Discovery Call →
          </Link>
        </div>
      </article>
    </main>
  );
}
