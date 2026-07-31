# TheoMedia

Marketing website for [theomedia.co.uk](https://theomedia.co.uk) — **UK / Ireland / Europe** branch of the studio.

Sister site (India): [codearc.co.in](https://codearc.co.in)

## Market separation (important)

| | **CodeArc** (`codearc/`) | **TheoMedia** (`theomedia/`) |
|--|--|--|
| Domain | codearc.co.in | theomedia.co.uk |
| Market | India (`IN`) | UK/IE/EU (`GB`) |
| Config | `src/config/site.ts` | `src/config/site.ts` |
| Currency | INR (paise) | GBP (pence) |
| Tax | GST | VAT |
| Contact | hello@codearc.co.in · +91… | hello@theomedia.co.uk · +353… |
| Payments | **Razorpay** (INR, UPI) | **Stripe** (GBP, planned) · invoice now |
| SEO / blog | India-focused | UK/Europe-focused |

Do **not** mix catalogs or contact details across branches. Product demos may still link to shared product hosts.

## Stripe (TheoMedia only)

Card checkout is **not live yet**. `/pay` shows GBP plans and an invoice / WhatsApp path.

When you are ready:

1. Create a Stripe account and copy keys into `.env` (see `.env.example`).
2. Implement Checkout Session creation in `src/app/api/stripe/create-checkout-session/route.ts`.
3. Implement signed events in `src/app/api/stripe/webhook/route.ts`.
4. Set `site.payments.onlineCheckoutEnabled = true` in `src/config/site.ts`.
5. Point Stripe webhooks to `https://theomedia.co.uk/api/stripe/webhook`.

Legacy Razorpay routes on this project return 503/410 and must not be used.

## Run locally

```bash
npm install
cp .env.example .env   # fill Razorpay keys
npm run dev
```

## Scripts

| Command | What it does |
|---------|----------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript validation |
| `npm test` | Automated unit tests |
| `npm run check` | Full release check |

## Razorpay setup

1. Copy `.env.example` → `.env`.
2. Add **test** keys from the Razorpay dashboard:
   - `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` (server)
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID` (browser — same key id)
3. For production, set `RAZORPAY_WEBHOOK_SECRET` and point Razorpay to
   `https://your-domain/api/razorpay-webhook` for `payment.captured` / `payment.failed`.

Checkout sends a **planId**, but the amount comes from `src/data/pricing.ts` on the server. Verification checks the signature and then fetches the order and payment directly from Razorpay to confirm the plan, amount, currency, order relationship, and provider status.

Razorpay is the durable payment system of record. The app emits structured payment events to the hosting logs for operational support; it does not write transaction records to an ephemeral application filesystem.

## Pay page

- `/pay` — all plans
- `/pay?plan=restrosuite-setup` — deep-link a plan
