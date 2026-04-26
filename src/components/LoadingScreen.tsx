import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setVisible(false), 400);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A1F44] transition-opacity duration-400 ${
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-[#002FA7] via-[#4A7BD4] to-[#87CEEB] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Logo animation */}
      <div className="animate-pulse mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#002FA7] to-[#4A7BD4] shadow-xl shadow-[#002FA7]/30">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 24C8 24 4 20 4 16C4 12 8 8 16 8C24 8 28 12 28 16C28 20 24 24 16 24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M8 24L12 16L16 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="16" r="2" fill="white"/>
          </svg>
        </div>
      </div>

      <p className="text-sm font-medium text-white/60 tracking-wider">云莱掌柜</p>
      <p className="mt-2 text-xs text-white/30">正在加载...</p>

      {/* Shimmer dots */}
      <div className="mt-4 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-[#4A7BD4] animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
