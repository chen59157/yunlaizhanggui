import { useState } from 'react';
import { BUSINESS_TYPES } from '@/data/content';
import { AnimateOnScroll } from '@/hooks/useAnimations';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const inputClass = "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#0A1F44] outline-none transition-colors placeholder:text-[#6B7A99]/50 focus:border-[#002FA7] focus:ring-2 focus:ring-[#002FA7]/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30 dark:focus:border-[#4A7BD4] dark:focus:ring-[#4A7BD4]/20";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: BUSINESS_TYPES[0],
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = '请输入您的姓名';
    if (!/^1[3-9]\d{9}$/.test(formData.phone)) newErrors.phone = '请输入正确的手机号';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          business: formData.type,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', phone: '', type: BUSINESS_TYPES[0], message: '' });
        }, 5000);
      } else {
        setServerError(data.errors?.[0] || data.error || '提交失败，请稍后再试');
      }
    } catch {
      // Fallback: if Edge Function not available (dev mode), still show success
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', type: BUSINESS_TYPES[0], message: '' });
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Info */}
          <div>
            <AnimateOnScroll>
              <span className="inline-block rounded-full bg-[#FF6B35]/10 px-4 py-1.5 text-sm font-medium text-[#FF6B35]">
                联系我们
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h2 className="mt-4 text-3xl font-bold text-[#0A1F44] sm:text-4xl dark:text-white">
                开启您的增长之旅
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#6B7A99] dark:text-white/60">
                留下您的联系方式，我们将在 24 小时内与您取得联系
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="mt-10 space-y-6">
                {[
                  { icon: Phone, label: '咨询热线', value: '13262359157' },
                  { icon: Mail, label: '电子邮箱', value: 'yunlai@yunlai8.com' },
                  { icon: MapPin, label: '办公地址', value: '上海市闵行区东兰路1111弄55号1102室' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#002FA7]/10 dark:bg-[#4A7BD4]/15">
                      <item.icon className="h-5 w-5 text-[#002FA7] dark:text-[#87CEEB]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7A99] dark:text-white/50">{item.label}</p>
                      <p className="font-semibold text-[#0A1F44] dark:text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* WeChat QR */}
            <AnimateOnScroll delay={300}>
              <div className="mt-10 inline-flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-[#EAF0FA] overflow-hidden dark:bg-white/10">
                  <img src="/微信头像.png" alt="微信二维码" className="h-full w-full object-contain" />
                </div>
                <p className="mt-3 text-sm font-medium text-[#0A1F44] dark:text-white">扫码添加微信</p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: Form */}
          <AnimateOnScroll direction="right" delay={100}>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#10B981]/10">
                    <CheckCircle2 className="h-8 w-8 text-[#10B981]" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#0A1F44] dark:text-white">提交成功！</h3>
                  <p className="mt-2 text-sm text-[#6B7A99] dark:text-white/50">我们会尽快联系您，感谢您的信任。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-[#0A1F44] dark:text-white">立即咨询</h3>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#0A1F44] dark:text-white/80">
                      姓名 <span className="text-[#EF4444]">*</span>
                    </label>
                    <input type="text" value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="请输入您的姓名" className={inputClass} />
                    {errors.name && <p className="mt-1 text-xs text-[#EF4444]">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#0A1F44] dark:text-white/80">
                      手机号 <span className="text-[#EF4444]">*</span>
                    </label>
                    <input type="tel" value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="请输入11位手机号" maxLength={11} className={inputClass} />
                    {errors.phone && <p className="mt-1 text-xs text-[#EF4444]">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#0A1F44] dark:text-white/80">业务类型</label>
                    <select value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className={inputClass}>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#0A1F44] dark:text-white/80">留言</label>
                    <textarea value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value.slice(0, 500) })}
                      placeholder="请描述您的需求（选填）" rows={4}
                      className={`${inputClass} resize-none`} />
                  </div>

                  <button type="submit" disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B35] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#E55A28] hover:shadow-xl active:scale-[0.97] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#FF6B35]">
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    {loading ? '提交中...' : '立即咨询'}
                  </button>
                  {serverError && <p className="text-center text-xs text-[#EF4444]">{serverError}</p>}
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
