import { ArrowUp, Share2, Check, MessageCircle, Copy } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

/* ──────── 回到顶部按钮 ──────── */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#002FA7] text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[#001E7A] hover:shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
      aria-label="回到顶部"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

/* ──────── 浮动社交分享按钮 ──────── */
export function FloatingShare() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback */
      const input = document.createElement('input');
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const shareToWeibo = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('云莱掌柜 - 全链路运营增长引擎');
    window.open(`https://service.weibo.com/share/share.php?url=${url}&title=${title}`, '_blank', 'width=600,height=500');
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed left-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Share options */}
      <div
        className={`flex flex-col gap-2 rounded-2xl border border-gray-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-sm transition-all duration-300 dark:border-white/10 dark:bg-[#0F2A5E]/95 ${
          open ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-4 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <button
          onClick={shareToWeibo}
          className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-[#E6162D] transition-all hover:bg-red-50 dark:hover:bg-red-500/10 cursor-pointer"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.583.631.275.821.985.442 1.574zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.246.24.09.328.362.194.579zm.176-2.719c-1.893-.493-4.039.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.642 4.318-.341 5.127-2.179.8-1.793-.201-3.642-2.156-4.149zM17.014 2.5c-.247-1.39-1.708-2.427-3.16-2.157l-.615.122c-.32.064-.543.357-.49.673l.097.533c.053.317.357.533.676.472l.469-.09c.819-.157 1.652.375 1.802 1.195l.097.533c.054.317.358.533.676.472l.533-.107c.317-.063.533-.357.472-.673l-.557-2.973zM20.266 4.467c-.56-3.168-3.608-5.254-6.856-4.632l-.984.193c-.32.063-.535.357-.473.674l.097.533c.063.317.357.534.676.473l.935-.184c2.386-.472 4.673 1.035 5.119 3.373l.097.533c.063.317.357.534.676.473l.533-.107c.317-.063.534-.357.472-.673l-.292-1.667z" />
          </svg>
          <span className="font-medium">微博</span>
        </button>
        <button
          onClick={() => {
            /* Generate QR code link for WeChat sharing */
            const url = encodeURIComponent(window.location.href);
            window.open(`https://cli.im/api/qrcode/code?text=${url}`, '_blank', 'width=600,height=500');
          }}
          className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-[#07C160] transition-all hover:bg-green-50 dark:hover:bg-green-500/10 cursor-pointer"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="font-medium">微信</span>
        </button>
        <button
          onClick={copyLink}
          className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-[#002FA7] transition-all hover:bg-blue-50 dark:text-[#87CEEB] dark:hover:bg-blue-500/10 cursor-pointer"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="font-medium">{copied ? '已复制' : '复制链接'}</span>
        </button>
      </div>

      {/* Main share button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6B35] text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#E55A28] hover:shadow-xl hover:scale-110 active:scale-95 cursor-pointer ${
          open ? 'rotate-45' : ''
        }`}
        aria-label="分享"
      >
        <Share2 className="h-5 w-5" />
      </button>
    </div>
  );
}

/* ──────── 页尾 CTA Banner ──────── */
export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#002FA7] via-[#1A3FAA] to-[#4A7BD4] py-16 md:py-20">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          准备好让您的业务
          <span className="ml-2 bg-gradient-to-r from-[#87CEEB] to-[#FF6B35] bg-clip-text text-transparent">
            突破增长瓶颈
          </span>
          了吗？
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          从今天开始，让数据驱动的专业团队为您的业务保驾护航。免费咨询，无风险起步。
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:13262359157"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#002FA7] shadow-lg transition-all hover:bg-white/90 hover:shadow-xl hover:scale-[1.03] active:scale-[0.97]"
          >
            📞 立即拨打 13262359157
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50 hover:scale-[1.03] active:scale-[0.97]"
          >
            💬 在线咨询
          </a>
        </div>
      </div>
    </section>
  );
}

/* ──────── Built with WorkBuddy 徽章 ──────── */
export function WorkBuddyBadge() {
  return (
    <a
      href="https://pages.edgeone.ai/workbuddy"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200/60 bg-white/70 px-3 py-1 text-xs text-[#6B7A99] shadow-sm backdrop-blur-sm transition-all hover:border-[#002FA7]/20 hover:text-[#002FA7] hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-white/40 dark:hover:border-[#4A7BD4]/30 dark:hover:text-[#87CEEB]"
    >
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>Built with <strong>WorkBuddy</strong></span>
    </a>
  );
}
