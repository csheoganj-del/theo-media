# TheoMedia SEO: Items Requiring Owner Confirmation
**Status:** Action Items for Studio Founder / Stakeholders

---

### 1. Google Search Console (GSC) & Webmaster Tools Verification
- **Status:** Pending Owner Action
- **Action Required:**
  1. Add `https://www.theomedia.co.uk` as a Domain Property in Google Search Console.
  2. Add the provided DNS TXT verification record to the domain DNS manager (e.g. Cloudflare, Namecheap, GoDaddy).
  3. Submit the newly generated sitemap: `https://www.theomedia.co.uk/sitemap.xml`.
  4. Repeat for Bing Webmaster Tools (can import directly from Google Search Console).

---

### 2. Physical Business Address & Google Business Profile (GBP)
- **Status:** Optional / Recommended for Local Search Dominance
- **Context:**
  - In our schema and footer, we accurately represent TheoMedia as serving the **UK & Ireland** with direct phone line `+353 85 225 8004`.
  - If TheoMedia has a registered business address or coworking desk in Dublin or London, creating a Google Business Profile will unlock the Google Local 3-Pack on Maps for searches like &ldquo;web design studio Dublin&rdquo; or &ldquo;web design agency London&rdquo;.
  - If operating remotely without public foot traffic, configure GBP as a **Service Area Business (SAB)** covering the UK and Republic of Ireland with the physical address hidden from public view.

---

### 3. UK Telephone Number Routing (Optional Enhancement)
- **Status:** Review Preferred Setup
- **Context:**
  - The website currently displays the genuine contact number: `+353 85 225 8004` (Irish mobile / WhatsApp).
  - For UK clients, some corporate procurement teams prefer seeing a UK dialling code (+44 20 for London or a nationwide +44 800 freephone).
  - *Recommendation:* Set up a virtual UK number (e.g., via CircleLoop, Skype Number, or Zadarma) that auto-forwards to your Irish mobile or VoIP app. If activated, we can display dual numbers:
    - UK: `+44 (0)20 ...`
    - Ireland: `+353 85 225 8004`

---

### 4. Live Client Case Studies vs Production Prototypes
- **Status:** Strict Truthful Architecture Implemented
- **Context:**
  - To protect brand integrity and prevent misrepresentation, all concept sites (Cinder & Field, Velora House, Alder & Rowe, Elowen Clinic, Morrow & Hide, Hartwell Motorworks) are clearly presented as **Interactive Showcases**, **Production Prototypes**, and **Studio Case Studies**.
  - If you have signed client contracts or permission from real-world paying clients to feature their live URLs and logos on the homepage, provide their details to be substituted in.

---

### 5. Official Social Media Profile URLs
- **Status:** Pending Handles
- **Context:**
  - Please confirm the official URLs for:
    - LinkedIn Company Page
    - Instagram handle
    - X (Twitter) handle
    - GitHub Studio profile
  - Once provided, these will be injected into the `sameAs` array in the `Organization` Schema.org block in `layout.tsx` to establish Google Knowledge Graph entity linking.
