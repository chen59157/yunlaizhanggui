import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/data/content';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check system preference or saved preference
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass shadow-sm border-b border-gray-100/50 dark:border-white/5'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#002FA7] to-[#4A7BD4] shadow-lg shadow-[#002FA7]/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 19C6 19 2 16 2 12C2 8 6 5 12 5C18 5 22 8 22 12C22 16 18 19 12 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 19L9 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" fill="white"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-[#0A1F44] dark:text-white">
                云莱掌柜
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="relative text-sm font-medium text-[#0A1F44] transition-colors hover:text-[#002FA7] cursor-pointer dark:text-white/80 dark:hover:text-[#87CEEB]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Dark Toggle + Mobile Toggle */}
            <div className="flex items-center gap-2">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDark}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-[#0A1F44] transition-all hover:bg-[#EAF0FA] dark:text-white/70 dark:hover:bg-white/10"
                aria-label="切换深色模式"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#contact');
                }}
                className="hidden items-center gap-2 rounded-xl bg-[#FF6B35] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#E55A28] hover:shadow-lg hover:shadow-orange-500/20 active:scale-[0.97] sm:inline-flex cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                免费咨询
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="inline-flex items-center justify-center rounded-xl p-2 text-[#0A1F44] transition-colors hover:bg-[#EAF0FA] md:hidden dark:text-white/80 dark:hover:bg-white/10"
              >
                {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          isMobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setIsMobileOpen(false)}
      />
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden dark:bg-[#0F2A5E]',
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-white/10">
          <span className="text-lg font-bold text-[#002FA7] dark:text-[#87CEEB]">云莱掌柜</span>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <X className="h-5 w-5 dark:text-white" />
          </button>
        </div>
        <div className="flex flex-col gap-1 p-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#0A1F44] transition-colors hover:bg-[#EAF0FA] hover:text-[#002FA7] cursor-pointer dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-[#87CEEB]"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 border-t border-gray-100 pt-4 dark:border-white/10">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#FF6B35] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#E55A28] cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              免费咨询
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
