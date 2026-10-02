import FadeIn from '@/components/ui/FadeIn';

const outcomes = [
  { label: 'LOOK ESTABLISHED', desc: 'Stronger first-impression credibility before a client speaks to you.' },
  { label: 'MAKE THE OFFER CLEAR', desc: 'Eliminate confusion around pricing, process and services.' },
  { label: 'GENERATE QUALIFIED ENQUIRIES', desc: 'Attract higher-value clients who respect your expertise.' },
  { label: 'STREAMLINE DIRECT BOOKINGS', desc: 'Frictionless room, table and appointment reservations.' },
  { label: 'AVOID PLATFORM LOCK-IN', desc: 'Zero recurring percentage fees or proprietary builder dependencies.' },
  { label: 'REDUCE OPERATIONAL ADMIN', desc: 'Self-serve menus, portfolios, client portals and forms.' },
];

export default function OutcomesScene() {
  return (
    <section className="bg-soft-paper text-primary-ink py-28 md:py-36 lg:py-40 border-b border-border-rule">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze font-medium block mb-3">
                04 / COMMERCIAL OUTCOMES
              </span>
              <h2 className="font-display text-[clamp(2.6rem,4.8vw,4.8rem)] leading-[1.02] text-primary-ink uppercase font-normal mb-6">
                A BEAUTIFUL WEBSITE IS NEVER THE END GOAL.
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] text-secondary-text leading-relaxed max-w-md">
                A website exists to solve real commercial problems: win better projects, protect your margins and save hours of administrative friction.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 flex flex-col border-t border-border-rule">
            {outcomes.map((outcome, index) => (
              <FadeIn key={index} delay={index * 0.04}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 py-6 border-b border-border-rule group">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] font-mono tracking-[0.14em] text-oxidised-bronze w-6">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="font-display text-[22px] md:text-[28px] lg:text-[32px] text-primary-ink group-hover:text-dark-accent transition-colors">
                      {outcome.label}
                    </span>
                  </div>
                  <span className="font-sans text-[13px] md:text-[14px] text-muted-text sm:text-right max-w-xs pl-10 sm:pl-0">
                    {outcome.desc}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
