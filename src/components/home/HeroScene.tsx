'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export default function HeroScene() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-warm-ivory text-primary-ink flex flex-col justify-between px-5 md:px-8 lg:px-12 pt-28 md:pt-36 lg:pt-40 pb-10 border-b border-border-rule overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-between flex-grow">
        
        {/* Top Architectural Coordinate Strip */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between pb-6 mb-8 md:mb-12 border-b border-border-rule text-[11px] md:text-[12px] font-mono tracking-[0.14em] uppercase text-muted-text"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-oxidised-bronze" />
            <span className="text-secondary-text font-medium">THEOMEDIA STUDIO</span>
            <span className="hidden sm:inline text-border-rule">/</span>
            <span className="hidden sm:inline">INDEPENDENT PRACTICE</span>
          </div>
          <div className="flex items-center gap-4 text-right">
            <span className="hidden md:inline">UK &amp; IRELAND · WORKING INTERNATIONALLY</span>
            <span className="text-oxidised-bronze">EST. 2024</span>
          </div>
        </motion.div>

        {/* Center Editorial Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="my-auto py-6 md:py-10 max-w-5xl"
        >
          {/* Micro-Label */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="text-[11px] md:text-[12px] font-mono tracking-[0.18em] uppercase text-oxidised-bronze font-medium">
              01 / DIRECTION
            </span>
          </motion.div>

          {/* Desktop hero H1: clamp(4.5rem, 9vw, 9rem) with deliberate line breaks */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-[clamp(3.8rem,8.5vw,8.5rem)] leading-[0.92] tracking-[-0.025em] text-primary-ink uppercase font-normal mb-8 md:mb-10 select-none"
          >
            LOOK ESTABLISHED.<br />
            GET CHOSEN.
          </motion.h1>

          {/* Controlled paragraph under 3 lines on desktop */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-[17px] md:text-[20px] lg:text-[21px] text-secondary-text max-w-2xl leading-[1.55] mb-10 md:mb-12 font-normal"
          >
            High-end websites and digital systems for businesses that have outgrown ordinary web design.
          </motion.p>

          {/* Controlled action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary-ink text-warm-ivory text-[12px] font-sans font-medium tracking-[0.14em] uppercase hover:bg-dark-accent transition-colors duration-200 rounded-[1px]"
            >
              Discuss a Project →
            </Link>

            <Link
              href="#selected-work"
              className="editorial-underline text-[12px] font-sans font-medium tracking-[0.14em] uppercase text-secondary-text hover:text-primary-ink"
            >
              <span>Explore Selected Work</span>
              <span className="text-oxidised-bronze">↓</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Editorial Meta Index */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-6 border-t border-border-rule grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px] font-mono tracking-[0.12em] uppercase text-muted-text"
        >
          <div className="flex items-center gap-2">
            <span className="text-oxidised-bronze">01</span>
            <span className="text-secondary-text">Strategy First</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-oxidised-bronze">02</span>
            <span className="text-secondary-text">Editorial Restraint</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-oxidised-bronze">03</span>
            <span className="text-secondary-text">Modern Engineering</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-oxidised-bronze">04</span>
            <span className="text-secondary-text">100% Client-Owned</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
