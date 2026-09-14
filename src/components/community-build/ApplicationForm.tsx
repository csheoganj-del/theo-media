'use client';

import { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';
import { SITE } from '@/lib/constants';
import { communityBuildAvailability } from '@/data/communityBuild';
import { trackEvent } from '@/lib/analytics';

interface ApplicationFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  socialProfile: string;
  location: string;
  industry: string;
  businessDescription: string;
  projectGoals: string;
  hasContent: string;
  desiredTimeframe: string;
  additionalNotes: string;
  acknowledged: boolean;
}

const INITIAL_DATA: ApplicationFormData = {
  fullName: '',
  businessName: '',
  email: '',
  phone: '',
  website: '',
  socialProfile: '',
  location: '',
  industry: '',
  businessDescription: '',
  projectGoals: '',
  hasContent: '',
  desiredTimeframe: '',
  additionalNotes: '',
  acknowledged: false,
};

export default function ApplicationForm() {
  const [formData, setFormData] = useState<ApplicationFormData>(INITIAL_DATA);
  const [hasStarted, setHasStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if September allocation is filled
  const isSeptemberFilled = communityBuildAvailability.availability.september.status === 'filled';
  const isWaitlistMode = isSeptemberFilled;

  const handleStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent('community_build_apply_start');
    }
  };

  const getSummaryText = () => `THEOMEDIA COMMUNITY BUILD APPLICATION
Mode: ${isWaitlistMode ? 'October Priority Access Waitlist' : 'September 2026 Programme Application'}

Full Name: ${formData.fullName}
Business Name: ${formData.businessName}
Email: ${formData.email}
Phone / WhatsApp: ${formData.phone || 'N/A'}
Current Website: ${formData.website || 'None'}
Social Profile: ${formData.socialProfile || 'None'}
Location / Town: ${formData.location || 'N/A'}
Industry: ${formData.industry || 'N/A'}

-- BUSINESS & PROJECT --
What the business does:
${formData.businessDescription}

Website goals:
${formData.projectGoals}

Content / Photos status:
${formData.hasContent}

Desired timeframe:
${formData.desiredTimeframe || 'Flexible'}

Additional notes:
${formData.additionalNotes || 'None'}

Application Terms Acknowledged: Yes (£200 reservation required upon acceptance)`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Form validations
    if (!formData.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!formData.businessName.trim()) {
      setError('Please enter your business name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!formData.businessDescription.trim()) {
      setError('Please describe what your business does.');
      return;
    }
    if (!formData.projectGoals.trim()) {
      setError('Please let us know what you would like the new website to achieve.');
      return;
    }
    if (!formData.hasContent.trim()) {
      setError('Please indicate if you already have photos or content.');
      return;
    }
    if (!formData.acknowledged) {
      setError(
        'Please confirm your acknowledgment that submitting this form is an application and does not automatically reserve a place.'
      );
      return;
    }

    if (isWaitlistMode) {
      trackEvent('community_build_waitlist_submit', {
        business: formData.businessName,
        industry: formData.industry,
      });
    } else {
      trackEvent('community_build_apply_submit', {
        business: formData.businessName,
        industry: formData.industry,
      });
    }

    setSubmitted(true);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(
      `Community Build Application: ${formData.businessName || 'Applicant'}`
    );
    const body = encodeURIComponent(getSummaryText());
    return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi TheoMedia, here is my Community Build Programme application:\n\n${getSummaryText()}`
    );
    return `${SITE.whatsappUrl}?text=${text}`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="apply" className="scroll-mt-24">
      {submitted ? (
        <FadeIn>
          <div className="p-8 md:p-12 bg-ivory border border-near-black/10 rounded-sm">
            <div className="w-12 h-12 rounded-full bg-emerald-700/10 text-emerald-800 flex items-center justify-center font-display text-2xl mb-6">
              ✓
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-near-black uppercase mb-4">
              Application received.
            </h3>
            <p className="font-sans text-[16px] md:text-[17px] text-stone leading-relaxed max-w-xl mb-8">
              We’ll review the scope and get back to you with whether the project fits the Community
              Build programme and whether a current place is available.
            </p>

            <div className="border-t border-near-black/10 pt-8 mt-8">
              <h4 className="text-[12px] font-sans font-semibold tracking-wider uppercase text-charcoal mb-4">
                Fast-track transmission options:
              </h4>
              <p className="text-[13px] text-stone mb-6">
                You can also instantly forward this application summary directly to our studio via
                WhatsApp or your email client:
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-800 text-white font-sans font-medium text-[12px] tracking-[0.14em] uppercase hover:bg-emerald-700 transition-colors rounded-sm"
                >
                  <span>Forward via WhatsApp</span>
                  <span>↗</span>
                </a>

                <a
                  href={generateMailto()}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-near-black text-bone font-sans font-medium text-[12px] tracking-[0.14em] uppercase hover:bg-charcoal transition-colors rounded-sm"
                >
                  Open in Email Client
                </a>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-near-black/20 text-charcoal hover:border-near-black font-sans font-medium text-[12px] tracking-[0.14em] uppercase transition-colors rounded-sm"
                >
                  {copied ? '✓ Copied to Clipboard' : 'Copy Application Summary'}
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      ) : (
        <FadeIn>
          <div className="bg-ivory border border-near-black/10 p-6 md:p-10 lg:p-12 rounded-sm">
            {isWaitlistMode ? (
              <div className="mb-10 p-6 bg-bone border border-stone/20 rounded-sm">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-stone mb-2">
                  <span className="w-2 h-2 rounded-full bg-stone" />
                  <span>Allocation Notice</span>
                </div>
                <h3 className="font-display text-2xl text-near-black mb-2">
                  September allocation filled.
                </h3>
                <p className="font-sans text-[15px] text-charcoal/80 leading-relaxed">
                  The three September Community Build places have now been reserved. You can join
                  the October priority list and we’ll contact priority applicants before opening the
                  next allocation more widely.
                </p>
              </div>
            ) : (
              <div className="mb-10">
                <p className="font-sans text-[15px] md:text-[16px] text-stone leading-relaxed">
                  Tell us a little about the business and what you need. Applications are reviewed
                  individually.
                </p>
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 text-[14px] rounded-sm"
              >
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              onFocus={handleStart}
              noValidate
              className="space-y-8"
              aria-label="Community Build Application Form"
            >
              {/* Row 1: Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="cb-full-name"
                    className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                  >
                    Full name <span className="text-stone">*</span>
                  </label>
                  <input
                    id="cb-full-name"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black placeholder:text-stone/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cb-business-name"
                    className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                  >
                    Business name <span className="text-stone">*</span>
                  </label>
                  <input
                    id="cb-business-name"
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Jenkins Botanical Studio"
                    className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black placeholder:text-stone/60"
                  />
                </div>
              </div>

              {/* Row 2: Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="cb-email"
                    className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                  >
                    Email <span className="text-stone">*</span>
                  </label>
                  <input
                    id="cb-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.co.uk"
                    className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black placeholder:text-stone/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cb-phone"
                    className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    id="cb-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +44 7123 456789"
                    className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black placeholder:text-stone/60"
                  />
                </div>
              </div>

              {/* Row 3: Online Presence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="cb-website"
                    className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                  >
                    Current website
                  </label>
                  <input
                    id="cb-website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://... (or leave blank if none)"
                    className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black placeholder:text-stone/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cb-social"
                    className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                  >
                    Instagram / social profile
                  </label>
                  <input
                    id="cb-social"
                    type="text"
                    value={formData.socialProfile}
                    onChange={(e) => setFormData({ ...formData, socialProfile: e.target.value })}
                    placeholder="@handle or profile link"
                    className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black placeholder:text-stone/60"
                  />
                </div>
              </div>

              {/* Row 4: Location & Industry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="cb-location"
                    className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                  >
                    Business location / town
                  </label>
                  <input
                    id="cb-location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Bristol, UK"
                    className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black placeholder:text-stone/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cb-industry"
                    className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                  >
                    Industry
                  </label>
                  <input
                    id="cb-industry"
                    type="text"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    placeholder="e.g. Specialist Floral & Event Studio"
                    className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black placeholder:text-stone/60"
                  />
                </div>
              </div>

              {/* Detailed questions */}
              <div>
                <label
                  htmlFor="cb-business-desc"
                  className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                >
                  What does your business do? <span className="text-stone">*</span>
                </label>
                <textarea
                  id="cb-business-desc"
                  rows={3}
                  required
                  value={formData.businessDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, businessDescription: e.target.value })
                  }
                  placeholder="Tell us briefly about your services, products, or craftsmanship..."
                  className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black placeholder:text-stone/60 resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="cb-project-goals"
                  className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                >
                  What would you like the new website to achieve?{' '}
                  <span className="text-stone">*</span>
                </label>
                <textarea
                  id="cb-project-goals"
                  rows={3}
                  required
                  value={formData.projectGoals}
                  onChange={(e) => setFormData({ ...formData, projectGoals: e.target.value })}
                  placeholder="e.g. Attract higher-value private clients, improve trust, enable clear booking enquiries..."
                  className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black placeholder:text-stone/60 resize-none"
                />
              </div>

              {/* Row 5: Content status & Timeframe */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="cb-content-status"
                    className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                  >
                    Do you already have photos/content? <span className="text-stone">*</span>
                  </label>
                  <select
                    id="cb-content-status"
                    required
                    value={formData.hasContent}
                    onChange={(e) => setFormData({ ...formData, hasContent: e.target.value })}
                    className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black"
                  >
                    <option value="">Please select an option</option>
                    <option value="Yes, photography and text are ready">
                      Yes, photography and copy are ready
                    </option>
                    <option value="Partially, in progress">
                      Partially — some photos/drafts in progress
                    </option>
                    <option value="No, will need guidance">
                      No — we will need guidance on what to assemble
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="cb-timeframe"
                    className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                  >
                    Desired launch timeframe
                  </label>
                  <select
                    id="cb-timeframe"
                    value={formData.desiredTimeframe}
                    onChange={(e) =>
                      setFormData({ ...formData, desiredTimeframe: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black"
                  >
                    <option value="Flexible">Flexible / Within pilot window</option>
                    <option value="September 2026">September 2026</option>
                    <option value="October 2026">October 2026</option>
                    <option value="November 2026">November 2026</option>
                  </select>
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label
                  htmlFor="cb-notes"
                  className="block text-[12px] font-sans font-medium uppercase tracking-wider text-charcoal mb-2"
                >
                  Anything else we should know?
                </label>
                <textarea
                  id="cb-notes"
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Any specific questions, domain info, or existing technical setup..."
                  className="w-full px-4 py-3 bg-bone border border-near-black/15 rounded-sm focus:outline-none focus:border-near-black font-sans text-[15px] text-near-black placeholder:text-stone/60 resize-none"
                />
              </div>

              {/* Required acknowledgment Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={formData.acknowledged}
                    onChange={(e) =>
                      setFormData({ ...formData, acknowledged: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 rounded border-stone/40 text-near-black focus:ring-near-black"
                  />
                  <span className="font-sans text-[13px] md:text-[14px] text-charcoal leading-normal">
                    I understand that submitting this form is an application and does not reserve a
                    Community Build place. A place is confirmed only after acceptance and receipt
                    of the £200 reservation payment.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-near-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-near-black text-bone hover:bg-charcoal text-[13px] font-sans font-semibold tracking-[0.16em] uppercase transition-colors rounded-sm"
                >
                  {isWaitlistMode ? 'Join the October priority list' : 'Submit application'}
                </button>

                <p className="text-[12px] font-sans text-stone">
                  No automated charge · Individually reviewed by TheoMedia
                </p>
              </div>
            </form>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
