export const SITE = {
  name: 'TheoMedia',
  legalName: 'TheoMedia',
  url: 'https://www.theomedia.co.uk',
  email: 'hello@theomedia.co.uk',
  phone: '+353 85 225 8004',
  phoneTel: 'tel:+353852258004',
  whatsappUrl: 'https://wa.me/353852258004',
  whatsappDefaultMessage: "Hi TheoMedia, I've been looking through your work and I'd like to discuss a project.",
  
  // Canonical studio positioning
  tagline: 'Independent digital studio combining strategy, creative direction and engineering.',
  primaryHeadline: 'LOOK ESTABLISHED. GET CHOSEN.',
  supportingProposition: 'High-end websites and digital systems for businesses that have outgrown ordinary web design.',
  geographicPositioning: 'UK & Ireland · Working internationally',
  regions: 'UK & Ireland · Working internationally',
  founderPositioning: 'Work directly with the founder responsible for strategy, design and technical delivery. Specialist collaborators are brought in only where a project requires them.',
  portfolioSubheadline: 'Independent digital experiences developed around real commercial problems across hospitality, automotive, healthcare, commerce and creative industries.',

  // Commercial investment framework
  pricing: {
    digitalFlagship: {
      gbp: '£2,500',
      eur: '€3,000',
      usd: '$3,500',
      gbpNumeric: 2500,
    },
    commercialPlatform: {
      gbp: '£5,000',
      eur: '€6,000',
      usd: '$6,500',
      gbpNumeric: 5000,
    },
    digitalSystems: {
      gbp: '£8,000',
      eur: '€9,500',
      usd: '$10,000',
      gbpNumeric: 8000,
    },
  },
  priceRange: '£2,500 – £15,000+ (€3,000 – €18,000+ / US$3,500 – US$20,000+)',
  currencies: 'GBP, EUR, USD',
  year: new Date().getFullYear(),
  instagram: 'https://instagram.com/theomedia.co.uk',
  facebook: 'https://www.facebook.com/profile.php?id=61594428231748',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Studio', href: '/studio' },
  { label: 'Journal', href: '/journal' },
  { label: 'Investment', href: '/pricing' },
] as const;

export const MOTION = {
  duration: {
    fast: 0.2,
    medium: 0.4,
    slow: 0.8,
    cinematic: 1.2,
  },
  ease: {
    enter: [0.22, 1, 0.36, 1] as const,
    exit: [0.55, 0, 1, 0.45] as const,
    smooth: [0.25, 0.1, 0.25, 1] as const,
  },
  reveal: {
    distance: 32,
  },
} as const;
