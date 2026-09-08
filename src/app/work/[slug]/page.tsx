import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

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
    title: `${project.title} | TheoMedia Work`,
    description: project.description,
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
    <main className="bg-bone min-h-screen pt-24">
      <section className="dark-section pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <SectionLabel className="text-stone">{project.sector}</SectionLabel>
              <div className="inline-block px-3 py-1.5 border border-stone/30 rounded-full">
                <span className="text-xs font-bold text-bone tracking-widest uppercase">
                  CONCEPT / DEMONSTRATION
                </span>
              </div>
            </div>
            
            <h1 className="text-editorial-xl text-bone mb-8">
              {project.title}
            </h1>
            
            <p className="text-lg md:text-xl text-stone font-sans max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-bone py-12 md:py-20 -mt-20 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn delay={0.2}>
            <div className="w-full aspect-[16/10] bg-charcoal rounded-sm shadow-2xl relative overflow-hidden border border-near-black/10">
              <ProjectPreview url={project.demoUrl} title={project.title} />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-ivory border-y border-stone/10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <FadeIn>
              <h2 className="text-editorial-md text-near-black mb-6">The Challenge</h2>
              <p className="font-sans text-charcoal/80 leading-relaxed">
                {project.challenge || 'Elevating the digital experience to match the premium nature of the brand, creating a seamless journey from discovery to conversion while maintaining strong visual identity.'}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-editorial-md text-near-black mb-6">Creative Direction</h2>
              <p className="font-sans text-charcoal/80 leading-relaxed">
                {project.creativeDirection || 'A minimalist, typography-driven approach focusing on large imagery, subtle interactions, and a structural layout that guides the user naturally through the narrative.'}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-charcoal-section text-bone">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/3">
              <FadeIn>
                <div className="w-full max-w-[320px] mx-auto aspect-[9/16] bg-near-black rounded-[2rem] border-8 border-stone/20 shadow-2xl flex items-center justify-center">
                  <span className="font-display text-8xl text-stone/10 select-none">M</span>
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-2/3">
              <FadeIn>
                <SectionLabel className="text-stone mb-6">Experience</SectionLabel>
                <h2 className="text-editorial-lg text-bone mb-8">Customer Journey</h2>
                <p className="font-sans text-stone text-lg leading-relaxed mb-12">
                  {project.customerJourney || 'Designed with mobile-first principles, ensuring the experience is tactile, responsive, and intuitive on smaller screens without compromising the visual impact of the desktop version.'}
                </p>

                <h3 className="font-sans font-bold text-bone tracking-widest uppercase text-sm mb-6">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(project.features || ['Responsive Design', 'Fast Loading', 'Accessible UX', 'SEO Optimized']).map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-warm-accent mt-2 flex-shrink-0" />
                      <span className="font-sans text-stone">{feature}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-bone">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <FadeIn>
            <h3 className="font-sans font-bold text-near-black tracking-widest uppercase text-sm mb-8">Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {(project.tags || []).map((tag: string) => (
                <span key={tag} className="px-4 py-2 bg-ivory border border-stone/20 rounded-full font-sans text-sm text-charcoal">
                  {tag}
                </span>
              ))}
            </div>

            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-near-black text-bone font-sans font-medium tracking-widest uppercase text-sm hover:bg-warm-accent transition-colors rounded-sm"
              >
                Visit Website <span className="ml-3">→</span>
              </a>
            )}
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-stone/20 bg-ivory">
        <Link href={`/work/${nextProject.slug}`} className="block group py-24 md:py-32 transition-colors hover:bg-bone">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <FadeIn>
              <SectionLabel className="text-stone mb-6">Next Project</SectionLabel>
              <h2 className="text-editorial-lg text-near-black group-hover:text-warm-accent transition-colors mb-4">
                {nextProject.title}
              </h2>
              <p className="font-sans text-stone">
                {nextProject.sector}
              </p>
            </FadeIn>
          </div>
        </Link>
      </section>
    </main>
  );
}
