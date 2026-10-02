'use client';

import { useEffect, useState } from 'react';

type Plan = {
  id: string;
  name: string;
  seats: number;
  priceInr: number;
  priceUsd: number;
  blurb: string;
};

type Cfg = {
  plans: Record<string, Plan>;
  demo_checkout: boolean;
  trial_days: number;
};

function rupees(n: number) {
  return '₹' + Math.round(n / 100).toLocaleString('en-IN');
}

export default function LicenseBuy() {
  const [cfg, setCfg] = useState<Cfg | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState<string | null>(null);
  const [keys, setKeys] = useState<Record<string, string>>({});
  const [emails, setEmails] = useState<Record<string, string>>({ personal: '', pro: '' });

  useEffect(() => {
    fetch('/v1/config')
      .then((r) => r.json())
      .then(setCfg)
      .catch(() => setError('License desk is offline. Start license-system on port 8787.'));
  }, []);

  async function buy(plan: string) {
    const email = (emails[plan] || '').trim();
    setError('');
    if (!email || !email.includes('@')) {
      setError('Enter the email that should receive the key.');
      return;
    }
    setBusy(plan);
    try {
      const res = await fetch('/v1/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, email, currency: 'INR' }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Checkout failed');
      if (data.demo && data.license_key) {
        setKeys((k) => ({ ...k, [plan]: data.license_key }));
        return;
      }
      throw new Error('Razorpay is configured — complete payment in the popup. If none opened, add keys later; demo mode issues a key here.');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(null);
    }
  }

  const plans = cfg ? [cfg.plans.personal, cfg.plans.pro].filter(Boolean) : [];

  return (
    <section id="buy" className="px-5 md:px-8 lg:px-12 py-20 md:py-28 bg-near-black text-bone">
      <div className="max-w-5xl mx-auto">
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone/50">Gurjar license desk</p>
        <h2 className="font-display text-[36px] md:text-[52px] mt-3 mb-4">Pay once. Run on your machines.</h2>
        <p className="font-sans text-bone/70 max-w-xl mb-10">
          {cfg?.demo_checkout
            ? 'Checkout is in demo mode on this machine: you get a real signed key, no charge. Add Razorpay keys to take money.'
            : 'Paying through Razorpay. The key appears after the charge clears.'}
          {cfg ? ` ${cfg.trial_days}-day trial in the app if you want to try first.` : ''}
        </p>

        {error ? <p className="mb-6 font-sans text-sm text-red-300">{error}</p> : null}

        <div className="grid md:grid-cols-2 gap-6">
          {(plans.length ? plans : [
            { id: 'personal', name: 'Personal', seats: 2, priceInr: 149900, priceUsd: 1900, blurb: '' },
            { id: 'pro', name: 'Pro', seats: 5, priceInr: 299900, priceUsd: 3900, blurb: '' },
          ]).map((plan) => (
            <form
              key={plan.id}
              className="border border-bone/15 p-6 md:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                buy(plan.id);
              }}
            >
              <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-bone/50">{plan.name}</p>
              <p className="font-display text-[40px] mt-2">
                {rupees(plan.priceInr)} <span className="text-[16px] text-bone/50">· {plan.seats} seats</span>
              </p>
              <p className="font-sans text-sm text-bone/60 mt-3 min-h-[3em]">{plan.blurb}</p>
              <label className="block mt-6 font-sans text-[11px] tracking-[0.16em] uppercase text-bone/50">
                Email for the key
                <input
                  type="email"
                  required
                  value={emails[plan.id] || ''}
                  onChange={(e) => setEmails((s) => ({ ...s, [plan.id]: e.target.value }))}
                  className="mt-2 w-full bg-transparent border-b border-bone/30 py-2 text-bone font-sans text-[15px] tracking-normal normal-case outline-none focus:border-bone"
                  placeholder="you@studio.com"
                />
              </label>
              <button
                type="submit"
                disabled={busy === plan.id}
                className="mt-8 inline-flex items-center bg-bone text-near-black px-6 py-3 font-sans text-[12px] tracking-[0.2em] uppercase hover:bg-ivory disabled:opacity-50"
              >
                {busy === plan.id ? 'Issuing…' : `Buy ${plan.name}`}
              </button>
              {keys[plan.id] ? (
                <p className="mt-6 font-mono text-sm break-all text-bone border border-bone/20 p-4">
                  {keys[plan.id]}
                </p>
              ) : null}
            </form>
          ))}
        </div>
        <p className="mt-8 font-sans text-xs text-bone/40">
          Paste the key in TrafficLedger → Activate. The lease is bound to this machine. Extra seats, a copied file, or a rolled-back clock will not keep it open.
        </p>
      </div>
    </section>
  );
}
