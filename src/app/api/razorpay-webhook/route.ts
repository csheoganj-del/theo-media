import { NextResponse } from 'next/server';
import { noStoreHeaders } from '../../../lib/api-security';

export const runtime = 'nodejs';

/**
 * Legacy Razorpay webhook — disabled on TheoMedia (UK / EU).
 * Use /api/stripe/webhook instead.
 */
export async function POST() {
  return NextResponse.json(
    {
      received: false,
      error: 'Razorpay webhooks are not used on this market. Configure Stripe at /api/stripe/webhook.',
      code: 'RAZORPAY_DISABLED_ON_THIS_MARKET',
    },
    { status: 410, headers: noStoreHeaders() },
  );
}
