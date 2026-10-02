'use client';

import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import { industries } from '@/data/industries';

export default function IndustriesScene() {
  return (
    <section className="bg-warm-ivory text-primary-ink py-28 md:py-36 lg:py-44 px-5 md:px-8 lg:px-12 border-b border-border-rule">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-border-rule mb-16 md:mb-20">
          <FadeIn>
            <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze font-medium block mb-3">
              08 / SECTOR ARCHITECTURE
            </span>
            <h2 className="font-display text-[clamp(2.4rem,4.8vw,4.8rem)] leading-[1.02] text-primary-ink uppercase font-normal">
              DISTINCT DISCIPLINES. TAILORED FLOWS.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-secondary-text text-[15px] md:text-[17px] max-w-md leading-relaxed">
              Hospitality requires atmosphere and instant bookings. Healthcare demands clinical trust and privacy. We architect customer journeys specific to your sector.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col border-t border-border-rule">
          {industries.map((industry, index) => {
            const Content = (
              <div className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-border-rule transition-colors duration-200 hover:bg-soft-paper/40">
                <div className="flex items-center gap-4 mb-3 md:mb-0">
                  <span className="text-[11px] font-mono tracking-[0.14em] text-oxidised-bronze">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-[20px] md:text-[24px] lg:text-[28px] font-display text-primary-ink group-hover:text-dark-accent transition-colors">
                    {industry.name}
                  </span>
                  {industry.href && (
                    <span className="text-[14px] text-muted-text group-hover:text-primary-ink group-hover:translate-x-1 transition-all duration-200">
                      ↗
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {industry.priorities.map((priority, pIndex) => (
                    <span
                      key={pIndex}
                      className="text-[10px] font-mono tracking-wider uppercase text-muted-text px-3 py-1 border border-border-rule rounded-[1px] group-hover:border-secondary-text/30 group-hover:text-secondary-text transition-colors"
                    >
                      {priority}
                    </span>
                  ))}
                </div>
              </div>
            );

            return (
              <FadeIn key={industry.name} delay={index * 0.03}>
                {industry.href ? (
                  <Link href={industry.href} className="block">
                    {Content}
                  </Link>
                ) : (
                  Content
                )}
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            href="/industries"
            className="editorial-underline text-[12px] font-mono tracking-[0.14em] uppercase text-primary-ink hover:text-oxidised-bronze"
          >
            <span>Explore All Sector Solutions</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
