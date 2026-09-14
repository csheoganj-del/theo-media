export type LocationPageData = {
  slug: string;
  city: string;
  country: 'United Kingdom' | 'Ireland';
  region: string;
  currency: 'GBP' | 'EUR';
  starterPrice: string;
  professionalPrice: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  market: string;
  neighbourhoods: string[];
  sectors: { title: string; href: string; note: string }[];
  faqs: { question: string; answer: string }[];
  relatedWork: { title: string; href: string; sector: string }[];
};

export const locations: LocationPageData[] = [
  {
    slug: 'web-design-london',
    city: 'London',
    country: 'United Kingdom',
    region: 'Greater London',
    currency: 'GBP',
    starterPrice: '£895',
    professionalPrice: '£2,495',
    title: 'Web Design London | Bespoke Websites for Independent Brands | TheoMedia',
    description:
      'Independent web design in London for restaurants, hotels, clinics, trades and ecommerce. Custom Next.js websites from £895. 100% client-owned. No templates.',
    h1: 'Web design in London for businesses that have outgrown templates.',
    intro:
      'London is the most competitive commercial web market in the UK. Buyers compare you against Soho agencies, Shoreditch studios and every template restaurant site in a two-mile radius. TheoMedia builds founder-led, custom websites for independent London operators who need speed, distinctive design and direct enquiries — without a £20,000 agency retainer.',
    market:
      'A London restaurant competing with Deliveroo and OpenTable, a Marylebone clinic competing with Harley Street directories, or a Hackney maker competing with Shopify themes all share the same problem: generic websites disappear in this city. Custom architecture, local SEO and sub-second mobile pages are how independent brands win attention from people already in the borough, searching on their phones.',
    neighbourhoods: [
      'Shoreditch & Hackney',
      'Soho & Covent Garden',
      'Marylebone & Fitzrovia',
      'Clapham & Brixton',
      'Canary Wharf & Greenwich',
      'Richmond & Kingston',
    ],
    sectors: [
      {
        title: 'Restaurants & dining',
        href: '/industries/restaurant-website-design',
        note: 'Direct table bookings and HTML menus for London dining rooms that want to stop paying per-cover fees.',
      },
      {
        title: 'Boutique hotels',
        href: '/industries/hotel-website-design',
        note: 'Direct-booking sites for independent stays competing with Booking.com commission in Zone 1–3.',
      },
      {
        title: 'Salons & barbers',
        href: '/industries/salon-website-design',
        note: 'Appointment-led sites for London hair, grooming and treatment studios.',
      },
      {
        title: 'Private clinics',
        href: '/industries/healthcare-clinic-website-design',
        note: 'Calm, GDPR-aware consultation sites for private practices across Greater London.',
      },
    ],
    faqs: [
      {
        question: 'How much does web design in London cost?',
        answer:
          'London agencies often quote £8,000–£30,000 because of Soho overheads. TheoMedia delivers custom websites for London businesses from £895 (Starter) and £2,495 (Professional), with the same Next.js engineering used on our flagship work. You own the code.',
      },
      {
        question: 'Do you need a London office to design a London website?',
        answer:
          'No. We are a founder-led UK & Ireland studio. Discovery, design and launch happen remotely with the same people who write the code. London clients typically kick off on a video call and receive a live staging URL within days, not months.',
      },
      {
        question: 'Can you help with Google Business Profile and local search in London?',
        answer:
          'Yes. London local pack competition is fierce. We build on-page signals, Restaurant or LocalBusiness schema, and city-relevant copy so your site supports Maps and organic rankings — not just a pretty brochure.',
      },
    ],
    relatedWork: [
      { title: 'Cinder & Field', href: '/work/theo-table', sector: 'Restaurant' },
      { title: 'Rose & Ivy Hair', href: '/work/rose-and-ivy', sector: 'London salon' },
      { title: 'Wren & Crown', href: '/work/wren-crown', sector: 'Covent Garden barber' },
    ],
  },
  {
    slug: 'web-design-manchester',
    city: 'Manchester',
    country: 'United Kingdom',
    region: 'Greater Manchester',
    currency: 'GBP',
    starterPrice: '£895',
    professionalPrice: '£2,495',
    title: 'Web Design Manchester | Custom Websites for Northern Brands | TheoMedia',
    description:
      'Bespoke web design for Manchester businesses. Custom websites for hospitality, trades, clinics and ecommerce from £895. Fast, founder-led, 100% client-owned.',
    h1: 'Web design in Manchester that looks as serious as the work you do.',
    intro:
      'Manchester businesses are judged twice: once against London polish, and again against local competitors who still run on WordPress themes from 2019. TheoMedia designs custom websites for Northern Hospitality, independent retailers, contractors and clinics who want a digital presence that converts — not another Wix homepage.',
    market:
      'The Northern Quarter, Ancoats, Spinningfields and the wider city-region are full of operators who have outgrown Instagram as their shopfront. A Manchester restaurant, a Trafford contractor or a Didsbury clinic needs a site that loads on 4G, ranks for local intent, and takes bookings or quotes without a third-party tax.',
    neighbourhoods: [
      'Northern Quarter & Ancoats',
      'Spinningfields & Deansgate',
      'Didsbury & Chorlton',
      'Salford Quays',
      'Altrincham & Stockport',
      'MediaCityUK',
    ],
    sectors: [
      {
        title: 'Hospitality',
        href: '/industries/restaurant-website-design',
        note: 'Menus, Sunday lunch bookings and private dining for Manchester kitchens and gastropubs.',
      },
      {
        title: 'Trades & construction',
        href: '/industries/trades-construction-website-design',
        note: 'Project galleries and quote capture for Greater Manchester builders and roofers.',
      },
      {
        title: 'Ecommerce',
        href: '/industries/ecommerce-website-design',
        note: 'Direct-to-consumer stores for Northern makers who want brand, not catalogue clutter.',
      },
      {
        title: 'Small business sites',
        href: '/industries/small-business-website-design',
        note: 'Fixed-price launches from £895 for independent Manchester operators.',
      },
    ],
    faqs: [
      {
        question: 'How much does a Manchester website cost?',
        answer:
          'A custom TheoMedia website for a Manchester business starts at £895. Professional multi-page builds are £2,495. That is typically a third to a tenth of a traditional Northern agency quote, with full source-code ownership at launch.',
      },
      {
        question: 'Do you work with businesses outside the city centre?',
        answer:
          'Yes. We work across Greater Manchester — Salford, Stockport, Bolton, Bury, Rochdale, Oldham, Tameside, Trafford and Wigan — plus nearby Cheshire and Lancashire operators.',
      },
      {
        question: 'Can you replace a slow WordPress site?',
        answer:
          'That is a common Manchester brief. We rebuild on Next.js, migrate content, keep your domain, and usually improve Core Web Vitals enough that Google re-crawls a faster, cleaner site.',
      },
    ],
    relatedWork: [
      { title: 'Alder & Rowe', href: '/work/theo-build', sector: 'Trades' },
      { title: 'Hartwell Motorworks', href: '/work/theo-garage', sector: 'Automotive' },
      { title: 'Cinder & Field', href: '/work/theo-table', sector: 'Hospitality' },
    ],
  },
  {
    slug: 'web-design-edinburgh',
    city: 'Edinburgh',
    country: 'United Kingdom',
    region: 'Scotland',
    currency: 'GBP',
    starterPrice: '£895',
    professionalPrice: '£2,495',
    title: 'Web Design Edinburgh | Bespoke Websites for Scottish Businesses | TheoMedia',
    description:
      'Custom web design for Edinburgh and Scotland. Hospitality, clinics, trades and independent brands. Bespoke sites from £895. Fast, owned, no lock-in.',
    h1: 'Web design in Edinburgh for hospitality, clinics and independent brands.',
    intro:
      'Edinburgh businesses sell atmosphere, trust and craft — then send visitors to a template that looks like every other Old Town listing. TheoMedia builds custom websites for Scottish hotels, restaurants, clinics and studios that need to convert festival traffic, Google Maps searches and direct bookings without OTA leakage.',
    market:
      'Festival peaks, tourism search and year-round local residents create two audiences on one site. A New Town restaurant and a Leith hotel both need fast mobile menus or rooms, structured data Google can parse, and a booking path that does not dump 15–25% to a platform. We design for that dual intent.',
    neighbourhoods: [
      'Old Town & Royal Mile',
      'New Town & Stockbridge',
      'Leith & Shore',
      'Morningside & Bruntsfield',
      'Haymarket & West End',
      'Portobello',
    ],
    sectors: [
      {
        title: 'Hotels & stays',
        href: '/industries/hotel-website-design',
        note: 'Direct booking for boutique Edinburgh properties competing with Booking.com.',
      },
      {
        title: 'Restaurants',
        href: '/industries/restaurant-website-design',
        note: 'Seasonal menus and table reservations for Edinburgh dining rooms.',
      },
      {
        title: 'Private healthcare',
        href: '/industries/healthcare-clinic-website-design',
        note: 'Consultation-led sites for Scottish private practices.',
      },
      {
        title: 'Photographers',
        href: '/industries/photographer-website-design',
        note: 'Fast portfolio sites for commercial and wedding photographers across Scotland.',
      },
    ],
    faqs: [
      {
        question: 'Do you work with Scottish businesses outside Edinburgh?',
        answer:
          'Yes. Glasgow, St Andrews, the Highlands, and independent operators across Scotland. Edinburgh is the hub page because that is where most search demand sits; the engineering is the same nationwide.',
      },
      {
        question: 'Can a custom site help during Festival season?',
        answer:
          'Yes. Peak tourism is when slow, PDF-menu sites fail. We build HTML menus, booking flows and caching so the site stays fast when search traffic spikes in August.',
      },
      {
        question: 'What does web design cost in Edinburgh?',
        answer:
          'TheoMedia packages start at £895 for a focused custom site and £2,495 for a Professional commercial build. Specialist booking engines are quoted separately.',
      },
    ],
    relatedWork: [
      { title: 'Velora House', href: '/work/velora-house', sector: 'Boutique hotel' },
      { title: 'Cinder & Field', href: '/work/theo-table', sector: 'Restaurant' },
      { title: 'Elowen Clinic', href: '/work/theo-clinic', sector: 'Private clinic' },
    ],
  },
  {
    slug: 'web-design-dublin',
    city: 'Dublin',
    country: 'Ireland',
    region: 'County Dublin',
    currency: 'EUR',
    starterPrice: '€1,050',
    professionalPrice: '€2,950',
    title: 'Web Design Dublin | Bespoke Websites for Irish Businesses | TheoMedia',
    description:
      'Web design in Dublin for restaurants, hotels, clinics and Irish brands. Custom websites from €1,050. Genuine Irish phone line. 100% ownership. No lock-in.',
    h1: 'Web design in Dublin — custom sites for Irish businesses, priced in Euro.',
    intro:
      'Dublin operators do not need a London agency pretending to understand Ireland. TheoMedia is a founder-led studio with a genuine Irish contact line (+353 85 225 8004), Euro pricing, and custom websites for restaurants, hotels, clinics and makers across Dublin city and county.',
    market:
      'Temple Bar templates, Grafton Street lookalikes and Squarespace hospitality sites all compete for the same Google query. A Dublin restaurant, a Howth guesthouse or a Ranelagh clinic wins when the site is fast on mobile, ranks for local intent, and takes a booking without a third-party cut. Our Ireland hub covers nationwide work; this page is specifically for Dublin.',
    neighbourhoods: [
      'City Centre & Temple Bar',
      'Docklands & IFSC',
      'Rathmines & Ranelagh',
      'Ballsbridge & Donnybrook',
      'Howth & Clontarf',
      'Dún Laoghaire & Dalkey',
    ],
    sectors: [
      {
        title: 'Irish hospitality',
        href: '/industries/restaurant-website-design',
        note: 'Direct reservations and seasonal menus for Dublin dining rooms and gastropubs.',
      },
      {
        title: 'Boutique stays',
        href: '/industries/hotel-website-design',
        note: 'Commission-free booking for Dublin and coastal Irish properties.',
      },
      {
        title: 'Clinics',
        href: '/industries/healthcare-clinic-website-design',
        note: 'GDPR-aware consultation sites for private Dublin practices.',
      },
      {
        title: 'Nationwide Ireland',
        href: '/web-design-ireland',
        note: 'Cork, Galway, Limerick and island-wide Irish web design — Euro pricing throughout.',
      },
    ],
    faqs: [
      {
        question: 'How much does web design in Dublin cost?',
        answer:
          'TheoMedia Starter websites for Dublin businesses start at €1,050. Professional commercial sites are €2,950. Bespoke booking engines and ecommerce start from €5,850. You own the source code at launch.',
      },
      {
        question: 'Is this different from your Ireland page?',
        answer:
          'Yes. Web Design Ireland is the nationwide hub. This Dublin page is for city and county operators — neighbourhood relevance, Dublin-specific sectors, and local search intent. Both use the same studio, phone line and Euro pricing.',
      },
      {
        question: 'Do you invoice in Euro and support Irish businesses?',
        answer:
          'Yes. Pricing on this page is in Euro. Contact is the Irish mobile / WhatsApp line +353 85 225 8004. We design for Irish GDPR, local search and Irish customer journeys.',
      },
    ],
    relatedWork: [
      { title: 'Cinder & Field', href: '/work/theo-table', sector: 'Restaurant' },
      { title: 'Velora House', href: '/work/velora-house', sector: 'Hotel' },
      { title: 'Morrow & Hide', href: '/work/theo-leather', sector: 'Ecommerce' },
    ],
  },
  {
    slug: 'web-design-birmingham',
    city: 'Birmingham',
    country: 'United Kingdom',
    region: 'West Midlands',
    currency: 'GBP',
    starterPrice: '£895',
    professionalPrice: '£2,495',
    title: 'Web Design Birmingham | Custom Websites for West Midlands Businesses | TheoMedia',
    description:
      'Bespoke web design in Birmingham and the West Midlands. Custom sites for trades, hospitality, clinics and retailers from £895. Fast, owned, no lock-in.',
    h1: 'Web design in Birmingham for trades, hospitality and independent brands.',
    intro:
      'Birmingham is the UK’s second city and still underserved by serious independent web design. Too many West Midlands businesses run on cheap WordPress themes while competing for high-ticket jobs. TheoMedia builds custom, high-performance websites for contractors, restaurants, clinics and retailers who want enquiries, not a digital brochure.',
    market:
      'Jewellery Quarter makers, Digbeth hospitality, Solihull clinics and Black Country trades all search locally. A Birmingham website has to load on a van phone, rank for “near me” and city modifiers, and convert a quote or booking before the prospect taps the next result. That is an engineering problem, not a template problem.',
    neighbourhoods: [
      'Jewellery Quarter',
      'Digbeth & Custard Factory',
      'City Centre & Colmore Row',
      'Edgbaston & Harborne',
      'Solihull & Sutton Coldfield',
      'Wolverhampton & the Black Country',
    ],
    sectors: [
      {
        title: 'Trades & construction',
        href: '/industries/trades-construction-website-design',
        note: 'Quote-led sites for West Midlands builders, roofers and architectural contractors.',
      },
      {
        title: 'Garages & automotive',
        href: '/industries/garage-website-design',
        note: 'Service menus and booking for specialist workshops.',
      },
      {
        title: 'Restaurants',
        href: '/industries/restaurant-website-design',
        note: 'Menus and reservations for Birmingham dining rooms.',
      },
      {
        title: 'Small business',
        href: '/industries/small-business-website-design',
        note: 'Fixed-price custom sites from £895 for independent West Midlands operators.',
      },
    ],
    faqs: [
      {
        question: 'How much does web design cost in Birmingham?',
        answer:
          'Custom TheoMedia websites start at £895. Professional builds are £2,495. That undercuts most Birmingham and West Midlands agencies while delivering owned Next.js code instead of a rented builder.',
      },
      {
        question: 'Do you work across the West Midlands?',
        answer:
          'Yes. Birmingham, Solihull, Coventry, Wolverhampton, Dudley, Walsall, Sandwell and surrounding towns. The city page exists for search intent; the work is regional.',
      },
      {
        question: 'Can you help trades businesses get more quote requests?',
        answer:
          'That is a core brief. We design project galleries, WhatsApp capture, service-area copy and fast mobile forms so a homeowner can request a quote in under a minute.',
      },
    ],
    relatedWork: [
      { title: 'Alder & Rowe', href: '/work/theo-build', sector: 'Trades' },
      { title: 'Hartwell Motorworks', href: '/work/theo-garage', sector: 'Garage' },
      { title: 'Cinder & Field', href: '/work/theo-table', sector: 'Hospitality' },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
