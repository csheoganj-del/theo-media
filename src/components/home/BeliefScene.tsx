import RevealText from '@/components/ui/RevealText';
import FadeIn from '@/components/ui/FadeIn';

export default function BeliefScene() {
  return (
    <section className="bg-ivory text-near-black py-32 md:py-40 lg:py-48 px-5 md:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
      <div className="max-w-[900px] w-full flex flex-col items-center">
        <RevealText className="font-display text-editorial-xl leading-[1.05] tracking-tight mb-8">
          YOUR WEBSITE SPEAKS BEFORE YOU DO.
        </RevealText>
        
        <FadeIn delay={0.4} className="max-w-xl">
          <p className="font-sans text-stone text-[16px] md:text-[18px] leading-relaxed">
            A visitor forms an opinion about your business in seconds. We make those seconds count.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
