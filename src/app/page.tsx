import HeroScene from '@/components/home/HeroScene';
import ProofScene from '@/components/home/ProofScene';
import TrustedHospitality from '@/components/home/TrustedHospitality';
import PricingPreview from '@/components/home/PricingPreview';
import BeliefScene from '@/components/home/BeliefScene';
import WorkScene from '@/components/home/WorkScene';
import OutcomesScene from '@/components/home/OutcomesScene';
import ServicesScene from '@/components/home/ServicesScene';
import IndustriesScene from '@/components/home/IndustriesScene';
import ProcessScene from '@/components/home/ProcessScene';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* SCENE 01 — INTRODUCTION */}
      <HeroScene />

      {/* SCENE 02 — PROOF */}
      <ProofScene />

      {/* SCENE 03 — TRUSTED HOSPITALITY */}
      <TrustedHospitality />

      {/* SCENE 04 — COMMERCIAL OFFER */}
      <PricingPreview />

      {/* SCENE 05 — BELIEF */}
      <BeliefScene />

      {/* SCENE 06 — WORK */}
      <WorkScene />

      {/* SCENE 07 — OUTCOMES */}
      <OutcomesScene />

      {/* SCENE 08 — CAPABILITIES */}
      <ServicesScene />

      {/* SCENE 09 — INDUSTRIES */}
      <IndustriesScene />

      {/* SCENE 10 — METHOD */}
      <ProcessScene />

      {/* SCENE 11 — INVITATION */}
      <FinalCTA />
    </>
  );
}
