'use client';

import { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { SITE } from '@/lib/constants';

type FormData = {
  projectType: string[];
  businessType: string;
  goals: string[];
  stage: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL_DATA: FormData = {
  projectType: [],
  businessType: '',
  goals: [],
  stage: '',
  name: '',
  business: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const totalSteps = 7;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleCheckbox = (field: 'projectType' | 'goals', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`New Project Enquiry: ${formData.business}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Business: ${formData.business}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}

-- PROJECT DETAILS --
Type: ${formData.projectType.join(', ') || 'None selected'}
Business Sector: ${formData.businessType || 'None selected'}
Goals: ${formData.goals.join(', ') || 'None selected'}
Stage: ${formData.stage || 'None selected'}

-- MESSAGE --
${formData.message}
    `);
    
    return `mailto:hello@theomedia.co.uk?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-bone min-h-screen">
      <section className="dark-section pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn>
            <h1 className="text-editorial-xl text-bone mb-6 uppercase">
              Let&apos;s build something great.
            </h1>
            <p className="text-lg font-sans text-stone max-w-xl">
              Fill out the enquiry form to get started, or reach out directly if you prefer.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Form Column */}
            <div className="w-full lg:w-2/3">
              <div className="bg-ivory border border-stone/20 p-6 md:p-12 rounded-sm shadow-sm relative">
                {/* Progress */}
                <div className="mb-10 flex items-center gap-4">
                  <span className="font-sans font-bold text-sm text-near-black">Step {step} of {totalSteps}</span>
                  <div className="flex-grow h-1 bg-stone/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-warm-accent transition-all duration-300 ease-out"
                      style={{ width: `${(step / totalSteps) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Form Steps */}
                <div className="min-h-[300px]">
                  {step === 1 && (
                    <FadeIn key="step1">
                      <h2 className="font-display text-3xl text-near-black mb-8 uppercase">What are we building?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Website', 'Ecommerce', 'Booking Experience', 'Web Application', 'Business Software', 'Not Sure'].map(opt => (
                          <label key={opt} className="flex items-center gap-3 p-4 border border-stone/20 rounded-sm cursor-pointer hover:border-warm-accent transition-colors">
                            <input 
                              type="checkbox"
                              checked={formData.projectType.includes(opt)}
                              onChange={() => handleCheckbox('projectType', opt)}
                              className="w-5 h-5 text-warm-accent accent-warm-accent"
                            />
                            <span className="font-sans text-charcoal">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </FadeIn>
                  )}

                  {step === 2 && (
                    <FadeIn key="step2">
                      <h2 className="font-display text-3xl text-near-black mb-8 uppercase">What kind of business?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Hospitality', 'Restaurant', 'Automotive', 'Trades', 'Healthcare', 'Ecommerce', 'Travel', 'Public Figure / Civic', 'Professional Services', 'Other'].map(opt => (
                          <label key={opt} className="flex items-center gap-3 p-4 border border-stone/20 rounded-sm cursor-pointer hover:border-warm-accent transition-colors">
                            <input 
                              type="radio"
                              name="businessType"
                              checked={formData.businessType === opt}
                              onChange={() => setFormData({...formData, businessType: opt})}
                              className="w-5 h-5 accent-warm-accent"
                            />
                            <span className="font-sans text-charcoal">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </FadeIn>
                  )}

                  {step === 3 && (
                    <FadeIn key="step3">
                      <h2 className="font-display text-3xl text-near-black mb-8 uppercase">What matters most?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Better presentation', 'More enquiries', 'Bookings', 'Selling online', 'Replacing an outdated site', 'Custom functionality', 'Internal workflow', 'Not sure yet'].map(opt => (
                          <label key={opt} className="flex items-center gap-3 p-4 border border-stone/20 rounded-sm cursor-pointer hover:border-warm-accent transition-colors">
                            <input 
                              type="checkbox"
                              checked={formData.goals.includes(opt)}
                              onChange={() => handleCheckbox('goals', opt)}
                              className="w-5 h-5 accent-warm-accent"
                            />
                            <span className="font-sans text-charcoal">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </FadeIn>
                  )}

                  {step === 4 && (
                    <FadeIn key="step4">
                      <h2 className="font-display text-3xl text-near-black mb-8 uppercase">Project stage</h2>
                      <div className="grid grid-cols-1 gap-4">
                        {['Exploring', 'Ready to begin', 'Existing site needs redesign', 'Need something custom'].map(opt => (
                          <label key={opt} className="flex items-center gap-3 p-4 border border-stone/20 rounded-sm cursor-pointer hover:border-warm-accent transition-colors">
                            <input 
                              type="radio"
                              name="stage"
                              checked={formData.stage === opt}
                              onChange={() => setFormData({...formData, stage: opt})}
                              className="w-5 h-5 accent-warm-accent"
                            />
                            <span className="font-sans text-charcoal">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </FadeIn>
                  )}

                  {step === 5 && (
                    <FadeIn key="step5">
                      <h2 className="font-display text-3xl text-near-black mb-8 uppercase">Contact Details</h2>
                      <div className="space-y-6">
                        <div>
                          <label className="block font-sans text-sm text-charcoal mb-2">Name *</label>
                          <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            className="w-full p-4 border border-stone/20 bg-transparent rounded-sm focus:outline-none focus:border-warm-accent" 
                          />
                        </div>
                        <div>
                          <label className="block font-sans text-sm text-charcoal mb-2">Business Name *</label>
                          <input 
                            type="text" 
                            required
                            value={formData.business}
                            onChange={e => setFormData({...formData, business: e.target.value})}
                            className="w-full p-4 border border-stone/20 bg-transparent rounded-sm focus:outline-none focus:border-warm-accent" 
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block font-sans text-sm text-charcoal mb-2">Email *</label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={e => setFormData({...formData, email: e.target.value})}
                              className="w-full p-4 border border-stone/20 bg-transparent rounded-sm focus:outline-none focus:border-warm-accent" 
                            />
                          </div>
                          <div>
                            <label className="block font-sans text-sm text-charcoal mb-2">Phone (Optional)</label>
                            <input 
                              type="tel" 
                              value={formData.phone}
                              onChange={e => setFormData({...formData, phone: e.target.value})}
                              className="w-full p-4 border border-stone/20 bg-transparent rounded-sm focus:outline-none focus:border-warm-accent" 
                            />
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  )}

                  {step === 6 && (
                    <FadeIn key="step6">
                      <h2 className="font-display text-3xl text-near-black mb-8 uppercase">Anything else?</h2>
                      <div>
                        <label className="block font-sans text-sm text-charcoal mb-2">Tell us briefly about the project</label>
                        <textarea 
                          rows={6}
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                          className="w-full p-4 border border-stone/20 bg-transparent rounded-sm focus:outline-none focus:border-warm-accent resize-none"
                          placeholder="Current challenges, specific requirements, timeline..."
                        />
                      </div>
                    </FadeIn>
                  )}

                  {step === 7 && (
                    <FadeIn key="step7">
                      <h2 className="font-display text-3xl text-near-black mb-8 uppercase">Review & Send</h2>
                      <div className="bg-bone p-6 rounded-sm space-y-4 mb-8">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-stone block mb-1">Contact</span>
                          <p className="font-sans text-near-black">{formData.name || 'Not provided'} ({formData.business || 'Not provided'})</p>
                          <p className="font-sans text-stone text-sm">{formData.email || 'Not provided'}</p>
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-stone block mb-1">Project</span>
                          <p className="font-sans text-near-black">{formData.projectType.length > 0 ? formData.projectType.join(', ') : 'Not specified'} - {formData.businessType || 'No industry specified'}</p>
                        </div>
                      </div>
                      
                      <a 
                        href={generateMailto()}
                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-near-black text-bone font-sans font-bold tracking-widest uppercase text-sm hover:bg-warm-accent transition-colors rounded-sm"
                      >
                        Send Project Enquiry
                      </a>
                    </FadeIn>
                  )}
                </div>

                {/* Navigation */}
                <div className="mt-12 flex items-center justify-between border-t border-stone/20 pt-6">
                  {step > 1 ? (
                    <button 
                      onClick={handlePrev}
                      className="font-sans text-sm font-bold uppercase tracking-widest text-stone hover:text-near-black transition-colors"
                    >
                      ← Back
                    </button>
                  ) : <div></div>}
                  
                  {step < totalSteps && (
                    <button 
                      onClick={handleNext}
                      className="font-sans text-sm font-bold uppercase tracking-widest text-bone bg-near-black px-6 py-2.5 rounded-sm hover:bg-warm-accent transition-colors"
                    >
                      Next Step
                    </button>
                  )}
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href={`https://wa.me/${SITE.whatsappUrl.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-stone hover:text-warm-accent transition-colors"
                >
                  Prefer WhatsApp? Message us directly →
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <FadeIn delay={0.2} className="sticky top-32">
                <SectionLabel className="text-stone mb-8">Contact</SectionLabel>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="font-sans font-bold text-near-black text-sm uppercase tracking-widest mb-3">Email</h3>
                    <a href={`mailto:hello@theomedia.co.uk`} className="font-display text-2xl text-charcoal hover:text-warm-accent transition-colors">
                      hello@theomedia.co.uk
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-sans font-bold text-near-black text-sm uppercase tracking-widest mb-3">WhatsApp</h3>
                    <a href={`https://wa.me/${SITE.whatsappUrl.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-display text-2xl text-charcoal hover:text-warm-accent transition-colors">
                      {SITE.whatsappUrl}
                    </a>
                  </div>

                  <div className="pt-8 border-t border-stone/20">
                    <h3 className="font-sans font-bold text-near-black text-sm uppercase tracking-widest mb-3">Regions</h3>
                    <p className="font-sans text-stone leading-relaxed">
                      Based in the UK.<br />
                      Working with clients across:<br />
                      London, Manchester, Dublin, Europe.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
