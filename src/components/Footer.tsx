import Link from 'next/link';
import { SITE, NAV_LINKS } from '@/lib/constants';

const capabilities = [
  { label: 'Custom Websites', href: '/services/websites' },
  { label: 'Ecommerce Development', href: '/services/ecommerce' },
  { label: 'Web Applications', href: '/services/web-applications' },
  { label: 'Business Software', href: '/services/business-software' },
  { label: 'All Capabilities →', href: '/services' },
];

const industries = [
  { label: 'Restaurants & Hospitality', href: '/industries/restaurant-website-design' },
  { label: 'Hotels & Boutique Stays', href: '/industries/hotel-website-design' },
  { label: 'Trades & Construction', href: '/industries/trades-construction-website-design' },
  { label: 'Healthcare & Clinics', href: '/industries/healthcare-clinic-website-design' },
  { label: 'Luxury DTC Ecommerce', href: '/industries/ecommerce-website-design' },
  { label: 'Small Business Web Design', href: '/industries/small-business-website-design' },
  { label: 'All Sector Solutions →', href: '/industries' },
];

const insights = [
  { label: 'UK Website Cost Guide 2026', href: '/insights/how-much-does-a-website-cost-uk' },
  { label: 'Squarespace vs Custom Next.js', href: '/insights/squarespace-vs-custom-website' },
  { label: 'Restaurant Web Economics', href: '/insights/restaurant-website-cost-uk' },
  { label: 'All Insights & Comparisons →', href: '/insights' },
];

export function Footer() {
  return (
    <footer className="bg-near-black text-bone">
      {/* ── Final CTA Section ── */}
      <section className="px-5 md:px-8 lg:px-12 pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[900px]">
            <p className="text-[13px] md:text-[15px] font-sans text-bone/40 leading-relaxed mb-6 tracking-wide">
              YOUR NEXT CUSTOMER<br />
              WILL SEE YOUR WEBSITE<br />
              BEFORE THEY MEET YOU.
            </p>
            <h2 className="text-editorial-lg text-bone mb-10">
              Make the{' '}
              <em className="font-display italic">first impression</em>
              <br />
              count.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-[14px] md:text-[16px] font-sans font-medium tracking-[0.1em] uppercase text-bone border-b border-bone/30 pb-2 hover:border-bone transition-colors duration-300 group"
            >
              Start a Project
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="h-px bg-bone/10" />
      </div>

      {/* ── Footer Grid ── */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Direct Contact */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-[20px] md:text-[24px] font-sans font-bold tracking-[0.15em] uppercase text-bone block mb-4"
            >
              THEOMEDIA
            </Link>
            <p className="text-[14px] text-bone/50 leading-relaxed max-w-[280px] mb-6">
              Independent Web Design &amp; Digital Product Studio. Crafting distinctive websites and high-conversion digital flagships across the UK and Ireland.
            </p>
            <div className="space-y-2 text-[13px]">
              <div>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-bone/70 hover:text-bone transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <a
                  href={SITE.phoneTel}
                  className="text-bone/70 hover:text-bone transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/web-design-ireland"
                  className="text-gold/90 hover:text-gold text-[12px] tracking-wide uppercase transition-colors inline-block"
                >
                  Ireland Studio Hub →
                </Link>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-bone/30 mb-5">
              Capabilities
            </h4>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap.href}>
                  <Link
                    href={cap.href}
                    className="text-[14px] text-bone/60 hover:text-bone transition-colors duration-200"
                  >
                    {cap.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-bone/30 mb-5 mt-8">
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-bone/60 hover:text-bone transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/case-studies"
                  className="text-[14px] text-bone/60 hover:text-bone transition-colors duration-200"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-bone/30 mb-5">
              Sectors &amp; Industries
            </h4>
            <ul className="space-y-3">
              {industries.map((ind) => (
                <li key={ind.href}>
                  <Link
                    href={ind.href}
                    className="text-[14px] text-bone/60 hover:text-bone transition-colors duration-200"
                  >
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights & Guides */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-bone/30 mb-5">
              Insights &amp; Guides
            </h4>
            <ul className="space-y-3 mb-8">
              {insights.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-bone/60 hover:text-bone transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-bone/30 mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-3">
              <div>
                <a
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent(SITE.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-bone/60 hover:text-bone transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                  <span>↗</span>
                </a>
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-widest text-bone/40 uppercase block">
                  Geographic Coverage:
                </span>
                <span className="text-[13px] text-bone/70">
                  {SITE.regions}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="h-px bg-bone/10" />
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 pb-24 gap-4">
          <p className="text-[12px] text-bone/30">
            © {SITE.year} TheoMedia. Independent Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[12px] text-bone/30 hover:text-bone/60 transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-[12px] text-bone/30 hover:text-bone/60 transition-colors duration-200"
            >
              Sitemap
            </Link>
            <span className="text-[12px] text-bone/20">
              {SITE.regions}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
