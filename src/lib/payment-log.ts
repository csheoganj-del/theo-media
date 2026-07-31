export type PaymentLogEvent = {
  at: string;
  type:
    | 'order.created'
    | 'payment.verified'
    | 'webhook.payment.captured'
    | 'webhook.payment.failed'
    | 'webhook.other';
  planId?: string;
  orderId?: string;
  paymentId?: string;
  /** Amount in minor units (pence for GBP, paise for INR on India branch) */
  amountMinor?: number;
  /** @deprecated use amountMinor */
  amountPaise?: number;
  currency?: string;
  meta?: Record<string, unknown>;
};

/** Emit a structured audit event. Stripe (when live) is the durable payment system of record on TheoMedia. */
export async function logPaymentEvent(event: PaymentLogEvent): Promise<void> {
  console.info('[payment-event]', JSON.stringify(event));
}
