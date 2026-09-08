import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

const steps = [
  {
    name: 'UNDERSTAND',
    description: 'We understand the business, customer and problem first.',
  },
  {
    name: 'DIRECT',
    description: 'We define the story, visual direction and customer journey.',
  },
  {
    name: 'DESIGN',
    description: 'We create the experience before filling pages with code.',
  },
  {
    name: 'BUILD',
    description: 'Responsive, performant, production-quality implementation.',
  },
  {
    name: 'REFINE',
    description: 'Real-device QA, crop correction, interaction testing and polish.',
  },
  {
    name: 'LAUNCH & STAY',
    description: 'Launch, support and iteration.',
  },
];

export default function ProcessScene() {
  return (
    <section className="bg-bone py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-16 md:mb-24">
          <div className="md:w-1/3">
            <FadeIn>
              <SectionLabel>HOW WE WORK</SectionLabel>
            </FadeIn>
          </div>
          <div className="md:w-2/3 flex flex-col gap-6">
            <FadeIn delay={0.1}>
              <h2 className="text-editorial-lg font-display text-near-black">
                NO ACCOUNT MANAGER BETWEEN YOU AND THE PEOPLE BUILDING IT.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-stone text-[18px] md:text-[20px] font-sans max-w-xl">
                The people discussing your website are the people designing and building it.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="flex flex-col gap-4">
                <span className="text-[48px] md:text-[64px] font-display text-near-black/10 leading-none">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="text-[18px] md:text-[20px] font-sans font-semibold text-near-black">
                  {step.name}
                </h3>
                <p className="text-stone text-[15px] font-sans leading-relaxed">
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
