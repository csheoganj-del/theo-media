'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE } from '@/lib/constants';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  
  // Home and /work have dark backgrounds at the top
  const isDarkTop = (pathname === '/' || pathname === '/work') && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const closeMenu = () => setIsMobileOpen(false);

  // Colors based on state
  const textColor = isDarkTop ? 'text-bone' : 'text-near-black';
  const textMuted = isDarkTop ? 'text-bone/70' : 'text-near-black/70';
  const buttonBg = isDarkTop ? 'bg-bone text-near-black hover:bg-ivory' : 'bg-near-black text-bone hover:bg-charcoal';
  const hamburgerLine = isDarkTop ? 'bg-bone' : 'bg-near-black';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[var(--ease-enter)] ${
          isScrolled
            ? 'bg-bone/90 backdrop-blur-md shadow-[0_1px_0_rgba(20,18,16,0.06)]'
            : 'bg-transparent'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`text-[15px] md:text-[16px] font-sans font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${textColor} hover:text-stone`}
            aria-label="TheoMedia Home"
          >
            THEOMEDIA
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-sans font-medium tracking-[0.1em] uppercase transition-colors duration-200 ${textMuted} hover:${textColor}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-2 px-5 py-2.5 text-[12px] font-sans font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${buttonBg}`}
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative w-11 h-11 flex items-center justify-center z-50"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-[1.5px] transition-all duration-300 origin-center ${
                  isMobileOpen ? 'bg-near-black rotate-45 translate-y-[7.25px]' : hamburgerLine
                }`}
              />
              <span
                className={`block h-[1.5px] transition-all duration-300 ${
                  isMobileOpen ? 'bg-near-black opacity-0 scale-x-0' : hamburgerLine
                }`}
              />
              <span
                className={`block h-[1.5px] transition-all duration-300 origin-center ${
                  isMobileOpen ? 'bg-near-black -rotate-45 -translate-y-[7.25px]' : hamburgerLine
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-bone flex flex-col lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex-1 flex flex-col justify-center px-8 pt-20">
              <nav className="space-y-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="block text-[32px] md:text-[40px] font-display text-near-black py-3 hover:text-stone transition-colors"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-12 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-4 bg-near-black text-bone text-[13px] font-sans font-medium tracking-[0.1em] uppercase"
                  onClick={closeMenu}
                >
                  Start a Project →
                </Link>
                <a
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent(SITE.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 border border-near-black/15 text-near-black text-[13px] font-sans font-medium tracking-[0.1em] uppercase"
                  onClick={closeMenu}
                >
                  WhatsApp Us
                </a>
              </motion.div>

              <motion.div
                className="mt-auto pb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div className="flex items-center justify-between text-[11px] font-sans tracking-[0.15em] uppercase text-stone">
                  <span>{SITE.regions}</span>
                  <a href={`mailto:${SITE.email}`} className="hover:text-near-black transition-colors">
                    {SITE.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
