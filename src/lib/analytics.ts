/**
 * Analytics dispatcher for TheoMedia.
 * Safely dispatches events to existing dataLayer or gtag implementations without adding external dependencies.
 */

export type AnalyticsEventName =
  | 'community_build_home_impression'
  | 'community_build_home_click'
  | 'community_build_popup_impression'
  | 'community_build_popup_click'
  | 'community_build_page_view'
  | 'community_build_apply_start'
  | 'community_build_apply_submit'
  | 'community_build_waitlist_submit';

export function trackEvent(
  eventName: AnalyticsEventName,
  eventParams?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return;

  const payload = {
    event: eventName,
    ...eventParams,
    timestamp: new Date().toISOString(),
  };

  // Support GTM dataLayer if present
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win = window as any;
  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push(payload);
  } else if (typeof win.gtag === 'function') {
    win.gtag('event', eventName, eventParams);
  }

  // Development debugging log
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics] ${eventName}`, eventParams || {});
  }
}
