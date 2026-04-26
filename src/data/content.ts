import {
  ShoppingBag,
  Lightbulb,
  ShoppingCart,
  Store,
  Menu,
  BarChart3,
  Star,
  MessageSquare,
  Palette,
  Share2,
  Users,
  Megaphone,
  LayoutDashboard,
  Video,
  Target,
  TrendingUp,
  HeadphonesIcon,
  type LucideIcon,
} from 'lucide-react';

// ==================== Navigation ====================
export const NAV_LINKS = [
  { label: '服务', href: '#services' },
  { label: '案例', href: '#cases' },
  { label: '数据实力', href: '#data' },
  { label: '流程', href: '#process' },
  { label: '常见问题', href: '#faq' },
];

// ==================== Hero ====================
export const HERO = {
  title: '让每一家店都成为人气王',
  subtitle: '外卖运营 / 品牌营销 / 电商运营 —— 全链路增长引擎',
  primaryCta: { label: '了解我们的服务', href: '#services' },
  secondaryCta: { label: '查看成功案例', href: '#cases' },
  trust: '已服务 500+ 商家 · 平均业绩提升 40%+',
};

// ==================== Services ====================
export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
  href: string;
}

export const SERVICES: ServiceCard[] = [
  {
    icon: ShoppingBag,
    title: '外卖全托管运营',
    desc: '从店铺搭建到数据增长的一站式外卖运营方案，覆盖美团、饿了么双平台。',
    tag: '美团 + 饿了么',
    href: '#delivery',
  },
  {
    icon: Lightbulb,
    title: '全域品牌营销',
    desc: '精准定位、内容驱动、社交传播，打造品牌影响力与用户心智。',
    tag: '社媒 + 内容 + 投放',
    href: '#branding',
  },
  {
    icon: ShoppingCart,
    title: '电商精细化运营',
    desc: '多平台布局、直播加持、ROI 驱动的电商增长，每一分投入都有回报。',
    tag: '天猫 + 京东 + 抖音',
    href: '#ecommerce',
  },
];

// ==================== Delivery ====================
export interface Capability {
  icon: LucideIcon;
  label: string;
}

export const DELIVERY_CAPABILITIES: Capability[] = [
  { icon: Store, label: '店铺装修' },
  { icon: Menu, label: '菜单优化' },
  { icon: Megaphone, label: '活动策划' },
  { icon: BarChart3, label: '数据分析' },
  { icon: Star, label: '评分管理' },
  { icon: MessageSquare, label: '差评维护' },
];

export const DELIVERY_STATS = [
  { value: 45, suffix: '%', label: '平均单量提升' },
  { value: 4.8, suffix: '+', label: '好评率提升至' },
  { value: 300, suffix: '%', label: '曝光量增长' },
];

export const DELIVERY_PROCESS = [
  { step: '01', title: '诊断', desc: '深入分析店铺现状与竞品' },
  { step: '02', title: '策略', desc: '量身定制运营方案' },
  { step: '03', title: '执行', desc: '专业团队落地执行' },
  { step: '04', title: '优化', desc: '数据驱动持续迭代' },
];

// ==================== Branding ====================
export const BRANDING_CAPABILITIES: Capability[] = [
  { icon: Target, label: '品牌定位' },
  { icon: Palette, label: 'VI 设计' },
  { icon: Share2, label: '社媒运营' },
  { icon: Users, label: '内容创作' },
  { icon: TrendingUp, label: 'KOL 投放' },
  { icon: Megaphone, label: '事件营销' },
];

export const BRANDING_PLATFORMS = [
  { name: '抖音', color: '#000' },
  { name: '小红书', color: '#FE2C55' },
  { name: '微信', color: '#07C160' },
  { name: '微博', color: '#E6162D' },
];

// ==================== Ecommerce ====================
export const ECOMMERCE_CAPABILITIES: Capability[] = [
  { icon: LayoutDashboard, label: '店铺代运营' },
  { icon: Video, label: '直播运营' },
  { icon: Menu, label: '商品策划' },
  { icon: Target, label: '流量投放' },
  { icon: BarChart3, label: '数据分析' },
  { icon: HeadphonesIcon, label: '客服管理' },
];

export const ECOMMERCE_PLATFORMS = ['天猫', '京东', '抖音电商', '拼多多', '快手电商'];

export const ECOMMERCE_STATS = [
  { value: 200, suffix: '%+', label: 'GMV 增长' },
  { value: 3.5, suffix: ' 倍', label: 'ROI 提升' },
];

