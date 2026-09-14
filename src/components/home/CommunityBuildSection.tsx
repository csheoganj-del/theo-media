'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
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
      className="bg-ivory text-near-black py-24 md:py-32 lg:py-36 px-5 md:px-8 lg:px-12 border-t border-near-black/10"
      aria-labelledby="cb-home-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mb-14 md:mb-20">
          <FadeIn>
            <SectionLabel>COMMUNITY BUILD PROGRAMME</SectionLabel>
            <h2
              id="cb-home-heading"
              className="font-display text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] leading-[1.08] text-near-black mt-6 uppercase"
            >
              Three independent businesses.
              <br />
              Three focused builds each month.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-8 space-y-4 max-w-2xl font-sans text-[16px] md:text-[18px] text-charcoal/80 leading-relaxed">
              <p>
                For our Autumn 2026 pilot, TheoMedia is selecting up to three independent
                businesses each month for a complete website project at a fixed £495 programme
                rate.
              </p>
              <p className="text-stone">
                It is designed for businesses where we believe a stronger digital presence can make
                a meaningful difference — while keeping the number of projects deliberately small
                enough for us to give each one proper attention.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Programme Info Cards */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="p-6 md:p-8 bg-bone border border-near-black/10 rounded-sm">
              <span className="font-display text-3xl md:text-4xl text-near-black block mb-2">
                £495
              </span>
              <p className="text-[12px] font-sans font-medium uppercase tracking-[0.18em] text-stone">
                Fixed programme rate
              </p>
            </div>

            <div className="p-6 md:p-8 bg-bone border border-near-black/10 rounded-sm">
              <span className="font-display text-3xl md:text-4xl text-near-black block mb-2">
                3
              </span>
              <p className="text-[12px] font-sans font-medium uppercase tracking-[0.18em] text-stone">
                Maximum accepted projects each month
              </p>
            </div>

            <div className="p-6 md:p-8 bg-bone border border-near-black/10 rounded-sm">
              <span className="font-display text-3xl md:text-4xl text-near-black block mb-2">
                £200
              </span>
              <p className="text-[12px] font-sans font-medium uppercase tracking-[0.18em] text-stone">
                Reserves an accepted place
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Pilot Indicator & CTAs */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-near-black/10">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <div className="text-[12px] font-mono uppercase tracking-widest text-stone">
                PILOT: <span className="text-near-black font-sans font-medium">September · October · November 2026</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <Link
                href="/community-build#apply"
                onClick={() => handleCtaClick('apply_primary')}
                className="inline-flex items-center justify-center px-7 py-4 bg-near-black text-bone hover:bg-charcoal text-[12px] font-sans font-semibold tracking-[0.15em] uppercase transition-colors rounded-sm"
              >
                Apply for a Community Build
              </Link>
              <Link
                href="/community-build#whats-included"
                onClick={() => handleCtaClick('whats_included_secondary')}
                className="inline-flex items-center gap-2 text-[12px] font-sans font-medium tracking-[0.15em] uppercase text-stone hover:text-near-black transition-colors"
              >
                <span>See what the £495 programme includes</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Small Print */}
        <FadeIn delay={0.4}>
          <div className="mt-8 max-w-3xl space-y-2 text-[12px] font-sans text-stone/80 leading-relaxed">
            <p>Applications are reviewed for suitability and scope.</p>
            <p>
              A place is confirmed only after acceptance and receipt of the £200 reservation
              payment.
            </p>
            <p>
              Larger websites, ecommerce, complex booking systems, custom software and advanced
              integrations are quoted separately.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
