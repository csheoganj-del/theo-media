export interface Project {
  slug: string;
  caseStudySlug: string;
  title: string;
  sector: string;
  category: string;
    description: string;
  shortDescription: string;
  demoUrl: string;
  tags: string[];
  features: string[];
  challenge: string;
  creativeDirection: string;
  customerJourney: string;
  technology: string[];
}

export const projects: Project[] = [
  {
    slug: 'theo-garage',
    caseStudySlug: 'garage-website-design',
    title: 'Hartwell Motorworks',
    sector: 'Automotive',
    category: 'trades',
        description: 'A modern automotive website built around credibility, service discovery and effortless bookings.',
    shortDescription: 'Servicing, diagnostics, MOT preparation and specialist repairs — with instant online booking and transparent service menus.',
    demoUrl: 'https://theo-garage.vercel.app',
    tags: ['MOT Preparation', 'Online Booking', 'Diagnostics', 'Fleet Care'],
    features: ['Service menu with transparent pricing', 'Instant online booking flow', 'Fleet and commercial vehicle section', 'Before/after repair gallery', 'WhatsApp direct enquiry', 'Google Maps integration'],
    challenge: 'Most garage websites fail to communicate professionalism. Vehicle owners need to trust a workshop before booking, but generic templates do the opposite.',
    creativeDirection: 'Industrial precision meets digital confidence. Dark tones with clear typography create the feeling of a well-run, modern workshop.',
    customerJourney: 'Visitor lands → sees services and trust signals → explores transparent pricing → books online or calls directly.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'SEO Optimised'],
  },
  {
    slug: 'theo-build',
    caseStudySlug: 'builder-roofing-website-design',
    title: 'Alder & Rowe',
    sector: 'Trades & Construction',
    category: 'trades',
        description: 'A premium contractor experience built around trust, project proof and quote generation.',
    shortDescription: 'Modern contractor and trades platform for architectural extensions, roofing, and renovations — with interactive quote requests and project galleries.',
    demoUrl: 'https://theo-build.vercel.app',
    tags: ['Architectural Build', 'Roofing & Trades', 'Quote Requests', 'Project Gallery'],
    features: ['Before/after project gallery', 'Interactive quote request form', 'Service area map', 'Accreditation display', 'Project timeline showcase', 'Emergency contact integration'],
    challenge: 'Tradespeople are judged by their website before their work. A dated or generic site costs jobs to competitors who simply look more professional.',
    creativeDirection: 'Solid, grounded design language that communicates reliability and craftsmanship. Project photography leads the narrative.',
    customerJourney: 'Visitor lands → views completed projects → understands services → requests quote with project details.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'SEO Optimised'],
  },
  {
    slug: 'velora-house',
    caseStudySlug: 'boutique-hotel-website-design',
    title: 'Velora House',
    sector: 'Boutique Hotel',
    category: 'hospitality',
        description: 'A boutique-hotel experience built like a hospitality film.',
    shortDescription: 'Design-led boutique retreat with a frictionless, commission-free direct booking engine, suite photography galleries, and dining reservation flows.',
    demoUrl: 'https://velora-house-demo.vercel.app',
    tags: ['Direct Room Booking', 'Boutique Suites', 'PMS Connected', 'Zero Commission'],
    features: ['Commission-free direct booking engine', 'Suite and room photography galleries', 'Dining and restaurant reservation flow', 'Seasonal package presentation', 'Guest experience storytelling', 'Mobile-first booking journey'],
    challenge: 'Hotels lose 15–25% commission on every OTA booking. A beautiful direct-booking website pays for itself within weeks.',
    creativeDirection: 'Cinematic hospitality storytelling. Warm tones, generous white space, and full-bleed photography create the feeling of arriving at the property.',
    customerJourney: 'Guest discovers property → explores rooms and dining → books directly at best rate → receives confirmation.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Booking Engine', 'PMS Integration Ready'],
  },
  {
    slug: 'theo-table',
    caseStudySlug: 'restaurant-gastropub-website-design',
    title: 'Cinder & Field',
    sector: 'Restaurant & Gastropub',
    category: 'hospitality',
        description: 'A restaurant experience designed around atmosphere, menus, reservations and private-dining enquiries.',
    shortDescription: 'Atmospheric gastropub and seasonal kitchen website with interactive dining menus, instant table bookings, and private event packages.',
    demoUrl: 'https://theo-table-gastropub-demo.vercel.app',
    tags: ['Table Reservations', 'Digital Menus', 'Gastropub', 'Private Dining'],
    features: ['Interactive seasonal menu display', 'Real-time table reservation', 'Private dining enquiry flow', 'Sunday roast booking', 'Event and function packages', 'Instagram and social integration'],
    challenge: 'A restaurant\'s website is often the first taste of the experience. If the site feels generic, guests assume the food will be too.',
    creativeDirection: 'Warm, atmospheric design that mirrors the feeling of stepping into a well-curated dining room. Typography and photography set the mood.',
    customerJourney: 'Diner discovers restaurant → browses menu and atmosphere → books a table → shares with friends.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Reservation System', 'Menu CMS'],
  },
  {
    slug: 'theo-clinic',
    caseStudySlug: 'clinic-website-design',
    title: 'Elowen Clinic',
    sector: 'Private Healthcare',
    category: 'healthcare',
        description: 'A calm, consultation-led digital experience designed for high-trust treatment businesses.',
    shortDescription: 'Private healthcare, dental, and medical aesthetics practice platform built around patient trust, transparent treatment menus, and online consultation scheduling.',
    demoUrl: 'https://theo-clinic-demo.vercel.app',
    tags: ['Doctor Consultations', 'Medical Aesthetics', 'Treatment Menu', 'Patient FAQs'],
    features: ['Treatment menu with pricing', 'Online consultation booking', 'Doctor and practitioner profiles', 'Patient FAQ and aftercare', 'Before/after gallery', 'GDPR-compliant contact forms'],
    challenge: 'Patients choosing private healthcare need exceptional trust signals. A premium clinical experience must feel safe, professional and transparent.',
    creativeDirection: 'Clean, calm, clinical design that builds confidence. Generous white space, soft tones and precise typography create a sense of medical authority.',
    customerJourney: 'Patient researches treatment → reviews practitioner credentials → understands pricing → books consultation.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Booking System', 'GDPR Compliant'],
  },
  {
    slug: 'theo-leather',
    caseStudySlug: 'ecommerce-website-design',
    title: 'Morrow & Hide',
    sector: 'Premium Ecommerce',
    category: 'ecommerce',
        description: 'An artisan ecommerce experience built around product storytelling and frictionless mobile checkout.',
    shortDescription: 'Artisan lifestyle and handcrafted leather goods brand store with sub-second browsing, frictionless Apple Pay checkout, and brand storytelling.',
    demoUrl: 'https://theoleather.vercel.app',
    tags: ['Frictionless Checkout', 'Stripe / Shopify', 'Instant Filtering', 'Mobile Cart'],
    features: ['Product storytelling pages', 'Frictionless mobile checkout', 'Apple Pay and Stripe integration', 'Instant category filtering', 'Currency conversion', 'Wishlist and save functionality'],
    challenge: 'Artisan brands compete with mass-market retailers online. The website must communicate craft, quality and story — not just list products.',
    creativeDirection: 'Editorial product photography with generous layout. The store feels more like a curated magazine than a shopping catalogue.',
    customerJourney: 'Shopper discovers brand → explores product story → adds to cart → checks out with Apple Pay in seconds.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe Integration', 'Shopify Ready'],
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Work' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'trades', label: 'Trades & Automotive' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'ecommerce', label: 'Ecommerce' },
] as const;
