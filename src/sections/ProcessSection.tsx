import { PROCESS_STEPS } from '@/data/content';
import { AnimateOnScroll } from '@/hooks/useAnimations';
import { cn } from '@/lib/utils';

export function ProcessSection() {
  return (
    <section id="process" className="bg-[#F7F9FC] py-20 md:py-28 dark:bg-[#0A1F44]/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center">
          <span className="inline-block rounded-full bg-[#002FA7]/10 px-4 py-1.5 text-sm font-medium text-[#002FA7] dark:bg-[#4A7BD4]/15 dark:text-[#87CEEB]">
            服务流程
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#0A1F44] sm:text-4xl dark:text-white">
            四步开启增长之旅
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6B7A99] dark:text-white/60">
            标准化流程，透明化服务，让合作更高效
          </p>
        </AnimateOnScroll>

        {/* Desktop: Horizontal */}
        <div className="mt-14 hidden lg:block">
          <div className="relative grid grid-cols-4 gap-6">
            <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#002FA7] via-[#4A7BD4] to-[#87CEEB]" />
            {PROCESS_STEPS.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 100}>
                <div className="relative flex flex-col items-center text-center">
                  <div className={cn(
                    'relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white shadow-lg transition-all duration-300 dark:border-[#0F2A5E]',
                    'bg-gradient-to-br from-[#002FA7] to-[#4A7BD4]'
                  )}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="mt-4 font-data text-3xl font-bold text-[#002FA7] dark:text-[#87CEEB]">
                    {step.step}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#0A1F44] dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7A99] dark:text-white/50">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical */}
        <div className="mt-10 space-y-6 lg:hidden">
          {PROCESS_STEPS.map((step, i) => (
            <AnimateOnScroll key={step.step} delay={i * 80}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#002FA7] to-[#4A7BD4] shadow-lg">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-gradient-to-b from-[#4A7BD4] to-[#87CEEB]" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="font-data text-xl font-bold text-[#002FA7] dark:text-[#87CEEB]">{step.step}</span>
                  <h3 className="mt-1 text-lg font-bold text-[#0A1F44] dark:text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6B7A99] dark:text-white/50">{step.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
