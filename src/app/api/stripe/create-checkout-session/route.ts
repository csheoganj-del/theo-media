import { NextRequest, NextResponse } from 'next/server';
import { getPaymentPlan } from '../../../../data/pricing';
import {
  ApiInputError,
  isSameOriginRequest,
  noStoreHeaders,
  readJsonObject,
} from '../../../../lib/api-security';
import { isOnlineCheckoutEnabled } from '../../../../lib/payments';
import { clientIp, rateLimit, rateLimitHeaders } from '../../../../lib/rate-limit';
import { isStripeConfigured } from '../../../../lib/stripe';
import { site } from '../../../../config/site';

export const runtime = 'nodejs';

/**
 * Stripe Checkout Session endpoint (stub).
 * Implement with the Stripe SDK when ready:
 *   const stripe = new Stripe(getStripeSecretKey()!)
 *   const session = await stripe.checkout.sessions.create({ ... })
 */
export async function POST(request: NextRequest) {
  try {
    if (!isSameOriginRequest(request)) {
      return NextResponse.json(
        { error: 'Cross-origin requests are not allowed' },
        { status: 403, headers: noStoreHeaders() },
      );
    }

    const limited = rateLimit(`stripe-checkout:${clientIp(request)}`, {
      limit: 15,
      windowMs: 60_000,
    });
    if (!limited.ok) {
      return NextResponse.json(
        { error: 'Too many requests. Try again shortly.' },
        { status: 429, headers: noStoreHeaders(rateLimitHeaders(limited)) },
      );
    }

    if (!isOnlineCheckoutEnabled() || !isStripeConfigured()) {
      return NextResponse.json(
        {
          error: 'Stripe checkout is not enabled yet. Request an invoice instead.',
          code: 'STRIPE_NOT_READY',
          contact: site.email,
        },
        { status: 503, headers: noStoreHeaders(rateLimitHeaders(limited)) },
      );
    }

    const body = await readJsonObject<Record<string, unknown>>(request);
    const planId = typeof body.planId === 'string' ? body.planId.trim() : '';
    const plan = getPaymentPlan(planId);

    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid or missing planId' },
        { status: 400, headers: noStoreHeaders(rateLimitHeaders(limited)) },
      );
    }

    // TODO(stripe): create Checkout Session with plan.amountMinor + plan.currency (GBP)
    // and return { url: session.url } for the client to redirect.

    return NextResponse.json(
      {
        error: 'Stripe Checkout Session creation is not implemented yet.',
        code: 'STRIPE_TODO',
        plan_id: plan.id,
        amount_minor: plan.amountMinor,
        currency: plan.currency,
      },
      { status: 501, headers: noStoreHeaders(rateLimitHeaders(limited)) },
    );
  } catch (error: unknown) {
    if (error instanceof ApiInputError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status, headers: noStoreHeaders() },
      );
    }

    console.error('[stripe/create-checkout-session]', error);
    return NextResponse.json(
      { error: 'Could not start Stripe checkout. Please try again or email us.' },
      { status: 502, headers: noStoreHeaders() },
    );
  }
}
