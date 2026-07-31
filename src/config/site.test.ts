import { describe, expect, it } from 'vitest';
import { formatMoney, site } from './site';

describe('TheoMedia market config', () => {
  it('is locked to the UK/EU branch (not India)', () => {
    expect(site.market).toBe('GB');
    expect(site.currency.code).toBe('GBP');
    expect(site.tax.label).toBe('VAT');
    expect(site.email).toBe('hello@theomedia.co.uk');
    expect(site.phone.whatsapp).toBe('353852258004');
    expect(site.domain).toMatch(/theomedia\.co\.uk/);
  });

  it('points sister traffic to CodeArc India', () => {
    expect(site.sister.brand).toBe('CodeArc');
    expect(site.sister.domain).toBe('https://codearc.co.in');
    expect(site.sister.marketLabel).toMatch(/India/i);
  });

  it('formats GBP from minor units (pence)', () => {
    expect(formatMoney(49_900, 0)).toMatch(/499/);
  });

  it('targets Stripe (not Razorpay) and keeps online checkout off until wired', () => {
    expect(site.payments.provider).toBe('Stripe');
    expect(site.payments.onlineCheckoutEnabled).toBe(false);
    expect(site.payments.forbiddenMethods).toContain('UPI');
    expect(site.payments.methodsNote.toLowerCase()).not.toContain('upi');
  });
});

