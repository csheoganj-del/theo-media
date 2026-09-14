'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE, NAV_LINKS } from '@/lib/constants';

const capabilities = [
  { label: 'Bespoke Web Design', href: '/web-design' },
  { label: 'Business Software', href: '/business-software' },
  { label: 'All Capabilities →', href: '/services' },
];

const industries = [
  { label: 'Restaurants & Hospitality', href: '/industries/restaurant-website-design' },
  { label: 'Hotels & Boutique Stays', href: '/industries/hotel-website-design' },
  { label: 'Trades & Construction', href: '/industries/trades-construction-website-design' },
  { label: 'Healthcare & Clinics', href: '/industries/healthcare-clinic-website-design' },
  { label: 'All Sector Solutions →', href: '/industries' },
];

const journalGuides = [
  { label: 'UK Website Cost Guide 2026', href: '/journal/how-much-does-a-website-cost-uk' },
  { label: 'Squarespace vs Custom Web Design', href: '/journal/squarespace-vs-custom-website' },
  { label: 'All Articles & Analysis →', href: '/journal' },
];

export function Footer() {
  const pathname = usePathname();
  const isHomepageOrContact = pathname === '/' || pathname === '/contact';

  return (
    <footer className="bg-near-black text-bone">
      {/* ── Final CTA Section (Displayed only on subpages where no dedicated page CTA exists) ── */}
      {!isHomepageOrContact && (
        <>
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
        </>
      )}

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
              <div className="pt-3 flex items-center gap-4">
                <a
                  href="https://instagram.com/theomedia.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone/50 hover:text-bone text-[12px] uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                  aria-label="TheoMedia Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61594428231748&sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone/50 hover:text-bone text-[12px] uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                  aria-label="TheoMedia Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Capabilities & Studio Navigation */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-bone/30 mb-5">
              Services
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
              Navigation
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
              Specialised Sectors
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

          {/* The Journal & Enquiries */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-bone/30 mb-5">
              The Journal
            </h4>
            <ul className="space-y-3 mb-8">
              {journalGuides.map((item) => (
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
              Direct Contact
            </h4>
            <div className="space-y-3">
              <div>
                <a
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent(SITE.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-bone/60 hover:text-bone transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <span>WhatsApp Us</span>
                  <span>↗</span>
                </a>
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-widest text-bone/40 uppercase block">
                  Markets Served:
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
              Privacy &amp; Terms
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
