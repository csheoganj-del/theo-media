import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Privacy Policy | TheoMedia',
  description: 'How we handle your data and enquiries.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-bone min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-[720px]">
        <FadeIn>
          <h1 className="text-editorial-xl text-near-black mb-12">
            Privacy
          </h1>
          
          <div className="prose prose-stone max-w-none font-sans text-charcoal/90">
            <p className="text-lg mb-10 leading-relaxed">
              This privacy notice explains how TheoMedia collects and processes your personal data when you use our website or contact us about a project.
            </p>

            <h2 className="text-2xl font-display text-near-black mt-12 mb-6">What we collect</h2>
            <p className="mb-6 leading-relaxed">
              When you submit an enquiry through our contact form or via email, we collect:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone">
              <li>Your name and business name</li>
              <li>Contact details (email address, phone number)</li>
              <li>Information about your project requirements and goals</li>
            </ul>

            <h2 className="text-2xl font-display text-near-black mt-12 mb-6">How we use it</h2>
            <p className="mb-6 leading-relaxed">
              We use this information exclusively to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone">
              <li>Respond to your enquiry and provide project quotes</li>
              <li>Communicate with you during the course of a project</li>
              <li>Maintain internal records for our business operations</li>
            </ul>
            <p className="mb-8 leading-relaxed">
              We never sell your data to third parties, and we don&apos;t use it for automated marketing or newsletters unless you explicitly opt in.
            </p>

            <h2 className="text-2xl font-display text-near-black mt-12 mb-6">Your rights</h2>
            <p className="mb-8 leading-relaxed">
              You have the right to request access to the personal data we hold about you, or ask that we delete it. If you wish to exercise these rights, please contact us using the details below.
            </p>

            <h2 className="text-2xl font-display text-near-black mt-12 mb-6">Contact</h2>
            <p className="mb-8 leading-relaxed">
              If you have any questions about this privacy notice, please email us at:<br />
              <a href="mailto:hello@theomedia.co.uk" className="text-warm-accent hover:text-near-black transition-colors font-medium">
                hello@theomedia.co.uk
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
