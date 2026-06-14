/**
 * THEOMEDIA CLIENT SOBER LOGIC & CONTROLLERS
 * Includes: 
 *   - Multilingual Client-side Translation Manager
 *   - Dynamic Multi-Currency Pricing recalculator
 *   - Interactive SaaS Solution Package Configurator
 *   - Core UI animations (Header shrink, FAQ, Form validation)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     GLOBAL TRANSLATIONS MATRIX (EN, DE, FR, ES)
     ========================================================================== */
  const translations = {
    en: {
      "nav-services": "Solutions",
      "nav-pos": "Solution Configurator",
      "nav-templates": "Visual Systems",
      "nav-pricing": "Pricing",
      "nav-compliance": "Europe Hubs",
      "nav-faq": "Q&A",
      "btn-get-started": "Get Proposal",
      "hero-badge-text": "Custom Software & Web Engineering — Europe & Global",
      "hero-title-part1": "Your Custom Digital Ecosystem:",
      "hero-title-part2": "Websites, CRM, POS & Apps",
      "hero-desc-text": "At TheoMedia, we engineer sleek, bespoke software architectures that replace fragile legacy sheets, automate billing through integrated cloud APIs, and run physical checkout networks with pixel-perfect responsive excellence.",
      "hero-cta-primary": "Solution Configurator",
      "hero-cta-secondary": "Get a Free Proposal",
      "marquee-title": "COMPLIANT INTEGRATION CAPABILITIES & TRUSTED BY TECH-FORWARD VENTURES",
      "services-micro": "BESPOKE PRODUCTS",
      "services-title": "Bespoke Enterprise Solutions",
      "services-desc": "We compile secure, fast-loading visual ecosystems structured to handle heavy data, cross-border traffic, and strict compliance targets.",
      "serv-web-title": "Websites & E-Commerce",
      "serv-web-sub": "High-Performance Frontends",
      "serv-web-desc": "Responsive layouts, elegant visuals, and blazing fast on-page SEO frameworks designed to hook global audiences and rank perfectly on search engines.",
      "serv-best": "BEST FOR",
      "serv-web-best": "B2B exporters, luxury services, boutique developers, and localized content hubs in Europe.",
      "serv-web-feat1": "Fully responsive on phones & tablets",
      "serv-web-feat2": "GDPR compliant cookie & user setups",
      "serv-web-feat3": "Dynamic language files localization",
      "serv-web-feat4": "Instant loading with headless CMS links",
      "serv-popular": "RECOMMENDED",
      "serv-app-title": "Web Applications (ERP/CRM)",
      "serv-app-sub": "Bespoke Operations Dashboards",
      "serv-app-desc": "Private operations hubs running natively in secure web browsers, integrating database synchronization, inventory alerts, and instant invoicing portals.",
      "serv-app-best": "Replacing spreadsheets, staff management, invoicing counters, and complex supply tracking.",
      "serv-app-feat1": "Real-time live multi-branch inventory sync",
      "serv-app-feat2": "Automated WhatsApp bill & receipt dispatches",
      "serv-app-feat3": "Multiple currency invoicing (GBP, EUR, CHF)",
      "serv-app-feat4": "Secure administrative authorization modules",
      "serv-mob-title": "Mobile Applications",
      "serv-mob-sub": "Direct App Store Deployment",
      "serv-mob-desc": "Dedicated native mobile tools engineered for tactile performance, high-speed graphics, offline cache frameworks, and smart push alert interfaces.",
      "serv-mob-best": "Client loyalty programs, field team utilities, custom ordering platforms, and smart notification campaigns.",
      "serv-mob-feat1": "Smooth native hardware performance",
      "serv-mob-feat2": "Smart targeted screen push alerts",
      "serv-mob-feat3": "Full offline database operations cache",
      "serv-mob-feat4": "Hassle-free submission support on Play Store",
      "pos-micro": "INTERACTIVE CONFIGURATOR",
      "pos-title": "Solution Configurator",
      "pos-desc": "Customize your software package in real time. Select the operational modules below to compile your enterprise package. Watch the system compute subtotals, VAT, and generate invoices instantly.",
      "pos-input-title": "Select Services to Add:",
      "pos-item-web": "Standard Web System",
      "pos-item-crm": "Client CRM Portal",
      "pos-item-stock": "Real-time Stock Module",
      "pos-item-whatsapp": "WhatsApp Messaging Hook",
      "pos-item-android": "Native Android App Wrapper",
      "pos-item-support": "3-Year Hypercare SLA",
      "term-title": "THEOMEDIA PROPOSAL ESTIMATE",
      "term-status-node": "NODE: EU-WEST-2",
      "term-empty-cart": "No items selected. Select active modules on the left to start compiling your custom package proposal.",
      "term-subtotal": "SUBTOTAL:",
      "term-vat": "ESTIMATED TAX (20%):",
      "term-grandtotal": "TOTAL NET ESTIMATE:",
      "term-checkout": "DISPATCH PROPOSAL",
      "term-clear": "CLEAR SELECTION",
      "wa-title": "WhatsApp Invoice Sent",
      "wa-body": "Bespoke Contract Invoice PDF pushed to your European business line. Ref:",
      "templates-micro": "UI & CRAFT",
      "templates-title": "Elite Web Visual Systems",
      "templates-desc": "Witness our dynamic frontend blueprints designed to establish immediate credibility, load instantly on 3G networks, and captivate international commerce.",
      "temp-badge-award": "DESIGN AWARD NOMINEE",
      "temp-badge-concept": "FINTECH PLATFORM",
      "temp-banana-desc": "Bespoke framework tailored for premium organic exporters, agricultural distributors, and next-gen food supply networks trading across Germany, UK, and Spain.",
      "temp-zurich-desc": "High-security payment landing systems, featuring modular ledger updates, compliance nodes tracking, and multi-currency exchange triggers optimized for Swiss francs.",
      "temp-btn-demo": "Request Framework Demo",
      "map-micro": "EUROPE COMPLIANCE & REACH",
      "map-title": "International Business Hubs",
      "map-desc": "Our software compliance engines are calibrated to fit UK, European Union, and Swiss data privacy legislation.",
      "map-regulatory": "REGULATORY ALIGNMENT",
      "map-currency": "DEFAULT ISO CURRENCY",
      "map-support": "DEDICATED HELPDESK",
      "map-desc-london": "Our primary engineering office coordinates international architecture delivery, structures compliance guidelines, and manages cloud operations for the European grid.",
      "pricing-micro": "UPFRONT VALUES",
      "pricing-title": "Clear Contract Pricing",
      "pricing-desc": "Configure your engineering system. Transparent, contract-based quotes calculated to comply with local financial guidelines.",
      "plan-web-name": "Standard Website",
      "plan-web-desc": "Perfect for establishing an immediate modern online credibility, capturing search volume and customer leads.",
      "plan-web-f1": "Custom visual design & assets",
      "plan-web-f2": "Fully responsive UI framework",
      "plan-web-f3": "Basic on-page Google SEO setup",
      "plan-web-f4": "Integrated contact channels & maps",
      "plan-upfront": " upfront",
      "plan-app-name": "Web Applications",
      "plan-app-desc": "Bespoke operational tools running securely in web browsers to automate operations and manage CRM tracking.",
      "plan-app-f1": "Full POS register & billing screen",
      "plan-app-f2": "WhatsApp dispatch API integration",
      "plan-app-f3": "Live database stock sync counts",
      "plan-app-f4": "Role-based administrative logins",
      "plan-mob-name": "Mobile Apps",
      "plan-mob-desc": "Tactile, touchscreen-native apps optimized for Android platforms, offline databases, and push alerts.",
      "plan-mob-f1": "Touch-optimized fluid gestures layout",
      "plan-mob-f2": "Direct native push notifications",
      "plan-mob-f3": "Offline local cache framework support",
      "plan-mob-f4": "App Store launch pipeline setup",
      "plan-popular-tag": "MOST POPULAR",
      "plan-cta": "Configure Package",
      "faq-micro": "FAQ",
      "faq-title": "Questions & Answers",
      "faq-desc": "Clear answers regarding code licensing, global server systems, and deployment timelines across Europe.",
      "faq-q1": "Who owns the custom code once the project is finished?",
      "faq-a1": "You do. Upon clearing final milestone invoices, we transfer 100% intellectual property, repository coordinates, cloud setups, and database schemas directly to you. No ongoing operational royalties or mandatory vendor lock-in agreements exist.",
      "faq-q2": "How does the integrated WhatsApp dispatch engine operate?",
      "faq-a2": "We hook your administrative CRM portal to official cloud gateways (e.g. Meta Cloud API). Whenever sales registers execute a transaction, a structured bill formats dynamically and pushes straight to the client's verified mobile terminal as a branded PDF file link, minimizing paper overhead.",
      "faq-q3": "Can you link my web applications to customized domains?",
      "faq-a3": "Absolutely. We handle secure DNS mapping for localized suffixes (.co.uk, .ch, .de, .fr, .ie, .com) and coordinate automatic SSL certificates renewal setups at zero extra monthly surcharge.",
      "faq-q4": "What compliance measures do you build in for European trade?",
      "faq-a4": "We integrate comprehensive GDPR protocols, including isolated SQLite/Postgres databases, cryptographic client records, automated data export mechanisms, and cookie controls. We also design dynamic VAT reporting tools mapped to country-specific taxation bands.",
      "contact-micro": "PROJECT HUB",
      "contact-title": "Start Your Custom Ecosystem",
      "contact-desc": "Talk directly with our core engineering department. We structure solutions from raw wireframes to secure, responsive live production grids.",
      "contact-email-title": "Direct Inquiries",
      "contact-hq-title": "European Operational Hubs",
      "form-label-name": "Full Name / Organisation",
      "form-label-email": "Email Address",
      "form-label-solution": "Requested Engineering Scope",
      "form-label-desc": "Project Brief & Invoicing Target",
      "form-opt-select": "Select active scope...",
      "form-opt-web": "Bespoke Visual Website",
      "form-opt-app": "Browser Web App (POS, CRM, ERP)",
      "form-opt-mob": "Native Touchscreen Mobile App",
      "form-submit": "COMPILE PROJECT INQUIRY",
      "form-success-title": "Connection Encrypted!",
      "form-success-text": "Thank you. Your project parameters have been uploaded. An engineering manager from TheoMedia will connect with you via email or phone within 12 hours.",
      "foot-brand-desc": "Designing, programming, and deploying customized visual systems, cloud ERP databases, checkout registers, and mobile apps for international commerce.",
      "foot-solutions": "Solutions",
      "foot-sol-web": "Enterprise Frontends",
      "foot-sol-app": "ERP & CRM Invoicing",
      "foot-sol-wa": "WhatsApp API Integrations",
      "foot-sol-mob": "Mobile App Development",
      "foot-compliance": "Compliance Hubs",
      "foot-comp-gdpr": "GDPR Data Isolation",
      "foot-comp-swiss": "Swiss FinSA Compliance",
      "foot-comp-uk": "UK Data Protection Act",
      "foot-comp-vat": "European VAT Registries",
      "foot-reach": "Continental Offices",
      "foot-legal-privacy": "Privacy Registry",
      "foot-legal-terms": "Compliance Terms"
    },
    de: {
      "nav-services": "Lösungen",
      "nav-pos": "Solution Configurator",
      "nav-templates": "Designsysteme",
      "nav-pricing": "Preise",
      "nav-compliance": "Europa-Hubs",
      "nav-faq": "Q&A",
      "btn-get-started": "Angebot anfordern",
      "hero-badge-text": "Individuelle Software- & Webentwicklung — Europa & Global",
      "hero-title-part1": "Ihr maßgeschneidertes digitales System:",
      "hero-title-part2": "Websites, CRM, POS & Apps",
      "hero-desc-text": "Bei TheoMedia entwickeln wir elegante, maßgeschneiderte Softwarearchitekturen, die unübersichtliche Tabellen ersetzen, die Abrechnung über APIs automatisieren und Kassennetzwerke in Spitzenqualität betreiben.",
      "hero-cta-primary": "Konfigurator testen",
      "hero-cta-secondary": "Kostenloses Angebot",
      "marquee-title": "KONFORME INTEGRATIONSFÄHIGKEITEN & VERTRAUT VON INNOVATIVEN UNTERNEHMEN",
      "services-micro": "MASSGESCHNEIDERTE PRODUKTE",
      "services-title": "Bespoke Enterprise Lösungen",
      "services-desc": "Wir bauen sichere, ultraschnelle Systeme, die für große Datenmengen, internationalen Traffic und strenge Compliance-Richtlinien optimiert sind.",
      "serv-web-title": "Websites & E-Commerce",
      "serv-web-sub": "Hochleistungs-Frontends",
      "serv-web-desc": "Responsive Layouts, elegante Grafiken und blitzschnelles On-Page-SEO, optimiert für ein internationales Publikum und perfekte Google-Rankings.",
      "serv-best": "IDEAL FÜR",
      "serv-web-best": "B2B-Exporteure, Premium-Dienstleistungen, innovative Entwickler und europäische Content-Hubs.",
      "serv-web-feat1": "Perfekt optimiert für Smartphones & Tablets",
      "serv-web-feat2": "DSGVO-konforme Cookie- & Cookie-Banner-Setups",
      "serv-web-feat3": "Dynamische Sprachdateien-Lokalisierung",
      "serv-web-feat4": "Sofortiges Laden durch Headless-CMS-Anbindung",
      "serv-popular": "EMPFOHLEN",
      "serv-app-title": "Webanwendungen (ERP/CRM)",
      "serv-app-sub": "Maßgeschneiderte Dashboards",
      "serv-app-desc": "Private Steuerungs-Hubs direkt im Browser, inklusive Echtzeit-Datenbanksynchronisierung, Lagerbestandsalarmen und Rechnungsportalen.",
      "serv-app-best": "Ablösung von Excel-Tabellen, Personalverwaltung, Kassenabrechnung und Lieferketten-Verfolgung.",
      "serv-app-feat1": "Filialübergreifende Echtzeit-Bestandssynchronisierung",
      "serv-app-feat2": "Automatisierter WhatsApp-Rechnungsversand",
      "serv-app-feat3": "Mehrwährungs-Rechnungserstellung (GBP, EUR, CHF)",
      "serv-app-feat4": "Sichere administrative Autorisierungs-Module",
      "serv-mob-title": "Mobile Applikationen",
      "serv-mob-sub": "Direkte App-Store-Bereitstellung",
      "serv-mob-desc": "Native mobile Apps für hervorragende Performance auf Touchscreens, Offline-Daten-Caching und intelligente Push-Nachrichten-Systeme.",
      "serv-mob-best": "Kundenbindungsprogramme, Außendienst-Tools, mobile Bestellplattformen und gezielte Kampagnen.",
      "serv-mob-feat1": "Flüssige native Hardware-Geschwindigkeit",
      "serv-mob-feat2": "Intelligente, direkte Push-Benachrichtigungen",
      "serv-mob-feat3": "Voller Offline-Datenbank-Betriebscache",
      "serv-mob-feat4": "Unterstützung bei der Freigabe im Play Store",
      "pos-micro": "INTERAKTIVER KONFIGURATOR",
      "pos-title": "Solution Configurator",
      "pos-desc": "Wählen Sie links Module aus, um Ihren Beleg zu erstellen. Das System berechnet Preise und Steuern neu und übersetzt den Beleg sofort!",
      "pos-input-title": "Dienstleistungen hinzufügen:",
      "pos-item-web": "Standard-Websystem",
      "pos-item-crm": "Kunden-CRM-Portal",
      "pos-item-stock": "Echtzeit-Bestandsmodul",
      "pos-item-whatsapp": "WhatsApp API-Integration",
      "pos-item-android": "Native Android-App",
      "pos-item-support": "3 Jahre Hypercare SLA",
      "term-title": "THEOMEDIA PROJEKT-RECHNUNG",
      "term-status-node": "KNOTENPOINT: EU-WEST-2",
      "term-empty-cart": "Keine Artikel ausgewählt. Klicken Sie links, um Module zu buchen.",
      "term-subtotal": "ZWISCHENSUMME:",
      "term-vat": "GESCHÄTZTE STEUER (20%):",
      "term-grandtotal": "NETTO-GESAMTSUMME:",
      "term-checkout": "PROJEKT ABSENDEN",
      "term-clear": "AUSWAHL LÖSCHEN",
      "wa-title": "WhatsApp-Beleg versendet",
      "wa-body": "Bespoke-Rechnungs-PDF an europäische Mobilnummer gesendet. Ref:",
      "templates-micro": "UI & VISUALS",
      "templates-title": "Premium Web-Systeme",
      "templates-desc": "Erleben Sie unsere dynamischen Frontend-Blueprints, die sofortige Glaubwürdigkeit schaffen, auch im 3G-Netz schnell laden und Kunden begeistern.",
      "temp-badge-award": "DESIGNPREIS NOMINIERT",
      "temp-badge-concept": "FINTECH-PLATTFORM",
      "temp-banana-desc": "Maßgeschneidertes Framework für Bananen-Exporteure, Agrarvertriebe und moderne Lieferketten in Deutschland, Großbritannien und Spanien.",
      "temp-zurich-desc": "Hochsichere Payment-Systeme mit modularem Ledger, Compliance-Verfolgung und Währungsumrechnungs-Triggern für Schweizer Franken.",
      "temp-btn-demo": "Demo-Framework anfordern",
      "map-micro": "EUROPA-COMPLIANCE & PRÄSENZ",
      "map-title": "Internationale Standorte",
      "map-desc": "Unsere Software-Engines sind auf die DSGVO, das Schweizer Datenschutzgesetz (DSG) und britische Datenschutzgesetze abgestimmt.",
      "map-regulatory": "REGULATORISCHE KONFORMITÄT",
      "map-currency": "STANDARD-WÄHRUNG (ISO)",
      "map-support": "DEDIZIERTER SUPPORT",
      "map-desc-london": "Unser Hauptentwicklungsbüro koordiniert internationale Systembereitstellungen, Compliance-Richtlinien und verwaltet Cloud-Architekturen für Europa.",
      "pricing-micro": "TRANSPARENTE WERTE",
      "pricing-title": "Klare Paketpreise",
      "pricing-desc": "Stellen Sie Ihr System zusammen. Transparente Festpreise, kalkuliert nach lokalen Finanz- und Rechnungsrichtlinien.",
      "plan-web-name": "Standard Website",
      "plan-web-desc": "Perfekt für eine überzeugende digitale Präsenz, um lokale Suchanfragen und Kundenanfragen zu gewinnen.",
      "plan-web-f1": "Individuelles Design & Grafik-Assets",
      "plan-web-f2": "Vollständig responsives UI-Framework",
      "plan-web-f3": "Grundlegendes On-Page-Google-SEO-Setup",
      "plan-web-f4": "Integrierte Kontaktformulare & Karten",
      "plan-upfront": " einmalig",
      "plan-app-name": "Webanwendungen",
      "plan-app-desc": "Bespoke Web-Tools für die Cloud, um Arbeitsabläufe zu automatisieren und Kundendaten sicher im CRM zu verwalten.",
      "plan-app-f1": "Volles POS-Kassensystem & Rechnungsbeleg",
      "plan-app-f2": "WhatsApp-API-Rechnungsversand",
      "plan-app-f3": "Lagerbestand-Echtzeitsynchronisierung",
      "plan-app-f4": "Rollenbasierte Mitarbeiter-Zugänge",
      "plan-mob-name": "Mobile Apps",
      "plan-mob-desc": "Flüssige, touch-optimierte native Apps für Android, lokale Datenbank-Caching und Echtzeit-Meldungen.",
      "plan-mob-f1": "Optimiertes Touch-Gesten-Layout",
      "plan-mob-f2": "Direkte native Push-Benachrichtigungen",
      "plan-mob-f3": "Offline-Datenbank-Support (lokal)",
      "plan-mob-f4": "Unterstützung beim Store-Freigabeprozess",
      "plan-popular-tag": "AM BELIEBTESTEN",
      "plan-cta": "Paket konfigurieren",
      "faq-micro": "FAQ",
      "faq-title": "Häufige Fragen & Antworten",
      "faq-desc": "Klare Antworten zu Code-Eigentum, weltweiten Server-Systemen und Projektlaufzeiten in Europa.",
      "faq-q1": "Wer besitzt den Code nach Projektabschluss?",
      "faq-a1": "Sie. Nach Begleichung der Abschlussrechnung übertragen wir das vollständige geistige Eigentum, den Zugriff auf das GitHub-Repository und alle Zugangsdaten an Sie. Keine laufenden Lizenzgebühren.",
      "faq-q2": "Wie funktioniert das Senden von Rechnungen über WhatsApp?",
      "faq-a2": "Wir verknüpfen Ihr CRM-System mit offiziellen APIs (z. B. Meta Cloud API). Beim Kaufabschluss wird automatisch ein PDF-Beleg erstellt und sofort als Link an die Mobilnummer des Kunden gesendet.",
      "faq-q3": "Können Sie die Webanwendungen mit meiner Wunschdomain verbinden?",
      "faq-a3": "Absolut. Wir richten DNS-Einträge für lokale Domains ein (.co.uk, .ch, .de, .fr, .ie, .com) und aktivieren kostenlose SSL-Zertifikate, die sich automatisch verlängern.",
      "faq-q4": "Welche Compliance-Maßnahmen sind für Europa integriert?",
      "faq-a4": "Wir integrieren umfassende DSGVO-Vorkehrungen wie isolierte Datenbanken, verschlüsselte Kundendaten und Exportfunktionen. Zudem berücksichtigen wir die länderspezifischen Mehrwertsteuersätze.",
      "contact-micro": "KONTAKT-CENTER",
      "contact-title": "Starten Sie Ihr Projekt",
      "contact-desc": "Sprechen Sie direkt mit unseren Entwicklern. Wir setzen Ihre Ideen in sichere, responsive und produktive Systeme um.",
      "contact-email-title": "Direkte Anfragen",
      "contact-hq-title": "Europäische Standorte",
      "form-label-name": "Name / Unternehmen",
      "form-label-email": "E-Mail-Adresse",
      "form-label-solution": "Gewünschter Projektumfang",
      "form-label-desc": "Projektbeschreibung & Rechnungsziel",
      "form-opt-select": "Umfang auswählen...",
      "form-opt-web": "Individuelle Premium-Website",
      "form-opt-app": "Cloud-Webanwendung (POS, CRM, ERP)",
      "form-opt-mob": "Touch-optimierte mobile App",
      "form-submit": "PROJEKTANFRAGE ABSENDEN",
      "form-success-title": "Übermittlung verschlüsselt!",
      "form-success-text": "Vielen Dank. Ihre Projektparameter wurden übermittelt. Ein TheoMedia-Projektleiter wird sich innerhalb von 12 Stunden per E-Mail oder Telefon bei Ihnen melden.",
      "foot-brand-desc": "Konzeption, Programmierung und Bereitstellung maßgeschneiderter visueller Systeme, ERP-Datenbanken, Registrierkassen und mobiler Apps für den internationalen Handel.",
      "foot-solutions": "Lösungen",
      "foot-sol-web": "Enterprise Frontends",
      "foot-sol-app": "ERP & CRM Abrechnung",
      "foot-sol-wa": "WhatsApp API-Integration",
      "foot-sol-mob": "Mobile App-Entwicklung",
      "foot-compliance": "Compliance-Hubs",
      "foot-comp-gdpr": "DSGVO Datentrennung",
      "foot-comp-swiss": "Swiss FinSA Konformität",
      "foot-comp-uk": "UK Data Protection Act",
      "foot-comp-vat": "Europäische Steuer-Register",
      "foot-reach": "Niederlassungen",
      "foot-legal-privacy": "Datenschutzerklärung",
      "foot-legal-terms": "Allgemeine Bedingungen"
    },
    fr: {
      "nav-services": "Solutions",
      "nav-pos": "Solution Configurator",
      "nav-templates": "Systèmes Visuels",
      "nav-pricing": "Tarifs",
      "nav-compliance": "Bureaux Europe",
      "nav-faq": "FAQ",
      "btn-get-started": "Demander Devis",
      "hero-badge-text": "Ingénierie Logicielle & Web Sur Mesure — Europe & Global",
      "hero-title-part1": "Votre écosystème numérique personnalisé :",
      "hero-title-part2": "Websites, CRM, POS & Apps",
      "hero-desc-text": "Chez TheoMedia, nous développons des architectures logicielles élégantes sur mesure qui remplacent les feuilles Excel fragiles, automatisent la facturation via API Cloud et gèrent les terminaux de point de vente réactifs.",
      "hero-cta-primary": "Ouvrir le Configurator",
      "hero-cta-secondary": "Demander une Proposition",
      "marquee-title": "CAPACITÉS D'INTÉGRATION CONFORMES & CONFIANCE DES ENTREPRISES TECHNOLOGIQUES",
      "services-micro": "PRODUITS SUR MESURE",
      "services-title": "Solutions Enterprise Sur Mesure",
      "services-desc": "Nous concevons des écosystèmes visuels sécurisés et réactifs, structurés pour supporter des volumes de données élevés, le trafic transfrontalier et les normes de conformité strictes.",
      "serv-web-title": "Websites & E-Commerce",
      "serv-web-sub": "Front-ends Haute Performance",
      "serv-web-desc": "Mises en page réactives, designs élégants et optimisation SEO on-page ultra-rapide pour capter une audience internationale et être premier sur Google.",
      "serv-best": "IDÉAL POUR",
      "serv-web-best": "Exportateurs B2B, services haut de gamme, développeurs innovants et hubs de contenu en Europe.",
      "serv-web-feat1": "Entièrement réactif sur mobiles et tablettes",
      "serv-web-feat2": "Gestion des cookies et bandeaux RGPD",
      "serv-web-feat3": "Localisation dynamique des fichiers de langue",
      "serv-web-feat4": "Chargement instantané avec connexion CMS Headless",
      "serv-popular": "RECOMMANDÉ",
      "serv-app-title": "Applications Web (ERP/CRM)",
      "serv-app-sub": "Tableaux de Bord Opérationnels",
      "serv-app-desc": "Hubs opérationnels privés fonctionnant dans votre navigateur sécurisé, intégrant synchronisation de bases de données, alertes de stock et outils de facturation.",
      "serv-app-best": "Remplacement de tableaux Excel, gestion d'équipe, terminaux de caisse et suivi de chaîne logistique.",
      "serv-app-feat1": "Synchronisation des stocks multi-boutiques en temps réel",
      "serv-app-feat2": "Envoi automatisé de factures par WhatsApp",
      "serv-app-feat3": "Facturation multidevises (GBP, EUR, CHF)",
      "serv-app-feat4": "Modules d'autorisation administrative sécurisés",
      "serv-mob-title": "Applications Mobiles",
      "serv-mob-sub": "Déploiement Direct App Store",
      "serv-mob-desc": "Outils mobiles natifs conçus pour la performance tactile, le caching local des données et les systèmes de notifications push ciblées.",
      "serv-mob-best": "Programmes de fidélisation, outils pour équipes de terrain, commandes mobiles et campagnes promotionnelles.",
      "serv-mob-feat1": "Vitesse d'affichage fluide et matérielle",
      "serv-mob-feat2": "Notifications push ciblées envoyées directement",
      "serv-mob-feat3": "Cache de base de données local pour mode hors-ligne",
      "serv-mob-feat4": "Accompagnement pour publication sur Play Store",
      "pos-micro": "CONFIGURATEUR INTERACTIF",
      "pos-title": "Solution Configurator",
      "pos-desc": "Sélectionnez les services à gauche pour générer votre reçu. Le système recalcule instantanément les montants, taxes, et traduit le reçu !",
      "pos-input-title": "Sélectionnez les services :",
      "pos-item-web": "Système Web Standard",
      "pos-item-crm": "Portail Client CRM",
      "pos-item-stock": "Module Stocks Temps Réel",
      "pos-item-whatsapp": "Intégration API WhatsApp",
      "pos-item-android": "Application Native Android",
      "pos-item-support": "3 Ans SLA Hypercare",
      "term-title": "DEVIS PROPOSITION DE THEOMEDIA",
      "term-status-node": "SERVEUR NODE: EU-WEST-2",
      "term-empty-cart": "Aucun article sélectionné. Cochez les éléments à gauche pour générer le devis.",
      "term-subtotal": "SOUS-TOTAL :",
      "term-vat": "TAXE ESTIMÉE (20%) :",
      "term-grandtotal": "TOTAL NET ESTIMÉ :",
      "term-checkout": "DESPACHER PROPOSITION",
      "term-clear": "EFFACER LA SÉLECTION",
      "wa-title": "Facture WhatsApp Envoyée",
      "wa-body": "Reçu PDF personnalisé poussé sur votre ligne mobile européenne. Réf :",
      "templates-micro": "UI & VISUALS",
      "templates-title": "Systèmes Web d'Élite",
      "templates-desc": "Découvrez nos designs front-end dynamiques, conçus pour asseoir votre crédibilité, se charger rapidement même en 3G et captiver vos clients.",
      "temp-badge-award": "NOMINÉ DESIGN AWARD",
      "temp-badge-concept": "PLATEFORME FINTECH",
      "temp-banana-desc": "Framework sur mesure conçu pour les exportateurs de fruits, distributeurs agricoles et réseaux logistiques en Allemagne, au Royaume-Uni et en Espagne.",
      "temp-zurich-desc": "Systèmes de paiement hautement sécurisés avec grand livre modulaire, suivi de conformité et conversion de devises optimisée pour le Franc Suisse.",
      "temp-btn-demo": "Demander une Démo",
      "map-micro": "COMPLIANCE & PRÉSENCE EUROPE",
      "map-title": "Bureaux Internationaux",
      "map-desc": "Nos outils sont calibrés pour s'aligner sur la RGPD, la loi suisse sur la protection des données (LPD) et les lois britanniques.",
      "map-regulatory": "ALIGNEMENT RÉGLEMENTAIRE",
      "map-currency": "DEVISE ISO PAR DÉFAUT",
      "map-support": "SUPPORT DÉDIÉ",
      "map-desc-london": "Notre principal bureau d'ingénierie gère les architectures globales, définit les règles réglementaires et contrôle l'infrastructure cloud en Europe.",
      "pricing-micro": "VALEURS TRANSPARENTES",
      "pricing-title": "Tarification Claire",
      "pricing-desc": "Configurez votre système. Tarifs forfaitaires clairs, calculés pour respecter les directives comptables locales.",
      "plan-web-name": "Site Web Standard",
      "plan-web-desc": "Parfait pour établir une crédibilité numérique immédiate, capter le trafic de recherche locale et les demandes clients.",
      "plan-web-f1": "Design visuel & éléments graphiques sur mesure",
      "plan-web-f2": "Framework UI entièrement réactif",
      "plan-web-f3": "Configuration SEO Google de base on-page",
      "plan-web-f4": "Formulaires de contact & cartes intégrés",
      "plan-upfront": " unique",
      "plan-app-name": "Applications Web",
      "plan-app-desc": "Outils web cloud sur mesure pour automatiser vos opérations et centraliser vos clients de manière sécurisée dans le CRM.",
      "plan-app-f1": "Terminal POS de caisse & reçu de facturation",
      "plan-app-f2": "Envoi automatisé des reçus via API WhatsApp",
      "plan-app-f3": "Synchronisation des stocks en temps réel",
      "plan-app-f4": "Accès employés avec gestion des rôles",
      "plan-mob-name": "Apps Mobiles",
      "plan-mob-desc": "Applications fluides optimisées pour le tactile sur Android, avec gestion de base de données locale offline et alertes push.",
      "plan-mob-f1": "Mise en page fluide avec gestes tactiles",
      "plan-mob-f2": "Notifications push natives directes",
      "plan-mob-f3": "Support de cache local hors-ligne",
      "plan-mob-f4": "Accompagnement pour soumission sur les stores",
      "plan-popular-tag": "LE PLUS POPULAIRE",
      "plan-cta": "Configurer le Pack",
      "faq-micro": "FAQ",
      "faq-title": "Questions & Réponses",
      "faq-desc": "Des réponses claires concernant la propriété du code, l'infrastructure serveur et les délais de déploiement en Europe.",
      "faq-q1": "À qui appartient le code une fois le projet terminé ?",
      "faq-a1": "À vous. Une fois la facture finale réglée, nous vous transférons 100% de la propriété intellectuelle, des dépôts de code GitHub et des configurations de base de données. Pas de frais récurrents.",
      "faq-q2": "Comment fonctionne l'envoi de reçus sur WhatsApp ?",
      "faq-a2": "We hook your administrative CRM portal to official cloud gateways (e.g. Meta Cloud API). Whenever sales registers execute a transaction, a structured bill formats dynamically and pushes straight to the client's verified mobile terminal as a branded PDF file link, minimizing paper overhead.",
      "faq-q3": "Pouvez-vous connecter mes applications web à mes propres domaines ?",
      "faq-a3": "Absolument. Nous gérons la configuration DNS pour les domaines locaux (.co.uk, .ch, .de, .fr, .ie, .com) et activons des certificats SSL gratuits à renouvellement automatique.",
      "faq-q4": "Quelles mesures de conformité européenne sont intégrées ?",
      "faq-a4": "Nous intégrons des protocoles RGPD complets, comme le stockage isolé des données, le chiffrement des dossiers clients et les fonctions d'export. Les taxes locales (TVA) sont calculées automatiquement.",
      "contact-micro": "CENTRE DE PROJET",
      "contact-title": "Démarrez Votre Projet",
      "contact-desc": "Discutez directement avec nos ingénieurs. Nous transformons vos idées en systèmes de production fluides, sécurisés et réactifs.",
      "contact-email-title": "Demandes Directes",
      "contact-hq-title": "Bureaux Européens",
      "form-label-name": "Nom Complet / Entreprise",
      "form-label-email": "Adresse E-mail",
      "form-label-solution": "Périmètre de Développement",
      "form-label-desc": "Description du Projet & Objectifs",
      "form-opt-select": "Sélectionnez le périmètre...",
      "form-opt-web": "Site Web Visuel Premium",
      "form-opt-app": "Application Web Cloud (POS, CRM, ERP)",
      "form-opt-mob": "Application Mobile Tactile Native",
      "form-submit": "SOUMETTRE MA DEMANDE",
      "form-success-title": "Transmission Cryptée !",
      "form-success-text": "Merci. Les paramètres de votre projet ont été enregistrés. Un responsable de TheoMedia vous contactera par e-mail ou par téléphone sous 12 heures.",
      "foot-brand-desc": "Conception, programmation et déploiement de systèmes visuels sur mesure, bases de données cloud, logiciels de caisse et applications mobiles pour le commerce international.",
      "foot-solutions": "Solutions",
      "foot-sol-web": "Front-ends d'Entreprise",
      "foot-sol-app": "Facturation ERP & CRM",
      "foot-sol-wa": "Intégrations API WhatsApp",
      "foot-sol-mob": "Développement App Mobile",
      "foot-compliance": "Pôles de Conformité",
      "foot-comp-gdpr": "Cloisonnement RGPD",
      "foot-comp-swiss": "Conformité LPD Suisse",
      "foot-comp-uk": "Loi Britannique Protection Données",
      "foot-comp-vat": "Registres de TVA Européens",
      "foot-reach": "Bureaux Continentaux",
      "foot-legal-privacy": "Politique de Confidentialité",
      "foot-legal-terms": "Conditions d'Utilisation"
    },
    es: {
      "nav-services": "Soluciones",
      "nav-pos": "Solution Configurator",
      "nav-templates": "Sistemas Visuales",
      "nav-pricing": "Precios",
      "nav-compliance": "Sedes Europa",
      "nav-faq": "FAQ",
      "btn-get-started": "Solicitar Propuesta",
      "hero-badge-text": "Ingeniería de Software & Web a Medida — Europa & Global",
      "hero-title-part1": "Su ecosistema digital personalizado:",
      "hero-title-part2": "Webs, CRM, POS & Apps",
      "hero-desc-text": "En TheoMedia desarrollamos arquitecturas de software a medida que reemplazan Excel, automatizan la facturación a través de APIs en la nube y gestionan counter de venta.",
      "hero-cta-primary": "Soluciones Configurator",
      "hero-cta-secondary": "Obtener Propuesta Gratis",
      "marquee-title": "CAPACIDADES DE INTEGRACIÓN CONFORMES & CONFIANZA DE EMPRESAS TECNOLÓGICAS",
      "services-micro": "PRODUCTOS A MEDIDA",
      "services-title": "Soluciones de Software Enterprise",
      "services-desc": "Diseñamos ecosistemas visuales rápidos y seguros, estructurados para procesar altos volúmenes de datos y cumplir las normativas europeas.",
      "serv-web-title": "Webs & E-Commerce",
      "serv-web-sub": "Front-ends de Alto Rendimiento",
      "serv-web-desc": "Diseños interactivos fluidos, con la velocidad de carga más rápida y configuraciones SEO avanzadas para dominar las búsquedas en Google.",
      "serv-best": "IDEAL PARA",
      "serv-web-best": "Exportadores B2B, servicios premium, desarrolladores web y hubs de contenido internacionales.",
      "serv-web-feat1": "Totalmente optimizado para móviles y tablets",
      "serv-web-feat2": "Configuraciones de cookies adaptadas a la RGPD",
      "serv-web-feat3": "Localización dinámica para múltiples idiomas",
      "serv-web-feat4": "Tecnología Headless CMS de carga instantánea",
      "serv-popular": "RECOMENDADO",
      "serv-app-title": "Aplicaciones Web (ERP/CRM)",
      "serv-app-sub": "Dashboards de Operaciones",
      "serv-app-desc": "Paneles de administración privados desde el navegador, con sincronización de inventario en tiempo real, alertas y facturación en la nube.",
      "serv-app-best": "Reemplazo definitivo de Excel, gestión de equipo, cajas de venta y logística.",
      "serv-app-feat1": "Sincronización de stock multi-sucursal en directo",
      "serv-app-feat2": "Envío automatizado de facturas por WhatsApp",
      "serv-app-feat3": "Invoicing multi-divisa (GBP, EUR, USD, CHF)",
      "serv-app-feat4": "Niveles de seguridad administrativa avanzados",
      "serv-mob-title": "Aplicaciones Móviles",
      "serv-mob-sub": "Lanzamiento Directo en App Store",
      "serv-mob-desc": "Aplicaciones nativas optimizadas para pantallas táctiles, base de datos local y notificaciones push personalizadas.",
      "serv-mob-best": "Programas de fidelización de clientes, herramientas de campo y plataformas de pedidos.",
      "serv-mob-feat1": "Velocidad y respuesta de hardware óptima",
      "serv-mob-feat2": "Notificaciones push directas al dispositivo",
      "serv-mob-feat3": "Base de datos local offline (sin conexión)",
      "serv-mob-feat4": "Publicación directa y asistencia en Play Store",
      "pos-micro": "CONFIGURADOR INTERACTIVO",
      "pos-title": "Solution Configurator",
      "pos-desc": "¡Seleccione los elementos de la izquierda! El sistema recalcula precios e impuestos y traduce el ticket de venta en directo.",
      "pos-input-title": "Seleccione módulos a añadir:",
      "pos-item-web": "Sistema Web Estándar",
      "pos-item-crm": "Portal Cliente CRM",
      "pos-item-stock": "Módulo Stock Tiempo Real",
      "pos-item-whatsapp": "Enlace API WhatsApp",
      "pos-item-android": "App Nativa Android",
      "pos-item-support": "3 Años SLA Hypercare",
      "term-title": "PRESUPUESTO ESTIMADO DE THEOMEDIA",
      "term-status-node": "SERVIDOR NODO: EU-WEST-2",
      "term-empty-cart": "Ningún módulo escaneado. Seleccione elementos a la izquierda para generar la factura interactiva.",
      "term-subtotal": "SUBTOTAL:",
      "term-vat": "IMPUESTO ESTIMADO (20%):",
      "term-grandtotal": "TOTAL NETO ESTIMADO:",
      "term-checkout": "GENERAR FACTURA",
      "term-clear": "BORRAR SELECCIÓN",
      "wa-title": "Factura WhatsApp Enviada",
      "wa-body": "Enlace de factura PDF generado y enviado a su móvil europeo. Ref:",
      "templates-micro": "UI & DISEÑO",
      "templates-title": "Sistemas Web de Élite",
      "templates-desc": "Vea nuestras maquetas de front-end dinámicas y ultra-rápidas, diseñadas para captar leads y mejorar la conversión internacional.",
      "temp-badge-award": "NOMINADO PREMIO DISEÑO",
      "temp-badge-concept": "PLATAFORMA FINTECH",
      "temp-banana-desc": "Framework a medida optimizado para exportadores premium de fruta, distribución agrícola y logística en Alemania, Reino Unido y España.",
      "temp-zurich-desc": "Pasarelas de pago de alta seguridad con libro contable modular, cumplimiento regulatorio y conversión automática a Francos Suizos.",
      "temp-btn-demo": "Solicitar Demo de Framework",
      "map-micro": "COMPLIANCE & RED EUROPEA",
      "map-title": "Bureaux Internacionales",
      "map-desc": "Nuestras soluciones de software cumplen la RGPD europea y las normativas suizas y del Reino Unido.",
      "map-regulatory": "CUMPLIMIENTO DE PRIVACIDAD",
      "map-currency": "DIVISA ISO EN USO",
      "map-support": "SOPORTE DEDICADO SLA",
      "map-desc-london": "Nuestra oficina técnica principal coordina implementaciones globales, marcos de compliance y gestiona infraestructuras cloud en Europa.",
      "pricing-micro": "PRECIOS CLAROS",
      "pricing-title": "Precios Transparentes",
      "pricing-desc": "Configure su sistema. Presupuestos sin cuotas sorpresa, calculados en base a las normas de cada país.",
      "plan-web-name": "Sitio Web Estándar",
      "plan-web-desc": "Perfecto para establecer una presencia web premium, capturar búsquedas de Google locales y leads de clientes.",
      "plan-web-f1": "Diseño a medida & recursos gráficos premium",
      "plan-web-f2": "UI adaptada perfectamente a smartphones",
      "plan-web-f3": "Estructura de posicionamiento SEO básico",
      "plan-web-f4": "Formularios de contacto y mapas interactivos",
      "plan-upfront": " único",
      "plan-app-name": "Aplicaciones Web",
      "plan-app-desc": "Herramientas en la nube para automatizar su flujo de trabajo interno y centralizar clientes de forma segura en el CRM.",
      "plan-app-f1": "Terminal POS de venta & emisión de facturas",
      "plan-app-f2": "API de envío inmediato de facturas por WhatsApp",
      "plan-app-f3": "Sincronización de inventario en tiempo real",
      "plan-app-f4": "Cuentas de usuario con control de roles",
      "plan-mob-name": "Apps Móviles",
      "plan-mob-desc": "Apps fluidas para Android, con soporte de almacenamiento local sin conexión y alertas push.",
      "plan-mob-f1": "Maquetación fluida y gestos táctiles",
      "plan-mob-f2": "Notificaciones push directas al dispositivo",
      "plan-mob-f3": "Base de datos local offline (sin conexión)",
      "plan-mob-f4": "Publicación directa y asistencia en Play Store",
      "plan-popular-tag": "MÁS POPULAR",
      "plan-cta": "Configurar Pack",
      "faq-micro": "FAQ",
      "faq-title": "Preguntas Frecuentes",
      "faq-desc": "Respuestas claras sobre la propiedad del código, servidores globales y plazos de entrega en Europa.",
      "faq-q1": "¿Quién es dueño del código al finalizar el desarrollo?",
      "faq-a1": "Usted. Una vez pagada la factura final de los hitos acordados, le transferimos el 100% de la propiedad intelectual, código de GitHub y credenciales. Sin cuotas de permanencia.",
      "faq-q2": "¿Cómo funciona la facturación por WhatsApp?",
      "faq-a2": "Vinculamos su panel CRM con las APIs de mensajería (por ejemplo, Meta API). Al confirmar una venta, se genera un PDF interactivo de la factura y se envía por mensaje de texto al instante.",
      "faq-q3": "¿Pueden conectar las aplicaciones web a mi propio dominio?",
      "faq-a3": "Sí. Configuramos los registros DNS para cualquier dominio (.es, .ch, .de, .fr, .co.uk, .com) y activamos certificados SSL gratis de renovación automática.",
      "faq-q4": "¿Qué compliance integran para Europa?",
      "faq-a4": "Cumplimos estrictamente la RGPD con bases de datos aisladas, datos encriptados y herramientas de exportación rápida. Calculamos las tasas e impuestos locales (IVA) dinámicamente.",
      "contact-micro": "CENTRO DE PROYECTOS",
      "contact-title": "Inicie su Ecosistema",
      "contact-desc": "Hable directamente con nuestros ingenieros. Llevamos sus ideas desde los bocetos hasta servidores de producción listos y seguros.",
      "contact-email-title": "Consultas Directas",
      "contact-hq-title": "Sedes Continentales",
      "form-label-name": "Nombre / Organización",
      "form-label-email": "Correo Electrónico",
      "form-label-solution": "Tipo de Desarrollo",
      "form-label-desc": "Descripción del Proyecto & Objetivo",
      "form-opt-select": "Seleccione el alcance...",
      "form-opt-web": "Sitio Web Corporativo Premium",
      "form-opt-app": "Aplicación Web en la Nube (POS, CRM, ERP)",
      "form-opt-mob": "Aplicación Móvil Táctil Nativa",
      "form-submit": "ENVIAR INFORME DE PROYECTO",
      "form-success-title": "¡Conexión Encriptada!",
      "form-success-text": "Gracias. Hemos registrado los datos del proyecto. Un director de ingeniería de TheoMedia le responderá por correo o teléfono en un plazo de 12 horas.",
      "foot-brand-desc": "Diseño, programación e implementación de software personalizado, bases de datos, TPV y aplicaciones móviles para comercio internacional.",
      "foot-solutions": "Soluciones",
      "foot-sol-web": "Front-ends Corporativos",
      "foot-sol-app": "Facturación ERP & CRM",
      "foot-sol-wa": "Integración de WhatsApp API",
      "foot-sol-mob": "Desarrollo de Apps Móviles",
      "foot-compliance": "Políticas & Compliance",
      "foot-comp-gdpr": "Aislamiento de RGPD",
      "foot-comp-swiss": "Cumplimiento Ley Suiza",
      "foot-comp-uk": "Leyes de Privacidad del Reino Unido",
      "foot-comp-vat": "Impuestos & IVA Europeo",
      "foot-reach": "Oficinas Activas",
      "foot-legal-privacy": "Registro de Privacidad",
      "foot-legal-terms": "Términos Legales"
    }
  };

  let activeLanguage = 'en';
  let activeCurrency = 'gbp';

  /* ==========================================================================
     MULTILINGUAL TRANSLATION TRIGGER BINDINGS
     ========================================================================== */
  const langTrigger = document.getElementById('lang-trigger');
  const langSelectorDiv = document.getElementById('lang-selector-div');
  const langItems = langSelectorDiv.querySelectorAll('.dropdown-menu li');

  langTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    langTrigger.classList.toggle('open');
    langSelectorDiv.querySelector('.dropdown-menu').classList.toggle('show');
  });

  langItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const selectedLang = item.dataset.lang;
      activeLanguage = selectedLang;

      const flagMap = { en: '🇬🇧', de: '🇩🇪', fr: '🇫🇷', es: '🇪🇸' };
      langTrigger.innerHTML = `<span class="flag-icon">${flagMap[selectedLang]}</span> <span class="lang-text">${selectedLang.toUpperCase()}</span>`;
      
      langTrigger.classList.remove('open');
      langSelectorDiv.querySelector('.dropdown-menu').classList.remove('show');

      updateDOMTranslations();
    });
  });

  function updateDOMTranslations() {
    const dict = translations[activeLanguage];
    const translatableElements = document.querySelectorAll('[data-translate]');

    translatableElements.forEach(el => {
      const key = el.dataset.translate;
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else if (el.tagName === 'SELECT') {
          const disabledOpt = el.querySelector('option[disabled]');
          if (disabledOpt) disabledOpt.textContent = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Refresh dynamic solution receipt calculations
    updateTerminalLCDReceipt();
  }

  // Global window listener to close dropdowns
  window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
    document.querySelectorAll('.dropdown-trigger').forEach(trig => trig.classList.remove('open'));
  });

  /* ==========================================================================
     DYNAMIC CURRENCY SWITCHER BINDINGS
     ========================================================================== */
  const currTrigger = document.getElementById('curr-trigger');
  const currSelectorDiv = document.getElementById('curr-selector-div');
  const currItems = currSelectorDiv.querySelectorAll('.dropdown-menu li');

  const basePricingMatrix = {
    gbp: { symbol: '£', web: '950', app: '2,450', mob: '3,950' },
    eur: { symbol: '€', web: '1,100', app: '2,850', mob: '4,550' },
    usd: { symbol: '$', web: '1,250', app: '3,200', mob: '5,100' },
    chf: { symbol: '₣', web: '1,150', app: '2,950', mob: '4,750' }
  };

  currTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    currTrigger.classList.toggle('open');
    currSelectorDiv.querySelector('.dropdown-menu').classList.toggle('show');
  });

  currItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const selectedCurrency = item.dataset.currency;
      activeCurrency = selectedCurrency;

      const symbolMap = { gbp: '£', eur: '€', usd: '$', chf: '₣' };
      currTrigger.innerHTML = `<span class="curr-symbol">${symbolMap[selectedCurrency]}</span> <span class="curr-text">${selectedCurrency.toUpperCase()}</span>`;

      currTrigger.classList.remove('open');
      currSelectorDiv.querySelector('.dropdown-menu').classList.remove('show');

      updatePricingPlansUI();
      updateTerminalLCDReceipt();
    });
  });

  function updatePricingPlansUI() {
    const data = basePricingMatrix[activeCurrency];
    const priceWeb = document.getElementById('price-web');
    const priceApp = document.getElementById('price-app');
    const priceMob = document.getElementById('price-mob');

    document.querySelectorAll('.price-currency').forEach(el => el.textContent = data.symbol);

    [priceWeb, priceApp, priceMob].forEach((el, index) => {
      const targetVal = [data.web, data.app, data.mob][index];
      el.style.transform = 'scale(0.9)';
      el.style.opacity = '0';
      
      setTimeout(() => {
        el.textContent = targetVal;
        el.style.transform = 'scale(1)';
        el.style.opacity = '1';
      }, 120);
    });

    // Update prices on solution configurator side items
    const configAddBtns = document.querySelectorAll('.config-item-btn');
    configAddBtns.forEach(btn => {
      const btnPriceTag = btn.querySelector('.config-item-price');
      const priceVal = btn.dataset[`price${activeCurrency.toUpperCase()}`];
      btnPriceTag.textContent = `${data.symbol}${parseFloat(priceVal).toLocaleString()}`;
    });
  }

  /* ==========================================================================
     INTERACTIVE SAAS SOLUTIONS CONFIGURATOR
     ========================================================================== */
  const cart = new Set();
  const configAddBtns = document.querySelectorAll('.config-item-btn');
  const termSubTotal = document.getElementById('term-subtotal-val');
  const termTaxVal = document.getElementById('term-tax-val');
  const termTotalVal = document.getElementById('term-total-val');
  const terminalItemList = document.getElementById('config-items-stream');
  const emptyCartText = document.getElementById('empty-cart-text');
  const termBtnClear = document.getElementById('config-btn-clear');
  const termBtnCheckout = document.getElementById('config-btn-checkout');
  const configWhatsAppAlert = document.getElementById('config-whatsapp-alert');
  const waRandomRef = document.getElementById('wa-random-ref');

  configAddBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.dataset.itemId;
      
      if (cart.has(itemId)) {
        cart.delete(itemId);
        btn.classList.remove('scanned');
        btn.querySelector('.config-item-action').textContent = '+ ADD';
      } else {
        cart.add(itemId);
        btn.classList.add('scanned');
        btn.querySelector('.config-item-action').textContent = '✓ ADDED';
      }

      updateTerminalLCDReceipt();
    });
  });

  termBtnClear.addEventListener('click', () => {
    cart.clear();
    configAddBtns.forEach(btn => {
      btn.classList.remove('scanned');
      btn.querySelector('.config-item-action').textContent = '+ ADD';
    });
    configWhatsAppAlert.classList.remove('show');
    updateTerminalLCDReceipt();
  });

  const posItemNames = {
    website: {
      en: "Standard Web System",
      de: "Standard-Websystem",
      fr: "Système Web Standard",
      es: "Sistema Web Estándar"
    },
    crm: {
      en: "Client CRM Portal",
      de: "Kunden-CRM-Portal",
      fr: "Portail Client CRM",
      es: "Portal Cliente CRM"
    },
    stock: {
      en: "Real-time Stock Module",
      de: "Echtzeit-Bestandsmodul",
      fr: "Module Stocks Temps Réel",
      es: "Módulo Stock Tiempo Real"
    },
    whatsapp: {
      en: "WhatsApp Messaging Hook",
      de: "WhatsApp API-Integration",
      fr: "Intégration API WhatsApp",
      es: "Enlace API WhatsApp"
    },
    android: {
      en: "Native Android App Wrapper",
      de: "Native Android-App",
      fr: "Application Native Android",
      es: "App Nativa Android"
    },
    support: {
      en: "3-Year Hypercare SLA",
      de: "3 Jahre Hypercare SLA",
      fr: "3 Ans SLA Hypercare",
      es: "3 Años SLA Hypercare"
    }
  };

  function updateTerminalLCDReceipt() {
    terminalItemList.innerHTML = '';

    if (cart.size === 0) {
      terminalItemList.appendChild(emptyCartText);
      termBtnCheckout.disabled = true;
      
      const sym = basePricingMatrix[activeCurrency].symbol;
      termSubTotal.textContent = `${sym}0.00`;
      termTaxVal.textContent = `${sym}0.00`;
      termTotalVal.textContent = `${sym}0.00`;
      return;
    }

    termBtnCheckout.disabled = false;
    let subtotal = 0;
    const sym = basePricingMatrix[activeCurrency].symbol;

    cart.forEach(itemId => {
      const matchingBtn = document.querySelector(`.config-item-btn[data-item-id="${itemId}"]`);
      const itemPrice = parseFloat(matchingBtn.dataset[`price${activeCurrency.toUpperCase()}`]);
      subtotal += itemPrice;

      const row = document.createElement('div');
      row.className = 'summary-item-row';
      
      const itemName = posItemNames[itemId][activeLanguage] || posItemNames[itemId]['en'];
      
      row.innerHTML = `
        <span class="summary-item-name">1 x ${itemName}</span>
        <span class="summary-item-price">${sym}${itemPrice.toLocaleString()}</span>
      `;
      terminalItemList.appendChild(row);
    });

    const vatRate = 0.20; // 20% estimated European taxation
    const estimatedTax = subtotal * vatRate;
    const grandtotal = subtotal + estimatedTax;

    termSubTotal.textContent = `${sym}${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    termTaxVal.textContent = `${sym}${estimatedTax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    termTotalVal.textContent = `${sym}${grandtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  }

  termBtnCheckout.addEventListener('click', () => {
    const randomVal = Math.floor(1000 + Math.random() * 9000);
    waRandomRef.textContent = `#TM-${randomVal}`;

    // Compile WhatsApp message text for configurator order
    const sym = basePricingMatrix[activeCurrency].symbol;
    let itemsText = '';
    let subtotal = 0;

    cart.forEach(itemId => {
      const matchingBtn = document.querySelector(`.config-item-btn[data-item-id="${itemId}"]`);
      const itemPrice = parseFloat(matchingBtn.dataset[`price${activeCurrency.toUpperCase()}`]);
      subtotal += itemPrice;
      const itemName = posItemNames[itemId]['en'];
      itemsText += `- ${itemName} (${sym}${itemPrice.toLocaleString()})\n`;
    });

    const vatRate = 0.20;
    const estimatedTax = subtotal * vatRate;
    const grandtotal = subtotal + estimatedTax;

    const message = `Hello TheoMedia! I have configured a custom software package proposal:\n\n` +
      `${itemsText}\n` +
      `Subtotal: ${sym}${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}\n` +
      `Estimated VAT (20%): ${sym}${estimatedTax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}\n` +
      `Total Net Estimate: ${sym}${grandtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}\n` +
      `Currency: ${activeCurrency.toUpperCase()}\n` +
      `Proposal Reference: #TM-${randomVal}\n\n` +
      `Please contact me to discuss the delivery roadmap.`;

    const waUrl = `https://wa.me/353852258004?text=${encodeURIComponent(message)}`;

    // Show alert bubble
    configWhatsAppAlert.classList.add('show');

    // Open WhatsApp in a new tab/window immediately
    window.open(waUrl, '_blank');

    setTimeout(() => {
      configWhatsAppAlert.classList.remove('show');
    }, 5500);
  });

  /* ==========================================================================
     CORE PAGE UI INTERACTIVE UTILITIES
     ========================================================================== */
  
  // Header shrink on page scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });

  // FAQ clean accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Intersection Observer scroll reveals
  if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(el => el.classList.add('scroll-reveal-init'));

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  }

  // Contact form submission validation
  const contactForm = document.getElementById('contact-form');
  const formWrapper = document.getElementById('form-inner-wrapper');
  const successCard = document.getElementById('success-card');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;
    const nameInput = document.getElementById('client-name');
    const emailInput = document.getElementById('client-email');
    const serviceInput = document.getElementById('client-service');
    const messageInput = document.getElementById('client-message');

    [nameInput, emailInput, serviceInput, messageInput].forEach(input => {
      input.style.borderColor = 'var(--border-color)';
    });

    if (!nameInput.value.trim()) {
      nameInput.style.borderColor = '#ff3b30';
      isFormValid = false;
    }
    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
      emailInput.style.borderColor = '#ff3b30';
      isFormValid = false;
    }
    if (!serviceInput.value) {
      serviceInput.style.borderColor = '#ff3b30';
      isFormValid = false;
    }
    if (!messageInput.value.trim()) {
      messageInput.style.borderColor = '#ff3b30';
      isFormValid = false;
    }

    if (!isFormValid) return;

    const submitBtn = document.getElementById('btn-submit-form');
    submitBtn.disabled = true;
    submitBtn.textContent = activeLanguage === 'en' ? 'TRANSMITTING PARAMETERS...' : 
                        activeLanguage === 'de' ? 'DATEN WERDEN ÜBERTRAGEN...' : 
                        activeLanguage === 'fr' ? 'TRANSMISSION EN COURS...' : 'TRANSMITIENDO INFORME...';

    // Compile WhatsApp message text for contact form submission
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const serviceVal = serviceInput.value;
    const serviceName = serviceInput.options[serviceInput.selectedIndex].text;
    const userMsg = messageInput.value.trim();

    const message = `Hello TheoMedia! I have submitted a project inquiry from the contact form:\n\n` +
      `Name / Organisation: ${name}\n` +
      `Email Address: ${email}\n` +
      `Requested Scope: ${serviceName} (${serviceVal})\n\n` +
      `Project Brief & Requirements:\n"${userMsg}"\n\n` +
      `Please let me know when we can jump on a brief discovery call.`;

    const waUrl = `https://wa.me/353852258004?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      formWrapper.style.transition = 'opacity 0.3s ease';
      formWrapper.style.opacity = '0';
      
      // Open WhatsApp in a new tab/window immediately
      window.open(waUrl, '_blank');

      setTimeout(() => {
        formWrapper.style.display = 'none';
        successCard.classList.add('active');
      }, 300);

    }, 1200);
  });

  /* ==========================================================================
     SOPHISTICATED JELLY & MAGNETIC PHYSICS CURSOR
     ========================================================================== */
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  let mouseX = 0, mouseY = 0;     // Target coordinate inputs
  let dotX = 0, dotY = 0;         // Interpolated Dot coordinates
  let ringX = 0, ringY = 0;       // Interpolated Ring coordinates
  
  // Track mouse coordinates
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Inertial interpolation loop (Jelly physics calculations)
  function updatePhysicsCursor() {
    // 1. Dot moves snappy
    const dotDamp = 0.35;
    dotX += (mouseX - dotX) * dotDamp;
    dotY += (mouseY - dotY) * dotDamp;
    cursorDot.style.left = `${dotX}px`;
    cursorDot.style.top = `${dotY}px`;

    // 2. Ring moves with slow springy inertia
    const ringDamp = 0.12;
    const dx = mouseX - ringX;
    const dy = mouseY - ringY;
    
    ringX += dx * ringDamp;
    ringY += dy * ringDamp;

    // Calculate actual moving speed for stretch stretch factor
    const speed = Math.hypot(dx, dy);
    const stretch = Math.min(speed * 0.006, 0.45);
    const angle = Math.atan2(dy, dx);

    // Apply translate and stretch scale
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    cursorRing.style.transform = `translate(-50%, -50%) rotate(${angle}rad) scale(${1 + stretch}, ${1 - stretch})`;

    requestAnimationFrame(updatePhysicsCursor);
  }
  
  // Kick off if desktop and elements exist
  if (cursorDot && cursorRing && window.innerWidth > 1024) {
    requestAnimationFrame(updatePhysicsCursor);
  }

  /* ==========================================================================
     MAGNETIC UI ELEMENTS (SPRING-LIKE HOVER PHYSICS)
     ========================================================================== */
  const magneticElements = document.querySelectorAll(
    '.nav-link, .btn-primary, .btn-secondary, .btn-header, .comms-item, .config-item-btn, .pricing-card, .template-card, .faq-question'
  );

  magneticElements.forEach(el => {
    // Spring bounce on transition
    el.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s, background-color 0.3s, box-shadow 0.3s';

    el.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 1024) return;

      const rect = el.getBoundingClientRect();
      const elCenterX = rect.left + rect.width / 2;
      const elCenterY = rect.top + rect.height / 2;

      // Distance relative to center point
      const pullVectorX = e.clientX - elCenterX;
      const pullVectorY = e.clientY - elCenterY;

      // Magnetic pull pull force strength
      const pullStrength = 0.28; 
      const elTranslateX = pullVectorX * pullStrength;
      const elTranslateY = pullVectorY * pullStrength;

      el.style.transform = `translate(${elTranslateX}px, ${elTranslateY}px) scale(1.025)`;
      
      // Expand cursor
      if (cursorRing && cursorDot) {
        cursorRing.classList.add('magnetic-hover');
        cursorDot.classList.add('magnetic-hover');
      }

      // Lock cursor dot closer to center
      mouseX = elCenterX + pullVectorX * 0.15;
      mouseY = elCenterY + pullVectorY * 0.15;
    });

    el.addEventListener('mouseleave', () => {
      // Elastic spring back
      el.style.transform = 'translate(0px, 0px) scale(1)';
      
      if (cursorRing && cursorDot) {
        cursorRing.classList.remove('magnetic-hover');
        cursorDot.classList.remove('magnetic-hover');
      }
    });
  });

});
