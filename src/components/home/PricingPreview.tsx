import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import { pricingTiers } from '@/data/pricing';

export default function PricingPreview() {
  return (
    <section className="bg-soft-paper text-primary-ink py-28 md:py-36 lg:py-44 px-5 md:px-8 lg:px-12 border-b border-border-rule">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-border-rule mb-16 md:mb-20">
          <FadeIn>
            <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze font-medium block mb-3">
              06 / STUDIO INVESTMENT
            </span>
            <h2 className="font-display text-[clamp(2.6rem,4.8vw,4.8rem)] leading-[1.02] text-primary-ink uppercase font-normal">
              CLEAR INVESTMENT. FIXED SCOPES.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-secondary-text text-[15px] md:text-[17px] max-w-md leading-relaxed">
              Built around your business problem, not an arbitrary page count. Engagements typically begin at £2,500 (€3,000 / $3,500), with 100% code ownership from launch.
            </p>
          </FadeIn>
        </div>

        {/* 3 Editorial Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pricingTiers.map((tier, index) => {
            const isFeatured = index === 1;

            return (
              <FadeIn key={tier.name || index} delay={index * 0.08} className="h-full">
                <div
                  className={`h-full flex flex-col p-8 lg:p-10 bg-light-surface rounded-[1px] transition-all duration-300 ${
                    isFeatured
                      ? 'border-2 border-primary-ink shadow-md'
                      : 'border border-border-rule'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.14em] uppercase text-muted-text pb-4 mb-6 border-b border-border-rule">
                    <span>0{index + 1} / TIER</span>
                    {isFeatured && (
                      <span className="text-oxidised-bronze font-medium">STUDIO STANDARD</span>
                    )}
                  </div>

                  <h3 className="text-[20px] font-sans font-semibold mb-2 text-primary-ink uppercase tracking-[0.08em]">
                    {tier.name}
                  </h3>

                  <div className="mb-6">
                    <span className="text-[12px] font-mono text-muted-text uppercase tracking-wider block mb-1">
                      Starting Investment
                    </span>
                    <span className="font-display text-[38px] md:text-[46px] leading-none text-primary-ink">
                      {tier.price}
                    </span>
                  </div>

                  <p className="text-secondary-text text-[15px] leading-relaxed mb-8 pb-8 border-b border-border-rule min-h-[72px]">
                    {tier.tagline || tier.description}
                  </p>

                  <ul className="flex flex-col gap-3.5 mb-10 flex-grow">
                    {tier.includes?.slice(0, 4).map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-start gap-3 text-[13px] md:text-[14px] text-secondary-text">
                        <span className="text-oxidised-bronze font-mono text-[11px] pt-0.5">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/pricing"
                    className="editorial-underline mt-auto text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-primary-ink hover:text-oxidised-bronze self-start"
                  >
                    <span>Full Specifications</span>
                    <span>→</span>
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Commercial Footnote */}
        <FadeIn delay={0.25}>
          <div className="pt-8 border-t border-border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[12px] font-mono tracking-[0.12em] uppercase text-muted-text">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-primary-ink">100% Client Ownership</span>
              <span>·</span>
              <span>Zero Lock-in</span>
              <span>·</span>
              <span>Fixed Milestone Billing</span>
            </div>
            <Link
              href="/journal/how-much-does-a-website-cost-uk"
              className="editorial-underline text-secondary-text hover:text-primary-ink"
            >
              <span>Read UK Website Investment Guide</span>
              <span className="text-oxidised-bronze">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
