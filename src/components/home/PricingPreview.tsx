import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { pricingTiers } from '@/data/pricing';

export default function PricingPreview() {
  return (
    <section className="bg-ivory py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-6">
          <FadeIn>
            <SectionLabel>PRICING</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-editorial-lg font-display text-near-black">
              CLEAR PRICING. NO MYSTERY QUOTE.
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pricingTiers.map((tier, index) => {
            const isProfessional = tier.name.toLowerCase() === 'professional' || tier.id === 'professional' || index === 1;
            
            return (
              <FadeIn key={tier.name || index} delay={index * 0.1} className="h-full">
                <div className={`h-full flex flex-col p-8 lg:p-10 bg-white ${isProfessional ? 'border-2 border-near-black' : 'border border-near-black/10'}`}>
                  <h3 className="text-[20px] font-sans font-semibold mb-2 text-near-black uppercase tracking-wider">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-[14px] text-stone uppercase tracking-wide">From</span>
                    <span className="block text-[32px] md:text-[40px] font-display text-near-black mt-1">{tier.price}</span>
                  </div>
                  <p className="text-stone text-[15px] mb-8 pb-8 border-b border-near-black/10 min-h-[80px]">
                    {tier.tagline || tier.description}
                  </p>
                  <ul className="flex flex-col gap-4 mb-10 flex-grow">
                    {tier.includes?.slice(0, 3).map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-start gap-3 text-[14px] text-near-black">
                        <span className="mt-1 text-[10px] text-near-black/40">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/pricing"
                    className="inline-block mt-auto text-[13px] font-semibold tracking-widest uppercase border-b border-near-black pb-1 hover:text-stone hover:border-stone transition-colors self-start"
                  >
                    LEARN MORE →
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4}>
          <div className="flex flex-col items-center text-center gap-6">
            <p className="text-[18px] md:text-[20px] font-display text-near-black">
              Full pricing details, specialist projects, and everything included.{' '}
              <Link href="/pricing" className="border-b border-near-black/30 hover:border-near-black transition-colors">
                View all pricing.
              </Link>
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] text-stone uppercase tracking-widest font-semibold mt-4">
              <span>100% Client Ownership</span>
              <span className="text-near-black/20">·</span>
              <span>No lock-in</span>
              <span className="text-near-black/20">·</span>
              <span>Fixed pricing</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
