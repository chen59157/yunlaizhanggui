import { ECOMMERCE_CAPABILITIES, ECOMMERCE_PLATFORMS, ECOMMERCE_STATS } from '@/data/content';
import { AnimateOnScroll } from '@/hooks/useAnimations';


export function EcommerceSection() {
  return (
    <section id="ecommerce" className="bg-[#F7F9FC] py-20 md:py-28 dark:bg-[#0A1F44]/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Info */}
          <div className="order-2 lg:order-1">
            <AnimateOnScroll>
              <span className="inline-block rounded-full bg-[#002FA7]/10 px-4 py-1.5 text-sm font-medium text-[#002FA7] dark:bg-[#4A7BD4]/15 dark:text-[#87CEEB]">
                电商运营
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h2 className="mt-4 text-3xl font-bold text-[#0A1F44] sm:text-4xl dark:text-white">
                让每一分投入都有回报
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#6B7A99] dark:text-white/60">
                多平台布局，直播加持，精准投放优化，以数据驱动增长，让ROI最大化。
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {ECOMMERCE_CAPABILITIES.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:border-[#002FA7]/20 hover:bg-[#EAF0FA] hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:hover:border-[#4A7BD4]/30 dark:hover:bg-white/10"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#002FA7]/10 dark:bg-[#4A7BD4]/20">
                      <cap.icon className="h-4 w-4 text-[#002FA7] dark:text-[#87CEEB]" />
                    </div>
                    <span className="text-sm font-medium text-[#0A1F44] dark:text-white/80">{cap.label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-8">
                <p className="mb-4 text-sm font-medium text-[#6B7A99] dark:text-white/50">覆盖主流电商平台</p>
                <div className="flex flex-wrap gap-3">
                  {ECOMMERCE_PLATFORMS.map((name) => (
                    <span
                      key={name}
                      className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#0A1F44] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: Visual */}
          <AnimateOnScroll direction="right" className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#E55A28] p-8 text-white shadow-2xl shadow-orange-500/20">
                <h3 className="mb-6 text-2xl font-bold">核心成果数据</h3>
                <div className="space-y-5">
                  {ECOMMERCE_STATS.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/15 p-5 backdrop-blur-sm transition-all hover:bg-white/20">
                      <p className="text-sm text-white/70">{stat.label}</p>
                      <p className="mt-2 font-data text-4xl font-bold">{stat.value}{stat.suffix}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm text-white/80">
                    "入驻抖音电商后 GMV 从月20万做到了月150万"
                  </p>
                  <p className="mt-1 text-xs text-white/50">—— 某零食电商负责人</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-[#EAF0FA] dark:bg-[#1e3a5f]" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
