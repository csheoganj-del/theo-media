'use client';

import FadeIn from '@/components/ui/FadeIn';
import Accordion from '@/components/ui/Accordion';
import { homepageFaq } from '@/data/faq';
import Link from 'next/link';

export default function HomeFaq() {
  return (
    <section className="bg-warm-ivory text-primary-ink py-28 md:py-36 lg:py-40 px-5 md:px-8 lg:px-12 border-b border-border-rule">
      <div className="max-w-[900px] mx-auto">
        <FadeIn className="mb-12 md:mb-16">
          <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze font-medium block mb-3">
            11 / ARCHITECTURAL FAQ
          </span>
          <h2 className="font-display text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[1.02] text-primary-ink uppercase font-normal mb-4">
            FREQUENT QUESTIONS. HONEST ANSWERS.
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] text-secondary-text leading-relaxed max-w-2xl">
            Clear facts on investment, 100% code ownership, delivery timelines and technical architecture.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion items={homepageFaq} />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 pt-8 border-t border-border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] font-mono tracking-[0.1em] uppercase text-muted-text">
            <span>Planning an upcoming deployment?</span>
            <Link
              href="/pricing"
              className="editorial-underline text-primary-ink hover:text-oxidised-bronze font-medium"
            >
              <span>View Studio Engagements & Investment</span>
              <span>→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
