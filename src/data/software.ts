export const PRODUCTS_SITE = {
  name: 'Gurjar',
  url: 'https://mansinghgurjar.in',
  email: 'hello@mansinghgurjar.in',
} as const;

export type SoftwareStatus = 'available' | 'preview' | 'forthcoming';

export type SoftwareProduct = {
  slug: string;
  name: string;
  tagline: string;
  status: SoftwareStatus;
  licensed: boolean;
  checkout: boolean;
  platforms: string;
  priceLabel: string;
  image: string;
  note: string;
  recommendation: string;
  features: string[];
  buyLabel: string;
  downloadUrl?: string;
  downloadLabel?: string;
};

export const softwareProducts: SoftwareProduct[] = [
  {
    slug: 'traffic-ledger',
    name: 'TrafficLedger',
    tagline: 'Same job. Different ledger.',
    status: 'available',
    licensed: true,
    checkout: true,
    platforms: 'Windows · macOS 14 Apple silicon',
    priceLabel: 'From ₹1,499 · Personal 2 seats · Pro 5',
    image: '/images/software/traffic-ledger-v2.jpg',
    note: 'A quiet record of what this computer actually transfers. Live in the tray. History, budgets and sessions stay on the machine. One signed-lease license for the Windows exe and the Mac dmg.',
    recommendation:
      'Fourteen-day hardware-bound trial. Buy a key on this page, paste it in the app. A copied lease, extra seats, or a rolled-back clock will not keep it unlocked.',
    features: [
      'Live download and upload in the tray',
      'Local history, budgets and CSV export',
      '14-day trial bound to this machine',
      'Personal 2 seats · Pro 5 seats',
      'Same license engine on Windows and Mac',
    ],
    buyLabel: 'Buy a license',
    downloadUrl: '/downloads/TrafficLedger-1.0.0-Windows.exe',
    downloadLabel: 'Download Windows',
  },
  {
    slug: 'face-ledger',
    name: 'Face Ledger',
    tagline: 'A quieter cabinet for the pictures you keep.',
    status: 'preview',
    licensed: false,
    checkout: false,
    platforms: 'macOS 14+',
    priceLabel: '0.1.1 · Mac preview',
    image: '/images/software/face-ledger-v2.jpg',
    note: 'A photography ledger for a private table: local faces, local albums, no feed. Built as a native Mac app for people who still print pictures.',
    recommendation:
      'Native Mac preview — the commercial lock is not in this binary yet. Drag to Applications. Home remains mansinghgurjar.in.',
    features: [
      'Native Mac photography app',
      'Local albums — nothing uploaded',
      'Apple silicon, macOS 14+',
      'Home: mansinghgurjar.in',
    ],
    buyLabel: 'Download the Mac preview',
    downloadUrl: '/downloads/Face-Ledger-0.1.1.dmg',
    downloadLabel: 'Download Mac DMG',
  },
  {
    slug: 'space-ledger',
    name: 'Space Ledger',
    tagline: 'Your Mac, understood.',
    status: 'preview',
    licensed: false,
    checkout: false,
    platforms: 'macOS 14 · Apple silicon or Intel',
    priceLabel: '1.0.0 · Universal Mac preview',
    image: '/images/software/space-ledger-v2.jpg',
    note: 'A read-only scan of accessible storage, then a ledger of what changed. Cleanup is never preselected. Duplicates are compared by contents. Nothing leaves the Mac.',
    recommendation:
      'Native Mac preview — unsigned, not notarized, no seat lock yet. Install from the DMG. The next cut takes the same license desk as TrafficLedger.',
    features: [
      'Local disk scan and storage history',
      'Cleanup candidates you confirm yourself',
      'Duplicate matching from 1 MB, keeps one copy',
      'No analytics, no uploads',
    ],
    buyLabel: 'Download the Mac preview',
    downloadUrl: '/downloads/SpaceLedger-1.0.0-universal.dmg',
    downloadLabel: 'Download Mac DMG',
  },
  {
    slug: 'speed-ledger',
    name: 'Speed Ledger',
    tagline: 'Forthcoming.',
    status: 'forthcoming',
    licensed: false,
    checkout: false,
    platforms: 'Mac · later Windows',
    priceLabel: 'First edition, not yet released',
    image: '/images/software/speed-ledger-v2.jpg',
    note: 'The fourth ledger from this table. Same house, same quiet language. It is being cut slowly on purpose.',
    recommendation:
      'Write if you want first access. Traffic, Face and Space are already on the table.',
    features: [
      'Same Gurjar license desk as the other ledgers',
      'Local-first, like the rest of the family',
      'Announced here before anywhere else',
    ],
    buyLabel: 'Request first access',
  },
];

export function softwareUrl(slug: string) {
  return `${PRODUCTS_SITE.url}/software/${slug}`;
}

export function getSoftware(slug: string) {
  return softwareProducts.find((product) => product.slug === slug) ?? null;
}

export function otherSoftware(slug: string) {
  return softwareProducts.filter((product) => product.slug !== slug);
}

export const SOFTWARE_NAV = [
  { label: 'Ledgers', href: '/software' },
  { label: 'Traffic', href: '/software/traffic-ledger' },
  { label: 'Face', href: '/software/face-ledger' },
  { label: 'Space', href: '/software/space-ledger' },
  { label: 'Speed', href: '/software/speed-ledger' },
] as const;
