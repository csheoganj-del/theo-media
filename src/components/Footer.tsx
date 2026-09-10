import Link from 'next/link';
import { SITE, NAV_LINKS } from '@/lib/constants';

const capabilities = [
  'Websites',
  'Ecommerce',
  'Booking',
  'Web Apps',
  'Software',
];

const industryLinks = [
  'Hospitality',
  'Restaurants',
  'Automotive',
  'Trades',
  'Healthcare',
  'Ecommerce',
  'Public Figures',
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
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-[20px] md:text-[24px] font-sans font-bold tracking-[0.15em] uppercase text-bone block mb-4"
            >
              THEOMEDIA
            </Link>
            <p className="text-[14px] text-bone/50 leading-relaxed max-w-[280px]">
              Distinctive websites and digital experiences for ambitious businesses across the UK, Ireland, and Europe.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-bone/30 mb-5">
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
                <Link href="/case-studies" className="text-[14px] text-bone/60 hover:text-bone transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-bone/30 mb-5">
              Capabilities
            </h4>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap}>
                  <span className="text-[14px] text-bone/60">{cap}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-bone/30 mb-5 mt-8">
              Industries
            </h4>
            <ul className="space-y-3">
              {industryLinks.map((ind) => (
                <li key={ind}>
                  <span className="text-[14px] text-bone/60">{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-bone/30 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[14px] text-bone/60 hover:text-bone transition-colors duration-200"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.phoneTel}
                  className="text-[14px] text-bone/60 hover:text-bone transition-colors duration-200"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent(SITE.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-bone/60 hover:text-bone transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li className="pt-2">
                <span className="text-[12px] text-bone/30 tracking-[0.1em] uppercase">
                  {SITE.regions}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="h-px bg-bone/10" />
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 pb-24 gap-4">
          <p className="text-[12px] text-bone/30">
            © {SITE.year} TheoMedia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[12px] text-bone/30 hover:text-bone/60 transition-colors duration-200"
            >
              Privacy
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
