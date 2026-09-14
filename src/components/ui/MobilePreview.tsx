'use client';

import { useEffect, useRef, useState } from 'react';

interface MobilePreviewProps {
  url: string;
  title: string;
  previewUrl?: string;
}

export function MobilePreview({ url, title, previewUrl }: MobilePreviewProps) {
  const screenRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(667);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  // Clean domain display
  const displayHost = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  // Calculate viewport scale based on container size
  useEffect(() => {
    const updateDimensions = () => {
      if (screenRef.current) {
        const width = screenRef.current.offsetWidth;
        const height = screenRef.current.offsetHeight;
        // Standard mobile viewport width (375px - iPhone viewport standard)
        const currentScale = width / 375;
        setScale(currentScale);
        setViewportHeight(height / currentScale);
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (screenRef.current) {
      resizeObserver.observe(screenRef.current);
    }

    window.addEventListener('resize', updateDimensions);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Lazy load iframe only when near viewport
  useEffect(() => {
    const el = screenRef.current;
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
    <div className="relative mx-auto w-full max-w-[320px] select-none group/phone">
      {/* Physical phone side buttons (decorative hardware accents) */}
      <div className="absolute -left-[5px] top-24 w-[3px] h-9 bg-stone/40 rounded-l-sm" />
      <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-stone/40 rounded-l-sm" />
      <div className="absolute -left-[5px] top-52 w-[3px] h-12 bg-stone/40 rounded-l-sm" />
      <div className="absolute -right-[5px] top-32 w-[3px] h-16 bg-stone/40 rounded-r-sm" />

      {/* Phone chassis */}
      <div className="relative w-full aspect-[9/18.5] bg-[#141312] p-2.5 sm:p-3 rounded-[2.5rem] border-[3px] border-stone/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)] flex flex-col">
        
        {/* Inner bezel & screen */}
        <div 
          ref={screenRef} 
          className="relative flex-1 w-full h-full overflow-hidden bg-near-black rounded-[2rem] border border-bone/5"
          onMouseLeave={() => setIsInteractive(false)}
        >
          {/* Status Bar / Dynamic Island Header */}
          <div className="absolute top-0 inset-x-0 h-9 z-30 flex items-center justify-between px-5 pointer-events-none">
            {/* Clock */}
            <span className="text-[10px] font-medium tracking-tight text-bone/60 font-mono">
              9:41
            </span>

            {/* Dynamic Island pill */}
            <div className="w-20 h-4 bg-black rounded-full border border-bone/10 shadow-inner flex items-center justify-end px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b] border border-blue-400/40" />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-1.5 text-bone/60">
              {/* Cellular */}
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <rect x="2" y="16" width="3" height="6" rx="1" />
                <rect x="7" y="12" width="3" height="10" rx="1" />
                <rect x="12" y="8" width="3" height="14" rx="1" />
                <rect x="17" y="4" width="3" height="18" rx="1" />
              </svg>
              {/* Battery */}
              <div className="w-4 h-2 border border-bone/60 rounded-[2px] p-[1px] flex items-center">
                <div className="h-full w-full bg-bone/70 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Placeholder display while loading */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#181614] to-near-black transition-opacity duration-700 z-10 ${
              isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <span className="font-display text-7xl text-stone/20 select-none">
              {title.charAt(0)}
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-bone/40 mt-3">
              Loading mobile view...
            </span>
            <div className="mt-4 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-warm-accent animate-pulse" />
              <span className="text-[9px] font-mono text-stone/60 truncate max-w-[180px]">
                {displayHost}
              </span>
            </div>
          </div>

          {/* Live Mobile Viewport Iframe */}
          {isInView && (
            <div
              className={`absolute top-0 left-0 origin-top-left z-0 transition-opacity duration-700 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                width: '375px',
                height: `${viewportHeight}px`,
                transform: `scale(${scale})`,
              }}
            >
              <iframe
                src={previewUrl || url}
                title={`${title} Mobile Preview`}
                className="w-full h-full border-none select-none bg-near-black"
                loading="lazy"
                tabIndex={-1}
                sandbox="allow-scripts allow-same-origin allow-forms"
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          )}

          {/* Interaction Shield to avoid hijack during page scroll */}
          {!isInteractive && (
            <div 
              className="absolute inset-0 z-20 cursor-pointer flex flex-col items-center justify-end pb-8 group-hover/phone:bg-black/10 transition-colors"
              onClick={() => setIsInteractive(true)}
            >
              <div className="opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300 transform translate-y-1 group-hover/phone:translate-y-0 px-3 py-1.5 rounded-full bg-near-black/85 backdrop-blur-md border border-bone/20 shadow-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-bone tracking-wider uppercase">Click to interact</span>
              </div>
            </div>
          )}

          {/* Exit interaction badge when active */}
          {isInteractive && (
            <button
              onClick={() => setIsInteractive(false)}
              className="absolute top-10 right-3 z-30 px-2.5 py-1 rounded-full bg-near-black/90 backdrop-blur-md border border-bone/20 text-[9px] font-mono tracking-wider text-bone/80 hover:text-bone hover:border-bone transition-colors shadow-lg flex items-center gap-1.5"
            >
              <span>Lock scroll</span>
              <span>✕</span>
            </button>
          )}

          {/* Home indicator bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-bone/40 rounded-full z-30 pointer-events-none" />
        </div>
      </div>

      {/* Under-phone label / direct link */}
      <div className="mt-4 flex items-center justify-between px-2 text-[11px] font-mono text-stone">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Live Mobile View</span>
        </span>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-stone hover:text-bone transition-colors flex items-center gap-1 hover:underline"
        >
          <span>Open</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}
