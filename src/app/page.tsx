import HeroScene from '@/components/home/HeroScene';
import ProofScene from '@/components/home/ProofScene';
import BeliefScene from '@/components/home/BeliefScene';
import WorkScene from '@/components/home/WorkScene';
import ServicesScene from '@/components/home/ServicesScene';
import OutcomesScene from '@/components/home/OutcomesScene';
import IndustriesScene from '@/components/home/IndustriesScene';
import ProcessScene from '@/components/home/ProcessScene';
import TrustedHospitality from '@/components/home/TrustedHospitality';
import PricingPreview from '@/components/home/PricingPreview';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* SCENE 01 — INTRODUCTION */}
      <HeroScene />

      {/* SCENE 02 — PROOF */}
      <ProofScene />

      {/* SCENE 03 — BELIEF */}
      <BeliefScene />

      {/* SCENE 04 — WORK */}
      <WorkScene />

      {/* SCENE 05 — CAPABILITIES */}
      <ServicesScene />

      {/* SCENE 06 — OUTCOMES */}
      <OutcomesScene />

      {/* SCENE 07 — INDUSTRIES */}
      <IndustriesScene />

      {/* SCENE 08 — METHOD */}
      <ProcessScene />

      {/* SCENE 09 — TRUSTED HOSPITALITY */}
      <TrustedHospitality />

      {/* SCENE 10 — COMMERCIAL OFFER */}
      <PricingPreview />

      {/* SCENE 11 — INVITATION */}
      <FinalCTA />
    </>
  );
}
