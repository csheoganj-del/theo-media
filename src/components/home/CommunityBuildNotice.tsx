'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { communityBuildAvailability } from '@/data/communityBuild';
import { trackEvent } from '@/lib/analytics';

const STORAGE_KEY = 'theomedia_cb_notice_dismissed_v2026';

export default function CommunityBuildNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(true); // default true until mounted check

  useEffect(() => {
    // Check if dismissed previously in this browser session/storage
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (dismissed === 'true') {
        return;
      }
      setHasDismissed(false);
    } catch {
      setHasDismissed(false);
    }

    let timer: NodeJS.Timeout | null = null;
    let impressionSent = false;

    const triggerNotice = () => {
      setIsVisible((prev) => {
        if (!prev && !impressionSent) {
          impressionSent = true;
          trackEvent('community_build_popup_impression');
        }
        return true;
      });
      cleanup();
    };

    // Trigger after 9 seconds
    timer = setTimeout(() => {
      triggerNotice();
    }, 9000);

    // Or trigger after scrolling ~35% of the page
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrollPercent = (window.scrollY / scrollHeight) * 100;
        if (scrollPercent >= 35) {
          triggerNotice();
        }
      }
    };

    const cleanup = () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return cleanup;
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setHasDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Storage unavailable or blocked
    }
  };

  const handleClick = () => {
    trackEvent('community_build_popup_click');
  };

  if (hasDismissed) return null;

  const currentStatus = communityBuildAvailability.availability.september.statusDisplay || 'Applications open';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="region"
          aria-label="Community Build Programme Announcement"
          className="fixed z-50 bottom-24 md:bottom-6 right-4 left-4 md:left-auto md:max-w-sm pointer-events-auto"
        >
          <div className="bg-[#141210]/95 text-bone border border-bone/15 p-5 md:p-6 rounded-sm shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md relative">
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              aria-label="Dismiss announcement"
              className="absolute top-3 right-3 text-bone/40 hover:text-bone text-lg p-1.5 leading-none transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-warm-accent rounded-xs"
            >
              ×
            </button>

            {/* Header / Eyebrow & Status */}
            <div className="flex items-center gap-2 mb-2 pr-6">
              <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-warm-accent">
                COMMUNITY BUILD · AUTUMN 2026
              </span>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-bone/10 rounded-xs text-[10px] font-mono text-bone/80 uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{currentStatus}</span>
            </div>

            {/* Body */}
            <p className="font-sans text-[13px] md:text-[14px] text-bone/80 leading-snug mb-4">
              We’re selecting up to 3 independent businesses each month for a £495 TheoMedia website build.
            </p>

            {/* CTA */}
            <div className="flex items-center justify-between pt-2 border-t border-bone/10">
              <Link
                href="/community-build"
                onClick={handleClick}
                className="text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-bone hover:text-warm-accent transition-colors inline-flex items-center gap-1.5 group"
              >
                <span>View the programme</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>

              <button
                onClick={handleDismiss}
                className="text-[11px] font-sans text-bone/40 hover:text-bone/70 uppercase tracking-wider transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
