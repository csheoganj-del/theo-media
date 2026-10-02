import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { MobilePreview } from "@/components/ui/MobilePreview";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import FadeIn from '@/components/ui/FadeIn';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';
import { SITE } from '@/lib/constants';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | TheoMedia',
    };
  }

  return {
    title: `${project.title} | ${project.sector} | TheoMedia`,
    description: project.description,
    alternates: {
      canonical: `https://www.theomedia.co.uk/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${project.sector} | TheoMedia`,
      description: project.description,
      url: `https://www.theomedia.co.uk/work/${project.slug}`,
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  
  if (currentIndex === -1) {
    notFound();
  }
  
  const project = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="bg-warm-ivory min-h-screen text-primary-ink">
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            url: `${SITE.url}/work/${project.slug}`,
            creator: { '@id': `${SITE.url}/#organization` },
            about: project.sector,
            keywords: project.tags.join(', '),
          },
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
            { name: project.title, path: `/work/${project.slug}` },
          ]),
        ]}
      />

      {/* Cinematic Dark Hero Header */}
      <section className="cinematic-dark bg-[#11110F] text-[#F2EEE6] pt-32 pb-36 md:pt-40 md:pb-48 px-5 md:px-8 lg:px-12 border-b border-[#262420]">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 text-[11px] font-mono tracking-[0.14em] uppercase">
              <div className="flex items-center gap-3">
                <span className="text-[#A98864] font-medium">{project.indexNumber}</span>
                <span className="text-[#AAA49A]">/</span>
                <span className="text-[#AAA49A]">{project.sector}</span>
              </div>
              <span className="px-3 py-1 border border-[#A98864]/30 rounded-[1px] text-[#A98864] bg-[#A98864]/5 self-start sm:self-auto">
                {project.classification}
              </span>
            </div>
            
            <h1 className="font-display text-[clamp(2.8rem,6vw,6rem)] leading-[0.98] text-[#F2EEE6] uppercase font-normal mb-8 max-w-4xl">
              {project.title}
            </h1>
            
            <p className="font-sans text-[17px] md:text-[20px] text-[#AAA49A] max-w-3xl leading-relaxed">
              {project.conciseSentence || project.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overlapping Browser Preview */}
      <section className="py-12 md:py-20 -mt-24 md:-mt-32 relative z-10 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <FadeIn delay={0.15}>
            <div className="w-full aspect-[16/10] bg-[#161513] rounded-[1px] shadow-2xl relative overflow-hidden border border-[#262420]">
              <ProjectPreview
                url={project.demoUrl}
                title={`${project.title} Preview`}
                previewUrl={project.previewUrl}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Challenge & Creative Direction Grid */}
      <section className="py-20 md:py-28 bg-soft-paper border-y border-border-rule px-5 md:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <FadeIn>
              <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-oxidised-bronze font-medium block mb-2">
                01 / THE COMMERCIAL PROBLEM
              </span>
              <h2 className="font-display text-[28px] md:text-[34px] leading-tight text-primary-ink mb-4 uppercase font-normal">
                The Challenge
              </h2>
              <p className="font-sans text-secondary-text text-[15px] md:text-[16px] leading-relaxed">
                {project.challenge || 'Elevating the digital experience to match the premium nature of the brand, creating a seamless journey from discovery to conversion while maintaining strong visual identity.'}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-oxidised-bronze font-medium block mb-2">
                02 / ART DIRECTION
              </span>
              <h2 className="font-display text-[28px] md:text-[34px] leading-tight text-primary-ink mb-4 uppercase font-normal">
                Creative Direction
              </h2>
              <p className="font-sans text-secondary-text text-[15px] md:text-[16px] leading-relaxed">
                {project.creativeDirection || 'A minimalist, typography-driven approach focusing on large imagery, subtle interactions, and a structural layout that guides the user naturally through the narrative.'}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mobile Experience Showcase */}
      <section className="py-24 md:py-32 bg-[#11110F] text-[#F2EEE6] border-b border-[#262420] px-5 md:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            <div className="w-full lg:w-1/3 flex justify-center">
              <FadeIn>
                <MobilePreview 
                  url={project.demoUrl} 
                  title={project.title} 
                  previewUrl={project.previewUrl} 
                />
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
              <FadeIn>
                <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-[#A98864] font-medium block mb-2">
                  03 / MOBILE ARCHITECTURE
                </span>
                <h2 className="font-display text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.02] text-[#F2EEE6] uppercase font-normal mb-4">
                  Customer Journey
                </h2>
                <p className="font-sans text-[#AAA49A] text-[16px] leading-relaxed mb-8">
                  {project.customerJourney || 'Designed with mobile-first principles, ensuring the experience is tactile, responsive, and intuitive on smaller screens without compromising the visual impact of the desktop version.'}
                </p>

                <h3 className="font-mono text-[11px] text-[#A98864] tracking-[0.16em] uppercase mb-4">
                  Key Systems &amp; Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(project.features || ['Responsive Design', 'Fast Loading', 'Accessible UX', 'SEO Optimized']).map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-[#161513] border border-[#262420] rounded-[1px]">
                      <span className="text-[#A98864] font-mono text-[11px]">—</span>
                      <span className="font-sans text-[14px] text-[#AAA49A]">{feature}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Direct Action */}
      <section className="py-20 md:py-28 bg-warm-ivory text-primary-ink px-5 md:px-8 lg:px-12 border-b border-border-rule">
        <div className="max-w-[900px] mx-auto text-center">
          <FadeIn>
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-oxidised-bronze font-medium block mb-4">
              04 / TECHNICAL ARCHITECTURE
            </span>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {(project.tags || []).map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-soft-paper border border-border-rule rounded-[1px] font-mono text-[11px] text-secondary-text uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-ink text-warm-ivory font-mono font-medium tracking-[0.14em] uppercase text-[12px] hover:bg-dark-accent transition-colors rounded-[1px]"
              >
                <span>{project.actionLabel}</span>
              </a>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Next Project Footer */}
      <section className="bg-soft-paper">
        <Link href={`/work/${nextProject.slug}`} className="block group py-24 md:py-32 transition-colors hover:bg-warm-ivory border-b border-border-rule">
          <div className="max-w-[900px] mx-auto px-5 md:px-8 lg:px-12 text-center">
            <FadeIn>
              <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-oxidised-bronze font-medium block mb-4">
                Next Project ({nextProject.indexNumber})
              </span>
              <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] text-primary-ink group-hover:text-dark-accent transition-colors uppercase font-normal mb-3">
                {nextProject.title}
              </h2>
              <p className="font-mono text-[12px] uppercase tracking-wider text-muted-text">
                {nextProject.classification} · {nextProject.sector}
              </p>
            </FadeIn>
          </div>
        </Link>
      </section>
    </div>
  );
}
