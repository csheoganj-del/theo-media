import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Business Software',
  description:
    'Custom business software including POS, hospitality systems, clinic management and operational tools. Built by TheoMedia for UK and Ireland.',
};

const features = [
  { title: 'Point of Sale', description: 'Fast counter billing, order management and receipt generation for retail and hospitality.' },
  { title: 'Property Management', description: 'Room inventory, guest management and booking coordination for hotels and stays.' },
  { title: 'Clinic Management', description: 'Patient records, appointment scheduling and treatment workflow management.' },
  { title: 'Inventory Control', description: 'Stock tracking, automated reordering and warehouse management tools.' },
  { title: 'Operational Reporting', description: 'Revenue dashboards, staff performance and business intelligence reporting.' },
  { title: 'Offline Resilience', description: 'Critical business tools that continue working even when connectivity drops.' },
];

export default function BusinessSoftwarePage() {
  return (
    <>
      <section className="bg-near-black text-bone pt-32 pb-20 md:pt-40 md:pb-28 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <SectionLabel dark>SERVICES</SectionLabel>
          <h1 className="text-editorial-xl text-bone mt-4 mb-6 max-w-[800px]">
            Business Software
          </h1>
          <p className="text-[16px] md:text-[18px] text-bone/60 leading-relaxed max-w-[560px]">
            We understand interfaces because we don&apos;t only build marketing pages. We build tools people actually use.
          </p>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.05}>
                <div className="py-6 border-b border-near-black/10">
                  <h3 className="text-[18px] md:text-[20px] font-sans font-semibold text-near-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-stone leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-editorial-md text-near-black mb-6">
            Sometimes a website isn&apos;t enough.
          </h2>
          <p className="text-[16px] text-stone mb-8 max-w-[480px] mx-auto">
            When your business needs software behind the experience, we build that too.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-near-black text-bone text-[13px] font-sans font-medium tracking-[0.1em] uppercase hover:bg-charcoal transition-colors"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </>
  );
}
