'use client';

import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { industries } from '@/data/industries';

export default function IndustriesScene() {
  return (
    <section className="charcoal-section bg-charcoal text-bone py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-16 md:mb-24">
          <div className="md:w-1/3">
            <FadeIn>
              <SectionLabel dark={true}>SECTOR ARCHITECTURE</SectionLabel>
            </FadeIn>
          </div>
          <div className="md:w-2/3">
            <FadeIn delay={0.1}>
              <h2 className="text-editorial-lg font-display text-bone">
                WE DON&apos;T DESIGN EVERY BUSINESS THE SAME WAY.
              </h2>
              <p className="font-sans text-bone/60 text-[16px] md:text-[18px] mt-4 max-w-2xl leading-relaxed">
                Hospitality requires atmospheric allure and direct reservation modals. Healthcare demands medical credibility and confidential booking. Explore how we tailor digital architecture by sector.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="flex flex-col border-t border-bone/10">
          {industries.map((industry, index) => {
            const Content = (
              <div className="group flex flex-col md:flex-row md:items-center justify-between py-7 border-b border-bone/10 transition-colors duration-300 hover:bg-bone/[0.02]">
                <div className="flex items-center gap-3 mb-3 md:mb-0">
                  <span className="text-[19px] md:text-[23px] lg:text-[26px] font-display text-bone/70 group-hover:text-bone transition-colors duration-300">
                    {industry.name}
                  </span>
                  {industry.href && (
                    <span className="text-[14px] text-bone/30 group-hover:text-gold group-hover:translate-x-1.5 transition-all duration-300">
                      ↗
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {industry.priorities.map((priority, pIndex) => (
                    <span
                      key={pIndex}
                      className="text-[11px] tracking-wider uppercase text-bone/40 px-3 py-1 border border-bone/10 rounded-full group-hover:border-bone/20 group-hover:text-bone/60 transition-colors"
                    >
                      {priority}
                    </span>
                  ))}
                </div>
              </div>
            );

            return (
              <FadeIn key={industry.name} delay={index * 0.04}>
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
            className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-bone/70 hover:text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors duration-200 inline-flex items-center gap-2"
          >
            <span>Explore All Sector Solutions</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
