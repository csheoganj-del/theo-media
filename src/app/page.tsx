import type { Metadata } from 'next';
import HeroScene from '@/components/home/HeroScene';
import TrustedHospitality from '@/components/home/TrustedHospitality';
import WorkScene from '@/components/home/WorkScene';
import BeliefScene from '@/components/home/BeliefScene';
import SoftwareScene from '@/components/home/SoftwareScene';
import ServicesScene from '@/components/home/ServicesScene';
import OutcomesScene from '@/components/home/OutcomesScene';
import IndustriesScene from '@/components/home/IndustriesScene';
import PricingPreview from '@/components/home/PricingPreview';
import ProcessScene from '@/components/home/ProcessScene';
import HomeFaq from '@/components/home/HomeFaq';
import FinalCTA from '@/components/home/FinalCTA';
import JsonLd from '@/components/seo/JsonLd';
import { faqJsonLd } from '@/lib/seo';
import { homepageFaq } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Independent Digital Studio & Web Engineering | TheoMedia',
  description:
    'Independent digital studio combining strategy, creative direction, web design and digital engineering for ambitious businesses across the UK, Ireland and selected international clients. Founder-led, 100% client-owned.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk',
    languages: {
      'en-GB': 'https://www.theomedia.co.uk',
      'en-IE': 'https://www.theomedia.co.uk/web-design-ireland',
      'x-default': 'https://www.theomedia.co.uk',
    },
  },
  openGraph: {
    title: 'Independent Digital Studio & Web Engineering | TheoMedia',
    description:
      'Independent digital studio combining strategy, creative direction, web design and digital engineering for ambitious businesses across the UK, Ireland and selected international clients.',
    url: 'https://www.theomedia.co.uk',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homepageFaq)} />
      {/* 01: RESTRAINED HERO (Warm Ivory Light Editorial) */}
      <HeroScene />

      {/* 02: SECTOR EXPERTISE (Soft Paper Marquee) */}
      <TrustedHospitality />

      {/* 03: IMMERSIVE SELECTED-WORK (Cinematic Dark Moment #11110F) */}
      <WorkScene />

      {/* 04: STUDIO PROPOSITION (Warm Light Editorial) */}
      <BeliefScene />

      {/* 05: ORIGINAL SOFTWARE (Cinematic Dark Software Moment #11110F) */}
      <SoftwareScene />

      {/* 06: CLEAN CAPABILITIES (Warm Light Editorial) */}
      <ServicesScene />

      {/* 07: COMMERCIAL OUTCOMES (Soft Paper Editorial) */}
      <OutcomesScene />

      {/* 08: SECTOR ARCHITECTURE (Warm Light Editorial) */}
      <IndustriesScene />

      {/* 09: COMMERCIAL TRANSPARENCY (Soft Paper Editorial) */}
      <PricingPreview />

      {/* 10: METHOD & PROCESS (Warm Light Editorial) */}
      <ProcessScene />

      {/* 11: ARCHITECTURAL FAQ (Warm Light Editorial) */}
      <HomeFaq />

      {/* 12: STRONG CLOSING STATEMENT (Cinematic Dark Moment #11110F) */}
      <FinalCTA />
    </>
  );
}
