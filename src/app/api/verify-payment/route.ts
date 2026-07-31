import { NextResponse } from 'next/server';
import { site } from '../../../config/site';
import { noStoreHeaders } from '../../../lib/api-security';

export const runtime = 'nodejs';

/**
 * Legacy Razorpay verify route — disabled on TheoMedia.
 * Stripe verification will run via /api/stripe/webhook.
 */
export async function POST() {
  return NextResponse.json(
    {
      success: false,
      error: `Payment verification on ${site.brand} will use Stripe webhooks. This Razorpay endpoint is disabled.`,
      code: 'RAZORPAY_DISABLED_ON_THIS_MARKET',
      contact: site.email,
    },
    { status: 503, headers: noStoreHeaders() },
  );
}
