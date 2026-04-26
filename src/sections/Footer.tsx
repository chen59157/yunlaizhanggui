import { NAV_LINKS } from '@/data/content';
import { Github, ExternalLink, Heart } from 'lucide-react';

const FOOTER_LINKS = {
  服务: [
    { label: '外卖运营', href: '#delivery' },
    { label: '品牌营销', href: '#branding' },
    { label: '电商运营', href: '#ecommerce' },
  ],
  关于: [
    { label: '关于我们', href: '#' },
    { label: '成功案例', href: '#cases' },
    { label: '加入我们', href: '#' },
  ],
  联系: [
    { label: '13262359157', href: 'tel:13262359157' },
    { label: 'yunlai@yunlai8.com', href: 'mailto:yunlai@yunlai8.com' },
    { label: '上海市闵行区东兰路1111弄55号1102室', href: '#' },
  ],
};

export function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-gray-100 bg-[#0A1F44] dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 19C6 19 2 16 2 12C2 8 6 5 12 5C18 5 22 8 22 12C22 16 18 19 12 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 19L9 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" fill="white"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">云莱掌柜</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              外卖运营、品牌营销、电商运营，全链路增长引擎。从策略到执行，让每一家店都成为人气王。
            </p>
            {/* Social Icons with real icon shapes */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/chen59157/yunlaizhanggui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50 transition-all duration-300 hover:bg-white/10 hover:text-white/80 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://pages.edgeone.ai/workbuddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50 transition-all duration-300 hover:bg-white/10 hover:text-white/80 hover:-translate-y-0.5"
                aria-label="EdgeOne WorkBuddy Challenge"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50"
                title="微信扫码添加"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05a6.527 6.527 0 0 1-.281-1.876c0-3.683 3.354-6.667 7.49-6.667.257 0 .508.018.76.035C16.648 4.556 13.023 2.188 8.691 2.188zm-2.6 4.408c.56 0 1.016.455 1.016 1.016s-.455 1.017-1.016 1.017-1.016-.456-1.016-1.017.456-1.016 1.016-1.016zm5.21 0c.56 0 1.016.455 1.016 1.016s-.455 1.017-1.016 1.017-1.016-.456-1.016-1.017.456-1.016 1.016-1.016zm3.507 3.772c-3.537 0-6.405 2.504-6.405 5.592 0 3.09 2.868 5.592 6.405 5.592a7.6 7.6 0 0 0 2.231-.334.67.67 0 0 1 .556.077l1.473.864a.252.252 0 0 0 .128.041.228.228 0 0 0 .225-.228c0-.056-.023-.11-.037-.165l-.302-1.146a.458.458 0 0 1 .165-.515C21.81 16.234 22.737 14.6 22.737 13.064c0-3.089-2.868-5.592-6.405-5.592h-.524zm-2.18 3.234c.435 0 .788.353.788.788a.789.789 0 0 1-.788.788.789.789 0 0 1-.788-.788c0-.435.353-.788.788-.788zm4.158 0c.435 0 .788.353.788.788a.789.789 0 0 1-.788.788.789.789 0 0 1-.788-.788c0-.435.353-.788.788-.788z"/>
                </svg>
              </span>
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50"
                title="抖音"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.36-6.22V8.79a8.18 8.18 0 0 0 3.85.97V6.69h.01z"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.href.startsWith('tel:') || link.href.startsWith('mailto:')) {
                          window.open(link.href);
                        } else {
                          scrollTo(link.href);
                        }
                      }}
                      className="text-sm text-white/50 transition-colors hover:text-white/80 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-white/30">
            &copy; {new Date().getFullYear()} 上海云莱掌柜网络科技有限公司
            <span className="mx-1">·</span>
            Made with <Heart className="inline h-3 w-3 text-[#FF6B35]" /> using WorkBuddy
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://pages.edgeone.ai/workbuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/40 transition-all hover:border-white/20 hover:text-white/60"
            >
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              EdgeOne WorkBuddy Challenge
            </a>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-sm text-white/30 transition-colors hover:text-white/60 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
