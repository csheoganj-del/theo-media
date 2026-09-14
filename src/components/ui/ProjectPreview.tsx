'use client';

import { useEffect, useRef, useState } from 'react';

interface ProjectPreviewProps {
  url: string;
  title: string;
  desktop?: boolean;
  previewUrl?: string;
}

export function ProjectPreview({ url, title, desktop = true, previewUrl }: ProjectPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Clean domain display for the studio browser chrome
  const displayHost = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  useEffect(() => {
    if (!desktop) return;
    
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // Target virtual desktop viewport width is 1280px
        setScale(width / 1280);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [desktop]);

  // Lazy load iframe only when near viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative overflow-hidden bg-near-black flex flex-col group/frame"
    >
      {/* Studio Minimalist Browser Chrome */}
      <div className="w-full h-7 md:h-8 bg-[#181614] border-b border-bone/10 px-3 md:px-4 flex items-center justify-between shrink-0 z-30 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-bone/20 group-hover/frame:bg-red-400/60 transition-colors" />
          <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-bone/20 group-hover/frame:bg-amber-400/60 transition-colors" />
          <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-bone/20 group-hover/frame:bg-emerald-400/60 transition-colors" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-near-black/70 border border-bone/5 text-[10px] md:text-[11px] font-mono text-bone/50 tracking-wider">
          <svg className="w-2.5 h-2.5 text-bone/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="truncate max-w-[160px] sm:max-w-[240px] md:max-w-[320px]">{displayHost}</span>
        </div>
        <div className="w-10 flex justify-end">
          <span className="text-[9px] font-mono uppercase tracking-widest text-bone/30">LIVE</span>
        </div>
      </div>

      {/* Viewport Canvas */}
      <div className="relative flex-1 w-full h-full overflow-hidden bg-near-black">
        {/* Placeholder / Skeleton Display */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#181614] to-near-black transition-opacity duration-700 z-0 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <span className="font-display text-[6rem] md:text-[8rem] text-bone/10 select-none">
            {title.charAt(0)}
          </span>
          <span className="text-[11px] font-mono tracking-widest uppercase text-bone/30 mt-2">
            Loading preview...
          </span>
        </div>

        {isInView && (
          desktop ? (
            <div 
              className={`absolute top-0 left-0 w-[1280px] h-[800px] origin-top-left z-10 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ transform: `scale(${scale})` }}
            >
              <iframe
                src={previewUrl || url}
                title={title}
                className="w-full h-full border-none pointer-events-none select-none bg-near-black"
                loading="lazy"
                tabIndex={-1}
                sandbox="allow-scripts allow-same-origin"
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          ) : (
            <iframe
              src={previewUrl || url}
              title={title}
              className={`absolute inset-0 w-full h-full border-none pointer-events-none select-none z-10 bg-near-black transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              tabIndex={-1}
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setIsLoaded(true)}
            />
          )
        )}

        {/* Overlay shield to prevent hijacking wheel/clicks while preserving hover */}
        <div className="absolute inset-0 z-20" />
      </div>
    </div>
  );
}
