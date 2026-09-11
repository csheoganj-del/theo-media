export const SITE = {
  name: 'TheoMedia',
  url: 'https://www.theomedia.co.uk',
  email: 'hello@theomedia.co.uk',
  phone: '+353 85 225 8004',
  phoneTel: 'tel:+353852258004',
  whatsappUrl: 'https://wa.me/353852258004',
  whatsappDefaultMessage: "Hi TheoMedia, I've been looking through your work and I'd like to discuss a website or digital project for my business.",
  regions: 'UK & Ireland',
  tagline: 'Independent Web Design & Digital Product Studio · UK & Ireland',
  priceRange: '£895 – £9,500+ (€1,050 – €11,000+)',
  currencies: 'GBP, EUR',
  year: new Date().getFullYear(),
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Journal', href: '/journal' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
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
