import type { Metadata } from 'next';
import HeroScene from '@/components/home/HeroScene';
import TrustedHospitality from '@/components/home/TrustedHospitality';
import WorkScene from '@/components/home/WorkScene';
import BeliefScene from '@/components/home/BeliefScene';
import ServicesScene from '@/components/home/ServicesScene';
import OutcomesScene from '@/components/home/OutcomesScene';
import IndustriesScene from '@/components/home/IndustriesScene';
import PricingPreview from '@/components/home/PricingPreview';
import ProcessScene from '@/components/home/ProcessScene';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Web Design & Digital Product Studio UK & Ireland | TheoMedia',
  description:
    'TheoMedia is an independent web design and digital product studio. We engineer bespoke websites, custom website development, and business software across the UK and Ireland.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk',
  },
  openGraph: {
    title: 'Web Design & Digital Product Studio UK & Ireland | TheoMedia',
    description:
      'TheoMedia is an independent web design and digital product studio. We engineer bespoke websites, custom website development, and business software across the UK and Ireland.',
    url: 'https://www.theomedia.co.uk',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      {/* SCENE 01 — INTRODUCTION */}
      <HeroScene />

      {/* SCENE 02 — SECTOR MARQUEE (DELIBERATELY PRESERVED) */}
      <TrustedHospitality />

      {/* SCENE 03 — FLAGSHIP WORK */}
      <WorkScene />

      {/* SCENE 04 — STUDIO CONVICTION */}
      <BeliefScene />

      {/* SCENE 05 — CAPABILITIES */}
      <ServicesScene />

      {/* SCENE 06 — OUTCOMES */}
      <OutcomesScene />

      {/* SCENE 07 — INDUSTRIES */}
      <IndustriesScene />

      {/* SCENE 08 — COMMERCIAL TRANSPARENCY */}
      <PricingPreview />

      {/* SCENE 09 — METHOD */}
      <ProcessScene />

      {/* SCENE 10 — INVITATION */}
      <FinalCTA />
    </>
  );
}

