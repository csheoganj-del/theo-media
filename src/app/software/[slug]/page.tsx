import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import JsonLd from '@/components/seo/JsonLd';
import LicenseBuy from '@/components/software/LicenseBuy';
import {
  PRODUCTS_SITE,
  getSoftware,
  otherSoftware,
  softwareProducts,
  softwareUrl,
} from '@/data/software';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return softwareProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getSoftware(slug);
  if (!product) return { title: 'Software | Gurjar' };
  const url = softwareUrl(product.slug);
  return {
    title: `${product.name} | Gurjar`,
    description: product.note,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | Gurjar`,
      description: product.tagline,
      url,
      type: 'website',
      images: [{ url: product.image, width: 1200, height: 900, alt: product.name }],
    },
  };
}

export default async function SoftwareProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getSoftware(slug);
  if (!product) notFound();
  const others = otherSoftware(product.slug);
  const mail = `mailto:${PRODUCTS_SITE.email}?subject=${encodeURIComponent(
    product.status === 'forthcoming' ? product.name + ' first access' : product.name,
  )}`;
  const primaryHref = product.checkout
    ? '#buy'
    : product.downloadUrl || mail;
  const primaryLabel = product.checkout
    ? product.buyLabel
    : product.downloadLabel || product.buyLabel;

  return (
    <main className="bg-bone min-h-screen pt-24 text-near-black">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: product.name,
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: product.platforms,
          description: product.note,
          url: softwareUrl(product.slug),
          image: product.image,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability:
              product.status === 'available'
                ? 'https://schema.org/InStock'
                : product.status === 'preview'
                  ? 'https://schema.org/LimitedAvailability'
                  : 'https://schema.org/PreOrder',
            url: softwareUrl(product.slug),
          },
          publisher: {
            '@type': 'Organization',
            name: PRODUCTS_SITE.name,
            url: PRODUCTS_SITE.url,
          },
        }}
      />

      <section className="grid min-h-[70vh] lg:grid-cols-2 bg-near-black text-bone">
        <div className="relative min-h-[42vh] lg:min-h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-end px-5 py-12 sm:px-10 lg:px-14 lg:py-28">
          <FadeIn>
            <SectionLabel dark>
              GURJAR · {product.status} · {product.platforms}
            </SectionLabel>
            <p className="mt-6 font-display italic text-xl text-bone/70">{product.tagline}</p>
            <h1 className="mt-2 font-display text-[48px] md:text-[72px] leading-[0.95] text-bone">
              {product.name}
            </h1>
            <p className="mt-4 font-sans text-[11px] tracking-[0.22em] uppercase text-bone/50">
              {product.priceLabel}
            </p>
            <p className="mt-6 max-w-md font-sans text-[16px] leading-relaxed text-bone/75">
              {product.note}
            </p>
            <p className="mt-6 max-w-md border-l border-bone/30 pl-4 font-sans text-sm leading-relaxed text-bone/60">
              {product.recommendation}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={primaryHref}
                className="inline-flex items-center bg-bone text-near-black px-6 py-3 font-sans text-[12px] tracking-[0.2em] uppercase hover:bg-ivory transition-colors"
              >
                {primaryLabel}
              </a>
              {product.downloadUrl && product.checkout ? (
                <a
                  href={product.downloadUrl}
                  className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone/70 hover:text-bone"
                >
                  {product.downloadLabel}
                </a>
              ) : null}
              <Link
                href="/software"
                className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone/70 hover:text-bone"
              >
                All ledgers
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>On this machine</SectionLabel>
            <h2 className="font-display text-[36px] md:text-[48px] mt-4 mb-10">What it keeps local.</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {product.features.map((feature) => (
              <div key={feature} className="border border-near-black/10 bg-ivory p-6">
                <div className="w-1.5 h-1.5 rounded-full bg-warm-accent mb-4" />
                <p className="font-sans text-[15px] text-charcoal leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-sans text-sm text-stone">
            Home:{' '}
            <a href={PRODUCTS_SITE.url} className="underline underline-offset-4">
              {PRODUCTS_SITE.url.replace('https://', '')}
            </a>
            . Licenses and support from the same address.
          </p>
        </div>
      </section>

      {product.checkout ? <LicenseBuy /> : null}

      <section className="border-t border-near-black/10 px-5 md:px-8 lg:px-12 py-20 bg-ivory">
        <div className="max-w-[1440px] mx-auto">
          <SectionLabel>The other ledgers</SectionLabel>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((item) => (
              <Link key={item.slug} href={`/software/${item.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 30vw, 100vw"
                  />
                </div>
                <p className="mt-3 font-sans text-[10px] tracking-[0.22em] uppercase text-stone">
                  {item.status}
                </p>
                <h3 className="font-display text-2xl text-near-black">{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
