'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { communityBuildAvailability } from '@/data/communityBuild';
import { trackEvent } from '@/lib/analytics';

const STORAGE_KEY = 'theomedia_cb_notice_dismissed_v2026';

export default function CommunityBuildNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(true);

  useEffect(() => {
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

    timer = setTimeout(() => {
      triggerNotice();
    }, 12000);

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrollPercent = (window.scrollY / scrollHeight) * 100;
        if (scrollPercent >= 45) {
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
    } catch {}
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
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="region"
          aria-label="Community Build Programme Announcement"
          className="fixed z-50 bottom-20 md:bottom-6 right-4 left-4 md:left-auto md:max-w-sm pointer-events-auto"
        >
          <div className="bg-[#11110F]/95 text-[#F2EEE6] border border-[#262420] p-5 md:p-6 rounded-[1px] shadow-2xl backdrop-blur-md relative">
            <button
              onClick={handleDismiss}
              aria-label="Dismiss announcement"
              className="absolute top-3 right-3 text-[#AAA49A]/60 hover:text-[#F2EEE6] text-lg p-1 leading-none transition-colors"
            >
              ×
            </button>

            <div className="flex items-center gap-2 mb-2 pr-6">
              <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-[#A98864] font-medium">
                COMMUNITY BUILD · 2026
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#161513] border border-[#262420] rounded-[1px] text-[10px] font-mono text-[#AAA49A] uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A98864]" />
              <span>{currentStatus}</span>
            </div>

            <p className="font-sans text-[13px] md:text-[14px] text-[#AAA49A] leading-snug mb-4">
              We select up to 3 independent businesses each month for a subsidized £495 TheoMedia website build.
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-[#262420]">
              <Link
                href="/community-build"
                onClick={handleClick}
                className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#F2EEE6] hover:text-[#A98864] transition-colors inline-flex items-center gap-1.5 group"
              >
                <span>Programme Details</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>

              <button
                onClick={handleDismiss}
                className="text-[11px] font-mono text-[#AAA49A]/60 hover:text-[#AAA49A] uppercase tracking-wider transition-colors"
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
