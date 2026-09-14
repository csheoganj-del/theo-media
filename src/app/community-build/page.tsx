import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import ApplicationForm from '@/components/community-build/ApplicationForm';
import PageViewTracker from '@/components/community-build/PageViewTracker';
import {
  communityBuildAvailability,
  communityBuildInclusions,
  communityBuildExclusions,
  communityBuildSteps,
  communityBuildFaqs,
  communityBuildProofProjects,
} from '@/data/communityBuild';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Affordable Website Design UK for Small Businesses | £495 | TheoMedia',
  description:
    'Apply for TheoMedia’s £495 Community Build Programme. Up to three independent UK businesses are selected each month for focused, professional website design and development.',
  alternates: {
    canonical: 'https://theomedia.co.uk/community-build',
  },
  openGraph: {
    title: 'TheoMedia Community Build Programme — £495 Website Projects',
    description:
      'Three independent businesses each month. A focused £495 website programme from TheoMedia for Autumn 2026.',
    url: 'https://theomedia.co.uk/community-build',
    type: 'website',
    siteName: 'TheoMedia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TheoMedia Community Build Programme £495',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheoMedia Community Build Programme — £495 Website Projects',
    description:
      'Three independent businesses each month. A focused £495 website programme from TheoMedia for Autumn 2026.',
    images: ['/og-image.jpg'],
  },
};

