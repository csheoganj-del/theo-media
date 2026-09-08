'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 
        Rising Gradient Curtain Transition
        This creates a smooth, premium page transition effect on every navigation.
      */}
      <motion.div
        className="fixed inset-0 z-[9999] pointer-events-none bg-gradient-to-t from-charcoal via-near-black to-near-black"
        initial={{ y: '0%' }}
        animate={{ y: '-100%' }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />
      
      {/* 
        Slight fade-in for the page content 
      */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
