import { CASES } from '@/data/content';
import { AnimateOnScroll } from '@/hooks/useAnimations';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CasesSection() {
  return (
    <section id="cases" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center">
          <span className="inline-block rounded-full bg-[#002FA7]/10 px-4 py-1.5 text-sm font-medium text-[#002FA7] dark:bg-[#4A7BD4]/15 dark:text-[#87CEEB]">
            成功案例
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#0A1F44] sm:text-4xl dark:text-white">
            真实案例，真实增长
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#6B7A99] dark:text-white/60">
            每一个成功案例都是我们与商家共同创造的成果
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CASES.map((c, i) => (
            <AnimateOnScroll key={c.industry} delay={i * 100}>
              <div
                className={cn(
                  'group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300',
                  'hover:-translate-y-1.5 hover:shadow-xl cursor-pointer dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[#4A7BD4]/10'
                )}
              >
                {/* Tag */}
                <span className="mb-4 inline-block w-fit rounded-full bg-[#002FA7]/10 px-3 py-1 text-xs font-semibold text-[#002FA7] dark:bg-[#4A7BD4]/15 dark:text-[#87CEEB]">
                  {c.tag}
                </span>

                {/* Industry */}
                <h3 className="text-xl font-bold text-[#0A1F44] dark:text-white">{c.industry}</h3>

                {/* Pain */}
                <div className="mt-4 rounded-xl bg-red-50 p-4 dark:bg-red-500/10">
                  <p className="text-xs font-medium text-red-600/80 dark:text-red-400/80">痛点</p>
                  <p className="mt-1 text-sm text-red-700 dark:text-red-300">{c.pain}</p>
                </div>

                {/* Solution */}
                <div className="mt-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-500/10">
                  <p className="text-xs font-medium text-[#002FA7]/80 dark:text-[#87CEEB]/80">方案</p>
                  <p className="mt-1 text-sm text-[#002FA7] dark:text-[#87CEEB]">{c.solution}</p>
                </div>

                {/* Result */}
                <div className="mt-3 flex items-center gap-2 rounded-xl bg-green-50 p-4 dark:bg-green-500/10">
                  <TrendingUp className="h-4 w-4 shrink-0 text-[#10B981]" />
                  <p className="text-sm font-semibold text-[#10B981]">{c.result}</p>
                </div>

                {/* Arrow */}
                <div className="mt-auto pt-5">
                  <div className="flex items-center gap-1 text-sm font-medium text-[#4A7BD4] transition-colors hover:text-[#002FA7] dark:text-[#87CEEB]">
                    了解详情
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
