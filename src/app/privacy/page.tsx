import type { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms | TheoMedia',
  description:
    'Privacy policy and business terms for TheoMedia. Transparent data handling, UK GDPR and Irish Data Protection Act compliance, and client ownership terms.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-bone min-h-screen pt-32 pb-24 text-near-black">
      <div className="container mx-auto px-5 md:px-8 max-w-[800px]">
        <FadeIn>
          <SectionLabel>LEGAL &amp; COMPLIANCE</SectionLabel>
          <h1 className="text-editorial-xl text-near-black mt-4 mb-8">
            Privacy Policy &amp; Terms.
          </h1>
          
          <div className="space-y-8 font-sans text-[16px] text-near-black/85 leading-relaxed">
            <p className="text-[18px] text-stone leading-relaxed">
              TheoMedia is an independent web design and digital product studio operating across the United Kingdom and Ireland. This document outlines how we collect, handle, and protect your information, as well as our standard client engagement terms.
            </p>

            <div className="border-t border-near-black/10 pt-8">
              <h2 className="font-display text-[24px] text-near-black mb-4">1. Data Controller</h2>
              <p>
                The data controller responsible for personal information collected via this website is TheoMedia. For any inquiries regarding data protection or your personal information, please contact us directly:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-stone">
                <li>Email: <a href="mailto:hello@theomedia.co.uk" className="text-near-black underline hover:text-stone">hello@theomedia.co.uk</a></li>
                <li>Telephone: <a href="tel:+353852258004" className="text-near-black underline hover:text-stone">+353 85 225 8004</a></li>
                <li>Geographic Coverage: United Kingdom &amp; Ireland</li>
              </ul>
            </div>

            <div className="border-t border-near-black/10 pt-8">
              <h2 className="font-display text-[24px] text-near-black mb-4">2. Legal Framework &amp; Scope</h2>
              <p>
                We comply strictly with applicable data protection laws, specifically:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-stone">
                <li>The UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018</li>
                <li>The EU General Data Protection Regulation (EU GDPR) and the Irish Data Protection Act 2018</li>
              </ul>
              <p className="mt-3 text-[14px] text-stone">
                Note on regulatory claims: TheoMedia does not provide financial services and does not claim regulatory oversight by financial authorities (such as the Swiss FINMA or UK FCA). Our compliance standards are strictly rooted in statutory UK and Irish data protection laws for digital agency operations.
              </p>
            </div>

            <div className="border-t border-near-black/10 pt-8">
              <h2 className="font-display text-[24px] text-near-black mb-4">3. What Information We Collect</h2>
              <p>
                We collect only the minimum personal information required to communicate with you and deliver our digital services:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-stone">
                <li><strong>Direct Enquiries:</strong> Name, business name, email address, telephone number, and project scope submitted via our contact forms, email, or WhatsApp.</li>
                <li><strong>Technical Information:</strong> Standard server access logs (IP address, browser user-agent, operating system) generated during your visit for technical diagnostics, DDoS prevention, and routing performance.</li>
                <li><strong>Functional Cookies:</strong> Minimal functional session cookies required for website operation. We do not use invasive third-party cross-site advertising trackers or data brokers.</li>
              </ul>
            </div>

            <div className="border-t border-near-black/10 pt-8">
              <h2 className="font-display text-[24px] text-near-black mb-4">4. Hosting &amp; Infrastructure</h2>
              <p>
                Our website is built using Next.js and hosted on Vercel&apos;s global edge network. All communication is encrypted in transit using industry-standard Transport Layer Security (TLS 1.3 / HTTPS). Data is stored and processed on secure cloud infrastructure located within the UK and European Union.
              </p>
            </div>

            <div className="border-t border-near-black/10 pt-8">
              <h2 className="font-display text-[24px] text-near-black mb-4">5. Client Engagement &amp; Code Ownership Terms</h2>
              <p>
                Unlike proprietary software builders or agencies that charge recurring platform subscriptions:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-stone">
                <li><strong>100% Code Ownership:</strong> Upon final settlement of project invoices, complete intellectual property and source code for custom builds are transferred to the client.</li>
                <li><strong>No Platform Lock-in:</strong> We build using open-source modern frameworks (Next.js, React, Tailwind CSS). You are free to host your website on any modern hosting provider.</li>
                <li><strong>Fixed Quotations:</strong> Projects are delivered based on agreed fixed milestones and specifications, ensuring transparent investment without hidden retainers.</li>
              </ul>
            </div>

            <div className="border-t border-near-black/10 pt-8">
              <h2 className="font-display text-[24px] text-near-black mb-4">6. Your Statutory Rights</h2>
              <p>
                Under UK and Irish data protection legislation, you have the right to request access to the personal data we hold about you, request rectification of inaccurate data, or request permanent erasure (&ldquo;right to be forgotten&rdquo;). To exercise any of these rights, email us at <a href="mailto:hello@theomedia.co.uk" className="text-near-black underline hover:text-stone">hello@theomedia.co.uk</a>.
              </p>
            </div>

            <div className="border-t border-near-black/10 pt-8 text-[13px] text-stone">
              <p>Last updated: March 2026. Reviewed for UK &amp; Ireland statutory alignment.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
