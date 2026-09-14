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
import HomeFaq from '@/components/home/HomeFaq';
import FinalCTA from '@/components/home/FinalCTA';
import JsonLd from '@/components/seo/JsonLd';
import { faqJsonLd } from '@/lib/seo';
import { homepageFaq } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Web Design Studio UK & Ireland | Bespoke Websites from £895 | TheoMedia',
  description:
    'Independent web design studio for UK and Ireland businesses. Custom websites, booking engines and ecommerce from £895 / €1,050. 100% client-owned. No templates, no lock-in.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk',
    languages: {
      'en-GB': 'https://www.theomedia.co.uk',
      'en-IE': 'https://www.theomedia.co.uk/web-design-ireland',
      'x-default': 'https://www.theomedia.co.uk',
    },
  },
  openGraph: {
    title: 'Web Design Studio UK & Ireland | Bespoke Websites from £895 | TheoMedia',
    description:
      'Independent web design studio. Custom websites, booking engines and ecommerce for ambitious businesses across the UK and Ireland.',
    url: 'https://www.theomedia.co.uk',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homepageFaq)} />
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

      {/* SCENE 10 — FAQ */}
      <HomeFaq />

      {/* SCENE 11 — INVITATION */}
      <FinalCTA />
    </>
  );
}

