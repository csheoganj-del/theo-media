'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function HeroScene() {
  const shouldReduceMotion = useReducedMotion();
  
  // Refined Parallax and fade out on scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Shining light effect mapped to scroll
  const shinePosition = useTransform(scrollY, [0, 500], ['200%', '-50%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-near-black text-bone flex flex-col justify-between px-5 md:px-8 lg:px-12 py-8 pt-28 md:pt-32 lg:pt-40 overflow-hidden">
      <motion.div
        style={shouldReduceMotion ? {} : { y, opacity }}
        className="flex flex-col h-full flex-grow relative z-10 w-full max-w-[1440px] mx-auto"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full flex-grow w-full"
        >
          {/* Mobile-first top labels */}
          <div className="flex flex-col items-center text-center space-y-3 mb-6 md:mb-10 lg:mb-12 mt-6 md:mt-10 lg:mt-12">
            <motion.p variants={itemVariants} className="text-[10px] md:text-xs tracking-[0.3em] text-bone/60 uppercase font-medium">
              INDEPENDENT WEB DESIGN & DIGITAL PRODUCT STUDIO · UK & IRELAND
            </motion.p>
          </div>

          <div className="w-full flex-grow flex flex-col justify-center items-center text-center pb-8 lg:pb-12">
            
            {/* THEOMEDIA with shining light scroll effect — Brand Display */}
            <div className="font-display text-[16vw] md:text-[14vw] lg:text-[180px] xl:text-[220px] leading-[0.85] tracking-[-0.02em] mb-6 uppercase m-0 p-0 select-none" aria-hidden="true">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
                style={{
                  backgroundImage: 'linear-gradient(110deg, #F5F0E8 0%, #F5F0E8 40%, #FFFFFF 50%, #F5F0E8 60%, #F5F0E8 100%)',
                  backgroundSize: '200% auto',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundPositionX: shinePosition
                }}
              >
                THEOMEDIA
              </motion.span>
            </div>
            
            {/* Semantic H1 — Requested Primary Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-display text-[26px] sm:text-[34px] md:text-[42px] lg:text-[50px] text-bone max-w-4xl mx-auto leading-[1.1] mb-5 tracking-tight font-normal"
            >
              Websites and business software, built like products.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="font-sans text-[15px] sm:text-[16px] lg:text-[18px] text-bone/70 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12 px-4"
            >
              Distinctive website design, custom web applications, and digital products engineered for ambitious businesses across the UK and Ireland. 100% client-owned with zero platform lock-in.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-2">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-bone text-near-black font-medium tracking-[0.1em] text-[13px] rounded-sm hover:bg-ivory transition-all duration-300 text-center uppercase">
                Start a Project
              </Link>
              <Link href="/work" className="w-full sm:w-auto px-8 py-4 text-[13px] font-medium tracking-[0.1em] text-bone border border-bone/20 hover:border-bone/60 hover:bg-bone/10 transition-all duration-300 text-center uppercase rounded-sm">
                View the Work
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator & bottom metadata */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-full flex flex-col items-center justify-center pb-4 mt-8"
        >
          <div className="w-[1px] h-12 bg-bone/20 mb-6 hidden md:block overflow-hidden relative">
            <motion.div
              animate={{ y: [0, 50, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-full h-full bg-bone/60 absolute top-[-100%]"
            />
          </div>
          <p className="text-[10px] md:text-[11px] lg:text-xs tracking-widest text-bone/50 uppercase font-sans text-center">
            Founder-led · Custom-built · UK & Ireland · 100% Client Ownership
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
