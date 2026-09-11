# TheoMedia URL Migration & Redirect Map
**Domain:** [https://www.theomedia.co.uk](https://www.theomedia.co.uk)  
**Configuration File:** `next.config.ts` (`async redirects()`)  
**Status:** Implemented with 301 Permanent Redirects

---

## 1. Migration Overview

When upgrading from the legacy HTML version and previous URL experiments to the current Next.js architecture, legacy and alias URLs were mapped directly to their closest relevant destinations using HTTP 301 (Permanent Redirect).

No traffic is blindly redirected to the homepage; every legacy path is mapped to its equivalent content to preserve link equity and prevent 404 drops.

---

## 2. Detailed Redirect Mapping

| Legacy / Alias Request Path | HTTP Status | New Canonical Destination | Rationale |
| :--- | :---: | :--- | :--- |
| `/website-design.html` | **301** | `/web-design` | Legacy static HTML file migration |
| `/website-design` | **301** | `/web-design` | Shorter, cleaner canonical service URL |
| `/services/websites` | **301** | `/web-design` | Directory flattening to high-authority top-level route |
| `/ecommerce-development.html` | **301** | `/industries/ecommerce-website-design` | Legacy static HTML file migration |
| `/ecommerce-development` | **301** | `/industries/ecommerce-website-design` | Direct mapping to comprehensive ecommerce flagship page |
| `/services/ecommerce` | **301** | `/industries/ecommerce-website-design` | Service consolidation |
| `/services/business-software` | **301** | `/business-software` | Directory flattening to high-authority top-level route |
| `/services/web-applications` | **301** | `/business-software` | Consolidation of custom web apps under business software |
| `/privacy.html` | **301** | `/privacy` | Legacy HTML migration |
| `/terms` | **301** | `/privacy` | Legal & compliance consolidation |
| `/terms-of-service` | **301** | `/privacy` | Standard legal alias |
| `/compliance` | **301** | `/privacy` | Compliance consolidation |
| `/insights` | **301** | `/journal` | Consolidation to official editorial studio Journal |
| `/insights/how-much-does-a-website-cost-uk` | **301** | `/journal/how-much-does-a-website-cost-uk` | Canonical Journal slug |
| `/insights/squarespace-vs-custom-website` | **301** | `/journal/squarespace-vs-custom-website` | Canonical Journal slug |
| `/insights/squarespace-vs-custom-restaurant-website` | **301** | `/journal/squarespace-vs-custom-restaurant-website` | Canonical Journal slug |
| `/insights/odoo-alternative-restaurants` | **301** | `/journal/odoo-website-alternative-restaurants` | Canonical Journal slug |
| `/insights/restaurant-website-cost-uk` | **301** | `/journal/restaurant-website-cost-uk` | Canonical Journal slug |
| `/insights/:slug*` | **301** | `/journal/:slug*` | Catch-all for any historical `/insights` links |

---

## 3. Subdomain Prototype Routing (Direct 301 Mappings)

| Request Path | HTTP Status | External Subdomain Destination | Type |
| :--- | :---: | :--- | :--- |
| `/work/garage` | **301** | `https://hartwell-motorworks.theomedia.co.uk` | Specialist Automotive Showcase |
| `/work/hartwell-motorworks` | **301** | `https://hartwell-motorworks.theomedia.co.uk` | Specialist Automotive Showcase |
| `/work/build` | **301** | `https://alder-rowe.theomedia.co.uk` | Trades & Construction Showcase |
| `/work/alder-rowe` | **301** | `https://alder-rowe.theomedia.co.uk` | Trades & Construction Showcase |
| `/work/velora` | **301** | `https://velora-house.theomedia.co.uk` | Boutique Hotel Showcase |
| `/work/velora-house` | **301** | `https://velora-house.theomedia.co.uk` | Boutique Hotel Showcase |
| `/work/table` | **301** | `https://cinder-field.theomedia.co.uk` | Restaurant & Gastropub Showcase |
| `/work/cinder-field` | **301** | `https://cinder-field.theomedia.co.uk` | Restaurant & Gastropub Showcase |
| `/work/clinic` | **301** | `https://elowen-clinic.theomedia.co.uk` | Healthcare & Clinic Showcase |
| `/work/elowen-clinic` | **301** | `https://elowen-clinic.theomedia.co.uk` | Healthcare & Clinic Showcase |
| `/work/leather` | **301** | `https://morrow-hide.theomedia.co.uk` | Luxury DTC Ecommerce Showcase |
| `/work/morrow-hide` | **301** | `https://morrow-hide.theomedia.co.uk` | Luxury DTC Ecommerce Showcase |
| `/work/nick` | **301** | `https://nick.theomedia.co.uk` | Personal Portfolio Showcase |
| `/work/barber` | **301** | `https://wren-crown.theomedia.co.uk` | Barber / Grooming Studio Showcase |
| `/work/wren-crown` | **301** | `https://wren-crown.theomedia.co.uk` | Barber / Grooming Studio Showcase |

---

## 4. Genuinely Obsolete URLs (404/410 Handling)

Any historical temporary URLs (such as test Perl backup files or temporary build artifacts) return standard 404 responses via `src/app/not-found.tsx` with a clean editorial message and a link back to the homepage.
