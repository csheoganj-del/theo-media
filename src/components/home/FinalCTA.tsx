import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import RevealText from '@/components/ui/RevealText';
import { SITE } from '@/lib/constants';

export default function FinalCTA() {
  return (
    <section className="dark-section bg-near-black text-bone py-32 md:py-40 lg:py-48">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col items-center text-center">
        <FadeIn>
          <span className="block text-[13px] tracking-[0.2em] uppercase text-bone/40 mb-8 max-w-xl mx-auto">
            YOUR NEXT CUSTOMER WILL SEE YOUR WEBSITE BEFORE THEY MEET YOU.
          </span>
        </FadeIn>
        
        <h2 className="text-editorial-xl text-bone mb-20 max-w-4xl mx-auto">
          <RevealText>
            MAKE THE <span className="font-display italic">FIRST IMPRESSION</span> COUNT.
          </RevealText>
        </h2>

        <FadeIn delay={0.4}>
          <div className="flex flex-col items-center gap-8">
            <Link 
              href="/contact"
              className="text-[24px] md:text-[32px] lg:text-[40px] font-display uppercase tracking-wider text-bone hover:text-bone/70 transition-colors border-b-2 border-bone/30 hover:border-bone/70 pb-2"
            >
              START A PROJECT ↗
            </Link>
            
            <p className="text-[14px] text-bone/60">
              Prefer WhatsApp?{' '}
              <a 
                href={SITE.whatsappUrl || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-bone border-b border-bone/30 hover:border-bone transition-colors"
              >
                Message us
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
