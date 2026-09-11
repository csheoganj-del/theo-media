# TheoMedia SEO Audit (Baseline / Before)

**Audit Date:** 11 September 2026  
**Auditor:** Technical & Architectural SEO Specialist  
**Domain Audited:** `https://www.theomedia.co.uk`  
**Repository:** TheoMedia Next.js (App Router, Turbopack/Webpack, TypeScript, Tailwind CSS v4)  
**Target Markets:** United Kingdom (Primary), Ireland (Strong Secondary)  

---

## 1. Executive Summary & Honest Baseline Scoring (0–100)

The baseline website exhibits a strong visual identity, refined typography, and thoughtful editorial aesthetics. However, from an organic search, information architecture, geographic commercial discoverability, and technical indexation standpoint, the site operates almost entirely as an aesthetic brochure rather than an organic commercial search acquisition engine.

| Scoring Category | Baseline Score (0–100) | Primary Weakness & Evidence |
| :--- | :---: | :--- |
| **Technical SEO** | **44 / 100** | Missing sitemap routes, missing image dimensions, no dynamic OpenGraph image strategy, redirect sprawl in `next.config.ts`, no trailing slash strategy. |
| **On-Page SEO** | **38 / 100** | Homepage completely lacks a semantic `<h1>` tag; meta titles lack primary commercial keyword triggers; duplicate brand suffixes; weak meta descriptions. |
| **Information Architecture** | **35 / 100** | Critical service pages (`/services/*`) are unlinked in sitemap and orphan-like; case studies are disconnected from core service pages; footer lists plain non-clickable text for capabilities and industries. |
| **UK Relevance** | **42 / 100** | Domain is `.co.uk`, but body copy and headings use vague "UK & Europe" phrasing without solid UK commercial intent ("web design studio UK", "bespoke website development UK"). |
| **Ireland Relevance** | **18 / 100** | No dedicated Ireland landing page, no localized regional content, no `hreflang` architecture despite having a genuine Irish phone number (`+353 85 225 8004`) and dual EUR pricing. |
| **Commercial-Intent Targeting** | **30 / 100** | Vague editorial headlines ("We build digital experiences people remember") with zero capture of high-intent queries ("web design agency UK", "hire web designer UK", "custom website development"). |
| **Industry Topical Authority** | **28 / 100** | Zero dedicated industry landing pages (`/restaurant-website-design`, `/hotel-website-design`, `/ecommerce-website-design`). Only 6 isolated case-study URLs that are excluded from the main navigation and sitemap. |
| **Competitor / Comparison Targeting** | **0 / 100** | Complete void of competitor interception content (zero comparison pages for Squarespace, Odoo, Wix, WordPress, or custom vs. builder decision queries). |
| **Internal Linking** | **32 / 100** | Inbound links are largely restricted to generic top navigation; footer capability and industry lists are flat `<span>` tags without hyperlinks; case studies do not cross-link to services. |
| **Structured Data (JSON-LD)** | **40 / 100** | Global `Organization` and `WebSite` exist in `layout.tsx`, but no page-level schema exists (no `Service` schema, no `BreadcrumbList`, no `Article` schema, no `ItemPage`). |
| **Performance / Core Web Vitals Readiness** | **68 / 100** | Next.js server-rendering provides fast TTFB, but live iframe previews in `<ProjectPreview />` cause background network overhead and layout shifts on initial load. |
| **Mobile SEO** | **62 / 100** | Responsive layout works well, but iframes on mobile devices cause scroll friction and resource consumption; mobile bottom bar obscures footer elements without proper padding. |
| **Trust / Credibility** | **55 / 100** | Demonstrations and concept projects risk being misinterpreted as client work if not clearly separated; lack of explicit studio credentials and real client scope boundaries. |
| **Content Quality & Depth** | **48 / 100** | Case studies have good copy, but core service pages (`/services/websites`, `/services/ecommerce`) are thin bulleted lists with fewer than 250 words each. |
| **Search-Result Presentation (SERP Snippets)** | **36 / 100** | Generic title tags ("Website Design | TheoMedia") miss CTR hooks, pricing anchors, and geographic qualifiers; OpenGraph images are missing across multiple routes. |
| **Overall Organic-Search Readiness** | **34 / 100** | **CRITICAL DEFICIT.** The site is virtually invisible for commercial buyer searches in the UK and Ireland. |

