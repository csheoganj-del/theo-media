import { formatMoney, site } from '../config/site';

export type PaymentCurrency = typeof site.currency.code;

export type PaymentPlan = {
  id: string;
  name: string;
  blurb: string;
  /** Amount in minor units (pence for GBP). Server is source of truth. */
  amountMinor: number;
  currency: PaymentCurrency;
  /** Product slug or 'studio' */
  product?: string;
  badge?: string;
  /** Shown on pay button */
  buttonLabel: string;
};

/**
 * UK / Europe checkout catalog (GBP).
 * India (INR) plans live only on codearc.co.in — do not mix markets.
 */
export const paymentPlans: PaymentPlan[] = [
  {
    id: 'restrosuite-setup',
    name: 'RestroSuite — setup',
    blurb: 'Onboarding, outlet setup and go-live support for restaurant POS.',
    amountMinor: 49_900, // £499.00
    currency: 'GBP',
    product: 'restrosuite',
    badge: 'Live product',
    buttonLabel: 'Pay setup',
  },
  {
    id: 'restrosuite-month',
    name: 'RestroSuite — first month',
    blurb: 'First month of software access. Talk to us for ongoing billing.',
    amountMinor: 9_900, // £99.00
    currency: 'GBP',
    product: 'restrosuite',
    badge: 'Subscription start',
    buttonLabel: 'Pay first month',
  },
  {
    id: 'staysuite-setup',
    name: 'StaySuite — early access',
    blurb: 'Reserve onboarding while StaySuite is in active build.',
    amountMinor: 29_900, // £299.00
    currency: 'GBP',
    product: 'staysuite',
    badge: 'Building',
    buttonLabel: 'Pay early access',
  },
  {
    id: 'medisuite-setup',
    name: 'MediSuite — early access',
    blurb: 'Clinic desk onboarding while MediSuite is shaping with real practices.',
    amountMinor: 29_900, // £299.00
    currency: 'GBP',
    product: 'medisuite',
    badge: 'Building',
    buttonLabel: 'Pay early access',
  },
  {
    id: 'project-deposit',
    name: 'Custom project deposit',
    blurb: 'Partial payment to start a website, web app or custom build (GBP).',
    amountMinor: 50_000, // £500.00
    currency: 'GBP',
    product: 'studio',
    badge: 'Client work',
    buttonLabel: 'Pay deposit',
  },
];

export function getPaymentPlan(id: string | undefined | null): PaymentPlan | undefined {
  if (!id) return undefined;
  return paymentPlans.find((p) => p.id === id);
}

export function plansForProduct(productSlug: string): PaymentPlan[] {
  return paymentPlans.filter((p) => p.product === productSlug);
}

/** Format catalog amount for this market (GBP). */
export function formatPlanAmount(amountMinor: number): string {
  return formatMoney(amountMinor, 0);
}

/** @deprecated Use formatPlanAmount — kept for gradual migration */
export function formatInrFromPaise(amountMinor: number): string {
  return formatPlanAmount(amountMinor);
}
