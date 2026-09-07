import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

const outcomes = [
  'GET NOTICED',
  'LOOK ESTABLISHED',
  'BUILD TRUST',
  'MAKE THE OFFER CLEAR',
  'GENERATE ENQUIRIES',
  'MAKE BOOKING EASY',
  'SELL DIRECT',
  'REDUCE ADMIN',
];

export default function OutcomesScene() {
  return (
    <section className="bg-bone py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn>
              <SectionLabel>OUTCOMES</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-editorial-lg font-display text-near-black">
                A BEAUTIFUL WEBSITE ISN&apos;T THE END GOAL.
              </h2>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7 flex flex-col">
            <div className="border-t border-near-black/10">
              {outcomes.map((outcome, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <div className="flex items-center gap-6 py-6 border-b border-near-black/10">
                    <span className="text-[12px] md:text-[14px] text-stone font-sans w-8">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[24px] md:text-[32px] lg:text-[40px] font-display text-near-black tracking-wide">
                      {outcome}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
