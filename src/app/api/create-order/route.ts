import { NextResponse } from 'next/server';
import { site } from '../../../config/site';
import { noStoreHeaders } from '../../../lib/api-security';

export const runtime = 'nodejs';

/**
 * Legacy Razorpay order route — disabled on TheoMedia (UK / EU).
 * Use /api/stripe/create-checkout-session when Stripe is enabled.
 * India INR + Razorpay stays on CodeArc (codearc.co.in).
 */
export async function POST() {
  return NextResponse.json(
    {
      error: `Card payments on ${site.brand} will use Stripe. Online checkout is not live yet — request an invoice at ${site.email}. India (INR) payments: ${site.sister.domain}`,
      code: 'RAZORPAY_DISABLED_ON_THIS_MARKET',
      contact: site.email,
      stripe_endpoint: '/api/stripe/create-checkout-session',
    },
    { status: 503, headers: noStoreHeaders() },
  );
}
