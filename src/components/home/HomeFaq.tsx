'use client';

import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import Accordion from '@/components/ui/Accordion';
import { homepageFaq } from '@/data/faq';
import Link from 'next/link';

export default function HomeFaq() {
  return (
    <section className="bg-bone py-24 md:py-32 lg:py-40 border-t border-near-black/10">
      <div className="max-w-[900px] mx-auto px-5 md:px-8 lg:px-12">
        <FadeIn>
          <SectionLabel>COMMON QUESTIONS</SectionLabel>
          <h2 className="text-editorial-lg text-near-black mt-6 mb-4">
            Web design questions, answered plainly.
          </h2>
          <p className="font-sans text-stone text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-2xl">
            Straight answers on cost, ownership, timelines and whether a custom website is the right move for a UK or Irish business.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion items={homepageFaq} />
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-10 text-[15px] text-stone">
            Planning a budget?{' '}
            <Link
              href="/journal/how-much-does-a-website-cost-uk"
              className="text-near-black border-b border-near-black/30 hover:border-near-black"
            >
              Read the 2026 UK website cost guide
            </Link>
            {' '}or{' '}
            <Link
              href="/pricing"
              className="text-near-black border-b border-near-black/30 hover:border-near-black"
            >
              view fixed packages from £895
            </Link>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
