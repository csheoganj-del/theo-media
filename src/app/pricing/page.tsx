import { Metadata } from 'next';
import {
  pricingTiers,
  specialistProjects,
  sharedInclusions,
  carePlans,
  carePlanScope,
  carePlanTerms,
} from '@/data/pricing';
import { faqItems } from '@/data/faq';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, faqJsonLd, offerCatalogJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Investment & Scoping | Independent Digital Studio | TheoMedia',
  description:
    'Scope-first investment for bespoke digital flagships, commercial platforms, and custom software systems across the UK, Ireland, and internationally. 100% client-owned.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/pricing',
  },
  openGraph: {
    title: 'Investment & Scoping | TheoMedia',
    description:
      'Scope-first investment for bespoke digital flagships, commercial platforms, and custom software. 100% client-owned with zero monthly lock-in.',
    url: 'https://www.theomedia.co.uk/pricing',
    type: 'website',
  },
};

export default function PricingPage() {
  return (
    <div className="bg-bone min-h-screen pt-24">
      <JsonLd
        data={[
          offerCatalogJsonLd(),
          faqJsonLd(faqItems),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Investment', path: '/pricing' },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <FadeIn>
            <div className="text-[11px] font-mono tracking-widest uppercase text-bronze mb-4">
              STUDIO ENGAGEMENT &amp; SCOPING
            </div>
            <h1 className="text-editorial-xl text-near-black mb-6">
              SCOPE FIRST.
            </h1>
            <p className="text-2xl md:text-3xl font-display text-charcoal mb-8">
              Then the right level of build.
            </p>
            <p className="text-lg text-stone font-sans max-w-2xl mx-auto mb-6">
              Built around your commercial problem, not an arbitrary template or page count. Engagements typically begin from £2,500 (€3,000 / $3,500).
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] font-sans">
              <Link
                href="/journal/how-much-does-a-website-cost-uk"
                className="text-stone hover:text-near-black border-b border-stone/40 pb-0.5 transition-colors"
              >
                Read our UK Website Investment Guide →
              </Link>
              <span className="text-stone/30">·</span>
              <span className="text-stone">
                Multi-currency billing: GBP (£) · EUR (€) · USD ($)
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => {
              const isFeatured = tier.id === 'commercial';
              
              return (
                <FadeIn key={tier.id} delay={idx * 0.1} className="flex h-full">
                  <div className={`flex flex-col w-full bg-ivory p-8 md:p-10 border ${isFeatured ? 'border-2 border-near-black relative shadow-lg' : 'border-near-black/10'}`}>
                    {isFeatured && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-near-black text-bone px-4 py-1 text-[10px] font-sans font-semibold tracking-widest uppercase">
                        Most Requested
                      </div>
                    )}
                    
                    <div className="text-[11px] font-mono tracking-widest uppercase text-bronze mb-2">
                      {tier.number} · {tier.name}
                    </div>
                    <h3 className="font-display text-3xl text-near-black mb-2">{tier.name}</h3>
                    <p className="font-sans text-stone mb-8 min-h-[96px] lg:min-h-[120px] text-[15px] leading-relaxed">{tier.description}</p>
                    
                    <div className="mb-8 pb-8 border-b border-near-black/10">
                      <div className="flex items-end gap-2 mb-2">
                        <span className="font-display text-4xl text-near-black">{tier.price}</span>
                      </div>
                      <p className="font-sans text-xs text-stone">{tier.tagline}</p>
                    </div>
                    
                    <div className="flex-grow mb-10">
                      <ul className="space-y-4">
                        {tier.includes.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-bronze text-[11px] mt-1">✦</span>
                            <span className="font-sans text-charcoal text-sm">{item}</span>
                          </li>
                        ))}
                        {tier.expandedIncludes?.map((item: string, i: number) => (
                          <li key={`exp-${i}`} className="flex items-start gap-3 opacity-80">
                            <span className="text-bronze text-[11px] mt-1">✦</span>
                            <span className="font-sans text-charcoal text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-near-black/10 flex flex-col gap-4">
                      <Button 
                        href={`/contact?engagement=${tier.id}`} 
                        variant={isFeatured ? 'primary' : 'secondary'}
                        className="w-full justify-center text-[12px] font-sans font-semibold tracking-widest uppercase"
                      >
                        {tier.ctaText} →
                      </Button>
                      <a 
                        href={`https://wa.me/${SITE.whatsappUrl.replace(/[^0-9]/g, '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-center font-sans text-sm text-stone hover:text-near-black transition-colors"
                      >
                        Direct WhatsApp consultation ↗
                      </a>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Restrained supporting note after main package group */}
          <FadeIn delay={0.3} className="text-center mt-12">
            <p className="font-sans text-xs md:text-sm text-stone max-w-xl mx-auto">
              After your included launch support, optional Care Plans are available from £45/month. No lock-in.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Specialist & Shared Inclusions */}
      <section className="py-24 bg-near-black text-bone">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <SectionLabel className="text-stone mb-8">Bespoke Architecture</SectionLabel>
              <h3 className="font-display text-3xl mb-8">Specialist Projects</h3>
              <ul className="space-y-6">
                {specialistProjects.map((project, i) => (
                  <li key={i} className="border-t border-bone/10 pt-6">
                    <h4 className="font-sans font-bold text-bone mb-2">{project.name}</h4>
                    <p className="font-sans text-sm text-bone/70">{project.description}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-bone/10">
                <p className="font-sans text-bone font-medium">Bespoke architectures scoped from £4,500 – £15,000+</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <SectionLabel className="text-stone mb-8">Engineering Standard</SectionLabel>
              <h3 className="font-display text-3xl mb-8">Every Project Includes</h3>
              <ul className="space-y-4">
                {sharedInclusions.map((inclusion, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-warm-accent text-[11px] mt-1">✦</span>
                    <span className="font-sans text-bone/80 text-[14px]">{inclusion}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Care Plans Section ── */}
      <section
        id="care-plans"
        className="py-24 md:py-32 bg-bone border-b border-near-black/10 scroll-mt-24"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          {/* Section Introduction */}
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel className="text-stone mb-4">AFTER LAUNCH</SectionLabel>
            <h2 className="text-editorial-lg text-near-black mb-4">WE STAY.</h2>
            <p className="font-display text-xl md:text-2xl text-charcoal mb-6">
              Optional. Month-to-month. Cancel anytime. You still own everything.
            </p>
            <div className="space-y-3 font-sans text-stone text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-center">
              <p>
                Your website is yours. There is no compulsory monthly TheoMedia fee.
              </p>
              <p>
                But websites still need occasional attention after they go live — software changes, security fixes appear, content needs updating and sometimes something simply stops behaving as expected.
              </p>
              <p className="text-near-black font-medium">
                A Care Plan means we continue looking after those things for you.
              </p>
            </div>
          </FadeIn>

          {/* Plain-English Explainer Element */}
          <FadeIn delay={0.05}>
            <div className="bg-ivory border border-near-black/10 p-6 md:p-8 rounded-sm mb-16 max-w-3xl mx-auto">
              <h3 className="text-[11px] font-mono tracking-widest uppercase text-stone mb-4">
                WHAT DOES WEBSITE CARE ACTUALLY MEAN?
              </h3>
              <div className="space-y-3 font-sans text-sm md:text-[15px] text-charcoal/85 leading-relaxed">
                <p>
                  Modern websites are built with software, just like the apps on your phone or computer. That software occasionally receives security fixes, compatibility updates and improvements.
                </p>
                <p>
                  Without a Care Plan, your website remains yours and can continue running after your included launch support ends — TheoMedia simply stops actively monitoring and maintaining it.
                </p>
                <p>
                  With Care, we continue looking after that technical layer for you.
                </p>
                <p className="text-near-black font-medium">
                  You don&apos;t need to know what framework, package or software version your website uses. That&apos;s our job.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-near-black/10 flex items-start gap-2.5">
                <span className="text-warm-accent text-xs mt-0.5 select-none">✦</span>
                <p className="font-sans text-xs md:text-sm text-stone italic leading-relaxed">
                  Think of it like servicing, not renting. You already own the website. Care simply means TheoMedia continues looking after it.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Two Equal-Weight Care Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {carePlans.map((plan, idx) => (
              <FadeIn key={plan.id} delay={0.1 + idx * 0.05} className="flex h-full">
                <div className="flex flex-col w-full bg-ivory p-8 md:p-10 border border-near-black/10">
                  <div className="mb-6">
                    <h3 className="font-display text-3xl text-near-black mb-2">{plan.name}</h3>
                    <p className="font-sans text-stone text-sm leading-relaxed min-h-[44px]">
                      {plan.intro}
                    </p>
                  </div>

                  <div className="mb-8 pb-8 border-b border-near-black/10">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl text-near-black">{plan.price}</span>
                      <span className="font-sans text-sm text-stone">{plan.billingPeriod}</span>
                    </div>
                  </div>

                  <div className="flex-grow mb-10">
                    <ul className="space-y-5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-near-black/50 text-[11px] mt-1 shrink-0">✦</span>
                          <div>
                            <span className="font-sans text-sm font-semibold text-charcoal block">
                              {feature.title}
                            </span>
                            {feature.explanation && (
                              <span className="font-sans text-xs text-stone leading-relaxed block mt-0.5">
                                {feature.explanation}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-near-black/10">
                    <Button
                      href={plan.href}
                      variant="secondary"
                      className="w-full justify-center text-[12px] font-sans font-semibold tracking-widest uppercase"
                    >
                      {plan.ctaText} →
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Included vs New Work (Scope Explanation) */}
          <FadeIn delay={0.2}>
            <div className="mt-16 pt-16 border-t border-near-black/10 max-w-4xl mx-auto">
              <div className="mb-10 text-center md:text-left">
                <span className="text-[11px] font-mono tracking-widest uppercase text-stone block mb-2">
                  SCOPE BOUNDARIES
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-near-black uppercase mb-3">
                  {carePlanScope.heading}
                </h3>
                <p className="font-sans text-sm md:text-base text-stone">
                  {carePlanScope.intro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-ivory border border-near-black/10 p-6 md:p-10 rounded-sm mb-6">
                <div>
                  <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-near-black mb-5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    NORMALLY COVERED
                  </h4>
                  <ul className="space-y-3">
                    {carePlanScope.normallyCovered.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-sans text-xs md:text-sm text-charcoal">
                        <span className="text-near-black/40 text-[10px] mt-1 shrink-0">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-stone mb-5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone" />
                    QUOTED SEPARATELY
                  </h4>
                  <ul className="space-y-3">
                    {carePlanScope.quotedSeparately.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-sans text-xs md:text-sm text-stone">
                        <span className="text-stone/40 text-[10px] mt-1 shrink-0">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="font-sans text-xs md:text-sm text-stone text-center md:text-left leading-relaxed">
                {carePlanScope.footerNote}
              </p>
            </div>
          </FadeIn>

          {/* Plan Terms / Small Print */}
          <FadeIn delay={0.25}>
            <div className="mt-14 pt-10 border-t border-near-black/10 max-w-4xl mx-auto">
              <span className="text-[11px] font-mono tracking-widest uppercase text-stone block mb-4">
                PLAN TERMS &amp; CONDITIONS
              </span>
              <ul className="space-y-2 text-[13px] font-sans text-stone leading-relaxed">
                {carePlanTerms.map((term, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="select-none text-stone/50">•</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
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
    </div>
  );
}