---

## 2. Route-by-Route Baseline Audit

### Route 1: Homepage (`/`)
- **URL:** `https://www.theomedia.co.uk/`
- **HTTP / Indexability:** 200 OK / Indexable
- **Title Tag:** `TheoMedia — Bespoke Websites & Digital Experiences | UK, Ireland & Europe`
- **Meta Description:** `TheoMedia is a digital studio designing and engineering distinctive websites, ecommerce experiences and digital systems for ambitious businesses across the UK, Ireland, and Europe.`
- **Canonical:** `https://www.theomedia.co.uk`
- **Robots Directive:** `index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1`
- **H1 / Main Heading:** **MISSING.** `THEOMEDIA` is wrapped in a `<motion.div>` with no semantic heading. The first heading is an `<h2>`: *"We build digital experiences people remember."*
- **Major H2s:** *"We build digital experiences people remember."*, *"A bespoke website isn't an expense..."*, *"Bespoke design from £895."*, *"Selected Work"*, *"What we deliver"*, *"Disciplines"*, *"Method"*, *"Start a Project"*.
- **OG Metadata:** OG Title: *"TheoMedia — We Build Websites People Remember"*; OG Image: `/og-image.jpg` (static).
- **Structured Data:** `WebSite` and `Organization` / `ProfessionalService` in root layout. No specific homepage schema.
- **Sitemap Inclusion:** Yes (priority 1.0).
- **Internal Inbound / Outbound Links:** Inbound from all pages (logo). Outbound to `/work`, `/services`, `/studio`, `/pricing`, `/contact`.
- **Target Search Intent:** Broad brand discovery; completely fails commercial terms ("web design UK", "web design studio UK", "custom website development").
- **Weaknesses / Evidence:**
  1. No semantic `<h1>`.
  2. Geographic subtitle reads "DIGITAL STUDIO · UK & EUROPE", which dilutes UK & Ireland focus and fails search relevance.
  3. No clear service definitions above the fold.

---

### Route 2: Work Index (`/work`)
- **URL:** `https://www.theomedia.co.uk/work`
- **HTTP / Indexability:** 200 OK / Indexable
- **Title Tag:** `Work | TheoMedia | TheoMedia` (Duplicate brand name bug)
- **Meta Description:** `Bespoke digital experiences and production-grade builds across hospitality, trades, healthcare and ecommerce.`
- **Canonical:** `https://www.theomedia.co.uk/work`
- **H1 / Main Heading:** `<h1>THE WORK</h1>`
- **Major H2s:** Individual project titles (Hartwell Motorworks, Alder & Rowe, Velora House, Cinder & Field, Elowen Clinic, Morrow & Hide).
- **Structured Data:** None.
- **Sitemap Inclusion:** Yes (priority 0.8).
- **Weaknesses:** Title tag repeats `| TheoMedia | TheoMedia`. Lacks `CollectionPage` or `BreadcrumbList` schema. Renders 6 heavy live iframes simultaneously.

---

### Route 3: Individual Work Slugs (`/work/[slug]`)
- **URLs:**
  - `/work/theo-garage`
  - `/work/theo-build`
  - `/work/velora-house`
  - `/work/theo-table`
  - `/work/theo-clinic`
  - `/work/theo-leather`
- **HTTP / Indexability:** 200 OK / Indexable
- **Titles:** e.g., `Velora House | TheoMedia Work | TheoMedia`
- **H1:** Project Title
- **Structured Data:** None.
- **Sitemap Inclusion:** Included in sitemap.ts.
- **Weaknesses:** No `BreadcrumbList` schema. Slugs (`theo-garage`, `theo-build`) are non-descriptive and conflict with actual brand names (`hartwell-motorworks`, `alder-rowe`).

---

