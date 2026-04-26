# WorkBuddy EdgeOne Pages 挑战赛 — Prompt

## 赛道：Prompts（提示词工程）

---

## 完整 Prompt（可直接复现）

```
帮我用 React + TypeScript + Vite + Tailwind CSS 搭建一个「云莱掌柜」的企业官方网站。

## 公司信息
- 公司名称：上海云莱掌柜网络科技有限公司（品牌名：云莱掌柜）
- 主营业务：外卖运营、品牌营销、电商运营
- 电话：13262359157
- 邮箱：yunlai@yunlai8.com
- 地址：上海市闵行区东兰路1111弄55号1102室

## 设计风格
- 主色调：Klein Blue #002FA7 + 天蓝 #4A7BD4 + 天空蓝 #87CEEB
- 点缀色：活力橙 #FF6B35
- 深色：深海蓝 #0A1F44
- 风格：企业级、专业可信、现代感、数据驱动
- 字体：Noto Sans SC（正文）+ DM Sans（数据/数字）
- 设计原则：大量留白、精致卡片、渐变装饰、微交互

## 页面结构（按顺序从上到下）
1. **Navbar**：Logo + 导航链接（服务、案例、数据实力、流程、常见问题）+ 暗黑模式切换按钮
2. **Hero 首屏**：
   - 动态渐变 blob 背景 + 网格纹理 + 噪点叠加
   - 徽章："全链路运营增长引擎"
   - 主标题："让每一家店都成为" + 打字机效果循环（人气王 / 增长引擎 / 流量收割机 / 行业标杆）
   - 副标题 + CTA 按钮（了解服务 / 查看案例）+ 绿点 ping 动画信任标签
   - 三个 inline 数据卡（280% 单量增长 / 4.9 店铺评分 / 500+ 服务商家）
   - 底部：Built with WorkBuddy 徽章链接
   - 最底部：滚动指示器动画
3. **服务总览**：三张服务卡片（外卖全托管运营 / 全域品牌营销 / 电商精细化运营），hover 上浮 + 阴影加深
4. **外卖运营**：左右布局，左侧六边形能力矩阵（店铺装修、菜单优化等6项），右侧三个进度条统计数据 + 四步流程
5. **品牌营销**：类似布局反转，平台 Logo 展示（抖音/小红书/微信/微博），能力矩阵
6. **电商运营**：三栏布局，平台覆盖标签 + GMV/ROI 数据
7. **数据实力**：深色渐变背景 + Canvas 粒子动画，6个数字卡片带计数器动画（500+商家 / 40% 业绩提升 / 4.8+ 好评率 / 100+ 品牌合作 / 50+ 团队 / 30+ 城市）
8. **成功案例**：三张案例卡片（火锅品牌/茶饮品牌/零食电商），渐变背景 + hover 效果
9. **服务流程**：四步横向流程（需求诊断 → 方案定制 → 执行落地 → 效果复盘），连接线动画
10. **客户评价**：三张评价卡片，星级评分 + 滑动效果
11. **常见问题 FAQ**：手风琴展开/收起，7个常见问题
12. **联系我们**：左右布局，左侧联系信息 + 微信二维码，右侧表单（姓名/手机/业务类型/留言），调用 /api/contact Edge Function
13. **CTA Banner**：蓝色渐变背景 + "准备好让您的业务突破增长瓶颈了吗？" + 电话/在线咨询按钮
14. **Footer**：深色背景，品牌信息 + 服务/关于/联系链接 + GitHub/挑战赛/微信/抖音图标 + "Made with ❤ using WorkBuddy"

## 交互与动效
- 全局暗黑模式切换（所有区块适配 dark: 样式）
- AnimateOnScroll：滚动进入视口时 fade-up 动画，支持 delay 和 direction
- 打字机效果：循环切换关键词
- 数字计数器动画：从0到目标值
- Canvas 粒子背景：StatsSection 区域
- 浮动社交分享按钮：左侧固定，展开显示微博/微信/复制链接
- 回到顶部按钮：右侧固定，滚动超过600px出现
- 按钮 hover：光扫过效果 + scale 变化
- 卡片 hover：translateY(-1.5px) + shadow 加深
- 微信二维码：引用 /微信头像.png
- 表单：前端验证 + Edge Function API 提交 + loading 状态 + 成功/错误反馈
- 平滑滚动到锚点

## 技术要求
- Tailwind CSS CDN 模式或安装版，使用 shadcn/ui 组件思路
- lucide-react 图标库
- CSS 自定义属性 + @layer + @keyframes
- 所有区块支持 dark: 暗黑模式
- 响应式设计：mobile-first
- edgeone.json 部署配置
- node-functions/api/contact.ts：表单提交 API
- node-functions/api/counter.ts：访客计数 API

## SEO
- Open Graph 标签（title/description/image/URL）
- Twitter Card 标签
- theme-color: #002FA7
- JSON-LD 结构化数据：Organization + LocalBusiness + FAQPage
- robots: index, follow
- 中文 lang="zh-CN"

## 部署
- 目标平台：EdgeOne Pages
- 构建命令：npm run build
- 输出目录：dist
- 引用 edgeone-pages-skills 官方仓库
```

---

## 使用说明

