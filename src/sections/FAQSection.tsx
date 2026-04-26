import { useState } from 'react';
import { FAQS } from '@/data/content';
import { AnimateOnScroll } from '@/hooks/useAnimations';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F7F9FC] py-20 md:py-28 dark:bg-[#0A1F44]/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center">
          <span className="inline-block rounded-full bg-[#002FA7]/10 px-4 py-1.5 text-sm font-medium text-[#002FA7] dark:bg-[#4A7BD4]/15 dark:text-[#87CEEB]">
            常见问题
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#0A1F44] sm:text-4xl dark:text-white">
            您可能想了解的
          </h2>
        </AnimateOnScroll>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 50}>
              <div
                className={cn(
                  'rounded-xl border bg-white transition-all duration-200 dark:bg-white/5',
                  openIndex === i
                    ? 'border-[#002FA7]/20 shadow-sm dark:border-[#4A7BD4]/30'
                    : 'border-gray-100 dark:border-white/10'
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span className="pr-4 font-medium text-[#0A1F44] dark:text-white">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-[#6B7A99] transition-transform duration-200 dark:text-white/50',
                      openIndex === i && 'rotate-180 text-[#002FA7] dark:text-[#87CEEB]'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-200',
                    openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-[#6B7A99] dark:text-white/60">
                      {faq.a}
                    </p>
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