### Route 4: Services Hub (`/services`)
- **URL:** `https://www.theomedia.co.uk/services`
- **HTTP / Indexability:** 200 OK / Indexable
- **Title Tag:** `Services | TheoMedia`
- **Meta Description:** Studio services overview.
- **H1:** `Studio Capabilities`
- **Sitemap Inclusion:** Yes.
- **Weaknesses:** Extremely thin content. Does not define scope, deliverables, technology stack, or target outcomes. No links to industry solutions.

---

### Routes 5–8: Service Detail Subpages
- **URLs:**
  - `/services/websites`
  - `/services/ecommerce`
  - `/services/web-applications`
  - `/services/business-software`
- **HTTP / Indexability:** 200 OK / Indexable
- **Titles:** `Website Design | TheoMedia`, `Ecommerce | TheoMedia`, etc.
- **H1:** Page Title (`Website Design`, etc.)
- **Sitemap Inclusion:** **OMITTED FROM SITEMAP.** Neither `sitemap.ts` nor global navigation links to these subpages directly.
- **Orphan Status:** Near-orphan. Only linked via small card clicks in `/services`.
- **Content Depth:** Extremely thin (< 180 words each). Only 8 bullet points per service. No case study links, no industry links, no pricing links, no schema markup.

---

### Routes 9–15: Case Studies (`/case-studies/*`)
- **URLs:**
  - `/case-studies`
  - `/case-studies/restaurant-gastropub-website-design`
  - `/case-studies/boutique-hotel-website-design`
  - `/case-studies/builder-roofing-website-design`
  - `/case-studies/ecommerce-website-design`
  - `/case-studies/garage-website-design`
  - `/case-studies/private-healthcare-website-design`
- **HTTP / Indexability:** 200 OK / Indexable
- **Sitemap Inclusion:** **COMPLETELY MISSING FROM SITEMAP.**
- **Orphan Status:** High risk. Only linked from the bottom of project cards.
- **Weaknesses:** In-depth editorial content (600–900 words), but invisible to search engines due to sitemap exclusion and lack of navigation prominence. No `Article` or `CaseStudy` schema.

---

### Route 16: Studio (`/studio`)
- **URL:** `https://www.theomedia.co.uk/studio`
- **H1:** `The Studio`
- **Weaknesses:** Misses founder-led narrative, craft philosophy, and UK/Ireland operating model.

---

### Route 17: Pricing (`/pricing`)
- **URL:** `https://www.theomedia.co.uk/pricing`
- **H1:** `Investment & Packages`
- **Weaknesses:** Good transparency (£895, £2,495, £4,995+), but lacks FAQ schema, cost-comparison context, and buyer guide links.

---

### Route 18: Contact (`/contact`)
- **URL:** `https://www.theomedia.co.uk/contact`
- **H1:** `Start a Project`
- **Weaknesses:** No `ContactPage` schema. Missing explicit operating hours and UK/Ireland consultation process.

---

## 3. Critical Structural Deficiencies Identified

1. **Sitemap Disconnect:** The existing `sitemap.ts` hardcodes only 7 static routes and 6 work slugs. 10 production pages (all `/services/*` and all `/case-studies/*`) are excluded from Google XML indexing.
2. **Title Template Glitch:** Next.js `title.template: '%s | TheoMedia'` combined with child pages defining `title: 'Page Title | TheoMedia'` produces double-suffixed titles like `Work | TheoMedia | TheoMedia`.
3. **No Geographic Dedicated Landing:** Zero dedicated presence for Ireland (`/web-design-ireland`), despite clear commercial intent and genuine Irish phone/currency signals.
4. **No Industry-Specific Commercial Pages:** Zero search landing pages for `restaurant-website-design`, `hotel-website-design`, `trades-website-design`, etc.
5. **No Competitor Interception:** Zero presence for businesses evaluating Squarespace or Odoo against bespoke design.
6. **No Educational / Cost Guide Content:** Zero visibility for top-of-funnel cost and decision queries ("how much does a website cost in the UK", "custom website vs website builder").
7. **Flat Non-Clickable Footer Links:** Footer lists capabilities and industries as dead text spans rather than crawlable internal links.
