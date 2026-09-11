import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Bespoke Website Design | TheoMedia',
  description:
    'Brand-led commercial websites designed to create attention, trust and enquiries. Custom-built by TheoMedia for businesses across the UK and Ireland.',
};

const features = [
  { title: 'Custom Design', description: 'Every website designed from scratch. No templates, no themes, no shortcuts.' },
  { title: 'Mobile-First Build', description: 'Designed for phones first, then expanded for tablets and desktop.' },
  { title: 'Conversion Architecture', description: 'Pages structured to guide visitors toward enquiry, booking or purchase.' },
  { title: 'SEO Foundations', description: 'Technical SEO, schema markup, and Google indexing configured from day one.' },
  { title: 'CMS Integration', description: 'Edit text, images, menus and blog posts without touching code.' },
  { title: 'Performance Tuning', description: 'Fast page loads, optimised images, and excellent Core Web Vitals scores.' },
  { title: 'WhatsApp Integration', description: 'One-tap WhatsApp contact with pre-filled messages for instant enquiries.' },
  { title: 'Analytics Setup', description: 'Google Analytics and Search Console connected to track real performance.' },
];

export default function WebsitesPage() {
  return (
    <>
      <section className="bg-near-black text-bone pt-32 pb-20 md:pt-40 md:pb-28 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <SectionLabel dark>SERVICES</SectionLabel>
          <h1 className="text-editorial-xl text-bone mt-4 mb-6 max-w-[800px]">
            Website Design
          </h1>
          <p className="text-[16px] md:text-[18px] text-bone/60 leading-relaxed max-w-[560px]">
            Brand-led commercial websites designed to create attention, trust and enquiries. Built to make your business look established from day one.
          </p>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.05}>
                <div className="py-6 border-b border-near-black/10">
                  <h3 className="text-[18px] md:text-[20px] font-sans font-semibold text-near-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-stone leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-editorial-md text-near-black mb-6">
            Ready to start?
          </h2>
          <p className="text-[16px] text-stone mb-8 max-w-[480px] mx-auto">
            Tell us about your business and we&apos;ll show you what your website could become.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-near-black text-bone text-[13px] font-sans font-medium tracking-[0.1em] uppercase hover:bg-charcoal transition-colors"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </>
  );
}
