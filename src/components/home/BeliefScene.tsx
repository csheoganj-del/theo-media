import FadeIn from '@/components/ui/FadeIn';

export default function BeliefScene() {
  return (
    <section className="bg-warm-ivory text-primary-ink py-28 md:py-36 lg:py-44 px-5 md:px-8 lg:px-12 border-b border-border-rule relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20 md:mb-28">
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze font-medium block mb-3">
                04 / STUDIO PROPOSITION
              </span>
              <h2 className="font-display text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[1.02] tracking-[-0.015em] text-primary-ink uppercase font-normal">
                BUILT FOR BUSINESSES THAT HAVE OUTGROWN ORDINARY WEB DESIGN.
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end pt-2">
            <FadeIn delay={0.1}>
              <p className="font-sans text-[17px] md:text-[20px] text-secondary-text leading-[1.6] max-w-2xl mb-6">
                Before a client reserves a room, books a table or requests an architectural quote, they evaluate your stature in seconds. Generic templates signal ordinary service. We build digital flagships that establish immediate commercial authority.
              </p>
              <div className="text-[11px] font-mono tracking-[0.14em] uppercase text-muted-text">
                STRATEGY · ART DIRECTION · BESPOKE ENGINEERING
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 3 Pillars Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-border-rule">
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] text-oxidised-bronze tracking-[0.16em] uppercase font-medium">
                01 / STRATEGY
              </span>
              <h3 className="font-display text-[26px] md:text-[30px] leading-tight text-primary-ink uppercase font-normal">
                Commercial Problem First
              </h3>
              <p className="font-sans text-[15px] text-secondary-text leading-relaxed">
                Clear positioning, refined buyer journeys and conversion architecture before a single line of code is written.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] text-oxidised-bronze tracking-[0.16em] uppercase font-medium">
                02 / ART DIRECTION
              </span>
              <h3 className="font-display text-[26px] md:text-[30px] leading-tight text-primary-ink uppercase font-normal">
                Editorial Restraint
              </h3>
              <p className="font-sans text-[15px] text-secondary-text leading-relaxed">
                European editorial composition, deliberate negative space and high-contrast typography that command respect.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] text-oxidised-bronze tracking-[0.16em] uppercase font-medium">
                03 / ENGINEERING
              </span>
              <h3 className="font-display text-[26px] md:text-[30px] leading-tight text-primary-ink uppercase font-normal">
                100% Client Ownership
              </h3>
              <p className="font-sans text-[15px] text-secondary-text leading-relaxed">
                Custom Next.js & TypeScript codebases with zero proprietary lock-in. You own your repository, hosting and data entirely.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
