'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { SITE } from '@/lib/constants';

type FormData = {
  projectType: string[];
  sector: string;
  websiteUrl: string;
  projectSummary: string;
  investment: string;
  timeline: string;
  name: string;
  business: string;
  email: string;
  phone: string;
};

const INITIAL_DATA: FormData = {
  projectType: [],
  sector: '',
  websiteUrl: '',
  projectSummary: '',
  investment: '£2,500 – £5,000 (€3,000 – €6,000 / $3,500 – $6,500)',
  timeline: 'Within 1–2 months',
  name: '',
  business: '',
  email: '',
  phone: '',
};

function ContactFormInner() {
  const searchParams = useSearchParams();
  const careParam = searchParams.get('care');
  const projectParam = searchParams.get('project');
  const engagementParam = searchParams.get('engagement') || searchParams.get('package');

  const validCarePlan =
    careParam === 'essential'
      ? 'Essential Care (£45/mo)'
      : careParam === 'growth'
      ? 'Growth Care (£95/mo)'
      : null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [copied, setCopied] = useState(false);
  const totalSteps = 4;

  useEffect(() => {
    if (engagementParam) {
      if (engagementParam.includes('flagship') || engagementParam === 'starter') {
        setFormData((prev) => ({
          ...prev,
          projectType: ['Digital Flagship'],
          investment: '£2,500 – £5,000 (€3,000 – €6,000 / $3,500 – $6,500)',
        }));
      } else if (engagementParam.includes('commercial') || engagementParam === 'professional') {
        setFormData((prev) => ({
          ...prev,
          projectType: ['Commercial Platform / CMS'],
          investment: '£5,000 – £10,000 (€6,000 – €12,000 / $6,500 – $13,000)',
        }));
      } else if (engagementParam.includes('system') || engagementParam === 'bespoke') {
        setFormData((prev) => ({
          ...prev,
          projectType: ['Digital Systems / Custom Software'],
          investment: '£10,000 – £20,000 (€12,000 – €24,000 / $13,000 – $26,000)',
        }));
      }
    }
    if (projectParam) {
      setFormData((prev) => ({
        ...prev,
        projectSummary: `Referencing studio project: ${projectParam}`,
      }));
    }
  }, [engagementParam, projectParam]);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleCheckbox = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      projectType: prev.projectType.includes(value)
        ? prev.projectType.filter((item) => item !== value)
        : [...prev.projectType, value],
    }));
  };

  const getSummaryText = () => `Client: ${formData.name || 'N/A'}
Business: ${formData.business || 'N/A'}
Email: ${formData.email || 'N/A'}
Phone / WhatsApp: ${formData.phone || 'N/A'}

-- ENGAGEMENT DETAILS --
${validCarePlan ? `Selected Care Plan: ${validCarePlan}\n` : ''}Disciplines: ${formData.projectType.join(', ') || 'Not specified'}
Sector: ${formData.sector || 'Not specified'}
Current Website: ${formData.websiteUrl || 'None / New Venture'}
Target Investment: ${formData.investment || 'Scoping required'}
Target Timeline: ${formData.timeline || 'Flexible'}

-- PROJECT SCOPE & CONTEXT --
${formData.projectSummary || 'No additional notes provided'}`;

  const generateMailto = () => {
    const subject = encodeURIComponent(
      validCarePlan
        ? `Care Plan Enquiry (${validCarePlan}): ${formData.business || 'Client'}`
        : `Studio Project Brief: ${formData.business || formData.name || 'New Client'}`
    );
    const body = encodeURIComponent(getSummaryText());
    return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const generateWhatsAppUrl = () => {
    const introText = validCarePlan
      ? `Hi TheoMedia, I'd like to discuss the ${validCarePlan}`
      : `Hi TheoMedia, I'd like to discuss an upcoming project`;
    const text = encodeURIComponent(`${introText}:\n\n${getSummaryText()}`);
    return `${SITE.whatsappUrl}?text=${text}`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="bg-warm-ivory min-h-screen text-primary-ink selection:bg-primary-ink selection:text-warm-ivory">
      {/* Editorial Header */}
      <section className="cinematic-dark bg-[#11110F] text-[#F2EEE6] pt-32 md:pt-40 pb-20 border-b border-[#262420]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <FadeIn>
            <div className="text-[11px] font-mono tracking-[0.16em] uppercase text-[#A98864] font-medium block mb-3">
              DIRECT ARCHITECTURAL BRIEF
            </div>
            <h1 className="font-display text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.98] uppercase text-[#F2EEE6] mb-6">
              START A CONVERSATION.
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-[#AAA49A] max-w-2xl leading-relaxed">
              Tell us what you are trying to improve. We will reply personally with the most practical next step.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Interaction Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Form Column */}
            <div className="w-full lg:w-2/3">
              <div className="bg-light-surface border border-border-rule p-6 md:p-12 rounded-[1px] shadow-sm">
                
                {/* Contextual Banner if Care Plan or Project query was passed */}
                {validCarePlan && (
                  <div className="mb-8 p-4 bg-soft-paper border border-border-rule rounded-[1px] flex items-center justify-between">
                    <span className="text-[12px] font-mono uppercase tracking-wider text-primary-ink font-semibold">
                      Care Plan Selected: {validCarePlan}
                    </span>
                    <span className="text-[11px] font-mono uppercase text-muted-text">
                      No Lock-in
                    </span>
                  </div>
                )}

                {/* Progress Bar */}
                <div className="mb-10 flex items-center justify-between gap-4 pb-4 border-b border-border-rule">
                  <span className="font-mono text-xs uppercase tracking-widest text-oxidised-bronze font-medium">
                    Stage {step} of {totalSteps}
                  </span>
                  <div className="w-48 h-1 bg-border-rule rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-oxidised-bronze transition-all duration-300 ease-out"
                      style={{ width: `${(step / totalSteps) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Form Steps */}
                <div className="min-h-[340px]">
                  
                  {/* STAGE 1: What are you building? */}
                  {step === 1 && (
                    <FadeIn key="step1">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-muted-text mb-2">01 / ENGAGEMENT SCOPE</div>
                      <h2 className="font-display text-3xl md:text-4xl text-primary-ink mb-3 uppercase">What are you looking to build?</h2>
                      <p className="font-sans text-sm text-secondary-text mb-8 leading-relaxed">
                        Select the primary areas of requirement for this project.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {[
                          'Digital Flagship Website',
                          'Commercial Platform / CMS',
                          'Custom Ecommerce Experience',
                          'Booking / Reservation Engine',
                          'Web Application / Portal',
                          'Business Software System',
                        ].map((opt) => (
                          <label key={opt} className={`flex items-center gap-3 p-4 border rounded-[1px] cursor-pointer transition-colors ${
                            formData.projectType.includes(opt)
                              ? 'border-primary-ink bg-warm-ivory/50 font-medium'
                              : 'border-border-rule hover:border-oxidised-bronze'
                          }`}>
                            <input 
                              type="checkbox"
                              checked={formData.projectType.includes(opt)}
                              onChange={() => handleCheckbox(opt)}
                              className="w-4 h-4 accent-primary-ink"
                            />
                            <span className="font-sans text-sm text-primary-ink">{opt}</span>
                          </label>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-border-rule">
                        <label className="block font-mono text-[11px] uppercase tracking-wider text-secondary-text mb-3">
                          Business Sector
                        </label>
                        <select
                          value={formData.sector}
                          onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                          className="w-full p-3.5 bg-transparent border border-border-rule rounded-[1px] font-sans text-sm text-primary-ink focus:outline-none focus:border-primary-ink"
                        >
                          <option value="">Select your sector...</option>
                          <option value="Boutique Hospitality & Stays">Boutique Hospitality & Stays</option>
                          <option value="Restaurants & Gastropubs">Restaurants & Gastropubs</option>
                          <option value="Architecture & Interior Design">Architecture & Interior Design</option>
                          <option value="Private Healthcare & Clinics">Private Healthcare & Clinics</option>
                          <option value="Artisanal Commerce & Retail">Artisanal Commerce & Retail</option>
                          <option value="Trades & Construction">Trades & Construction</option>
                          <option value="Creative Agency / Production">Creative Agency / Production</option>
                          <option value="Professional Services">Professional Services</option>
                          <option value="B2B Technology / SaaS">B2B Technology / SaaS</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </FadeIn>
                  )}

                  {/* STAGE 2: Tell us about the business & project */}
                  {step === 2 && (
                    <FadeIn key="step2">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-muted-text mb-2">02 / BUSINESS CONTEXT</div>
                      <h2 className="font-display text-3xl md:text-4xl text-primary-ink mb-3 uppercase">Tell us about the project</h2>
                      <p className="font-sans text-sm text-secondary-text mb-8 leading-relaxed">
                        What are the primary problems you are trying to solve? (e.g. outdated visual presence, poor mobile conversion, high platform fees, or manual admin).
                      </p>

                      <div className="space-y-6">
                        <div>
                          <label className="block font-mono text-[11px] uppercase tracking-wider text-secondary-text mb-2">
                            Current Website URL (If applicable)
                          </label>
                          <input 
                            type="url"
                            placeholder="https://example.com"
                            value={formData.websiteUrl}
                            onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                            className="w-full p-3.5 bg-transparent border border-border-rule rounded-[1px] font-sans text-sm text-primary-ink focus:outline-none focus:border-primary-ink"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[11px] uppercase tracking-wider text-secondary-text mb-2">
                            Scope &amp; Primary Commercial Goal
                          </label>
                          <textarea 
                            rows={5}
                            value={formData.projectSummary}
                            onChange={(e) => setFormData({ ...formData, projectSummary: e.target.value })}
                            placeholder="Describe your current situation, target audience, and what success looks like for this build..."
                            className="w-full p-3.5 bg-transparent border border-border-rule rounded-[1px] font-sans text-sm text-primary-ink focus:outline-none focus:border-primary-ink resize-none leading-relaxed"
                          />
                        </div>
                      </div>
                    </FadeIn>
                  )}

                  {/* STAGE 3: Investment Bracket & Timeline */}
                  {step === 3 && (
                    <FadeIn key="step3">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-muted-text mb-2">03 / INVESTMENT &amp; TIMELINE</div>
                      <h2 className="font-display text-3xl md:text-4xl text-primary-ink mb-3 uppercase">Scope-first investment</h2>
                      <p className="font-sans text-sm text-secondary-text mb-8 leading-relaxed">
                        TheoMedia engagements begin from £2,500. Selecting your realistic budget enables us to propose the correct level of architectural scoping.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <label className="block font-mono text-[11px] uppercase tracking-wider text-secondary-text mb-3">
                            Target Investment Bracket
                          </label>
                          <div className="grid grid-cols-1 gap-3">
                            {[
                              '£2,500 – £5,000 (€3,000 – €6,000 / $3,500 – $6,500)',
                              '£5,000 – £10,000 (€6,000 – €12,000 / $6,500 – $13,000)',
                              '£10,000 – £20,000 (€12,000 – €24,000 / $13,000 – $26,000)',
                              '£20,000+ (€24,000+ / $26,000+)',
                              'Not sure yet / Needs architectural scoping',
                            ].map((tier) => (
                              <label key={tier} className={`flex items-center gap-3 p-3.5 border rounded-[1px] cursor-pointer transition-colors ${
                                formData.investment === tier
                                  ? 'border-primary-ink bg-warm-ivory/50 font-medium'
                                  : 'border-border-rule hover:border-oxidised-bronze'
                              }`}>
                                <input 
                                  type="radio"
                                  name="investment"
                                  checked={formData.investment === tier}
                                  onChange={() => setFormData({ ...formData, investment: tier })}
                                  className="w-4 h-4 accent-primary-ink"
                                />
                                <span className="font-sans text-sm text-primary-ink">{tier}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border-rule">
                          <label className="block font-mono text-[11px] uppercase tracking-wider text-secondary-text mb-3">
                            Target Delivery Timeline
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['Immediate (2–4 wks)', '1–2 months', '2–4 months', 'Flexible'].map((time) => (
                              <button
                                type="button"
                                key={time}
                                onClick={() => setFormData({ ...formData, timeline: time })}
                                className={`p-3 text-xs font-mono uppercase tracking-wider border rounded-[1px] text-center transition-colors ${
                                  formData.timeline === time
                                    ? 'bg-primary-ink text-warm-ivory border-primary-ink'
                                    : 'border-border-rule text-secondary-text hover:border-primary-ink'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  )}

                  {/* STAGE 4: Details & Submission */}
                  {step === 4 && (
                    <FadeIn key="step4">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-muted-text mb-2">04 / SUBMISSION</div>
                      <h2 className="font-display text-3xl md:text-4xl text-primary-ink mb-3 uppercase">Your contact details</h2>
                      <p className="font-sans text-sm text-secondary-text mb-8 leading-relaxed">
                        Where should we send our initial architectural response and scoping recommendations?
                      </p>

                      <div className="space-y-5 mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block font-mono text-[11px] uppercase tracking-wider text-secondary-text mb-2">
                              Your Name *
                            </label>
                            <input 
                              type="text" 
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full p-3.5 bg-transparent border border-border-rule rounded-[1px] font-sans text-sm text-primary-ink focus:outline-none focus:border-primary-ink"
                            />
                          </div>
                          <div>
                            <label className="block font-mono text-[11px] uppercase tracking-wider text-secondary-text mb-2">
                              Business / Practice Name *
                            </label>
                            <input 
                              type="text" 
                              required
                              value={formData.business}
                              onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                              className="w-full p-3.5 bg-transparent border border-border-rule rounded-[1px] font-sans text-sm text-primary-ink focus:outline-none focus:border-primary-ink"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block font-mono text-[11px] uppercase tracking-wider text-secondary-text mb-2">
                              Email Address *
                            </label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full p-3.5 bg-transparent border border-border-rule rounded-[1px] font-sans text-sm text-primary-ink focus:outline-none focus:border-primary-ink"
                            />
                          </div>
                          <div>
                            <label className="block font-mono text-[11px] uppercase tracking-wider text-secondary-text mb-2">
                              Phone / WhatsApp (Optional)
                            </label>
                            <input 
                              type="tel" 
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full p-3.5 bg-transparent border border-border-rule rounded-[1px] font-sans text-sm text-primary-ink focus:outline-none focus:border-primary-ink"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Send Actions */}
                      <div className="pt-6 border-t border-border-rule flex flex-col gap-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <a 
                            href={generateWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-ink text-warm-ivory text-xs font-mono uppercase tracking-widest hover:bg-dark-accent transition-colors rounded-[1px]"
                          >
                            <span>Transmit on WhatsApp</span>
                            <span>↗</span>
                          </a>

                          <a 
                            href={generateMailto()}
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-primary-ink text-primary-ink text-xs font-mono uppercase tracking-widest hover:bg-warm-ivory transition-colors rounded-[1px]"
                          >
                            Send via Email Client ↗
                          </a>
                        </div>

                        <button
                          type="button"
                          onClick={handleCopySummary}
                          className="w-full inline-flex items-center justify-center px-4 py-2.5 text-secondary-text hover:text-primary-ink text-xs font-mono uppercase tracking-wider transition-colors"
                        >
                          {copied ? '✓ Brief Summary Copied to Clipboard!' : 'Copy Summary to Clipboard'}
                        </button>
                      </div>
                    </FadeIn>
                  )}

                </div>

                {/* Form Navigation Controls */}
                <div className="mt-10 flex items-center justify-between border-t border-border-rule pt-6">
                  {step > 1 ? (
                    <button 
                      type="button"
                      onClick={handlePrev}
                      className="font-mono text-xs uppercase tracking-widest text-secondary-text hover:text-primary-ink transition-colors"
                    >
                      ← Previous Stage
                    </button>
                  ) : <div />}
                  
                  {step < totalSteps && (
                    <button 
                      type="button"
                      onClick={handleNext}
                      className="font-mono text-xs uppercase tracking-widest text-warm-ivory bg-primary-ink px-6 py-3 rounded-[1px] hover:bg-dark-accent transition-colors"
                    >
                      Next Stage →
                    </button>
                  )}
                </div>

              </div>
            </div>

            {/* Sidebar Column */}
            <div className="w-full lg:w-1/3">
              <FadeIn delay={0.15} className="sticky top-32 space-y-10">
                <div>
                  <SectionLabel className="mb-4">DIRECT CHANNELS</SectionLabel>
                  <div className="space-y-6 pt-2">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-text block mb-1">
                        Principal Email
                      </span>
                      <a href={`mailto:${SITE.email}`} className="font-sans text-base text-primary-ink hover:text-oxidised-bronze transition-colors font-medium">
                        {SITE.email}
                      </a>
                    </div>
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-text block mb-1">
                        Direct Phone / WhatsApp
                      </span>
                      <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-base text-primary-ink hover:text-oxidised-bronze transition-colors font-medium">
                        +353 85 225 8004
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border-rule">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-text block mb-2">
                    Operating Footprint
                  </span>
                  <p className="font-sans text-sm text-secondary-text leading-relaxed">
                    Independent studio founded in Ireland, serving the United Kingdom (London, Manchester, Edinburgh, Birmingham), Ireland (Dublin, Cork, Galway), and selected international projects in North America and Europe.
                  </p>
                </div>

                <div className="pt-8 border-t border-border-rule">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-text block mb-2">
                    Direct Founder Delivery
                  </span>
                  <p className="font-sans text-sm text-secondary-text leading-relaxed">
                    Every project is architected, designed, and engineered directly with the studio founder. No junior handoffs, no middle management overhead.
                  </p>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="bg-warm-ivory min-h-screen pt-32 text-center font-mono text-xs uppercase tracking-widest text-muted-text">Loading brief interface...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
