import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/projects';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Work | TheoMedia',
  description: 'Concept demonstrations and production-grade builds across hospitality, trades, healthcare and ecommerce.',
};

export default function WorkPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 pb-32">
      {/* Hero Section */}
      <section className="bg-near-black py-24 md:py-32 mb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <FadeIn>
            <SectionLabel className="text-bone/50 mb-6">Portfolio</SectionLabel>
            <h1 className="text-editorial-xl text-bone mb-8 max-w-4xl uppercase">
              THE WORK
            </h1>
            <p className="text-[18px] md:text-[20px] text-bone/70 max-w-2xl font-sans leading-relaxed">
              Concept demonstrations and production-grade builds across hospitality, trades, healthcare and ecommerce.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <div className="group flex flex-col h-full border border-near-black/10 p-4 md:p-6 bg-ivory hover:border-near-black/30 transition-colors duration-300">
                <Link href={`/work/${project.slug}`} className="block relative aspect-[16/10] bg-charcoal w-full mb-6 overflow-hidden">
                  <div className="w-full aspect-[16/10] bg-charcoal relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 ease-out border border-near-black/10">
                    <ProjectPreview url={project.demoUrl} title={project.title} />
                    <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/10 transition-colors duration-500 z-30" />
                  </div>
                </Link>
                
                <div className="flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-sans font-medium tracking-[0.2em] text-stone uppercase">{project.sector}</span>
                    
                  </div>
                  
                  <Link href={`/work/${project.slug}`}>
                    <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-4 group-hover:text-stone transition-colors leading-tight">
                      {project.title}
                    </h2>
                  </Link>
                  
                  <p className="font-sans text-[15px] text-stone mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags?.map((tag: string) => (
                      <span key={tag} className="text-[10px] font-sans px-3 py-1 border border-stone/30 text-stone uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-near-black/10 flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <Link 
                      href={`/case-studies/${project.caseStudySlug}`}
                      className="text-[11px] font-sans font-semibold tracking-[0.15em] uppercase text-near-black hover:text-stone transition-colors inline-flex items-center"
                    >
                      READ CASE STUDY →
                    </Link>
                    <Link 
                      href={`/work/${project.slug}`}
                      className="text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-stone hover:text-near-black transition-colors inline-flex items-center"
                    >
                      VIEW EXPERIENCE ↗
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* View All Case Studies Restrained Link */}
        <FadeIn className="flex justify-center border-t border-near-black/10 pt-16">
          <Link 
            href="/case-studies"
            className="text-[13px] font-sans font-medium tracking-[0.15em] uppercase text-stone hover:text-near-black border-b border-stone/30 hover:border-near-black pb-1 transition-all duration-300"
          >
            VIEW ALL CASE STUDIES →
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