1. 打开 [WorkBuddy](https://www.workbuddy.cn) 或 CodeBuddy IDE
2. 新建项目，选择 "Web Application Development" 场景
3. 将上述完整 Prompt 粘贴到对话框中
4. 等待 AI 完成所有区块的开发
5. 本地预览确认效果后，部署到 EdgeOne Pages

## 预计生成文件结构

```
yunlaizhanggui/
├── edgeone.json                  # EdgeOne Pages 部署配置
├── index.html                    # 入口 HTML + SEO 标签
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── node-functions/               # Edge Functions
│   └── api/
│       ├── contact.ts            # 联系表单 API
│       └── counter.ts            # 访客计数 API
├── public/
│   ├── favicon.svg
│   ├── og-image.png              # 社交分享预览图
│   └── 微信头像.png
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css                 # 全局样式 + 动画
    ├── data/
    │   └── content.ts            # 所有文案数据
    ├── hooks/
    │   ├── useAnimations.tsx     # 动画 hooks
    │   └── use-mobile.ts         # 移动端检测
    ├── lib/
    │   └── utils.ts              # 工具函数
    ├── components/
    │   ├── ShareComponents.tsx   # 分享/CTA/徽章组件
    │   └── ui/                   # shadcn/ui 组件库
    └── sections/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── ServiceOverview.tsx
        ├── DeliverySection.tsx
        ├── BrandingSection.tsx
        ├── EcommerceSection.tsx
        ├── StatsSection.tsx
        ├── CasesSection.tsx
        ├── ProcessSection.tsx
        ├── TestimonialsSection.tsx
        ├── FAQSection.tsx
        ├── ContactSection.tsx
        └── Footer.tsx
```

---

## Prompt 设计思路

| 设计决策 | 原因 |
|---------|------|
| 结构化 Prompt（表格+编号） | 让 AI 精确理解每个区块的需求，减少幻觉和遗漏 |
| 包含完整设计 Token | 色值、字体、间距一次性给出，避免反复调色 |
| 明确动效细节 | 打字机、计数器、粒子等效果用自然语言精确描述 |
| 分层技术要求 | 前端框架 + Edge Functions + SEO 分开列出 |
| 文件结构预览 | 给 AI 一个清晰的项目骨架参考 |
| 公司信息内联 | 避免 AI 使用占位符，一次到位 |

---

## 迭代过程与踩坑记录

### 第 1 轮：初始生成
- AI 一次性生成了完整的项目结构和 13 个页面区块
- Prompt 结构化程度高，生成质量整体满意
- 初始版本功能完整，但需要后续多轮修复细节

### 第 2 轮：修复 TypeScript 编译错误
部署到 EdgeOne Pages 时，`tsc -b` 严格模式暴露了几个问题：

| 文件 | 错误 | 修复 |
|------|------|------|
| `EcommerceSection.tsx` | TS6133: `useCounter` imported but never used | 移除未使用的 import |
| `StatsSection.tsx` | TS2322: `useCounter` ref 类型为 `HTMLSpanElement`，用在 `<div>` 上 | 将 `<div>` 改为 `<span>`，闭合标签同步修改 |
| `StatsSection.tsx` | TS6133: `.map()` 中 `i` 参数未使用 | 移除未使用的变量 |

**教训**：Prompt 中应明确要求「TypeScript strict mode 兼容，所有变量必须使用，避免 unused import」。

### 第 3 轮：修复 npm 依赖冲突
EdgeOne CI 构建时 `npm install` 报错：

```
ERESOLVE could not resolve: kimi-plugin-inspect-react requires vite@^7.2.0
```

**原因**：项目中安装了 `kimi-plugin-inspect-react`（VS Code 插件），与 `vite@6.4.2` 不兼容。

**修复**：
1. 从 `package.json` 移除 `kimi-plugin-inspect-react`
2. `edgeone.json` 中 `installCommand` 改为 `npm install --legacy-peer-deps`

**教训**：Prompt 中应明确要求「不要安装任何非必要的 VS Code 插件依赖」。

### 第 4 轮：构建命令优化
- 原始 `edgeone.json` 没有指定 `installCommand`，EdgeOne 使用默认的 `npm install`
- 添加 `"installCommand": "npm install --legacy-peer-deps"` 解决依赖冲突
- 确保 `framework` 字段正确设置为 `"vite"`

### 第 5 轮：视觉与体验优化
- 添加了 OG Image（社交分享预览图）
- 优化了 favicon SVG 为品牌化设计
- 添加了页面加载骨架屏
- 添加了顶部 loading 进度条

---

## Prompt 优化建议（给未来参赛者）

1. **先写设计文档，再写 Prompt** — 把色值、字体、间距、动效等设计决策提前确定，写入 Prompt
2. **分层迭代，不要一次到位** — 先生成基础结构和内容，再逐步添加动效和细节
3. **TypeScript 严格模式** — 从第一天就用 strict mode，避免部署时才暴露类型错误
4. **依赖最小化** — 只安装运行时必需的包，开发工具类依赖（如 VS Code 插件）不要混入 package.json
5. **edgeone.json 要写全** — 特别是 `installCommand` 和 `framework` 字段
6. **测试部署流程** — 在本地模拟 CI 环境执行 `npm run build`，确保能通过
7. **暗黑模式从一开始就做** — 后期补 dark mode 工作量巨大，Prompt 中明确要求每个区块都适配
