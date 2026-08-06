import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in zoom-in duration-300">
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="relative group bg-slate-900 hover:bg-indigo-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 border border-slate-700/80 hover:scale-110 active:scale-95 flex items-center justify-center"
      >
        {/* SVG Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
          <circle
            cx="50%"
            cy="50%"
            r="44%"
            className="stroke-slate-700/40 fill-none stroke-[2.5]"
          />
          <circle
            cx="50%"
            cy="50%"
            r="44%"
            className="stroke-indigo-400 fill-none stroke-[2.5] transition-all duration-150"
            strokeDasharray={100}
            strokeDashoffset={100 - scrollProgress}
          />
        </svg>

        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700">
          Back to Top ({Math.round(scrollProgress)}%)
        </span>
      </button>
    </div>
  );
};
