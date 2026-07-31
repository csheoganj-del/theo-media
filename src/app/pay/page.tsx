import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PayPlans from '../../components/PayPlans';
import { mailTo, site } from '../../config/site';
import { getPaymentPlan } from '../../data/pricing';
import { isOnlineCheckoutEnabled, paymentStatusMessage } from '../../lib/payments';

export const metadata: Metadata = {
  title: 'Pay',
  description: `GBP pricing for ${site.brand} products and project deposits. Stripe card checkout coming soon; invoice and bank transfer available now.`,
  alternates: { canonical: `${site.domain}/pay` },
  openGraph: {
    title: `Pay | ${site.brand}`,
    description: `${site.currency.code} plans for ${site.brand}. Stripe coming soon.`,
    url: `${site.domain}/pay`,
  },
};

export default async function PayPage(props: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan: planParam } = await props.searchParams;
  const matched = getPaymentPlan(planParam);
  const initialPlanId = matched?.id;
  const paymentsAvailable = isOnlineCheckoutEnabled();

  return (
    <div className="v2-page">
      <Navbar />
      <main id="main-content">
        <section className="v2-inner v2-inner-hero">
          <p className="v2-crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Pay</span>
          </p>
          <p className="v2-kicker">
            {paymentsAvailable ? 'Stripe checkout' : 'Pricing & invoices'} · {site.currency.code}
          </p>
          <h1>
            {paymentsAvailable ? (
              <>
                Pay online. <em>Simply.</em>
              </>
            ) : (
              <>
                Plans in GBP. <em>Stripe soon.</em>
              </>
            )}
          </h1>
          <p className="v2-inner-lede">
            Choose a product plan, early-access fee, or project deposit. Prices are in{' '}
            {site.currency.code} for {site.region.label}. {paymentStatusMessage()} India pricing
            (INR / Razorpay) is only on{' '}
            <a href={site.sister.domain}>{site.sister.brand}</a>.
          </p>
          <div className="v2-inline-actions">
            <Link className="v2-btn v2-btn-ghost" href="/products">
              Browse products
            </Link>
            <a className="v2-btn v2-btn-ghost" href={mailTo('Payment question')}>
              Need a custom amount?
            </a>
          </div>
        </section>

        <section className="v2-section" style={{ paddingTop: 0 }}>
          <PayPlans initialPlanId={initialPlanId} paymentsAvailable={paymentsAvailable} />
        </section>

        <section className="v2-section v2-section-tight">
          <div className="v2-grid-2">
            <div className="v2-card v2-card-static v2-card-body">
              <h3 style={{ marginTop: 0 }}>
                {paymentsAvailable ? 'What happens after you pay' : 'How payment works today'}
              </h3>
              <p style={{ color: 'rgba(243,240,232,0.62)', lineHeight: 1.55, margin: 0 }}>
                {paymentsAvailable
                  ? `Stripe issues a receipt and we confirm the plan and amount (${site.currency.code}). We then activate the product or schedule onboarding.`
                  : `Pick a plan and request an invoice. We reply with bank details or a card payment link. When Stripe Checkout is live, you will pay on this page without emailing first.`}
              </p>
            </div>
            <div className="v2-card v2-card-static v2-card-body">
              <h3 style={{ marginTop: 0 }}>Need help?</h3>
              <p style={{ color: 'rgba(243,240,232,0.62)', lineHeight: 1.55, margin: 0 }}>
                Questions about a plan, invoice, or custom quote? Write to{' '}
                <a href={`mailto:${site.email}`} style={{ color: 'rgba(243,240,232,0.85)' }}>
                  {site.email}
                </a>{' '}
                or WhatsApp {site.phone.display} — we&apos;ll reply quickly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
