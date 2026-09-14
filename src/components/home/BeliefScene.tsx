import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export default function BeliefScene() {
  return (
    <section className="bg-ivory text-near-black py-28 md:py-36 lg:py-44 px-5 md:px-8 lg:px-12 border-y border-near-black/5 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <FadeIn className="mb-6">
          <SectionLabel>OUR CONVICTION</SectionLabel>
        </FadeIn>

        <div className="max-w-[980px] w-full">
          <h2 className="font-display text-editorial-lg leading-[1.05] tracking-tight mb-8 text-near-black">
            YOUR WEBSITE <span className="font-display italic">SPEAKS</span> BEFORE YOU DO.
          </h2>
          
          <FadeIn delay={0.2} className="max-w-2xl mx-auto mb-14">
            <p className="font-sans text-stone text-[17px] md:text-[20px] leading-relaxed">
              Before a client reserves a room, books a table, or requests a project quote, they form an unshakeable opinion in four seconds. We build digital flagships that convert that moment into enduring trust.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-near-black/10 text-left">
            <div>
              <span className="font-mono text-[11px] text-stone tracking-widest uppercase block mb-2">01 / ARCHITECTURE</span>
              <h3 className="font-display text-[22px] text-near-black mb-2">Bespoke Engineering</h3>
              <p className="font-sans text-[14px] text-stone leading-relaxed">Clean Next.js & TypeScript codebases with zero bloated template plugins or sluggish page builders.</p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-stone tracking-widest uppercase block mb-2">02 / SOVEREIGNTY</span>
              <h3 className="font-display text-[22px] text-near-black mb-2">100% Client Ownership</h3>
              <p className="font-sans text-[14px] text-stone leading-relaxed">Zero monthly platform extortion. You own your code, your assets, your hosting, and your customer data forever.</p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-stone tracking-widest uppercase block mb-2">03 / CONVERSION</span>
              <h3 className="font-display text-[22px] text-near-black mb-2">Frictionless Commercial Flow</h3>
              <p className="font-sans text-[14px] text-stone leading-relaxed">Direct bookings, tailored enquiry journeys, and sub-second page loads engineered to convert high-value clients.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

