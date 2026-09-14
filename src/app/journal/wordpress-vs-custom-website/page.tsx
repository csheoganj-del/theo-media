import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import JsonLd from '@/components/seo/JsonLd';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'WordPress vs Custom Website UK (2026): Cost, Speed, SEO & Ownership',
  description:
    'Honest comparison of WordPress and custom Next.js websites for UK businesses. Maintenance, speed, security, SEO control and total cost of ownership in 2026.',
  path: '/journal/wordpress-vs-custom-website',
  type: 'article',
});

const faqs = [
  {
    question: 'Is WordPress or a custom website better for SEO in the UK?',
    answer:
      'Both can rank. WordPress often starts with plugin bloat, slow mobile pages and messy HTML. A custom Next.js site gives cleaner markup, faster Core Web Vitals and full schema control. Google rewards the faster, clearer page — not the CMS brand.',
  },
  {
    question: 'Is WordPress cheaper than a custom website?',
    answer:
      'Upfront, a cheap WordPress theme can look cheaper. Over three years, plugin licences, security retainers, hosting and rebuilds often exceed a fixed-price custom build from £895–£4,995 with no compulsory monthly agency fee.',
  },
  {
    question: 'Can I still edit a custom website myself?',
    answer:
      'Yes. Professional and Bespoke TheoMedia builds include a structured CMS for copy, menus, images and posts. You do not need WordPress to update a restaurant menu or clinic treatment list.',
  },
];

export default function WordPressVsCustomPage() {
  return (
    <div className="bg-bone min-h-screen pt-24 text-near-black">
      <JsonLd
        data={[
          articleJsonLd({
            headline: 'WordPress vs Custom Website UK (2026): Cost, Speed, SEO & Ownership',
            description: metadata.description as string,
            path: '/journal/wordpress-vs-custom-website',
            datePublished: '2026-09-14T09:00:00+00:00',
            dateModified: '2026-09-14T09:00:00+00:00',
          }),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Journal', path: '/journal' },
            { name: 'WordPress vs Custom Website', path: '/journal/wordpress-vs-custom-website' },
          ]),
        ]}
      />

      <article className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <FadeIn>
          <div className="flex items-center gap-3 text-[12px] font-mono tracking-widest text-stone uppercase mb-4">
            <span>PLATFORM COMPARISON</span>
            <span>·</span>
            <span>UPDATED SEPTEMBER 2026</span>
          </div>
          <h1 className="font-display text-[38px] md:text-[56px] lg:text-[64px] leading-[1.05] text-near-black mb-8">
            WordPress vs Custom Website: Which Should a UK Business Choose in 2026?
          </h1>
          <p className="font-sans text-[18px] md:text-[21px] text-stone leading-relaxed mb-12">
            WordPress still powers a huge share of UK business sites. That is not an argument for using it. Here is a practical comparison of WordPress and a custom-built website on cost, speed, SEO, security and ownership — without the usual agency scare tactics.
          </p>
        </FadeIn>

        <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-near-black/90 leading-relaxed">
          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">The short answer</h2>
            <p className="mb-4">
              Choose WordPress if you need a blog-heavy publishing machine, have a developer on retainer, and accept ongoing plugin maintenance. Choose a custom website if your site is a commercial asset: bookings, quotes, product storytelling, or a brand that cannot look like everyone else in the SERPs.
            </p>
            <p>
              For most independent UK restaurants, clinics, trades and retailers we speak to, WordPress is an inherited default — not a considered architecture.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">Speed and Core Web Vitals</h2>
            <p className="mb-4">
              Google uses mobile page experience as a ranking and user-experience signal. A typical WordPress stack (theme + page builder + SEO plugin + form plugin + slider) often ships hundreds of kilobytes of unused CSS and JavaScript. Custom Next.js sites ship only what the page needs and can hit sub-second LCP on UK mobile networks.
            </p>
            <p>
              If your WordPress site scores 40–60 on Lighthouse mobile, you are not “a bit slow”. You are leaking rankings and bookings to faster competitors.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">Security and maintenance</h2>
            <p className="mb-4">
              WordPress is a public attack surface. Plugins fall out of date. Agencies then sell £99–£250/month retainers to patch the stack they installed. A custom site with no plugin bazaar does not need that tax. Domain and hosting still exist; compulsory security retainers do not.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">SEO control</h2>
            <p className="mb-4">
              Yoast does not make a site rank. Clean URLs, one H1, unique titles, internal links, schema and fast HTML do. WordPress can do those things. It rarely does them well out of the box because the markup is generated by a page builder. Custom sites let us write the exact title, canonical, JSON-LD and heading structure Google and AI search engines parse.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">Total cost over three years</h2>
            <p className="mb-4">
              A £1,200 WordPress build plus £150/month maintenance is £6,600 over three years — and you still do not own a portable codebase. A TheoMedia Professional site at £2,495 with hosting of £0–£20/month is usually cheaper, faster, and fully owned. Read the{' '}
              <Link href="/journal/how-much-does-a-website-cost-uk" className="underline">
                UK website cost guide
              </Link>{' '}
              for the full breakdown.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] text-near-black mb-4">When WordPress is still the right call</h2>
            <ul className="list-disc pl-6 space-y-3 text-stone">
              <li>You publish 10+ articles a week and need a mature editorial workflow today.</li>
              <li>A staff member already administers WordPress competently.</li>
              <li>The site is an internal resource, not a high-intent commercial flagship.</li>
            </ul>
          </section>
        </div>

        <div className="mt-16 p-8 md:p-12 bg-charcoal text-bone">
          <SectionLabel dark>NEXT STEP</SectionLabel>
          <h3 className="font-display text-[26px] text-bone mt-4 mb-3">
            Replacing a slow WordPress site?
          </h3>
          <p className="font-sans text-bone/70 text-[15px] leading-relaxed mb-6">
            We migrate content, keep your domain, and rebuild on Next.js with 100% ownership.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 bg-bone text-near-black text-[12px] font-semibold tracking-wider uppercase hover:bg-ivory transition-colors">
              Start a Rebuild →
            </Link>
            <Link href="/web-design" className="px-6 py-3 border border-bone/30 text-bone text-[12px] font-semibold tracking-wider uppercase hover:border-bone transition-colors">
              Web Design Services
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
