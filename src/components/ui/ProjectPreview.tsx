'use client';

import { useEffect, useRef, useState } from 'react';

interface ProjectPreviewProps {
  url: string;
  title: string;
  desktop?: boolean;
}

const PREVIEW_FALLBACKS: Record<string, string> = {
  'https://rose-and-ivy.theomedia.co.uk': 'https://rose-and-ivy-hair.vercel.app',
  'https://rose-and-ivy-hair.theomedia.co.uk': 'https://rose-and-ivy-hair.vercel.app',
  'https://falakstudio.theomedia.co.uk': 'https://theomedianick2.vercel.app',
  'https://falak-studio.theomedia.co.uk': 'https://theomedianick2.vercel.app',
  'https://nick2.theomedia.co.uk': 'https://theomedianick2.vercel.app',
  'https://theomedianick2.theomedia.co.uk': 'https://theomedianick2.vercel.app',
};

export function ProjectPreview({ url, title, desktop = true }: ProjectPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const previewUrl = PREVIEW_FALLBACKS[url] || url;

  useEffect(() => {
    if (!desktop) return;
    
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // Target desktop width is 1280px
        setScale(width / 1280);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [desktop]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative overflow-hidden bg-near-black"
    >
      {/* Loading State or Fallback color */}
      <div className="absolute inset-0 flex items-center justify-center bg-near-black text-bone/20 z-0">
         <span className="font-display text-[8rem] opacity-20">{title.charAt(0)}</span>
      </div>
      
      {desktop ? (
        <div 
          className="absolute top-0 left-0 w-[1280px] h-[800px] origin-top-left z-10"
          style={{ transform: `scale(${scale})` }}
        >
          <iframe
            src={previewUrl}
            title={`${title} Preview`}
            className="w-full h-full border-none pointer-events-none select-none"
            loading="lazy"
            tabIndex={-1}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      ) : (
        <iframe
          src={previewUrl}
          title={`${title} Preview`}
          className="absolute inset-0 w-full h-full border-none pointer-events-none select-none z-10"
          loading="lazy"
          tabIndex={-1}
          sandbox="allow-scripts allow-same-origin"
        />
      )}
      
      {/* Overlay to prevent interactions and ensure it looks like a flat image */}
      <div className="absolute inset-0 z-20" />
    </div>
  );
}
