import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { projects } from '@/data/projects';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export default function ProofScene() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="bg-bone text-near-black py-24 md:py-32 lg:py-40 px-5 md:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          
          <FadeIn>
            <SectionLabel>OUR PORTFOLIO</SectionLabel>
            <h2 className="text-editorial-lg text-near-black mt-6 max-w-2xl">
              THE WORK COMES FIRST.
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-20 md:gap-32 lg:gap-40">
            {featuredProjects.map((project, index) => {
              const isFullWidth = index % 2 !== 0;
              
              return (
                <FadeIn key={project.slug} className={`flex flex-col gap-6 md:gap-10 ${isFullWidth ? '' : 'lg:flex-row lg:items-center'}`}>
                  
                  <div className={`w-full aspect-[16/10] bg-charcoal relative overflow-hidden group ${isFullWidth ? '' : 'lg:w-[60%] lg:order-2'}`}>
                    <ProjectPreview url={project.demoUrl} title={project.title} />
                    <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/10 transition-colors duration-500 z-30" />
                  </div>
                  
                  <div className={`flex flex-col gap-6 ${isFullWidth ? 'max-w-3xl' : 'lg:w-[40%] lg:order-1 lg:pr-12'}`}>
                    <div>
                      <span className="text-[10px] tracking-widest font-sans font-medium uppercase text-stone mb-4 block">
                        {project.sector} · CONCEPT / DEMONSTRATION
                      </span>
                      <h3 className="font-display text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] text-near-black mb-6">
                        {project.title}
                      </h3>
                      <p className="font-sans text-[16px] md:text-[18px] text-stone leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>
                    
                    <div className="pt-4">
                      <Link 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-sans font-medium tracking-[0.1em] uppercase text-near-black border-b border-near-black/30 pb-1 hover:border-near-black transition-colors duration-300 inline-flex items-center gap-2 group"
                      >
                        VIEW EXPERIENCE
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
