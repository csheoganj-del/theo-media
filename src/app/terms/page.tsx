import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { site } from '../../config/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms for using the ${site.brand} website — written simply.`,
  alternates: {
    canonical: `${site.domain}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="v2-page">
      <Navbar />
      <main id="main-content">
        <section className="v2-inner-narrow v2-inner-hero">
          <p className="v2-crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Terms</span>
          </p>
          <p className="v2-kicker">Legal · {site.region.shortLabel}</p>
          <h1>
            Terms <em>(kept short)</em>
          </h1>
          <p
            className="v2-inner-lede"
            style={{
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontWeight: 700,
            }}
          >
            Last updated: 31 July 2026 · Market: {site.market} ({site.currency.code})
          </p>
        </section>

        <section className="v2-inner-narrow" style={{ paddingBottom: 80 }}>
          <div className="v2-callout" style={{ marginBottom: 28 }}>
            The short version: browse freely, the content here is ours, and actual project work is
            agreed separately in writing. This site is the {site.region.label} branch — India
            clients should use{' '}
            <a href={site.sister.domain} rel="noopener noreferrer" target="_blank">
              {site.sister.brand}
            </a>
            .
          </div>

          <div className="v2-prose">
            <h2>Using this website</h2>
            <p>
              You&apos;re welcome to browse this site, read about our work and products, and contact
              us. Please don&apos;t misuse the site — for example, by attempting to disrupt it or
              copying it to pass off as your own.
            </p>

            <h2>Our content</h2>
            <p>
              The text, design, branding and product materials on this site belong to {site.brand}.
              Client work and product previews appear with permission where required. Don&apos;t
              reuse either without asking us first.
            </p>

            <h2>Project work &amp; products</h2>
            <p>
              This website is an introduction, not a contract. Custom software projects and product
              access (including suites such as RestroSuite) are governed by separate written
              agreements covering scope, timeline, pricing and support in plain English.
              {site.tax.invoiceNote}
            </p>

            <h2>Online payments</h2>
            <p>
              Prices shown on the pay page are in <strong>{site.currency.code}</strong> (British
              pounds) for this market. They identify the selected product, onboarding fee,
              subscription start, early-access fee, or project deposit.
            </p>
            <p>
              <strong>Stripe</strong> will power card checkout on this site. Until Stripe is fully
              enabled, payment is by invoice or bank transfer after you request a plan. A successful
              payment (card or bank) confirms receipt of funds; delivery, onboarding, access, scope,
              and timing remain subject to the description shown and any written quote or product
              agreement.
            </p>
            <p>
              India-market pricing (INR), Razorpay, UPI and GST are handled only on{' '}
              <a href={site.sister.domain} rel="noopener noreferrer" target="_blank">
                {site.sister.domain}
              </a>
              .
            </p>

            <h2>Cancellations and refunds</h2>
            <p>
              Duplicate or incorrect charges should be reported within seven days. Setup and
              early-access payments may be cancelled for a full refund before onboarding, access,
              or reserved work begins. For custom-project deposits, any refund after work begins is
              limited to the undelivered portion after completed work and committed third-party
              costs are deducted. Approved refunds are returned to the original payment method and
              may take the payment provider&apos;s standard processing time. These terms do not
              limit rights that cannot legally be excluded under UK or EU consumer law.
            </p>

            <h2>Payment support</h2>
            <p>
              For a failed, duplicate, or disputed payment, email{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> with the Stripe or bank receipt /
              reference. Do not send card numbers, bank passwords, or one-time codes.
            </p>

            <h2>No guarantees about the site</h2>
            <p>
              We keep this site accurate and online to the best of our ability, but it&apos;s
              provided &quot;as is&quot; — we can&apos;t promise it will always be available or
              error-free, and we&apos;re not liable for losses arising from your use of the site
              itself.
            </p>

            <h2>Links to other sites</h2>
            <p>
              We link to live product environments, our India sister site, and external resources.
              Those sites have their own rules and policies, which we don&apos;t control.
            </p>

            <h2>Questions</h2>
            <p>
              Anything unclear? Email <a href={`mailto:${site.email}`}>{site.email}</a> — we reply
              in plain English. Phone / WhatsApp: {site.phone.display}.
            </p>
          </div>

          <p style={{ marginTop: 40, fontSize: 13, color: 'rgba(243,240,232,0.45)' }}>
            <Link href="/privacy" style={{ color: '#3d9b6a' }}>
              Privacy Policy
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
