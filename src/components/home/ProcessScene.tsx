import FadeIn from '@/components/ui/FadeIn';

const steps = [
  {
    num: '01',
    name: 'COMMERCIAL AUDIT',
    description: 'We dissect your business, margins and customers before proposing visual ideas.',
  },
  {
    num: '02',
    name: 'ART DIRECTION',
    description: 'We establish typographic hierarchy, negative space and customer conversion journeys.',
  },
  {
    num: '03',
    name: 'BESPOKE DESIGN',
    description: 'We architect every viewport carefully before writing production code.',
  },
  {
    num: '04',
    name: 'FULL-STACK BUILD',
    description: 'Modern Next.js & TypeScript engineering optimised for performance and Core Web Vitals.',
  },
  {
    num: '05',
    name: 'REAL-DEVICE QA',
    description: 'Rigorous testing across real mobile viewports, tablets, and desktop displays.',
  },
  {
    num: '06',
    name: 'COMPLETE TRANSFER',
    description: 'Launch, repository handover, documentation and 100% client code ownership.',
  },
];

export default function ProcessScene() {
  return (
    <section className="bg-warm-ivory text-primary-ink py-28 md:py-36 lg:py-44 px-5 md:px-8 lg:px-12 border-b border-border-rule">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-12 border-b border-border-rule mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze font-medium block mb-3">
                10 / STUDIO METHOD
              </span>
              <h2 className="font-display text-[clamp(2.6rem,4.8vw,4.8rem)] leading-[1.02] text-primary-ink uppercase font-normal">
                NO ACCOUNT MANAGERS. DIRECT ARCHITECTURE.
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end pt-2">
            <FadeIn delay={0.1}>
              <p className="font-sans text-[17px] md:text-[19px] text-secondary-text leading-relaxed max-w-xl">
                The people discussing your commercial objectives are the exact designers and engineers building your website. No lost translations, no agency bureaucracy.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {steps.map((step, index) => (
            <FadeIn key={step.num} delay={index * 0.06}>
              <div className="flex flex-col gap-3 group">
                <span className="text-[12px] font-mono tracking-[0.16em] text-oxidised-bronze font-medium pb-2 border-b border-border-rule">
                  {step.num} / STEP
                </span>
                <h3 className="font-sans text-[16px] md:text-[17px] font-semibold text-primary-ink uppercase tracking-wider mt-2">
                  {step.name}
                </h3>
                <p className="font-sans text-secondary-text text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
