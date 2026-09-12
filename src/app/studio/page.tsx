import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Studio & Approach | TheoMedia',
  description: 'TheoMedia combines creative direction and engineering under one roof. Small enough to care about the details.',
};

const PRINCIPLES = [
  {
    title: 'FOUNDER-LED',
    description: 'The people discussing your website are the people designing and building it.'
  },
  {
    title: 'DIRECT COMMUNICATION',
    description: 'No account managers, no layers. You talk to the team doing the work.'
  },
  {
    title: 'CUSTOM DESIGN',
    description: 'Every project is designed from scratch. No templates, no themes.'
  },
  {
    title: 'TECHNICAL DEPTH',
    description: 'We build tools people use daily, not just marketing pages.'
  },
  {
    title: 'FULL OWNERSHIP',
    description: 'Your code, your domain, your assets. Zero lock-in.'
  },
  {
    title: 'UK & IRELAND FOCUS',
    description: 'We work with ambitious businesses across the United Kingdom and Ireland.'
  }
];

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery & Brief', desc: 'Understanding your business, audience, and technical requirements.' },
  { num: '02', title: 'Architecture', desc: 'Mapping user journeys, site structure, and data flows.' },
  { num: '03', title: 'Creative Direction', desc: 'Establishing visual language, typography, and interface design.' },
  { num: '04', title: 'Engineering', desc: 'Building the platform with clean, performant, production-ready code.' },
  { num: '05', title: 'Testing & QA', desc: 'Rigorous testing across devices, browsers, and load conditions.' },
  { num: '06', title: 'Launch & Handoff', desc: 'Deployment, team training, and source code transfer.' },
];

export default function StudioPage() {
  return (
    <div className="bg-bone min-h-screen pt-24">
      <section className="dark-section pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn>
            <SectionLabel className="text-stone mb-6">Approach</SectionLabel>
            <h1 className="text-editorial-xl text-bone mb-10 max-w-4xl leading-[1.1]">
              SMALL ENOUGH TO CARE ABOUT THE DETAILS.
            </h1>
            <p className="text-lg md:text-xl text-stone font-sans max-w-2xl leading-relaxed">
              TheoMedia combines creative direction and engineering under one roof, so the idea does not disappear somewhere between design and development.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder & Engineering Standards */}
      <section className="py-24 md:py-32 bg-bone border-b border-stone/15">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel className="text-stone mb-6">Engineering Craft</SectionLabel>
                <h2 className="font-display text-[36px] md:text-[44px] leading-tight text-near-black mb-6">
                  ENGINEER-LED. ZERO LAYERS. COMPLETE ACCOUNTABILITY.
                </h2>
                <p className="font-sans text-[16px] text-charcoal/80 leading-relaxed mb-6">
                  TheoMedia is the dedicated UK &amp; Ireland boutique web design and digital engineering studio within our engineering group (founded alongside CodeArc). We deliver high-touch creative direction and bespoke code directly to ambitious businesses without corporate agency overhead.
                </p>
                <p className="font-sans text-[15px] text-stone leading-relaxed">
                  When you partner with TheoMedia, you do not speak with account handlers, juniors, or outsourced intermediaries. You collaborate directly with senior designers and engineers who shape your architecture and write every single line of production code.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="p-6 bg-ivory border border-stone/20 h-full">
                  <span className="font-mono text-[12px] text-warm-accent uppercase tracking-widest block mb-3">01 · Direct Access</span>
                  <h3 className="font-display text-[20px] text-near-black mb-2">Founder-Level Execution</h3>
                  <p className="font-sans text-[14px] text-charcoal/75 leading-relaxed">
                    Direct access to the studio founder and principal engineer throughout discovery, design, development, and post-launch tuning.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="p-6 bg-ivory border border-stone/20 h-full">
                  <span className="font-mono text-[12px] text-warm-accent uppercase tracking-widest block mb-3">02 · Full Equity</span>
                  <h3 className="font-display text-[20px] text-near-black mb-2">100% Client Ownership</h3>
                  <p className="font-sans text-[14px] text-charcoal/75 leading-relaxed">
                    Full intellectual property, complete GitHub repository source code, and total infrastructure control transferred to you upon launch.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="p-6 bg-ivory border border-stone/20 h-full">
                  <span className="font-mono text-[12px] text-warm-accent uppercase tracking-widest block mb-3">03 · Modern Edge</span>
                  <h3 className="font-display text-[20px] text-near-black mb-2">Next.js &amp; Edge Delivery</h3>
                  <p className="font-sans text-[14px] text-charcoal/75 leading-relaxed">
                    Zero bloated CMS plugins. We build with static generation and global edge CDN caching for sub-second page loads worldwide.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="p-6 bg-ivory border border-stone/20 h-full">
                  <span className="font-mono text-[12px] text-warm-accent uppercase tracking-widest block mb-3">04 · UK &amp; IE Focus</span>
                  <h3 className="font-display text-[20px] text-near-black mb-2">Local Market Alignment</h3>
                  <p className="font-sans text-[14px] text-charcoal/75 leading-relaxed">
                    Dual currency pricing (£ / €), UK &amp; Irish business compliance, local SEO schema, and phone support tailored to your timezone.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn>
            <SectionLabel className="text-stone mb-16">Principles</SectionLabel>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {PRINCIPLES.map((principle, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="border-t border-stone/20 pt-6">
                  <h3 className="font-sans font-bold text-near-black tracking-widest uppercase text-sm mb-4">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-charcoal/80 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-bone border-t border-stone/10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn>
            <SectionLabel className="text-stone mb-12">Process</SectionLabel>
            <h2 className="text-editorial-lg text-near-black mb-16">How we work</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PROCESS_STEPS.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-ivory p-8 border border-stone/20 rounded-sm h-full flex flex-col hover:border-warm-accent transition-colors">
                  <span className="font-display text-4xl text-stone/40 mb-6">{step.num}</span>
                  <h3 className="font-sans font-bold text-near-black text-lg mb-3">{step.title}</h3>
                  <p className="font-sans text-charcoal/80">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-charcoal-section text-bone text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <FadeIn>
            <h2 className="text-editorial-lg mb-8">Ready to talk?</h2>
            <p className="font-sans text-stone mb-10 text-lg">
              Bring us your brief, your sketches, or your outdated website.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-bone text-near-black font-sans font-bold tracking-widest uppercase text-sm hover:bg-warm-accent hover:text-bone transition-colors rounded-sm"
            >
              Start a project
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
