import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { ProjectPreview } from '@/components/ui/ProjectPreview';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Client Case Studies & Digital Product Work | TheoMedia',
  description: 'How TheoMedia approaches digital experiences across different industries. Detailed case studies of our projects.',
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-bone text-near-black pt-32 md:pt-48 pb-24 md:pb-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        
        {/* Header */}
        <FadeIn className="max-w-4xl mb-24 md:mb-40">
          <SectionLabel>CASE STUDIES / HOW WE THINK</SectionLabel>
          <h1 className="font-display text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] leading-[1.05] mt-8 mb-8 uppercase text-near-black">
            WEBSITES BUILT AROUND REAL BUSINESS PROBLEMS.
          </h1>
          <p className="font-sans text-[16px] md:text-[20px] leading-relaxed text-stone max-w-2xl">
            These are projects showing how TheoMedia approaches different industries, 
            balances design with functionality, and solves real commercial challenges.
          </p>
        </FadeIn>

        {/* Case Studies List */}
        <div className="flex flex-col gap-24 md:gap-40 lg:gap-56">
          {projects.map((project, index) => {
            // Alternate layout for desktop
            const isEven = index % 2 === 0;
            const number = (index + 1).toString().padStart(2, '0');
            
            return (
              <FadeIn key={project.slug} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-16 lg:gap-24 items-center`}>
                
                {/* Visual */}
                <div className="w-full lg:w-[60%]">
                  <div className="w-full aspect-[16/10] bg-charcoal relative overflow-hidden group shadow-2xl border border-near-black/5">
                    <ProjectPreview url={project.demoUrl} title={project.title} />
                    <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/10 transition-colors duration-500 pointer-events-none" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center">
                  <div className="text-[10px] md:text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-stone mb-6">
                    {number} — {project.sector}
                  </div>
                  <h2 className="font-display text-[40px] md:text-[56px] leading-[1.1] mb-6 text-near-black">
                    {project.title}
                  </h2>
                  <p className="font-sans text-[15px] md:text-[17px] leading-relaxed text-stone mb-10 max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                    <Link 
                      href={`/case-studies/${project.caseStudySlug}`}
                      className="text-[12px] font-sans font-semibold tracking-[0.15em] uppercase text-near-black border-b border-near-black/30 pb-1 hover:border-near-black transition-colors"
                    >
                      READ CASE STUDY →
                    </Link>
                    <Link 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] font-sans font-medium tracking-[0.15em] uppercase text-stone border-b border-stone/30 pb-1 hover:text-near-black hover:border-near-black transition-colors"
                    >
                      VIEW LIVE DEMO ↗
                    </Link>
                  </div>
                </div>

              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}
