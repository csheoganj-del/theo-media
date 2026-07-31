'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { mailTo, site, whatsappUrl } from '../config/site';
import {
  formatPlanAmount,
  getPaymentPlan,
  paymentPlans,
  type PaymentPlan,
} from '../data/pricing';

type PayPlansProps = {
  initialPlanId?: string;
  /** Live card checkout (Stripe) — false until Stripe is wired */
  paymentsAvailable?: boolean;
};

export default function PayPlans({ initialPlanId, paymentsAvailable = false }: PayPlansProps) {
  const defaultPlan =
    getPaymentPlan(initialPlanId) ||
    paymentPlans.find((p) => p.id === 'restrosuite-setup') ||
    paymentPlans[0];

  const [selectedId, setSelectedId] = useState(defaultPlan.id);

  const selected: PaymentPlan = useMemo(
    () => getPaymentPlan(selectedId) || defaultPlan,
    [selectedId, defaultPlan],
  );

  const enquirySubject = `Pay / invoice: ${selected.name}`;
  const enquiryBody = [
    `Hi ${site.brand},`,
    '',
    `I would like to proceed with: ${selected.name} (${formatPlanAmount(selected.amountMinor)} ${selected.currency}).`,
    '',
    'Please send an invoice or bank details (GBP).',
    '',
    '— ',
  ].join('\n');

  return (
    <div className="v2-grid-2" style={{ alignItems: 'start', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {paymentPlans.map((plan) => {
          const active = plan.id === selected.id;
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedId(plan.id)}
              className="v2-card v2-card-static v2-card-body"
              style={{
                textAlign: 'left',
                cursor: 'pointer',
                border: active
                  ? '1px solid rgba(61, 155, 106, 0.55)'
                  : '1px solid rgba(243,240,232,0.08)',
                background: active ? 'rgba(61, 155, 106, 0.08)' : undefined,
                width: '100%',
              }}
              aria-pressed={active}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 12,
                  alignItems: 'flex-start',
                  marginBottom: 8,
                }}
              >
                <h3 style={{ margin: 0, fontSize: 17 }}>{plan.name}</h3>
                <strong style={{ color: '#f3f0e8', whiteSpace: 'nowrap' }}>
                  {formatPlanAmount(plan.amountMinor)}
                </strong>
              </div>
              {plan.badge ? (
                <span
                  className="v2-badge v2-badge-muted"
                  style={{ marginBottom: 8, display: 'inline-block' }}
                >
                  {plan.badge}
                </span>
              ) : null}
              <p style={{ margin: 0, color: 'rgba(243,240,232,0.62)', lineHeight: 1.55 }}>
                {plan.blurb}
              </p>
            </button>
          );
        })}
      </div>

      <div
        className="v2-card v2-card-static"
        style={{ padding: '28px 24px', position: 'sticky', top: 96 }}
      >
        <p className="v2-kicker" style={{ marginBottom: 8 }}>
          {paymentsAvailable ? `Checkout · ${site.currency.code}` : `Pricing · ${site.currency.code}`}
        </p>
        <h2 style={{ margin: '0 0 8px', fontSize: 22 }}>{selected.name}</h2>
        <p style={{ margin: '0 0 6px', fontSize: 28, fontWeight: 750, color: '#f3f0e8' }}>
          {formatPlanAmount(selected.amountMinor)}
        </p>
        <p style={{ margin: '0 0 20px', color: 'rgba(243,240,232,0.62)', lineHeight: 1.55 }}>
          {selected.blurb}
        </p>

        {paymentsAvailable ? (
          <p
            role="status"
            style={{
              margin: '0 0 16px',
              padding: '12px 14px',
              borderRadius: 12,
              background: 'rgba(61, 155, 106, 0.12)',
              border: '1px solid rgba(61, 155, 106, 0.35)',
              color: 'rgba(243,240,232,0.85)',
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            Stripe checkout will open here once keys and session routes are live.
          </p>
        ) : (
          <div
            role="status"
            style={{
              margin: '0 0 18px',
              padding: '14px 16px',
              borderRadius: 12,
              background: 'rgba(232, 90, 47, 0.1)',
              border: '1px solid rgba(232, 90, 47, 0.35)',
              color: 'rgba(243,240,232,0.85)',
              fontSize: 14,
              lineHeight: 1.55,
            }}
          >
            <strong style={{ display: 'block', marginBottom: 6 }}>
              Stripe card payments — coming soon
            </strong>
            Online checkout with <strong>Stripe</strong> will land on this page. Until then,
            pick a plan and we&apos;ll send a GBP invoice or bank details. India (INR / UPI) stays
            on{' '}
            <a href={site.sister.domain} style={{ color: '#8fd4ad' }}>
              {site.sister.brand}
            </a>
            .
          </div>
        )}

        <div className="v2-form-actions" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <a className="v2-btn v2-btn-primary" href={mailTo(enquirySubject, enquiryBody)}>
            Request invoice for this plan <Mail size={16} />
          </a>
          <a
            className="v2-btn v2-btn-ghost"
            href={whatsappUrl(
              `Hi ${site.brand}, I want to pay for ${selected.name} (${formatPlanAmount(selected.amountMinor)}). Please send invoice/bank details.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us instead <ArrowRight size={16} />
          </a>
        </div>

        <p
          style={{
            margin: '18px 0 0',
            fontSize: 13,
            color: 'rgba(243,240,232,0.5)',
            lineHeight: 1.5,
          }}
        >
          Prices are in {site.currency.code} for {site.region.label}. {site.payments.methodsNote}{' '}
          Prefer a custom quote?{' '}
          <Link href="/#contact" style={{ color: 'rgba(243,240,232,0.75)' }}>
            Write to us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
