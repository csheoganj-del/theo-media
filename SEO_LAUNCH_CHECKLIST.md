# TheoMedia SEO Launch & Deployment Checklist
**Domain:** [https://www.theomedia.co.uk](https://www.theomedia.co.uk)  
**Target Release:** Production (Vercel)

---

## 1. Codebase & Pre-Launch Validation

- [x] **TypeScript Validation:** `npx tsc --noEmit` executed with 0 errors.
- [x] **Static Generation:** `npm run build` executed with 45/45 static pages prerendered.
- [x] **HTTP Status Codes:** All endpoints returning 200 OK locally.
- [x] **Robots.txt Directives:** Validated at `/robots.txt` allowing all standard routes and pointing to sitemap.
- [x] **XML Sitemap:** Validated at `/sitemap.xml` mapping all 45 routes with correct priority weighting.
- [x] **Canonical Tags:** Implemented across root layout and individual pages pointing to `https://www.theomedia.co.uk/...`.
- [x] **Structured Data Validation:** Validated JSON-LD schemas (`WebSite`, `Organization`, `Service`, `Article`, `FAQPage`).
- [x] **OpenGraph & Social Cards:** Configured with proper title templates and descriptions.
- [x] **Mobile Responsiveness:** All 7 industry pages and 6 insight articles designed with fluid responsive mobile layouts.
- [x] **No USA Leakage:** Zero US geographic landing pages created; UK and Ireland prioritised exclusively.

---

## 2. Production Deployment & Vercel Verification

- [ ] **Git Push:** Push all modified files and new routes to `origin/main`.
- [ ] **Vercel Build Inspection:** Confirm Vercel production build completes with 0 errors and activates latest deployment.
- [ ] **Live Route Smoke Test:** Verify production URLs on `https://www.theomedia.co.uk`:
  - `https://www.theomedia.co.uk/sitemap.xml`
  - `https://www.theomedia.co.uk/robots.txt`
  - `https://www.theomedia.co.uk/web-design-ireland`
  - `https://www.theomedia.co.uk/industries`
  - `https://www.theomedia.co.uk/industries/restaurant-website-design`
  - `https://www.theomedia.co.uk/insights`
  - `https://www.theomedia.co.uk/insights/how-much-does-a-website-cost-uk`
  - `https://www.theomedia.co.uk/pricing`
- [ ] **Demo Subdomains Verification:** Confirm all 6 demo subdomains remain reachable and responsive:
  - `https://cinder-field.theomedia.co.uk`
  - `https://velora-house.theomedia.co.uk`
  - `https://alder-rowe.theomedia.co.uk`
  - `https://elowen-clinic.theomedia.co.uk`
  - `https://morrow-hide.theomedia.co.uk`
  - `https://hartwell-motorworks.theomedia.co.uk`

---

## 3. Post-Launch Search Engine Indexation

- [ ] **Google Search Console Sitemap Submission:** Submit `https://www.theomedia.co.uk/sitemap.xml`.
- [ ] **URL Inspection & Priority Crawling:** Request immediate indexing on top commercial pages:
  - `/`
  - `/web-design-ireland`
  - `/industries/restaurant-website-design`
  - `/industries/small-business-website-design`
  - `/insights/how-much-does-a-website-cost-uk`
- [ ] **Bing Webmaster Tools:** Import Google Search Console verification to ensure indexation on Bing and Yahoo UK.
- [ ] **Rich Results Test:** Run Google Rich Results Test on `/insights/how-much-does-a-website-cost-uk` to verify FAQPage schema detection.
