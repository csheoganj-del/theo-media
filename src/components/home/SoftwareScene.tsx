'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import { softwareProducts } from '@/data/software';

export default function SoftwareScene() {
  return (
    <section className="cinematic-dark bg-[#11110F] text-[#F2EEE6] py-28 md:py-36 lg:py-44 px-5 md:px-8 lg:px-12 border-b border-[#262420] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-[#262420] mb-14 md:mb-20">
          <FadeIn>
            <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-[#A98864] font-medium block mb-3">
              05 / THEOMEDIA PRODUCT · ORIGINAL SOFTWARE
            </span>
            <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[1.02] text-[#F2EEE6] uppercase font-normal">
              THE LEDGERS.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-[#AAA49A] text-[15px] md:text-[17px] max-w-md leading-relaxed">
              Modern engineering beneath refined art direction. Local-first commercial tools built for speed, privacy and operational independence.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {softwareProducts.map((product, index) => (
            <FadeIn key={product.slug} delay={index * 0.08}>
              <Link
                href={`/software/${product.slug}`}
                className="group flex flex-col h-full p-5 bg-[#161513] border border-[#262420] rounded-[1px] hover:border-[#A98864]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.14em] text-[#AAA49A]/70 uppercase mb-4 pb-3 border-b border-[#262420]">
                  <span>0{index + 1}</span>
                  <span className="text-[#A98864] text-[10px]">{product.status}</span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden bg-[#1C1A18] mb-5 border border-[#262420]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>

                <h3 className="font-display text-[26px] leading-tight text-[#F2EEE6] group-hover:text-[#A98864] transition-colors mb-2">
                  {product.name}
                </h3>

                <p className="font-sans text-[14px] text-[#AAA49A] leading-relaxed mb-6 flex-grow">
                  {product.tagline}
                </p>

                <div className="mt-auto pt-4 border-t border-[#262420] flex items-center justify-between text-[11px] font-mono tracking-[0.14em] uppercase text-[#AAA49A] group-hover:text-[#F2EEE6]">
                  <span>Inspect System</span>
                  <span className="text-[#A98864] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14 pt-8 border-t border-[#262420] flex items-center justify-between">
          <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-[#AAA49A]">
            LOCAL-FIRST ARCHITECTURE · ZERO CLOUD TELEMETRY
          </span>
          <Link
            href="/software"
            className="editorial-underline text-[12px] font-mono tracking-[0.16em] uppercase text-[#F2EEE6] hover:text-[#A98864]"
          >
            <span>All Original Software</span>
            <span>→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
