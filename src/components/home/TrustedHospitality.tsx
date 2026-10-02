'use client';

import { useRef, Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';

const SECTORS_LINE1 = [
  "BOUTIQUE HOSPITALITY",
  "INDEPENDENT GASTRONOMY",
  "PRIVATE HEALTHCARE",
  "ARCHITECTURAL TRADES",
  "ARTISAN COMMERCE",
  "CINEMATOGRAPHY & MEDIA",
];

const SECTORS_LINE2 = [
  "DIRECT BOOKING ENGINES",
  "TABLE RESERVATIONS",
  "CONSULTATION PORTALS",
  "PORTFOLIO PLATFORMS",
  "SLOW-COMMERCE STORES",
  "BESPOKE WEB SYSTEMS",
];

export default function TrustedHospitality() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="bg-soft-paper text-primary-ink py-16 md:py-24 border-b border-border-rule overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-rule">
          <FadeIn>
            <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze font-medium block mb-2">
              02 / SECTOR EXPERTISE
            </span>
            <h2 className="font-display text-[28px] md:text-[36px] lg:text-[42px] leading-tight text-primary-ink font-normal">
              BUILT FOR HIGH-TRUST DISCIPLINES.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-[15px] md:text-[16px] text-secondary-text max-w-md leading-relaxed">
              Every industry requires a different commercial psychology. We engineer digital flagships tailored to the specific way your clients discover, evaluate and commit.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="relative py-4 flex flex-col gap-6 md:gap-8">
        <MarqueeRow direction="left" items={SECTORS_LINE1} />
        <MarqueeRow direction="right" items={SECTORS_LINE2} />
      </div>
    </section>
  );
}

function MarqueeRow({ direction, items }: { direction: 'left' | 'right'; items: string[] }) {
  const shouldReduceMotion = useReducedMotion();
  const loopArray = [...items, ...items, ...items, ...items];

  const initialX = direction === 'left' ? '0%' : '-50%';
  const animateX = direction === 'left' ? '-50%' : '0%';

  return (
    <div className="relative w-full overflow-hidden flex items-center h-12 md:h-16">
      <motion.div
        className="flex items-center whitespace-nowrap font-display text-[26px] md:text-[38px] text-primary-ink/80"
        initial={{ x: initialX }}
        animate={shouldReduceMotion ? { x: initialX } : { x: animateX }}
        transition={{
          ease: 'linear',
          duration: 45,
          repeat: Infinity,
        }}
      >
        {loopArray.map((item, i) => (
          <Fragment key={i}>
            <span className="inline-block hover:text-primary-ink transition-colors duration-200">
              {item}
            </span>
            <span className="inline-block mx-6 md:mx-10 text-border-rule font-serif text-[20px] md:text-[28px]">
              /
            </span>
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
