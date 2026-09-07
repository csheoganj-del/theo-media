import { Metadata } from 'next';
import { pricingTiers, specialistProjects, sharedInclusions } from '@/data/pricing';
import { faqItems } from '@/data/faq';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Pricing | TheoMedia',
  description: 'Clear packages. Clear deliverables. No guessing what your website will cost.',
};

export default function PricingPage() {
  return (
    <main className="bg-bone min-h-screen pt-24">
      {/* Hero */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <FadeIn>
            <h1 className="text-editorial-xl text-near-black mb-6">
              KNOW THE PRICE.
            </h1>
            <p className="text-2xl md:text-3xl font-display text-charcoal mb-8">
              Then decide if we&apos;re worth it.
            </p>
            <p className="text-lg text-stone font-sans max-w-2xl mx-auto">
              Clear packages. Clear deliverables. No guessing what your website will cost.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => {
              const isFeatured = tier.name === 'Professional';
              
              return (
                <FadeIn key={tier.id} delay={idx * 0.1} className="flex h-full">
                  <div className={`flex flex-col w-full bg-ivory rounded-sm p-8 md:p-10 border-2 ${isFeatured ? 'border-warm-accent shadow-xl relative' : 'border-stone/20'}`}>
                    {isFeatured && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-warm-accent text-bone px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                        Featured
                      </div>
                    )}
                    
                    <h3 className="font-display text-3xl text-near-black mb-2">{tier.name}</h3>
                    <p className="font-sans text-stone mb-8 min-h-[96px] lg:min-h-[120px] text-[15px] leading-relaxed">{tier.description}</p>
                    
                    <div className="mb-8 pb-8 border-b border-stone/20">
                      <div className="flex items-end gap-2 mb-2">
                        <span className="font-sans font-bold text-4xl text-near-black">{tier.price}</span>
                      </div>
                      <p className="font-sans text-sm text-stone">{""}</p>
                    </div>
                    
                    <div className="flex-grow mb-10">
                      <ul className="space-y-4">
                        {tier.includes.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-warm-accent mt-0.5">✓</span>
                            <span className="font-sans text-charcoal text-sm">{item}</span>
                          </li>
                        ))}
                        {tier.expandedIncludes?.map((item: string, i: number) => (
                          <li key={`exp-${i}`} className="flex items-start gap-3 opacity-80">
                            <span className="text-warm-accent mt-0.5">✓</span>
                            <span className="font-sans text-charcoal text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto pt-6 flex flex-col gap-4">
                      <Button 
                        href={`/contact?package=${tier.id}`} 
                        variant={isFeatured ? 'primary' : 'secondary'}
                        className="w-full justify-center"
                      >
                        Enquire Now
                      </Button>
                      <a 
                        href={`https://wa.me/${SITE.whatsappUrl.replace(/[^0-9]/g, '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-center font-sans text-sm text-stone hover:text-near-black transition-colors"
                      >
                        Or message on WhatsApp
                      </a>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialist & Shared Inclusions */}
      <section className="py-24 bg-charcoal-section text-bone">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <SectionLabel className="text-stone mb-8">Bespoke</SectionLabel>
              <h3 className="font-display text-3xl mb-8">Specialist Projects</h3>
              <ul className="space-y-6">
                {specialistProjects.map((project, i) => (
                  <li key={i} className="border-t border-stone/20 pt-6">
                    <h4 className="font-sans font-bold text-bone mb-2">{project.name}</h4>
                    <p className="font-sans text-sm text-stone">{project.description}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-stone/20">
                <p className="font-sans text-bone">From £10,000+ / Custom Quoted</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <SectionLabel className="text-stone mb-8">Standard</SectionLabel>
              <h3 className="font-display text-3xl mb-8">Every Project Includes</h3>
              <ul className="space-y-4">
                {sharedInclusions.map((inclusion, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-warm-accent mt-2 flex-shrink-0" />
                    <span className="font-sans text-stone">{inclusion}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <FadeIn>
            <SectionLabel className="text-stone mb-8 text-center">FAQ</SectionLabel>
            <h2 className="text-editorial-lg text-near-black mb-12 text-center">Common Questions</h2>
            
            <div className="space-y-4">
              <Accordion items={faqItems} />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
