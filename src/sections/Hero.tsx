import { HERO } from '@/data/content';
import { AnimateOnScroll } from '@/hooks/useAnimations';
import { ArrowRight, Sparkles, Zap, TrendingUp, Users } from 'lucide-react';
import { WorkBuddyBadge } from '@/components/ShareComponents';
import { useState, useEffect } from 'react';

const TYPING_WORDS = ['人气王', '增长引擎', '流量收割机', '行业标杆'];

function TypingText({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <span className="text-gradient inline-flex items-center">
      {words[wordIndex].substring(0, charIndex)}
      <span className="ml-0.5 inline-block w-[3px] h-[0.8em] bg-[#002FA7] align-middle animate-pulse" />
    </span>
  );
}

function HeroStats() {
  const stats = [
    { icon: Zap, value: '280%', label: '单量增长' },
    { icon: TrendingUp, value: '4.9', label: '店铺评分' },
    { icon: Users, value: '500+', label: '服务商家' },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
      {stats.map((stat, i) => (
        <AnimateOnScroll key={stat.label} delay={500 + i * 100}>
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200/60 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#002FA7]/10 dark:bg-[#4A7BD4]/20">
              <stat.icon className="h-5 w-5 text-[#002FA7] dark:text-[#87CEEB]" />
            </div>
            <div>
              <p className="font-data text-lg font-bold text-[#0A1F44] dark:text-white">{stat.value}</p>
              <p className="text-xs text-[#6B7A99] dark:text-white/50">{stat.label}</p>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="bg-gradient-hero relative min-h-screen overflow-hidden pt-20 md:pt-0 noise-bg"
    >
      {/* Animated Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-[600px] w-[600px] rounded-full bg-[#002FA7]/[0.07] blur-3xl animate-blob" />
        <div className="absolute top-1/3 -left-24 h-[500px] w-[500px] rounded-full bg-[#4A7BD4]/[0.06] blur-3xl animate-blob-delayed" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#FF6B35]/[0.04] blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] rounded-full bg-[#87CEEB]/[0.05] blur-3xl animate-blob-delayed" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <AnimateOnScroll delay={0}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#002FA7]/20 bg-[#002FA7]/[0.06] px-5 py-2.5 text-sm font-medium text-[#002FA7] shadow-sm dark:border-[#4A7BD4]/30 dark:bg-[#4A7BD4]/10 dark:text-[#87CEEB]">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="relative">
                <span className="absolute inset-0 animate-shimmer rounded-full" />
                全链路运营增长引擎
              </span>
            </div>
          </AnimateOnScroll>

          {/* Title with Typing Effect */}
          <AnimateOnScroll delay={100}>
            <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-[#0A1F44] sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
              让每一家店都成为
              <br className="hidden sm:block" />
              <TypingText words={TYPING_WORDS} />
            </h1>
          </AnimateOnScroll>

          {/* Subtitle */}
          <AnimateOnScroll delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B7A99] sm:text-lg md:text-xl dark:text-white/60">
              {HERO.subtitle}
            </p>
          </AnimateOnScroll>

          {/* CTA Buttons */}
          <AnimateOnScroll delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo('#services')}
                className="group relative flex items-center gap-2 rounded-xl bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#E55A28] hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.03] active:scale-[0.97] cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">{HERO.primaryCta.label}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('#cases')}
                className="flex items-center gap-2 rounded-xl border-2 border-[#002FA7]/20 bg-white/80 px-8 py-4 text-base font-semibold text-[#002FA7] backdrop-blur-sm transition-all hover:bg-[#EAF0FA] hover:border-[#002FA7]/40 hover:scale-[1.03] active:scale-[0.97] cursor-pointer dark:border-[#4A7BD4]/30 dark:bg-white/5 dark:text-[#87CEEB] dark:hover:bg-white/10"
              >
                {HERO.secondaryCta.label}
              </button>
            </div>
          </AnimateOnScroll>

          {/* Trust + Stats */}
          <AnimateOnScroll delay={400}>
            <div className="flex flex-col items-center gap-3">
              <p className="flex items-center justify-center gap-2 text-sm text-[#6B7A99] dark:text-white/50">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
                </span>
                {HERO.trust}
              </p>
              <WorkBuddyBadge />
            </div>
          </AnimateOnScroll>

          {/* Inline Stats Cards (always visible) */}
          <div className="mt-10">
            <HeroStats />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[#6B7A99]/60 dark:text-white/30">向下滚动</span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-[#4A7BD4]/30 p-1">
              <div className="h-2 w-1 animate-bounce rounded-full bg-[#4A7BD4]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
