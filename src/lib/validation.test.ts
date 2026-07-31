import { describe, expect, it } from 'vitest';
import { formatPlanAmount, getPaymentPlan, plansForProduct } from '../data/pricing';
import { site } from '../config/site';
import { validateContactFields } from './validation';

describe('contact validation', () => {
  it('accepts a complete, valid enquiry', () => {
    expect(
      validateContactFields({
        name: 'Asha',
        email: 'asha@example.com',
        message: 'I need a website for my restaurant.',
      }),
    ).toBeNull();
  });

  it('rejects an invalid email', () => {
    expect(
      validateContactFields({
        name: 'Asha',
        email: 'not-an-email',
        message: 'I need a website for my restaurant.',
      }),
    ).toBe('Please enter a valid email address.');
  });

  it('rejects an unhelpfully short message', () => {
    expect(
      validateContactFields({
        name: 'Asha',
        email: 'asha@example.com',
        message: 'Hi',
      }),
    ).toBe('Please add a little more detail so we can help.');
  });
});

describe('payment catalog (UK/EU market)', () => {
  it('uses GBP for this branch', () => {
    expect(site.market).toBe('GB');
    expect(site.currency.code).toBe('GBP');
    expect(getPaymentPlan('restrosuite-setup')?.currency).toBe('GBP');
  });

  it('resolves catalog plans only by their exact id', () => {
    expect(getPaymentPlan('restrosuite-setup')?.amountMinor).toBe(49_900);
    expect(getPaymentPlan('not-a-plan')).toBeUndefined();
  });

  it('filters plans by product', () => {
    expect(plansForProduct('medisuite').map((plan) => plan.id)).toEqual(['medisuite-setup']);
  });

  it('formats pence as pounds sterling', () => {
    const label = formatPlanAmount(49_900);
    expect(label).toMatch(/499/);
    expect(label).toMatch(/£|GBP/);
  });
});
