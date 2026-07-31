import { describe, expect, it } from 'vitest';
import { getPaymentProvider, isOnlineCheckoutEnabled, paymentStatusMessage } from './payments';

describe('TheoMedia payments facade', () => {
  it('selects Stripe as the market provider', () => {
    expect(getPaymentProvider()).toBe('stripe');
  });

  it('keeps online checkout off until Stripe is fully enabled', () => {
    expect(isOnlineCheckoutEnabled()).toBe(false);
  });

  it('explains that Stripe is coming soon', () => {
    expect(paymentStatusMessage().toLowerCase()).toMatch(/stripe|invoice|coming soon/);
  });
});