export default function CommunityBuildPage() {
  const { availability } = communityBuildAvailability;

  // Schema.org structured data
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Affordable website design for independent UK businesses — £495',
    description:
      'Apply for TheoMedia’s £495 Community Build Programme. Up to three independent UK businesses are selected each month for focused, professional website design and development.',
    url: 'https://theomedia.co.uk/community-build',
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'TheoMedia Community Build Programme',
    description:
      'Focused, professional website design and development programme for up to three independent UK businesses per month at a fixed rate of £495.',
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: 'Web Design',
    offers: {
      '@type': 'Offer',
      price: '495',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/LimitedAvailability',
      validFrom: '2026-09-01',
      validThrough: '2026-11-30',
      description:
        'Fixed £495 programme rate (£200 reservation payment upon acceptance, £295 remaining balance before launch).',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: communityBuildFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="bg-bone min-h-screen text-near-black">
      <PageViewTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO SECTION ── */}
      <header className="pt-36 md:pt-48 pb-20 md:pb-28 px-5 md:px-8 lg:px-12 border-b border-near-black/10">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn className="max-w-4xl">
            <SectionLabel>THEOMEDIA COMMUNITY BUILD PROGRAMME</SectionLabel>
            <h1 className="font-display text-[40px] sm:text-[54px] md:text-[72px] lg:text-[84px] leading-[1.04] text-near-black uppercase mt-6 mb-8">
              Affordable website design for independent UK businesses — £495
            </h1>
            <div className="space-y-4 max-w-2xl font-sans text-[17px] md:text-[20px] text-charcoal/80 leading-relaxed mb-10">
              <p>
                A focused website programme for independent businesses that need a stronger
                digital presence without beginning with a large agency engagement.
              </p>
              <p className="text-stone">
                For September, October and November 2026, TheoMedia will select up to three
                suitable businesses each month for a complete website project at a fixed £495
                programme rate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-8 py-4 bg-near-black text-bone hover:bg-charcoal text-[13px] font-sans font-semibold tracking-[0.16em] uppercase transition-colors rounded-sm shadow-sm"
              >
                Apply for a £495 Community Build
              </a>
              <a
                href="#whats-included"
                className="inline-flex items-center justify-center px-8 py-4 border border-near-black/20 text-charcoal hover:border-near-black text-[13px] font-sans font-semibold tracking-[0.16em] uppercase transition-colors rounded-sm"
              >
                See what’s included
              </a>
            </div>

            <p className="text-[13px] font-sans text-stone">
              £200 reserves an accepted place. The reservation payment forms part of the £495 total.
            </p>
          </FadeIn>
        </div>
      </header>

      {/* ── SECTION 1: WHY WE CREATED IT ── */}
      <section
        className="py-20 md:py-28 px-5 md:px-8 lg:px-12 border-b border-near-black/10"
        aria-labelledby="why-we-created-it"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel>OUR APPROACH</SectionLabel>
                <h2
                  id="why-we-created-it"
                  className="font-display text-[32px] sm:text-[44px] md:text-[52px] leading-[1.1] text-near-black uppercase mt-4"
                >
                  Why does TheoMedia offer a £495 website programme?
                </h2>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <div className="space-y-6 font-sans text-[16px] md:text-[18px] text-charcoal/85 leading-relaxed">
                  <p>
                    TheoMedia has grown primarily through relationships, referrals and direct
                    conversations with businesses.
                  </p>
                  <p>
                    For this pilot, instead of putting all of our acquisition budget into
                    advertising, we are using part of it to open a small number of lower-cost website
                    projects for independent businesses whose work we believe could benefit from a
                    stronger digital presence.
                  </p>
                  <p>
                    Keeping the programme to a maximum of three accepted projects per month allows us
                    to keep the work focused while giving selected businesses access to proper
                    design and development at a fixed programme rate.
                  </p>
                  <div className="p-6 bg-ivory border-l-2 border-near-black my-6">
                    <p className="font-medium text-near-black">
                      This is not an unlimited low-cost website service. It is a small three-month
                      pilot with a defined scope and limited monthly capacity.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT £495 INCLUDES ── */}
      <section
        id="whats-included"
        className="py-20 md:py-32 px-5 md:px-8 lg:px-12 border-b border-near-black/10 bg-ivory scroll-mt-20"
        aria-labelledby="whats-included-heading"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-16">
            <FadeIn>
              <SectionLabel>PROGRAMME SCOPE</SectionLabel>
              <h2
                id="whats-included-heading"
                className="font-display text-[32px] sm:text-[44px] md:text-[54px] leading-[1.1] text-near-black uppercase mt-4 mb-6"
              >
                What does a £495 TheoMedia Community Build include?
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] text-stone leading-relaxed">
                Every accepted project is scoped before a place is confirmed. For a typical
                small-business website, the programme can include:
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {communityBuildInclusions.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <div className="p-6 md:p-8 bg-bone border border-near-black/10 rounded-sm h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-stone tracking-widest uppercase block mb-3">
                      ITEM {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-[22px] md:text-[24px] text-near-black uppercase mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[14px] md:text-[15px] text-stone leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center pt-4">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-near-black text-bone hover:bg-charcoal text-[13px] font-sans font-semibold tracking-[0.16em] uppercase transition-colors rounded-sm"
            >
              Apply for the programme
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 3: WHAT IS NOT INCLUDED ── */}
      <section
        className="py-20 md:py-28 px-5 md:px-8 lg:px-12 border-b border-near-black/10"
        aria-labelledby="what-is-not-included"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel>SCOPE BOUNDARIES</SectionLabel>
                <h2
                  id="what-is-not-included"
                  className="font-display text-[32px] sm:text-[44px] md:text-[52px] leading-[1.1] text-near-black uppercase mt-4"
                >
                  When is the Community Build not the right fit?
                </h2>
                <p className="font-sans text-[16px] text-stone mt-6 leading-relaxed">
                  The £495 programme is intended for focused small-business websites. Projects
                  requiring significantly greater complexity are scoped separately.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <div className="bg-ivory border border-near-black/10 p-6 md:p-8 rounded-sm mb-8">
                  <h3 className="text-[12px] font-sans font-semibold uppercase tracking-wider text-stone mb-6">
                    Examples of projects scoped separately:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] md:text-[15px] font-sans text-charcoal">
                    {communityBuildExclusions.map((exclusion) => (
                      <li key={exclusion} className="flex items-start gap-2.5">
                        <span className="text-stone select-none">•</span>
                        <span className="capitalize">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 border border-stone/20 rounded-sm bg-bone flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="font-sans text-[14px] md:text-[15px] text-stone leading-relaxed">
                    If your project falls outside the programme scope, you can still enquire with
                    TheoMedia and we can recommend the appropriate approach.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-[12px] font-sans font-semibold tracking-wider uppercase text-near-black hover:text-warm-accent whitespace-nowrap"
                  >
                    <span>Enquire separately</span>
                    <span>→</span>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HOW THE THREE PLACES WORK ── */}
      <section
        className="py-20 md:py-28 px-5 md:px-8 lg:px-12 border-b border-near-black/10 bg-bone"
        aria-labelledby="how-allocation-works"
      >
        <div className="max-w-[1440px] mx-auto">
          <FadeIn className="max-w-3xl mb-16">
            <SectionLabel>PROCESS &amp; CONFIRMATION</SectionLabel>
            <h2
              id="how-allocation-works"
              className="font-display text-[32px] sm:text-[44px] md:text-[52px] leading-[1.1] text-near-black uppercase mt-4 mb-4"
            >
              How the monthly allocation works
            </h2>
            <p className="font-sans text-[16px] text-stone">
              Every month follows a clear, disciplined six-step journey from application to final
              launch.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {communityBuildSteps.map((stepItem, idx) => (
              <FadeIn key={stepItem.step} delay={idx * 0.05}>
                <div className="p-6 md:p-8 bg-ivory border border-near-black/10 rounded-sm h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[12px] font-mono text-stone tracking-widest uppercase block mb-2">
                      STEP {stepItem.step}
                    </span>
                    <h3 className="font-display text-2xl text-near-black uppercase mb-3">
                      {stepItem.title}
                    </h3>
                    <p className="font-sans text-[14px] md:text-[15px] text-charcoal/80 leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="p-6 md:p-8 bg-charcoal text-bone rounded-sm max-w-4xl mx-auto">
              <h3 className="text-[11px] font-mono tracking-widest text-warm-accent uppercase mb-2">
                Important Programme Condition
              </h3>
              <p className="font-sans text-[14px] md:text-[15px] text-bone/85 leading-relaxed">
                Places are not held by submitting an application. A place is secured only when
                TheoMedia accepts the project and the reservation payment has been received.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 5: AVAILABILITY SECTION ── */}
      <section
        className="py-20 md:py-28 px-5 md:px-8 lg:px-12 border-b border-near-black/10 bg-ivory"
        aria-labelledby="availability-heading"
      >
        <div className="max-w-[1440px] mx-auto">
          <FadeIn className="max-w-3xl mb-14">
            <SectionLabel>TRANSPARENT STATUS</SectionLabel>
            <h2
              id="availability-heading"
              className="font-display text-[32px] sm:text-[44px] md:text-[52px] leading-[1.1] text-near-black uppercase mt-4 mb-4"
            >
              Autumn 2026 programme availability
            </h2>
            <p className="font-sans text-[15px] md:text-[16px] text-stone">
              Updated manually and truthfully. We never manufacture false scarcity or automated slot
              counters.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* September Card */}
            <FadeIn delay={0.05}>
              <div className="p-6 md:p-8 bg-bone border border-near-black/15 rounded-sm relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-stone tracking-widest uppercase">
                    MONTH 01
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs ${
                      availability.september.status === 'open'
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : availability.september.status === 'filled'
                        ? 'bg-stone/15 text-charcoal border border-stone/30'
                        : 'bg-warm-accent/20 text-charcoal border border-warm-accent/30'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        availability.september.status === 'open' ? 'bg-emerald-600' : 'bg-stone'
                      }`}
                    />
                    <span>
                      {availability.september.status === 'open' &&
                        (availability.september.remaining != null
                          ? `${availability.september.remaining} of 3 places remaining`
                          : 'Applications open')}
                      {availability.september.status === 'filled' && 'Allocation filled'}
                      {availability.september.status === 'priority-list' && 'Priority list open'}
                    </span>
                  </span>
                </div>
                <h3 className="font-display text-2xl text-near-black uppercase mb-2">
                  September 2026
                </h3>
                <p className="font-sans text-[13px] text-stone leading-relaxed mb-6">
                  Up to 3 focused client builds scheduled for September delivery.
                </p>
                <a
                  href="#apply"
                  className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-near-black hover:text-warm-accent transition-colors"
                >
                  {availability.september.status === 'filled'
                    ? 'Join priority list →'
                    : 'Apply for September →'}
                </a>
              </div>
            </FadeIn>

            {/* October Card */}
            <FadeIn delay={0.1}>
              <div className="p-6 md:p-8 bg-bone border border-near-black/15 rounded-sm relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-stone tracking-widest uppercase">
                    MONTH 02
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs bg-warm-accent/15 text-charcoal border border-warm-accent/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone" />
                    <span>
                      {availability.october.status === 'open'
                        ? 'Applications open'
                        : availability.october.status === 'filled'
                        ? 'Allocation filled'
                        : 'Priority list open'}
                    </span>
                  </span>
                </div>
                <h3 className="font-display text-2xl text-near-black uppercase mb-2">
                  October 2026
                </h3>
                <p className="font-sans text-[13px] text-stone leading-relaxed mb-6">
                  Priority list applications reviewed ahead of public window opening.
                </p>
                <a
                  href="#apply"
                  className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-near-black hover:text-warm-accent transition-colors"
                >
                  Join priority access →
                </a>
              </div>
            </FadeIn>

            {/* November Card */}
            <FadeIn delay={0.15}>
              <div className="p-6 md:p-8 bg-bone border border-near-black/15 rounded-sm relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-stone tracking-widest uppercase">
                    MONTH 03
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs bg-warm-accent/15 text-charcoal border border-warm-accent/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone" />
                    <span>
                      {availability.november.status === 'open'
                        ? 'Applications open'
                        : availability.november.status === 'filled'
                        ? 'Allocation filled'
                        : 'Priority list open'}
                    </span>
                  </span>
                </div>
                <h3 className="font-display text-2xl text-near-black uppercase mb-2">
                  November 2026
                </h3>
                <p className="font-sans text-[13px] text-stone leading-relaxed mb-6">
                  Final month of the Autumn 2026 Community Build pilot.
                </p>
                <a
                  href="#apply"
                  className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-near-black hover:text-warm-accent transition-colors"
                >
                  Join priority access →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: SELECTED THEOMEDIA WORK (REAL PROOF ONLY) ── */}
      <section
        className="py-20 md:py-28 px-5 md:px-8 lg:px-12 border-b border-near-black/10 bg-bone"
        aria-labelledby="selected-work-heading"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <FadeIn className="max-w-2xl">
              <SectionLabel>STANDARDS &amp; CRAFTSMANSHIP</SectionLabel>
              <h2
                id="selected-work-heading"
                className="font-display text-[32px] sm:text-[44px] md:text-[52px] leading-[1.1] text-near-black uppercase mt-4"
              >
                Selected TheoMedia work
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                href="/work"
                className="text-[12px] font-sans font-medium uppercase tracking-[0.16em] text-stone hover:text-near-black transition-colors inline-flex items-center gap-1.5"
              >
                <span>View studio portfolio</span>
                <span>→</span>
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityBuildProofProjects.map((project, idx) => (
              <FadeIn key={project.title} delay={idx * 0.1}>
                <div className="bg-ivory border border-near-black/10 p-6 md:p-8 rounded-sm h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-stone tracking-widest uppercase block mb-3">
                      {project.industry}
                    </span>
                    <h3 className="font-display text-2xl text-near-black uppercase mb-4">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[14px] md:text-[15px] text-charcoal/80 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-near-black/10">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-near-black hover:text-warm-accent transition-colors inline-flex items-center gap-1"
                    >
                      <span>View Live Website</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ SECTION ── */}
      <section
        className="py-20 md:py-32 px-5 md:px-8 lg:px-12 border-b border-near-black/10 bg-ivory"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-16">
            <FadeIn>
              <SectionLabel>CLARITY &amp; COMMON QUESTIONS</SectionLabel>
              <h2
                id="faq-heading"
                className="font-display text-[32px] sm:text-[44px] md:text-[52px] leading-[1.1] text-near-black uppercase mt-4 mb-4"
              >
                Affordable website design: common questions
              </h2>
              <p className="font-sans text-[15px] md:text-[16px] text-stone">
                Direct, transparent answers regarding programme scope, eligibility, and pilot terms.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {communityBuildFaqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.05}>
                <div className="p-6 md:p-8 bg-bone border border-near-black/10 rounded-sm h-full flex flex-col">
                  <h3 className="font-display text-[20px] md:text-[22px] text-near-black uppercase mb-3 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="font-sans text-[14px] md:text-[15px] text-charcoal/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: APPLICATION FORM ── */}
      <section
        className="py-20 md:py-32 px-5 md:px-8 lg:px-12 border-b border-near-black/10 bg-bone"
        aria-labelledby="apply-heading"
      >
        <div className="max-w-[1000px] mx-auto">
          <FadeIn className="text-center mb-12">
            <SectionLabel>START YOUR APPLICATION</SectionLabel>
            <h2
              id="apply-heading"
              className="font-display text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] text-near-black uppercase mt-4 mb-4"
            >
              Apply for a Community Build
            </h2>
          </FadeIn>

          <ApplicationForm />

          {/* Transparent Terms / Portfolio Condition */}
          <FadeIn delay={0.2}>
            <div className="mt-12 p-6 md:p-8 bg-ivory border border-near-black/10 rounded-sm">
              <h3 className="text-[11px] font-mono tracking-widest text-stone uppercase mb-3">
                Portfolio &amp; Case Study Terms
              </h3>
              <div className="space-y-2 font-sans text-[13px] text-stone leading-relaxed">
                <p>
                  As part of the Community Build Programme, TheoMedia may feature the finished
                  public website in its portfolio or case studies.
                </p>
                <p>We will not publish confidential business information.</p>
                <p>
                  Testimonials or reviews are never required to be positive and should remain
                  voluntary.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 9: CONTEXTUAL RESEARCH LINK / CALLOUT ── */}
      <section className="py-16 md:py-24 px-5 md:px-8 lg:px-12 bg-ivory">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="p-8 md:p-12 bg-bone border border-near-black/10 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] font-mono text-stone tracking-widest uppercase block mb-2">
                  COMMERCIAL RESEARCH GUIDE
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-near-black uppercase mb-2">
                  How Much Should a Small Business Website Cost in the UK?
                </h3>
                <p className="font-sans text-[14px] md:text-[15px] text-stone leading-relaxed">
                  Read our independent 2026 pricing analysis exploring freelancers, agencies, DIY
                  platforms, and what is realistically achievable for £500.
                </p>
              </div>

              <Link
                href="/journal/how-much-does-a-small-business-website-cost-uk"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-near-black text-bone hover:bg-charcoal text-[12px] font-sans font-semibold tracking-[0.14em] uppercase transition-colors rounded-sm whitespace-nowrap"
              >
                Read Pricing Guide →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
