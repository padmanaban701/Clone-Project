import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const TopProgressBar = () => {
  const { pathname, search } = useLocation();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setProgress(30);

    const timer1 = setTimeout(() => setProgress(70), 100);
    const timer2 = setTimeout(() => setProgress(100), 250);
    const timer3 = setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 450);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname, search]);

  if (!isLoading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-1 bg-slate-200/20">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400 shadow-md shadow-indigo-500/50 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
