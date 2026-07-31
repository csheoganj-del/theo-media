import { NextRequest, NextResponse } from 'next/server';
import { noStoreHeaders } from '../../../../lib/api-security';
import { logPaymentEvent } from '../../../../lib/payment-log';
import { getStripeWebhookSecret, isStripeConfigured } from '../../../../lib/stripe';

export const runtime = 'nodejs';

/**
 * Stripe webhook endpoint (stub).
 * When implementing:
 *  1. Read raw body
 *  2. stripe.webhooks.constructEvent(rawBody, signature, STRIPE_WEBHOOK_SECRET)
 *  3. Handle checkout.session.completed / payment_intent.succeeded
 */
export async function POST(request: NextRequest) {
  if (!isStripeConfigured() || !getStripeWebhookSecret()) {
    return NextResponse.json(
      { error: 'Stripe webhooks are not configured yet' },
      { status: 503, headers: noStoreHeaders() },
    );
  }

  // Consume body so the connection is clean; verification lands with Stripe SDK.
  await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400, headers: noStoreHeaders() },
    );
  }

  await logPaymentEvent({
    at: new Date().toISOString(),
    type: 'webhook.other',
    meta: {
      provider: 'stripe',
      note: 'Webhook received but event verification not implemented yet',
    },
  });

  return NextResponse.json(
    { error: 'Stripe webhook handler not implemented yet', code: 'STRIPE_TODO' },
    { status: 501, headers: noStoreHeaders() },
  );
}
