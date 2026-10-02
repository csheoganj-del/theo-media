import type { Metadata } from 'next';
import { pageMeta, breadcrumbJsonLd } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = pageMeta({
  title: 'Start a Web Design Project | UK & Ireland | TheoMedia',
  description:
    'Start a custom web design or digital systems project with TheoMedia. Independent studio for UK, Ireland and international businesses. Engagements from £2,500 / €3,000 / $3,500. Direct founder contact.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Start a Web Design Project',
            url: 'https://www.theomedia.co.uk/contact',
            description:
              'Enquire about a custom website, booking engine or business software project with TheoMedia.',
            mainEntity: {
              '@id': 'https://www.theomedia.co.uk/#organization',
            },
          },
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />
      {children}
    </>
  );
}
