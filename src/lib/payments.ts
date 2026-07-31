/**
 * Market payment facade for TheoMedia.
 * Online card checkout will use Stripe. Razorpay is India-only (CodeArc).
 */

import { site } from '../config/site';
import { isStripeCheckoutReady, isStripeConfigured } from './stripe';

export type PaymentProviderId = 'stripe' | 'none';

export function getPaymentProvider(): PaymentProviderId {
  return site.payments.provider === 'Stripe' ? 'stripe' : 'none';
}

/**
 * Whether the /pay page should offer live card checkout.
 * Until Stripe is wired + env is set, this is false and we take bank/invoice enquiries.
 */
export function isOnlineCheckoutEnabled(): boolean {
  if (!site.payments.onlineCheckoutEnabled) return false;
  if (getPaymentProvider() === 'stripe') return isStripeCheckoutReady();
  return false;
}

export function paymentStatusMessage(): string {
  if (isOnlineCheckoutEnabled()) {
    return `Secure card payments via ${site.payments.provider}.`;
  }
  if (isStripeConfigured() && !isStripeCheckoutReady()) {
    return 'Stripe keys are present but webhooks are not fully configured for production yet.';
  }
  return `${site.payments.provider} card checkout is coming soon. Choose a plan and write to us to pay by invoice or bank transfer.`;
}
