import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMeta } from '@/lib/seo';
import { getLocation } from '@/data/locations';
import LocationLanding from '@/components/seo/LocationLanding';

const location = getLocation('web-design-edinburgh');

export const metadata: Metadata = location
  ? pageMeta({
      title: location.title,
      description: location.description,
      path: `/${location.slug}`,
    })
  : {};

export default function WebDesignEdinburghPage() {
  if (!location) notFound();
  return <LocationLanding location={location} />;
}
