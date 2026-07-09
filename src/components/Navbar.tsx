import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What We Build', href: '#services' },
    { name: 'Our Promise', href: '#why-us' },
    { name: 'How It Works', href: '#process' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Websites & E-Commerce', desc: 'Responsive, SEO-focused sites', href: '#services' },
    { name: 'Web Applications', desc: 'CRM, ERP & custom business tools', href: '#services' },
    { name: 'Mobile Apps', desc: 'Android apps for your customers', href: '#services' },
    { name: 'Business Automation', desc: 'WhatsApp, workflows & integrations', href: '#services' },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#06B6D4]"
      />

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className={`flex items-center justify-between rounded-2xl px-4 md:px-6 transition-all duration-300 ${
            scrolled
              ? 'bg-white/80 backdrop-blur-xl border border-[#E2E8F0] shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] py-3'
              : 'bg-transparent border border-transparent py-2'
          }`}>

            {/* Logo */}
            <a href="/" className="flex items-center space-x-2.5 group select-none">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-[0_4px_14px_-4px_rgba(79,70,229,0.5)]">
                <span className="text-white font-extrabold text-base leading-none">T</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">
                Theo<span className="text-[#4F46E5]">Media</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                if (link.name === 'What We Build') {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <a
                        href={link.href}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 flex items-center gap-1 ${
                          servicesDropdownOpen
                            ? 'text-[#4F46E5] bg-[#EEF2FF]'
                            : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#EEF2FF]'
                        }`}
                      >
                        {link.name}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#4F46E5]' : 'text-[#94A3B8]'}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>

                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_20px_60px_-20px_rgba(15,23,42,0.2)] p-2 z-50"
                          >
                            {services.map((svc) => (
                              <a
                                key={svc.name}
                                href={svc.href}
                                className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-[#EEF2FF] transition-colors group"
                              >
                                <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
                                  {svc.name}
                                </span>
                                <span className="text-xs text-[#64748B] font-medium">{svc.desc}</span>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-[#EEF2FF] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-sm font-bold hover:shadow-[0_8px_24px_-8px_rgba(79,70,229,0.6)] transition-shadow duration-300"
              >
                Get Proposal
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-[#E2E8F0] bg-white/80 backdrop-blur-sm text-[#0F172A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 pb-4">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E2E8F0] shadow-[0_20px_60px_-20px_rgba(15,23,42,0.2)] p-4 mt-2 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl text-sm font-semibold text-[#64748B] hover:text-[#4F46E5] hover:bg-[#EEF2FF] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="pt-2 border-t border-[#E2E8F0] mt-1">
                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-sm font-bold"
                    >
                      Get Proposal <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
