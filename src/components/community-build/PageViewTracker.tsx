'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function PageViewTracker() {
  useEffect(() => {
    trackEvent('community_build_page_view', {
      path: '/community-build',
    });
  }, []);

  return null;
}
