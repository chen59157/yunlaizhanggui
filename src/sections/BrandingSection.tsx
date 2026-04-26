import { BRANDING_CAPABILITIES, BRANDING_PLATFORMS } from '@/data/content';
import { AnimateOnScroll } from '@/hooks/useAnimations';

export function BrandingSection() {
  return (
    <section id="branding" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Visual */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-[#002FA7] to-[#4A7BD4] p-8 text-white shadow-2xl shadow-[#002FA7]/20">
                <h3 className="mb-2 text-2xl font-bold">Before → After</h3>
                <p className="mb-6 text-sm text-white/70">真实案例效果对比</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: '品牌曝光', before: '50万', after: '5000万+' },
                    { label: '粉丝增长', before: '0', after: '10万+' },
                    { label: '门店客流', before: '持平', after: '翻倍' },
                    { label: '合作周期', before: '3月', after: '效果显著' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/15">
                      <p className="text-xs text-white/60">{item.label}</p>
                      <p className="mt-1 font-data text-2xl font-bold sm:text-3xl">{item.before}</p>
                      <p className="text-xs text-[#87CEEB] font-medium">→ {item.after}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-[#EAF0FA] dark:bg-[#1e3a5f]" />
            </div>
          </AnimateOnScroll>

          {/* Right: Info */}
          <div>
            <AnimateOnScroll>
              <span className="inline-block rounded-full bg-[#002FA7]/10 px-4 py-1.5 text-sm font-medium text-[#002FA7] dark:bg-[#4A7BD4]/15 dark:text-[#87CEEB]">
                品牌营销
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h2 className="mt-4 text-3xl font-bold text-[#0A1F44] sm:text-4xl dark:text-white">
                让品牌被更多人看见
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#6B7A99] dark:text-white/60">
                精准定位品牌价值，通过内容种草、社交传播、KOL投放等多元策略，打造品牌影响力。
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {BRANDING_CAPABILITIES.map((cap) => (
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
                <p className="mb-4 text-sm font-medium text-[#6B7A99] dark:text-white/50">覆盖主流社交平台</p>
                <div className="flex flex-wrap gap-3">
                  {BRANDING_PLATFORMS.map((p) => (
                    <span
                      key={p.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#0A1F44] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                    >
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} />
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
