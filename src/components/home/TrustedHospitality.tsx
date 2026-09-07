'use client';

import { useRef, Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

const ROW1 = ["BALLYFIN DEMESNE", "BORGO SANTO PIETRO", "RESCHIO", "TWIN FARMS", "THE PITCHER INN", "LANDHAUS AM STEIN", "SAN CANZIAN", "MENEGHETTI", "BALLYNAHINCH CASTLE", "INVERLOCHY CASTLE"];
const ROW2 = ["GORA KADAN", "NISHIMURAYA HONKAN", "BENIYA MUKAYU", "RYOKAN KURASHIKI", "ZABORIN", "THE HANOK HERITAGE", "NAMSUHEON HANOK HOTEL", "THE SIAM", "THE DATAI LANGKAWI", "SHINTA MANI WILD", "CAPE WELIGAMA"];
const ROW3 = ["SABI SABI", "LONDOLOZI", "ANGAMA", "COTTAR'S 1920s CAMP", "ROYAL MALEWANE", "AWASI PATAGONIA", "TIERRA PATAGONIA", "INKATERRA LA CASONA", "EXPLORA"];

export default function TrustedHospitality() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="bg-near-black text-bone py-32 md:py-48 overflow-hidden relative border-t border-bone/5">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 mb-20 md:mb-32">
        <FadeIn>
          <SectionLabel className="text-stone">TRUSTED BY</SectionLabel>
          <h2 className="font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-8 text-bone mt-6">
            HOSPITALITY BRANDS<br />WE&apos;VE WORKED WITH.
          </h2>
          <p className="font-sans text-[17px] md:text-[20px] leading-relaxed text-stone max-w-2xl">
            From independent estates and boutique hotels to ryokans, safari lodges and wilderness retreats, our work spans hospitality businesses across Europe, the USA, Asia, Africa and South America.
          </p>
        </FadeIn>
      </div>

      <div className="relative py-12 md:py-24 border-y border-bone/5 select-none flex flex-col gap-12 md:gap-20">
        <Row direction="left" label="EUROPE / USA" arr={ROW1} />
        <Row direction="right" label="JAPAN / KOREA / ASIA" arr={ROW2} />
        <Row direction="left" label="AFRICA / SOUTH AMERICA" arr={ROW3} />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 mt-20 md:mt-32">
        <FadeIn className="flex flex-col items-start gap-8">
          <p className="font-sans text-[15px] md:text-[18px] text-stone max-w-xl">
            Selected hospitality brands and properties we&apos;ve had the opportunity to work with.
          </p>
          <Link 
            href="/case-studies/boutique-hotel-website-design"
            className="text-[12px] font-sans font-medium tracking-[0.15em] uppercase text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors inline-flex items-center"
          >
            VIEW HOSPITALITY WORK →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function BrandItem({ text, isForeground }: { text: string, isForeground: boolean }) {
  // Center 50% of the screen is the trigger zone
  const viewportConfig = { margin: "0px -25% 0px -25%", amount: "some" as const };
  
  if (!isForeground) {
    // The background (ghost) layer fades completely to 0 in the center to prevent overlapping letters
    return (
      <motion.span
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="inline-block origin-center"
      >
        {text}
      </motion.span>
    );
  }

  // The foreground layer scales and glows, becoming the single crisp layer
  // NOTE: letter-spacing animation is intentionally removed. Changing letter-spacing dynamically
  // alters layout width, causing the infinite marquee to rubber-band and desync.
  return (
    <motion.span
      initial={{ 
        scale: 1, 
        y: 0, 
        textShadow: "none",
        color: "#F5F0E8" 
      }}
      whileInView={{ 
        scale: 1.04, 
        y: -1.5, 
        textShadow: "0px 4px 20px rgba(255, 255, 255, 0.4)",
        color: "#FFFFFF" 
      }}
      viewport={viewportConfig}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="inline-block origin-center"
    >
      {text}
    </motion.span>
  );
}

function BrandSeparator({ isForeground }: { isForeground: boolean }) {
  const viewportConfig = { margin: "0px -25% 0px -25%", amount: "some" as const };
  
  if (!isForeground) {
    return (
      <motion.span 
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="inline-block mx-6 md:mx-10 text-stone/40"
      >
        ·
      </motion.span>
    );
  }
  
  return <span className="inline-block mx-6 md:mx-10 text-stone/40">·</span>;
}

function Row({ direction, label, arr }: { direction: 'left' | 'right', label: string, arr: string[] }) {
  const shouldReduceMotion = useReducedMotion();
  
  const initialX = direction === 'left' ? "0%" : "-50%";
  const animateX = direction === 'left' ? "-50%" : "0%";
  
  const transitionProps = {
    ease: "linear",
    duration: 120,
    repeat: Infinity,
  };

  const loopArray = [...arr, ...arr, ...arr, ...arr];

  const content = (isForeground: boolean) => (
    <div className="flex items-center whitespace-nowrap font-display text-[44px] md:text-[80px]">
      {loopArray.map((text, i) => (
        <Fragment key={i}>
          <BrandItem text={text} isForeground={isForeground} />
          <BrandSeparator isForeground={isForeground} />
        </Fragment>
      ))}
    </div>
  );

  // Wider center focus area for the mask so long words remain readable
  const maskGradient = 'linear-gradient(to right, transparent 0%, transparent 10%, black 25%, black 75%, transparent 90%, transparent 100%)';

  return (
    <div className="relative w-full">
      <div className="absolute -top-8 left-5 md:left-12 text-[9px] md:text-[10px] tracking-[0.2em] font-sans text-stone uppercase z-10">
        {label}
      </div>
      
      <div className="relative w-full overflow-hidden flex items-center h-[60px] md:h-[100px]">
        {/* Background Ghost Text */}
        <motion.div 
          className="absolute text-bone/20 flex w-max"
          initial={{ x: initialX }}
          animate={shouldReduceMotion ? { x: initialX } : { x: animateX }}
          transition={transitionProps}
        >
          {content(false)}
        </motion.div>
        
        {/* Foreground Highlighted Text with CSS Mask */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            maskImage: maskGradient,
            WebkitMaskImage: maskGradient
          }}
        >
          <motion.div 
            className="absolute text-bone flex w-max"
            initial={{ x: initialX }}
            animate={shouldReduceMotion ? { x: initialX } : { x: animateX }}
            transition={transitionProps}
          >
            {content(true)}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
