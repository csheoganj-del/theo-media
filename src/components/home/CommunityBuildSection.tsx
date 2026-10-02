'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import { trackEvent } from '@/lib/analytics';

export default function CommunityBuildSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const impressionTracked = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || impressionTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !impressionTracked.current) {
            impressionTracked.current = true;
            trackEvent('community_build_home_impression');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCtaClick = (ctaName: string) => {
    trackEvent('community_build_home_click', { cta: ctaName });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-soft-paper text-primary-ink py-28 md:py-36 lg:py-40 px-5 md:px-8 lg:px-12 border-b border-border-rule"
      aria-labelledby="cb-home-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mb-14 md:mb-20">
          <FadeIn>
            <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze font-medium block mb-3">
              PROGRAMME INITIATIVE
            </span>
            <h2
              id="cb-home-heading"
              className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] text-primary-ink uppercase font-normal"
            >
              THREE INDEPENDENT BUSINESSES.<br />
              THREE DIRECT BUILDS EACH MONTH.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-8 space-y-4 max-w-2xl font-sans text-[16px] md:text-[18px] text-secondary-text leading-relaxed">
              <p>
                TheoMedia selects up to three independent businesses each month for a focused website build at a subsidized £495 programme rate.
              </p>
              <p className="text-muted-text text-[15px]">
                Engineered for founders and artisans where high-calibre digital architecture makes an immediate commercial difference.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Programme Metric Cards */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="p-8 bg-light-surface border border-border-rule rounded-[1px]">
              <span className="font-display text-4xl text-primary-ink block mb-2 font-normal">
                £495
              </span>
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-text">
                Subsidized Programme Rate
              </p>
            </div>

            <div className="p-8 bg-light-surface border border-border-rule rounded-[1px]">
              <span className="font-display text-4xl text-primary-ink block mb-2 font-normal">
                03
              </span>
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-text">
                Maximum Selected Projects / Month
              </p>
            </div>

            <div className="p-8 bg-light-surface border border-border-rule rounded-[1px]">
              <span className="font-display text-4xl text-primary-ink block mb-2 font-normal">
                £200
              </span>
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-text">
                Commitment Reservation
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Actions Strip */}
        <FadeIn delay={0.25}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-border-rule">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-oxidised-bronze" />
              <div className="text-[12px] font-mono uppercase tracking-[0.14em] text-secondary-text">
                ACTIVE COHORT: <span className="text-primary-ink font-medium">Applications Open</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <Link
                href="/community-build#apply"
                onClick={() => handleCtaClick('apply_primary')}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-primary-ink text-warm-ivory text-[11px] font-mono tracking-[0.14em] uppercase hover:bg-dark-accent transition-colors rounded-[1px]"
              >
                Apply for a Community Build →
              </Link>
              <Link
                href="/community-build#whats-included"
                onClick={() => handleCtaClick('whats_included_secondary')}
                className="editorial-underline text-[11px] font-mono tracking-[0.14em] uppercase text-secondary-text hover:text-primary-ink"
              >
                <span>Programme Inclusions</span>
                <span className="text-oxidised-bronze">→</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
