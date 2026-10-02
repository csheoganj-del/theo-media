import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import { SITE } from '@/lib/constants';

export default function FinalCTA() {
  return (
    <section className="cinematic-dark bg-[#11110F] text-[#F2EEE6] py-32 md:py-44 lg:py-52 border-t border-[#262420] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col items-center text-center">
        <FadeIn>
          <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-[#A98864] font-medium block mb-6">
            12 / INVITATION
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-[clamp(2.8rem,6vw,6rem)] leading-[0.98] text-[#F2EEE6] uppercase font-normal mb-8 max-w-4xl mx-auto">
            START A SERIOUS CONVERSATION.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-sans text-[#AAA49A] text-[17px] md:text-[20px] max-w-xl mx-auto leading-relaxed mb-12">
            Digital work built around real commercial problems. We take on a strictly limited number of studio commissions and custom engineering builds each quarter.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F2EEE6] text-[#11110F] text-[12px] font-mono tracking-[0.14em] uppercase hover:bg-white transition-colors duration-200 rounded-[1px]"
            >
              Start a Project →
            </Link>

            <a
              href={`${SITE.whatsappUrl}?text=${encodeURIComponent(SITE.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-underline text-[12px] font-mono tracking-[0.14em] uppercase text-[#AAA49A] hover:text-[#F2EEE6]"
            >
              <span>Message on WhatsApp</span>
              <span className="text-[#A98864]">↗</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="pt-8 border-t border-[#262420] flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] font-mono tracking-[0.14em] uppercase text-[#AAA49A]/70">
            <a href={`mailto:${SITE.email}`} className="hover:text-[#F2EEE6] transition-colors">
              {SITE.email}
            </a>
            <span>·</span>
            <span>+353 85 225 8004</span>
            <span>·</span>
            <span>UK · IRELAND · INTERNATIONAL</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
