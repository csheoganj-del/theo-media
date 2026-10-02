import Link from 'next/link';
import { services } from '@/data/services';
import FadeIn from '@/components/ui/FadeIn';

export default function ServicesScene() {
  return (
    <section className="bg-warm-ivory text-primary-ink py-28 md:py-36 lg:py-44 px-5 md:px-8 lg:px-12 border-b border-border-rule">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-border-rule mb-16 md:mb-24">
          <FadeIn>
            <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze font-medium block mb-3">
              06 / CAPABILITIES
            </span>
            <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[1.02] text-primary-ink uppercase font-normal">
              STRATEGY. DESIGN. ENGINEERING.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-secondary-text text-[15px] md:text-[17px] max-w-md leading-relaxed">
              We do not separate visual art direction from technical execution. Every platform is built by the people who design it.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <FadeIn key={service.title || index} delay={index * 0.06}>
              <div className="py-10 md:py-14 border-b border-border-rule group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-16 items-start">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="text-[12px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze pt-1 block font-medium">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4 lg:col-span-4">
                    <h3 className="font-display text-[26px] md:text-[32px] lg:text-[36px] leading-tight text-primary-ink">
                      <Link
                        href={service.href || '/services'}
                        className="hover:text-oxidised-bronze transition-colors duration-200 inline-flex items-center gap-2"
                      >
                        <span>{service.title}</span>
                      </Link>
                    </h3>
                  </div>

                  {/* Description & Action */}
                  <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-between gap-6">
                    <p className="font-sans text-secondary-text text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
                      {service.description}
                    </p>

                    <div>
                      <Link
                        href={service.href || '/services'}
                        className="editorial-underline text-[11px] font-mono tracking-[0.14em] uppercase text-primary-ink hover:text-oxidised-bronze"
                      >
                        <span>Explore {service.title} Architecture</span>
                        <span className="text-oxidised-bronze">→</span>
                      </Link>
                    </div>
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
