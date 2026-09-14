'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { projects, projectCategories } from '@/data/projects';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export default function WorkScene() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Ensure active index is valid when filtered
  const activeProject = filteredProjects[activeProjectIndex] || filteredProjects[0] || projects[0];

  return (
    <section className="bg-charcoal text-bone py-24 md:py-32 lg:py-40 px-5 md:px-8 lg:px-12 overflow-hidden border-t border-bone/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <FadeIn>
              <SectionLabel className="text-bone/50">FLAGSHIP PORTFOLIO</SectionLabel>
              <h2 className="text-editorial-lg text-bone mt-6">
                WEBSITES PEOPLE REMEMBER.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-sans text-stone text-[15px] md:text-[17px] max-w-md leading-relaxed">
                Every project is founder-engineered with custom architecture, sub-second load times, and zero monthly template fees.
              </p>
            </FadeIn>
          </div>

          {/* Category Filter Pills */}
          <FadeIn delay={0.2} className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {projectCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActiveProjectIndex(0);
                  }}
                  className={`px-4 py-2 text-[11px] font-sans uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 rounded-sm border ${
                    isActive
                      ? 'bg-bone text-near-black border-bone font-semibold'
                      : 'bg-transparent text-bone/60 border-bone/10 hover:border-bone/30 hover:text-bone'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </FadeIn>

          {/* Desktop Split View */}
          <div className="hidden lg:grid grid-cols-12 gap-12 lg:gap-16 relative">
            {/* List Column */}
            <div className="col-span-5 flex flex-col border-t border-bone/10">
              {filteredProjects.map((project, index) => {
                const isCurrent = activeProject?.slug === project.slug;
                return (
                  <div
                    key={project.slug}
                    className={`py-7 border-b border-bone/10 cursor-pointer transition-all duration-300 flex items-center gap-6 group ${
                      isCurrent ? 'text-bone pl-2' : 'text-bone/40 hover:text-bone/80'
                    }`}
                    onMouseEnter={() => setActiveProjectIndex(index)}
                    onClick={() => setActiveProjectIndex(index)}
                  >
                    <span className="text-xs font-mono tracking-widest text-warm-accent/80 w-8">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="flex-grow">
                      <h3 className="font-display text-3xl xl:text-4xl group-hover:text-bone transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-[10px] tracking-widest font-sans uppercase text-warm-accent border border-warm-accent/20 px-2 py-0.5 rounded-sm">
                      {project.sector}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Sticky Preview Column */}
            <div className="col-span-7 sticky top-28 h-auto pb-10">
              <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.div
                    key={activeProject.slug}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-6 bg-near-black/50 p-6 xl:p-8 rounded-sm border border-bone/10 shadow-2xl backdrop-blur-sm"
                  >
                    <div className="w-full aspect-[16/10] bg-near-black relative overflow-hidden rounded-sm border border-bone/10 shadow-xl">
                      <ProjectPreview url={activeProject.demoUrl} title={`${activeProject.title} Website Preview`} previewUrl={activeProject.previewUrl} />
                    </div>

                    <div className="flex flex-col gap-5 pt-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] tracking-widest font-sans uppercase bg-warm-accent/15 text-warm-accent px-2.5 py-0.5 rounded-sm font-medium">
                              {activeProject.sector}
                            </span>
                            <span className="text-[9px] tracking-widest font-sans uppercase border border-bone/20 text-bone/60 px-2 py-0.5 rounded-sm">
                              {activeProject.badge}
                            </span>
                          </div>
                          <h4 className="font-display text-3xl xl:text-4xl text-bone">{activeProject.title}</h4>
                        </div>

                        <div className="flex flex-col items-end gap-2.5">
                          {activeProject.hasCaseStudy && (
                            <Link
                              href={`/case-studies/${activeProject.caseStudySlug}`}
                              className="text-[11px] tracking-widest font-sans uppercase border-b border-bone/40 pb-0.5 hover:border-bone transition-colors text-bone"
                            >
                              Case Study →
                            </Link>
                          )}
                          <Link
                            href={activeProject.previewUrl || activeProject.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] tracking-widest font-sans uppercase bg-bone text-near-black px-4 py-2 font-medium hover:bg-ivory transition-colors rounded-sm inline-flex items-center gap-1.5"
                          >
                            <span>Live Site</span>
                            <span>↗</span>
                          </Link>
                        </div>
                      </div>

                      <p className="font-sans text-bone/70 text-[15px] leading-relaxed">
                        {activeProject.shortDescription || activeProject.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1 border-t border-bone/10">
                        {activeProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] tracking-wider uppercase bg-bone/5 border border-bone/10 px-2.5 py-1 text-bone/60 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Stacked View */}
          <div className="flex flex-col gap-16 lg:hidden">
            {filteredProjects.map((project) => (
              <FadeIn key={project.slug} className="flex flex-col gap-6 bg-near-black/40 p-5 rounded-sm border border-bone/10">
                <div className="w-full aspect-[16/10] bg-near-black relative overflow-hidden rounded-sm border border-bone/10">
                  <ProjectPreview url={project.demoUrl} title={`${project.title} Website Preview`} previewUrl={project.previewUrl} />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] tracking-widest font-sans font-medium uppercase bg-warm-accent/15 text-warm-accent px-2 py-0.5 rounded-sm">
                      {project.sector}
                    </span>
                    <span className="text-[9px] tracking-widest font-sans uppercase border border-bone/20 px-2 py-0.5 text-bone/60 rounded-sm">
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-[28px] md:text-[34px] leading-tight text-bone">
                    {project.title}
                  </h3>
                  <p className="font-sans text-bone/60 text-[14px] leading-relaxed">
                    {project.shortDescription || project.description}
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    {project.hasCaseStudy && (
                      <Link
                        href={`/case-studies/${project.caseStudySlug}`}
                        className="text-[11px] tracking-widest font-sans uppercase border-b border-bone/30 pb-0.5 hover:border-bone transition-colors text-bone"
                      >
                        Read Case Study →
                      </Link>
                    )}
                    <Link
                      href={project.previewUrl || project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] tracking-widest font-sans uppercase bg-bone text-near-black px-4 py-2 font-medium hover:bg-ivory transition-colors rounded-sm inline-flex items-center gap-1.5 ml-auto"
                    >
                      <span>Live Site</span>
                      <span>↗</span>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* View All Case Studies Footer */}
          <FadeIn className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-bone/10 mt-4">
            <span className="text-[12px] font-mono tracking-widest uppercase text-bone/40">
              Showing {filteredProjects.length} of {projects.length} Engineered Platforms
            </span>
            <Link
              href="/work"
              className="text-[12px] font-sans font-medium tracking-[0.15em] uppercase text-bone border-b border-bone/30 hover:border-bone pb-1 transition-all duration-300"
            >
              Explore Full Studio Archive →
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
