import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Services & Capabilities | TheoMedia',
  description: 'Websites, ecommerce, booking experiences, web applications, business systems and integrations.',
};

export default function ServicesPage() {
  return (
    <main className="bg-bone min-h-screen pt-24">
      {/* Hero */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24 border-b border-stone/20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn>
            <SectionLabel className="text-stone mb-6">Capabilities</SectionLabel>
            <h1 className="text-editorial-xl text-near-black mb-8">
              WHAT WE BUILD
            </h1>
            <p className="text-lg md:text-xl text-charcoal font-sans max-w-2xl leading-relaxed">
              Websites, ecommerce, booking experiences, web applications, business systems and integrations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-ivory py-8">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex flex-col">
            {services.map((service, index) => (
              <FadeIn key={service.slug || index}>
                <div className="py-16 md:py-24 border-b border-stone/20 last:border-0 group">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    <div className="lg:w-1/3 flex gap-6">
                      <span className="font-sans font-bold text-stone text-xl tabular-nums">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <h2 className="font-display text-[28px] md:text-[36px] text-near-black leading-tight group-hover:text-warm-accent transition-colors">
                        <Link href={service.href || `/services/${service.slug}`}>
                          {service.title}
                        </Link>
                      </h2>
                    </div>
                    
                    <div className="lg:w-2/3">
                      <p className="font-sans text-charcoal/80 text-lg mb-6 leading-relaxed max-w-2xl">
                        {service.description}
                      </p>
                      <Link 
                        href={service.href || `/services/${service.slug}`}
                        className="inline-flex items-center text-[12px] font-sans font-semibold tracking-[0.15em] uppercase text-near-black border-b border-near-black/30 pb-1 mb-8 hover:border-near-black transition-colors"
                      >
                        Explore {service.title} Architecture →
                      </Link>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {service.features?.map((feature: string) => (
                          <div key={feature} className="flex items-center gap-3">
                            <div className="w-1 h-1 rounded-full bg-warm-accent" />
                            <span className="font-sans text-sm text-stone">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 md:py-32 bg-charcoal-section text-bone">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn>
            <SectionLabel className="text-stone mb-12">Sectors</SectionLabel>
            <h2 className="text-editorial-lg mb-16">Industries we serve</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry) => (
                <div key={industry.name} className="border-t border-stone/20 pt-6">
                  <h3 className="font-sans font-medium text-bone mb-3">{industry.name}</h3>
                  <p className="font-sans text-sm text-stone/80 leading-relaxed">
                    {industry.priorities.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-bone border-t border-stone/20 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <FadeIn>
            <h2 className="text-editorial-lg text-near-black mb-8">Ready to start?</h2>
            <p className="font-sans text-charcoal/80 mb-10 text-lg">
              Let&apos;s discuss your project requirements and see if we&apos;re a good fit.
            </p>
            <Button href="/contact" variant="primary" size="large">
              Start a project
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
