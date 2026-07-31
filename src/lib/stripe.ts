/**
 * Stripe helpers for TheoMedia (UK / EU).
 * Full Checkout Session + webhook wiring lands when Stripe keys are added.
 *
 * Required env (when ready):
 *   STRIPE_SECRET_KEY=sk_...
 *   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
 *   STRIPE_WEBHOOK_SECRET=whsec_...
 */

export function getStripeSecretKey(): string | null {
  return process.env.STRIPE_SECRET_KEY?.trim() || null;
}

export function getStripePublishableKey(): string | null {
  return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim() || null;
}

export function getStripeWebhookSecret(): string | null {
  return process.env.STRIPE_WEBHOOK_SECRET?.trim() || null;
}

/** True when secret + publishable keys are present. */
export function isStripeConfigured(): boolean {
  return Boolean(getStripeSecretKey() && getStripePublishableKey());
}

/**
 * Production also needs a webhook secret for signed events.
 * Online checkout is only "ready" when keys exist and (in prod) webhooks are set.
 */
export function isStripeCheckoutReady(): boolean {
  if (!isStripeConfigured()) return false;
  if (process.env.NODE_ENV === 'production' && !getStripeWebhookSecret()) return false;
  return true;
}

export function isStripeTestMode(): boolean {
  const key = getStripeSecretKey() || getStripePublishableKey() || '';
  return key.startsWith('sk_test_') || key.startsWith('pk_test_');
}
