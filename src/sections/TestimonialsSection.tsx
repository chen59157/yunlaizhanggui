import { TESTIMONIALS } from '@/data/content';
import { AnimateOnScroll } from '@/hooks/useAnimations';
import { Star, Quote } from 'lucide-react';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center">
          <span className="inline-block rounded-full bg-[#002FA7]/10 px-4 py-1.5 text-sm font-medium text-[#002FA7] dark:bg-[#4A7BD4]/15 dark:text-[#87CEEB]">
            客户评价
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#0A1F44] sm:text-4xl dark:text-white">
            听听他们怎么说
          </h2>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 100}>
              <div className="relative flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[#4A7BD4]/10">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-[#EAF0FA] dark:text-[#1e3a5f]" />
                <StarRating count={t.rating} />
                <p className="mt-4 flex-1 text-base leading-relaxed text-[#0A1F44] dark:text-white/80">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-gray-50 pt-5 dark:border-white/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#002FA7]/10 text-sm font-bold text-[#002FA7] dark:bg-[#4A7BD4]/20 dark:text-[#87CEEB]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A1F44] dark:text-white">{t.name}</p>
                    <p className="text-sm text-[#6B7A99] dark:text-white/50">{t.role}</p>
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
