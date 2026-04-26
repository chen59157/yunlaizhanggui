import { DELIVERY_CAPABILITIES, DELIVERY_STATS, DELIVERY_PROCESS } from '@/data/content';
import { AnimateOnScroll, useCounter } from '@/hooks/useAnimations';
import { ArrowRight } from 'lucide-react';

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value, 2000);
  return (
    <div className="rounded-2xl border border-[#002FA7]/10 bg-white p-6 text-center shadow-sm dark:border-[#4A7BD4]/20 dark:bg-white/5">
      <span ref={ref} className="font-data text-4xl font-bold text-[#002FA7] dark:text-[#87CEEB]">
        {value % 1 !== 0 ? count.toFixed(1) : count}
        {suffix}
      </span>
      <p className="mt-2 text-sm text-[#6B7A99] dark:text-white/50">{label}</p>
    </div>
  );
}

export function DeliverySection() {
  return (
    <section id="delivery" className="bg-[#F7F9FC] py-20 md:py-28 dark:bg-[#0A1F44]/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: Info */}
          <div>
            <AnimateOnScroll>
              <span className="inline-block rounded-full bg-[#002FA7]/10 px-4 py-1.5 text-sm font-medium text-[#002FA7] dark:bg-[#4A7BD4]/15 dark:text-[#87CEEB]">
                外卖运营
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h2 className="mt-4 text-3xl font-bold text-[#0A1F44] sm:text-4xl dark:text-white">
                让订单源源不断
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#6B7A99] dark:text-white/60">
                从店铺诊断到策略执行，覆盖美团、饿了么双平台全链路运营，数据驱动每一项决策。
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {DELIVERY_CAPABILITIES.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:border-[#002FA7]/20 hover:bg-[#EAF0FA] hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:hover:border-[#4A7BD4]/30 dark:hover:bg-white/10"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#002FA7]/10 dark:bg-[#4A7BD4]/20">
                      <cap.icon className="h-4 w-4 text-[#002FA7] dark:text-[#87CEEB]" />
                    </div>
                    <span className="text-sm font-medium text-[#0A1F44] dark:text-white/80">{cap.label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: Process + Stats */}
          <div className="space-y-8">
            <AnimateOnScroll delay={150}>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <h3 className="mb-5 text-lg font-bold text-[#0A1F44] dark:text-white">运营流程</h3>
                <div className="space-y-4">
                  {DELIVERY_PROCESS.map((item, i) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#002FA7] to-[#4A7BD4] text-sm font-bold text-white shadow-sm">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#0A1F44] dark:text-white">{item.title}</p>
                        <p className="text-sm text-[#6B7A99] dark:text-white/50">{item.desc}</p>
                      </div>
                      {i < DELIVERY_PROCESS.length - 1 && (
                        <ArrowRight className="mt-3 hidden h-4 w-4 text-[#4A7BD4] dark:text-[#87CEEB] sm:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250}>
              <div className="grid grid-cols-3 gap-3">
                {DELIVERY_STATS.map((stat) => (
                  <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