// ==================== Stats ====================
export const STATS = [
  { value: 500, suffix: '+', label: '服务商家', desc: '累计服务餐饮与零售商家' },
  { value: 40, suffix: '%', label: '平均业绩提升', desc: '合作商家平均增长率' },
  { value: 4.8, suffix: '+', label: '好评率', desc: '外卖店铺平均评分' },
  { value: 100, suffix: '+', label: '品牌合作', desc: '品牌营销合作项目' },
  { value: 50, suffix: '+', label: '运营团队', desc: '专业运营团队规模' },
  { value: 30, suffix: '+', label: '覆盖城市', desc: '业务覆盖城市数量' },
];

// ==================== Cases ====================
export const CASES = [
  {
    industry: '连锁火锅品牌',
    pain: '外卖单量低迷，评分仅 3.5',
    solution: '全平台店铺优化 + 菜单重构 + 活动策略',
    result: '单量提升 280%，评分升至 4.9',
    tag: '外卖运营',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    industry: '新锐茶饮品牌',
    pain: '品牌知名度低，门店客流不足',
    solution: '社媒种草 + KOL 投放 + 事件营销',
    result: '品牌曝光 5000 万+，客流翻倍',
    tag: '品牌营销',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    industry: '零食电商卖家',
    pain: '店铺流量下滑，ROI 低于 1.5',
    solution: '多平台布局 + 直播运营 + 投放优化',
    result: 'GMV 增长 350%，ROI 提升至 4.2',
    tag: '电商运营',
    gradient: 'from-orange-500/10 to-amber-500/10',
  },
];

// ==================== Process ====================
export const PROCESS_STEPS = [
  {
    step: '01',
    title: '需求诊断',
    desc: '深入了解您的业务现状、目标与挑战，全面评估运营机会点。',
    icon: BarChart3,
  },
  {
    step: '02',
    title: '方案定制',
    desc: '量身打造运营策略与执行方案，明确目标与时间节点。',
    icon: Menu,
  },
  {
    step: '03',
    title: '执行落地',
    desc: '专业团队全方位执行，实时数据驱动优化调整。',
    icon: TrendingUp,
  },
  {
    step: '04',
    title: '效果复盘',
    desc: '定期复盘数据成果，持续迭代优化策略，确保长效增长。',
    icon: Target,
  },
];

// ==================== Testimonials ====================
export const TESTIMONIALS = [
  {
    name: '张先生',
    role: '某连锁餐饮品牌创始人',
    content: '合作半年，外卖单量翻了三倍，团队很专业，响应速度很快。',
    rating: 5,
  },
  {
    name: '李女士',
    role: '某新消费品牌市场总监',
    content: '云莱掌柜帮我们从零搭建了小红书矩阵，3个月粉丝涨到10万。',
    rating: 5,
  },
  {
    name: '王总',
    role: '某零食电商负责人',
    content: '入驻抖音电商后 GMV 从月20万做到了月150万，非常满意。',
    rating: 5,
  },
];

// ==================== FAQ ====================
export const FAQS = [
  {
    q: '你们的外卖运营服务包括哪些内容？',
    a: '全托管服务：店铺搭建、菜单优化、活动策划、数据运营、评分管理等，覆盖美团、饿了么双平台。',
  },
  {
    q: '合作周期一般是多久？',
    a: '建议至少3个月起，6个月以上效果更佳。运营是一个持续迭代的过程，周期越长效果越稳定。',
  },
  {
    q: '费用怎么算？',
    a: '根据业务类型和需求定制报价，提供基础版/标准版/旗舰版三种方案，满足不同规模的商家需求。',
  },
  {
    q: '你们能覆盖哪些城市？',
    a: '目前已覆盖全国30+城市，包括北京、上海、广州、深圳等一线城市，以及大量二三线城市，持续扩展中。',
  },
  {
    q: '品牌营销和电商运营可以同时做吗？',
    a: '完全可以。我们提供多业务组合方案，实现全链路协同增长，让品牌声量和销售转化同步提升。',
  },
  {
    q: '合作后多久能看到效果？',
    a: '外卖运营一般1-2周可见初步变化（如评分、曝光），品牌营销1-3个月见效，电商运营根据平台不同2-4周可见数据变化。',
  },
  {
    q: '你们和平台官方有什么区别？',
    a: '我们是独立第三方，只对商家负责，专注运营效果而非平台抽成。我们的利益与商家完全一致。',
  },
];

// ==================== Contact ====================
export const BUSINESS_TYPES = ['外卖运营', '品牌营销', '电商运营', '综合咨询'];
