export type MonthAvailabilityStatus = 'open' | 'priority-list' | 'filled';

export interface MonthAvailability {
  month: string;
  year: number;
  label: string;
  status: MonthAvailabilityStatus;
  statusDisplay?: string;
  remaining?: number | null;
}

export interface CommunityBuildConfig {
  pilotPeriod: string;
  totalPrice: number;
  reservationFee: number;
  remainingBalance: number;
  maxProjectsPerMonth: number;
  availability: {
    september: MonthAvailability;
    october: MonthAvailability;
    november: MonthAvailability;
  };
}

/**
 * Single source of truth for Community Build availability.
 * Update status truthfully here:
 * - 'open': Displays "Applications open" (or "X place(s) remaining" if remaining is a genuine number)
 * - 'priority-list': Displays "Priority list open"
 * - 'filled': Displays "Allocation filled" and shifts application state to priority access
 */
export const communityBuildAvailability: CommunityBuildConfig = {
  pilotPeriod: 'September · October · November 2026',
  totalPrice: 495,
  reservationFee: 200,
  remainingBalance: 295,
  maxProjectsPerMonth: 3,
  availability: {
    september: {
      month: 'September',
      year: 2026,
      label: 'September 2026',
      status: 'open',
      statusDisplay: 'Applications open',
      remaining: null, // Never fabricate numbers; null indicates open without artificial counter
    },
    october: {
      month: 'October',
      year: 2026,
      label: 'October 2026',
      status: 'priority-list',
      statusDisplay: 'Priority list open',
      remaining: null,
    },
    november: {
      month: 'November',
      year: 2026,
      label: 'November 2026',
      status: 'priority-list',
      statusDisplay: 'Priority list open',
      remaining: null,
    },
  },
};

export interface ProgrammeInclusion {
  title: string;
  description: string;
}

export const communityBuildInclusions: ProgrammeInclusion[] = [
  {
    title: 'Strategy and project direction',
    description:
      'A focused discovery process to understand the business, customer journey and the actions the website needs to generate.',
  },
  {
    title: 'Bespoke mobile-first design',
    description:
      'A design created around the business rather than simply inserting a logo into a generic off-the-shelf template.',
  },
  {
    title: 'Approximately 5–7 core pages',
    description:
      'Typical pages may include Home, About, Services, Work/Gallery, FAQs, Contact and another relevant business page.',
  },
  {
    title: 'Contact and enquiry journey',
    description:
      'Clear calls to action, enquiry forms and sensible contact pathways designed to turn visitors into enquiries.',
  },
  {
    title: 'WhatsApp and email integration',
    description:
      'Direct routing configured for WhatsApp and email where appropriate for the business workflow.',
  },
  {
    title: 'Basic technical SEO setup',
    description:
      'Page titles, descriptions, headings, semantic structure, indexability, sitemap and core technical foundations.',
  },
  {
    title: 'Analytics setup',
    description:
      'Basic analytics so the business can begin understanding how visitors use the website.',
  },
  {
    title: 'Domain connection',
    description:
      "Connection to the client's existing domain where applicable.",
  },
  {
    title: 'Responsive development',
    description:
      'Optimised performance and layout across modern mobile, tablet and desktop viewports.',
  },
  {
    title: '12 months hosting',
    description:
      'Subject to the programme and project terms.',
  },
  {
    title: '12 months technical support and reasonable small updates',
    description:
      'Clarified separately in the project agreement what constitutes a small update.',
  },
];

export const communityBuildExclusions: string[] = [
  'large ecommerce stores',
  'large product catalogues',
  'advanced membership systems',
  'complex booking platforms',
  'custom software applications',
  'customer portals',
  'advanced API integrations',
  'extensive multilingual systems',
  'large content migrations',
  'very large websites',
  'substantial custom copywriting or media production',
];

export interface AllocationStep {
  step: string;
  title: string;
  description: string;
}

export const communityBuildSteps: AllocationStep[] = [
  {
    step: '01',
    title: 'Apply',
    description:
      'Tell us about your business, current website or online presence, and what you want the new site to achieve.',
  },
  {
    step: '02',
    title: 'Scope review',
    description:
      'TheoMedia reviews the application to make sure the project is suitable for the Community Build programme.',
  },
  {
    step: '03',
    title: 'Acceptance',
    description:
      'If accepted and a place is available, we confirm the project scope.',
  },
  {
    step: '04',
    title: 'Reserve',
    description:
      'A £200 reservation payment confirms the place. The £200 is part of the £495 total.',
  },
  {
    step: '05',
    title: 'Build',
    description:
      'We begin the agreed design and development process.',
  },
  {
    step: '06',
    title: 'Launch',
    description:
      'The remaining agreed balance is settled before final launch unless agreed otherwise in writing.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const communityBuildFaqs: FaqItem[] = [
  {
    question: 'Is this a cheap website package?',
    answer:
      'It is intentionally lower-cost, but the programme is not designed around producing disposable or mass-template websites. TheoMedia limits the Community Build programme to a small number of suitable projects so we can still apply proper design, development and technical foundations while working within a defined scope.',
  },
  {
    question: 'Why is the Community Build website £495?',
    answer:
      'The programme is a limited Autumn 2026 pilot for independent businesses. Instead of allocating all of our acquisition budget to advertising, we are using part of it to support a small number of focused website projects.',
  },
  {
    question: 'How many businesses can apply?',
    answer:
      'Anyone with a suitable independent business can apply, but TheoMedia accepts a maximum of three Community Build projects per month during the pilot.',
  },
  {
    question: 'Does submitting the form guarantee a £495 website?',
    answer:
      'No. We first review the project scope. A place is only confirmed after the project has been accepted and the £200 reservation payment has been received.',
  },
  {
    question: 'Can you build an ecommerce website for £495?',
    answer:
      'The Community Build programme is primarily designed for focused small-business websites. Larger ecommerce stores, complex booking systems and bespoke functionality require additional scoping and are quoted separately.',
  },
  {
    question: 'What if this month is full?',
    answer:
      "You can join the following month's priority list. Priority applicants are contacted before the next allocation is opened more widely.",
  },
  {
    question: 'Do you work with businesses outside London?',
    answer:
      'Yes. TheoMedia works remotely with businesses across the UK, Ireland and Europe.',
  },
  {
    question: 'How long does a website take?',
    answer:
      'Timescales depend on scope and how quickly content and feedback are supplied. A realistic project schedule is agreed before the build begins.',
  },
];

/**
 * Selected TheoMedia projects for proof.
 */
export const communityBuildProofProjects = [
  {
    title: 'Nick Gaven Cinematography',
    industry: 'Cinematography & Aerial',
    description:
      'A cinematic visual portfolio built for an international camera operator, DOP, and licensed drone pilot with categorized showreels and direct production booking.',
    url: 'https://nick.theomedia.co.uk',
    isExternal: true,
  },
  {
    title: 'Rose & Ivy Hair',
    industry: 'Luxury Hair Salon',
    description:
      'An editorial digital presence engineered for a London salon, pairing curated treatment menus and space storytelling with frictionless appointment booking.',
    url: 'https://rose-and-ivy.theomedia.co.uk',
    isExternal: true,
  },
  {
    title: 'Falak Studio',
    industry: 'Film & Video Production',
    description:
      'A high-contrast visual portfolio showcasing commercial cinematography, specialist factual filming, and camera equipment specs with sub-second loading.',
    url: 'https://theomedianick2.vercel.app',
    isExternal: true,
  },
];
