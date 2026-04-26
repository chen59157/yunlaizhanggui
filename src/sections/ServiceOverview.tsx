import { SERVICES } from '@/data/content';
import { ArrowDownRight } from 'lucide-react';

export function ServiceOverview() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#002FA7]/10 px-4 py-1.5 text-sm font-medium text-[#002FA7] dark:bg-[#4A7BD4]/15 dark:text-[#87CEEB]">
            我们的服务
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#0A1F44] sm:text-4xl dark:text-white">
            三大核心业务，一站式增长
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6B7A99] dark:text-white/60">
            覆盖外卖运营、品牌营销、电商运营全场景，为您的业务注入持续增长动力
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href={service.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(service.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#002FA7]/20 hover:shadow-xl hover:shadow-[#002FA7]/5 cursor-pointer dark:border-white/10 dark:bg-white/5 dark:hover:border-[#4A7BD4]/30 dark:hover:shadow-[#4A7BD4]/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#002FA7]/10 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#002FA7] group-hover:to-[#4A7BD4] group-hover:shadow-lg group-hover:shadow-[#002FA7]/20">
                  <Icon className="h-7 w-7 text-[#002FA7] transition-colors duration-300 group-hover:text-white dark:text-[#87CEEB]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0A1F44] dark:text-white">{service.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[#6B7A99] dark:text-white/60">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#EAF0FA] px-3 py-1 text-xs font-medium text-[#002FA7] dark:bg-[#4A7BD4]/15 dark:text-[#87CEEB]">
                    {service.tag}
                  </span>
                  <ArrowDownRight className="h-5 w-5 text-[#4A7BD4] transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 dark:text-[#87CEEB]" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
