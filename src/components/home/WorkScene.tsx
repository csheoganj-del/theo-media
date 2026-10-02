'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import { projects, projectCategories, Project } from '@/data/projects';
import { ProjectPreview } from '@/components/ui/ProjectPreview';

export default function WorkScene() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="selected-work"
      className="cinematic-dark bg-[#11110F] text-[#F2EEE6] py-28 md:py-36 lg:py-44 px-5 md:px-8 lg:px-12 border-t border-b border-[#262420] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 md:pb-16 border-b border-[#262420] mb-16 md:mb-20">
          <FadeIn>
            <span className="text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-[#A98864] font-medium block mb-3">
              01 / SELECTED WORK
            </span>
            <h2 className="font-display text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.98] text-[#F2EEE6] uppercase font-normal">
              SELECTED WORK.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-[#AAA49A] text-[15px] md:text-[17px] max-w-md leading-relaxed">
              Independent digital experiences developed around real commercial problems across hospitality, automotive, healthcare, commerce and creative industries.
            </p>
          </FadeIn>
        </div>

        {/* Minimal Category Filter Strip */}
        <FadeIn delay={0.15} className="flex items-center gap-2 overflow-x-auto pb-4 mb-16 md:mb-24 scrollbar-none border-b border-[#262420]/60">
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-[11px] font-mono uppercase tracking-[0.14em] whitespace-nowrap transition-all duration-200 rounded-[1px] border ${
                  isActive
                    ? 'bg-[#F2EEE6] text-[#11110F] border-[#F2EEE6] font-medium'
                    : 'bg-transparent text-[#AAA49A] border-[#262420] hover:border-[#A98864]/50 hover:text-[#F2EEE6]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </FadeIn>

        {/* Editorial Project Compositions (Alternating Rhythm) */}
        <div className="flex flex-col gap-24 md:gap-36 lg:gap-44">
          {filteredProjects.map((project: Project, index: number) => {
            const isEven = index % 2 === 1;
            const isFullWidthLead = index === 0;

            if (isFullWidthLead && selectedCategory === 'all') {
              // Layout 1: Dramatic Lead Composition (Full Width)
              return (
                <FadeIn key={project.slug} className="flex flex-col gap-8 group">
                  {/* Metadata Header */}
                  <div className="flex items-center justify-between border-b border-[#262420] pb-4 text-[11px] font-mono tracking-[0.14em] uppercase">
                    <div className="flex items-center gap-3">
                      <span className="text-[#A98864] font-medium">{project.indexNumber}</span>
                      <span className="text-[#AAA49A]">/</span>
                      <span className="text-[#AAA49A]">{project.sector}</span>
                    </div>
                    <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#A98864]">
                      {project.classificationLabel}
                    </span>
                  </div>

                  {/* Large Browser Preview */}
                  <div className="w-full aspect-[16/10] max-h-[720px] bg-[#161513] relative overflow-hidden rounded-[1px] border border-[#262420] shadow-2xl transition-all duration-500 group-hover:border-[#A98864]/40">
                    <ProjectPreview
                      url={project.demoUrl}
                      title={`${project.title} Preview`}
                      previewUrl={project.previewUrl}
                    />
                  </div>

                  {/* Editorial Details Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pt-2">
                    <div className="lg:col-span-6">
                      <h3 className="font-display text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[0.98] text-[#F2EEE6] uppercase font-normal">
                        {project.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                      <p className="font-sans text-[#AAA49A] text-[16px] md:text-[18px] leading-relaxed">
                        {project.conciseSentence || project.shortDescription}
                      </p>

                      <div className="flex flex-wrap items-center gap-6 pt-2">
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F2EEE6] text-[#11110F] text-[11px] font-mono tracking-[0.14em] uppercase hover:bg-white transition-colors duration-200 rounded-[1px]"
                        >
                          <span>{project.actionLabel}</span>
                        </Link>

                        {project.hasCaseStudy && (
                          <Link
                            href={`/case-studies/${project.caseStudySlug}`}
                            className="editorial-underline text-[11px] font-mono tracking-[0.14em] uppercase text-[#AAA49A] hover:text-[#F2EEE6]"
                          >
                            <span>Read Sector Study</span>
                            <span className="text-[#A98864]">→</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            }

            // Layout 2 & 3: Alternating 2-Column Editorial Compositions
            return (
              <FadeIn key={project.slug} className="group">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Browser Preview Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-6' : ''}`}>
                    <div className="flex items-center justify-between border-b border-[#262420] pb-3 mb-4 text-[11px] font-mono tracking-[0.14em] uppercase lg:hidden">
                      <span className="text-[#A98864] font-medium">{project.indexNumber} / {project.sector}</span>
                      <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#A98864]">
                        {project.classificationLabel}
                      </span>
                    </div>

                    <div className="w-full aspect-[16/10] bg-[#161513] relative overflow-hidden rounded-[1px] border border-[#262420] shadow-xl transition-all duration-500 group-hover:border-[#A98864]/40">
                      <ProjectPreview
                        url={project.demoUrl}
                        title={`${project.title} Preview`}
                        previewUrl={project.previewUrl}
                      />
                    </div>
                  </div>

                  {/* Editorial Narrative Column */}
                  <div className={`lg:col-span-5 flex flex-col gap-6 ${isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="hidden lg:flex items-center justify-between border-b border-[#262420] pb-3 text-[11px] font-mono tracking-[0.14em] uppercase">
                      <div className="flex items-center gap-2">
                        <span className="text-[#A98864] font-medium">{project.indexNumber}</span>
                        <span className="text-[#AAA49A]">/</span>
                        <span className="text-[#AAA49A]">{project.sector}</span>
                      </div>
                      <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#A98864]">
                        {project.classificationLabel}
                      </span>
                    </div>

                    <h3 className="font-display text-[clamp(2.2rem,3.8vw,3.6rem)] leading-[1.02] text-[#F2EEE6] uppercase font-normal">
                      {project.title}
                    </h3>

                    <p className="font-sans text-[#AAA49A] text-[15px] md:text-[17px] leading-relaxed">
                      {project.conciseSentence || project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono tracking-wider uppercase text-[#AAA49A]/70 px-2.5 py-1 border border-[#262420] rounded-[1px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-[#262420]">
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F2EEE6] text-[#11110F] text-[11px] font-mono tracking-[0.14em] uppercase hover:bg-white transition-colors duration-200 rounded-[1px]"
                      >
                        <span>{project.actionLabel}</span>
                      </Link>

                      {project.hasCaseStudy && (
                        <Link
                          href={`/case-studies/${project.caseStudySlug}`}
                          className="editorial-underline text-[11px] font-mono tracking-[0.14em] uppercase text-[#AAA49A] hover:text-[#F2EEE6]"
                        >
                          <span>Sector Study</span>
                          <span className="text-[#A98864]">→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Archive Footer Strip */}
        <FadeIn className="pt-16 md:pt-24 mt-20 md:mt-28 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#262420]">
          <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-[#AAA49A]">
            11 INTERACTIVE STUDIES
          </span>
          <Link
            href="/work"
            className="editorial-underline text-[12px] font-mono tracking-[0.16em] uppercase text-[#F2EEE6] hover:text-[#A98864]"
          >
            <span>Explore Complete Studio Archive</span>
            <span>→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
