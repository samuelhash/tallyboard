import posthog from 'posthog-js';

/**
 * Safe event capture wrapper.
 * - No-ops on the server (window is undefined during SSR/RSC).
 * - Swallows all errors so analytics never interrupts the user experience.
 * - PostHog queues events before init and flushes them once initialized,
 *   so call order relative to PostHogProvider mounting doesn't matter.
 */
export function captureEvent(
  event: string,
  properties?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return;
  try {
    posthog.capture(event, properties);
  } catch {
    // intentionally swallowed
  }
}

/**
 * Typed helpers for the three custom events tracked on this page.
 * Import `analytics` anywhere a custom event needs to fire.
 */
export const analytics = {
  /** Fires when a waitlist form is submitted successfully. */
  waitlistSignup(emailDomain: string): void {
    captureEvent('waitlist_signup', { email_domain: emailDomain });
  },

  /** Fires when a user clicks a pricing tier CTA button. */
  pricingCardClick(tier: string, price: string): void {
    captureEvent('pricing_card_click', { tier, price });
  },

  /** Fires when a section scrolls into view (used for depth tracking). */
  scrollDepth(section: string): void {
    captureEvent('scroll_depth', { section });
  },
} as const;
