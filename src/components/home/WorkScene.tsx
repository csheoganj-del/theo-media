'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { projects } from '@/data/projects';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export default function WorkScene() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="bg-charcoal text-bone py-24 md:py-32 lg:py-40 px-5 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-12 lg:gap-20">
          <FadeIn>
            <SectionLabel className="text-bone/50">SELECTED WORK</SectionLabel>
            <h2 className="text-editorial-lg text-bone mt-6">
              WEBSITES PEOPLE REMEMBER.
            </h2>
          </FadeIn>

          <div className="hidden lg:grid grid-cols-12 gap-12 lg:gap-20 relative">
            {/* List Column */}
            <div className="col-span-5 flex flex-col border-t border-bone/10">
              {projects.map((project, index) => (
                <div 
                  key={project.slug}
                  className={`py-8 border-b border-bone/10 cursor-pointer transition-colors duration-300 flex items-center gap-6 group ${activeProject === index ? 'text-bone' : 'text-bone/40'}`}
                  onMouseEnter={() => setActiveProject(index)}
                >
                  <span className="text-xs tracking-widest font-sans w-8">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="flex-grow">
                    <h3 className="font-display text-4xl group-hover:text-bone transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs tracking-widest font-sans uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-warm-accent">
                    {project.sector}
                  </span>
                </div>
              ))}
            </div>

            {/* Preview Column */}
            <div className="col-span-7 sticky top-32 h-[80vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-8 h-full"
                >
                  <div className="w-full aspect-[16/10] bg-near-black relative overflow-hidden group shadow-2xl">
                    <ProjectPreview url={projects[activeProject].demoUrl} title={projects[activeProject].title} />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] tracking-widest font-sans uppercase border border-bone/20 px-2.5 py-0.5 text-warm-accent mb-2.5 inline-block">
                          {projects[activeProject].badge}
                        </span>
                        <h4 className="font-display text-4xl">{projects[activeProject].title}</h4>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                        {projects[activeProject].hasCaseStudy ? (
                          <>
                            <Link 
                              href={`/case-studies/${projects[activeProject].caseStudySlug}`}
                              className="text-[11px] tracking-widest font-sans uppercase border-b border-bone/30 pb-1 hover:border-bone transition-colors text-bone"
                            >
                              READ CASE STUDY →
                            </Link>
                            <Link 
                              href={projects[activeProject].demoUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] tracking-widest font-sans uppercase border-b border-bone/30 pb-1 hover:border-bone transition-colors text-bone/60 hover:text-bone"
                            >
                              VIEW LIVE WEBSITE ↗
                            </Link>
                          </>
                        ) : (
                          <Link 
                            href={projects[activeProject].demoUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] tracking-widest font-sans uppercase border-b border-warm-accent pb-1 hover:border-bone transition-colors text-bone font-medium"
                          >
                            VIEW LIVE WEBSITE ↗
                          </Link>
                        )}
                      </div>
                    </div>
                    <p className="font-sans text-bone/60 max-w-xl text-[15px] leading-relaxed">
                      {projects[activeProject].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {projects[activeProject].tags.map(tag => (
                        <span key={tag} className="text-[10px] tracking-wider uppercase border border-bone/10 px-3 py-1 text-bone/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Stacked View */}
          <div className="flex flex-col gap-24 lg:hidden">
            {projects.map((project) => (
              <FadeIn key={project.slug} className="flex flex-col gap-8">
                <div className="w-full aspect-[16/10] bg-near-black relative overflow-hidden group shadow-2xl">
                  <ProjectPreview url={project.demoUrl} title={project.title} />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-widest font-sans font-medium uppercase text-warm-accent">
                      {project.sector}
                    </span>
                    <span className="text-[9px] tracking-widest font-sans uppercase border border-bone/20 px-2 py-0.5 text-bone/60">
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-[32px] md:text-[40px] leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-bone/60 text-[15px] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-col gap-4 self-start mt-2">
                    {project.hasCaseStudy ? (
                      <>
                        <Link 
                          href={`/case-studies/${project.caseStudySlug}`}
                          className="text-[11px] tracking-widest font-sans uppercase border-b border-bone/30 pb-1 hover:border-bone transition-colors text-bone inline-flex items-center"
                        >
                          READ CASE STUDY →
                        </Link>
                        <Link 
                          href={project.demoUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] tracking-widest font-sans uppercase border-b border-bone/30 pb-1 hover:border-bone transition-colors text-bone/60 inline-flex items-center"
                        >
                          VIEW LIVE WEBSITE ↗
                        </Link>
                      </>
                    ) : (
                      <Link 
                        href={project.demoUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] tracking-widest font-sans uppercase border-b border-warm-accent pb-1 hover:border-bone transition-colors text-bone inline-flex items-center font-medium"
                      >
                        VIEW LIVE WEBSITE ↗
                      </Link>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* View All Case Studies Restrained Link */}
          <FadeIn className="pt-12 md:pt-20 flex justify-center lg:justify-end border-t border-bone/10 mt-8">
            <Link 
              href="/case-studies"
              className="text-[12px] font-sans font-medium tracking-[0.15em] uppercase text-bone/70 hover:text-bone border-b border-bone/20 hover:border-bone pb-1 transition-all duration-300"
            >
              VIEW ALL CASE STUDIES →
            </Link>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
