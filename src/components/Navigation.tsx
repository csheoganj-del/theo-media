'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE } from '@/lib/constants';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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

  const textColor = 'text-primary-ink';
  const textMuted = 'text-secondary-text';
  const buttonBg = 'bg-primary-ink text-warm-ivory hover:bg-dark-accent';
  const hamburgerLine = 'bg-primary-ink';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? 'bg-warm-ivory/95 backdrop-blur-md border-b border-border-rule shadow-sm'
            : 'bg-transparent'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo / Typographic Wordmark */}
          <Link
            href="/"
            className={`text-[15px] md:text-[16px] font-sans font-semibold tracking-[0.18em] uppercase transition-colors duration-200 ${textColor} hover:text-oxidised-bronze`}
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
                className={`text-[12px] font-mono tracking-[0.12em] uppercase transition-colors duration-200 ${textMuted} hover:${textColor}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-2 px-5 py-2.5 text-[11px] font-mono font-medium tracking-[0.14em] uppercase transition-colors duration-200 rounded-[1px] ${buttonBg}`}
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
                  isMobileOpen ? 'bg-primary-ink rotate-45 translate-y-[7.25px]' : hamburgerLine
                }`}
              />
              <span
                className={`block h-[1.5px] transition-all duration-300 ${
                  isMobileOpen ? 'bg-primary-ink opacity-0 scale-x-0' : hamburgerLine
                }`}
              />
              <span
                className={`block h-[1.5px] transition-all duration-300 origin-center ${
                  isMobileOpen ? 'bg-primary-ink -rotate-45 -translate-y-[7.25px]' : hamburgerLine
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-warm-ivory text-primary-ink flex flex-col lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex-1 flex flex-col justify-center px-8 pt-20">
              <nav className="space-y-3">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="block text-[32px] md:text-[38px] font-display text-primary-ink py-2 hover:text-oxidised-bronze transition-colors"
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
                transition={{ delay: 0.3, duration: 0.35 }}
              >
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-4 bg-primary-ink text-warm-ivory text-[12px] font-mono tracking-[0.14em] uppercase rounded-[1px]"
                  onClick={closeMenu}
                >
                  Start a Project →
                </Link>
                <a
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent(SITE.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 border border-border-rule text-secondary-text text-[12px] font-mono tracking-[0.14em] uppercase rounded-[1px] hover:border-primary-ink hover:text-primary-ink"
                  onClick={closeMenu}
                >
                  WhatsApp Direct
                </a>
              </motion.div>

              <motion.div
                className="mt-auto pb-8 pt-6 border-t border-border-rule"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.35 }}
              >
                <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.12em] uppercase text-muted-text mb-2">
                  <span>{SITE.regions}</span>
                  <a href={`mailto:${SITE.email}`} className="hover:text-primary-ink transition-colors">
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
