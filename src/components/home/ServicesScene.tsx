import Link from 'next/link';
import { services } from '@/data/services';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';

export default function ServicesScene() {
  return (
    <section className="bg-bone text-near-black py-24 md:py-32 lg:py-40 px-5 md:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="mb-16 md:mb-24">
          <SectionLabel>WHAT WE DO</SectionLabel>
          <h2 className="text-editorial-lg mt-6 max-w-2xl font-display">DESIGN IS ONLY HALF THE JOB.</h2>
        </FadeIn>

        <div className="flex flex-col border-t border-near-black/10">
          {services.map((service, index) => (
            <FadeIn key={service.title || index} delay={index * 0.08} className="py-10 md:py-14 border-b border-near-black/10 group">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 lg:gap-24">
                <span className="text-xs md:text-sm tracking-widest font-sans uppercase text-stone md:w-12 pt-2 md:pt-3">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                
                <div className="flex-grow flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 justify-between items-start">
                  <h3 className="font-display text-[24px] md:text-[28px] lg:text-[32px] md:w-1/3">
                    <Link
                      href={service.href || '/services'}
                      className="hover:text-stone transition-colors inline-flex items-center gap-2"
                    >
                      <span>{service.title}</span>
                      <span className="text-[16px] text-stone/40 group-hover:text-near-black group-hover:translate-x-1 transition-all">→</span>
                    </Link>
                  </h3>
                  
                  <div className="md:w-2/3 max-w-2xl">
                    <p className="font-sans text-stone text-[16px] md:text-[18px] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.href || '/services'}
                      className="text-[12px] font-sans font-semibold tracking-widest uppercase text-near-black border-b border-near-black/30 pb-0.5 hover:border-near-black transition-colors"
                    >
                      Explore {service.title} Architecture →
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
