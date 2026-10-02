import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/projects';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Selected Work & Flagship Portfolio | TheoMedia',
  description:
    'Selected web design and digital systems from TheoMedia: hospitality, automotive, healthcare, artisanal commerce, cinematography and salons. Live websites and verified studio concepts.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/work',
  },
  openGraph: {
    title: 'Selected Work & Flagship Portfolio | TheoMedia',
    description:
      'Selected web design and digital systems across hospitality, automotive, healthcare, artisanal commerce and media.',
    url: 'https://www.theomedia.co.uk/work',
    type: 'website',
  },
};

export default function WorkPage() {
  return (
    <div className="bg-warm-ivory text-primary-ink pt-32 md:pt-44 lg:pt-48 pb-28 md:pb-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Editorial Masthead */}
        <FadeIn className="max-w-4xl mb-20 md:mb-28">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-oxidised-bronze" />
            <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze font-medium">
              STUDIO ARCHIVE · 2024–2026
            </span>
          </div>
          <h1 className="font-display text-[clamp(3.5rem,7.5vw,7.5rem)] leading-[0.94] tracking-[-0.02em] uppercase text-primary-ink font-normal mb-8 select-none">
            SELECTED WORK.
          </h1>
          <p className="font-sans text-[17px] md:text-[20px] leading-relaxed text-secondary-text max-w-2xl font-normal">
            Commissioned client platforms and self-initiated studio concepts. Engineered with architectural restraint, high-speed modern performance, and zero platform lock-in.
          </p>
        </FadeIn>

        {/* Large Editorial Compositions */}
        <div className="flex flex-col gap-24 md:gap-36 lg:gap-40">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <FadeIn key={project.slug} className="group border-t border-border-rule pt-10 md:pt-14">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Browser Preview Frame */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-6' : ''}`}>
                    <div className="w-full aspect-[16/10] bg-[#161513] relative overflow-hidden rounded-[1px] border border-border-rule shadow-lg transition-all duration-500 group-hover:border-oxidised-bronze/50">
                      <ProjectPreview
                        url={project.demoUrl}
                        title={`${project.title} Preview`}
                        previewUrl={project.previewUrl}
                      />
                    </div>
                  </div>

                  {/* Editorial Narrative */}
                  <div className={`lg:col-span-5 flex flex-col gap-6 ${isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center justify-between border-b border-border-rule pb-3 text-[11px] font-mono tracking-[0.14em] uppercase">
                      <div className="flex items-center gap-2">
                        <span className="text-oxidised-bronze font-medium">{project.indexNumber}</span>
                        <span className="text-border-rule">/</span>
                        <span className="text-secondary-text">{project.sector}</span>
                      </div>
                      <span className="text-[10px] text-oxidised-bronze border border-oxidised-bronze/30 px-2 py-0.5 rounded-[1px] bg-subtle-accent-bg/40">
                        {project.classification}
                      </span>
                    </div>

                    <Link href={`/work/${project.slug}`}>
                      <h2 className="font-display text-[clamp(2.2rem,3.6vw,3.6rem)] leading-[1.02] text-primary-ink group-hover:text-dark-accent transition-colors uppercase font-normal">
                        {project.title}
                      </h2>
                    </Link>

                    <p className="font-sans text-secondary-text text-[15px] md:text-[17px] leading-relaxed">
                      {project.conciseSentence || project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.slice(0, 3).map((tag: string) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono tracking-wider uppercase text-muted-text px-2.5 py-1 border border-border-rule rounded-[1px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-border-rule">
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-ink text-warm-ivory text-[11px] font-mono tracking-[0.14em] uppercase hover:bg-dark-accent transition-colors duration-200 rounded-[1px]"
                      >
                        <span>{project.actionLabel}</span>
                      </Link>

                      {project.hasCaseStudy && (
                        <Link
                          href={`/case-studies/${project.caseStudySlug}`}
                          className="editorial-underline text-[11px] font-mono tracking-[0.14em] uppercase text-secondary-text hover:text-primary-ink"
                        >
                          <span>Read Case Study</span>
                          <span className="text-oxidised-bronze">→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Case Studies Link Strip */}
        <FadeIn className="pt-24 mt-28 border-t border-border-rule flex flex-col sm:flex-row items-center justify-between gap-6 text-[12px] font-mono tracking-[0.14em] uppercase text-muted-text">
          <span>COMPLETE ARCHIVE OF 11 PROVEN PLATFORMS</span>
          <Link
            href="/case-studies"
            className="editorial-underline text-primary-ink hover:text-oxidised-bronze font-medium"
          >
            <span>Read In-Depth Case Studies</span>
            <span>→</span>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
