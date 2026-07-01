const en = {
  nav: { download: 'Download' },
  hero: {
    badge: 'macOS Menu Bar · Real-Time API Monitor',
    title1: 'TokenPrism',
    title2: '',
    subtitle: 'Monitor your Codex and Claude API usage right from the macOS menu bar. Track token consumption, set balance alerts, and stay on top of your API costs — all in a compact, native interface.',
    download: 'Free Download',
    note: 'Requires macOS 26.5+ · Free',
  },
  features: {
    monitor: {
      title: 'Real-Time Usage Monitoring',
      subtitle: 'Track token consumption across providers',
      desc: 'Monitor your Codex and Claude API usage with daily and weekly charts. See remaining balance at a glance with color-coded health indicators — teal for healthy, amber for medium, red for low. Auto-refreshes so your data is always current.',
    },
    alerts: {
      title: 'Smart Balance Alerts',
      subtitle: 'Get notified before you run out',
      desc: 'Set custom thresholds for cycle and weekly usage alerts. When your balance drops below your defined limits, TokenPrism sends a macOS notification. Configure different thresholds for different usage patterns — never run out unexpectedly.',
    },
    menubar: {
      title: 'Menu Bar Integration',
      subtitle: 'Usage percentage always visible',
      desc: 'See your current usage percentage directly in the macOS menu bar. The icon changes through 6 levels based on remaining balance, giving you an instant visual cue. Optional percentage text and countdown timer keep you informed at a glance.',
    },
    privacy: {
      title: 'Private & Secure',
      subtitle: 'Your API keys stay on your machine',
      desc: 'TokenPrism reads API keys from your local environment variables — nothing is ever uploaded or shared. All usage data is stored locally using SwiftData. No accounts, no tracking, no analytics. Just a native macOS app that respects your privacy.',
    },
  },
  cta: { title: 'Start Monitoring Your API Usage', desc: 'Free. No ads. Native macOS experience. Requires macOS 26.5+.', download: 'Download for macOS' },
  footer: { download: 'Download' },
  mockup: {
    cycle: 'CYCLE',
    weekly: 'WEEKLY',
    remaining: 'Remaining',
    health: 'HEALTH',
    medium: 'MEDIUM',
    low: 'LOW',
    codex: 'Codex',
    claude: 'Claude',
    usage: 'USAGE',
    settings: 'Settings',
  },
}

const zh: typeof en = {
  nav: { download: '下载' },
  hero: {
    badge: 'macOS 菜单栏 · 实时 API 用量监控',
    title1: 'TokenPrism',
    title2: '',
    subtitle: '在 macOS 菜单栏中实时监控你的 Codex 和 Claude API 用量。追踪 token 消耗、设置余量提醒、随时掌握 API 成本 — 一切尽在紧凑的原生界面中。',
    download: '免费下载',
    note: '要求 macOS 26.5+ · 完全免费',
  },
  features: {
    monitor: {
      title: '实时用量监控',
      subtitle: '跨提供商追踪 token 消耗',
      desc: '通过每日和每周图表监控你的 Codex 和 Claude API 使用情况。通过颜色编码的健康指标一目了然地查看剩余余量——蓝绿色表示充足，琥珀色表示一般，红色表示不足。自动刷新确保数据始终最新。',
    },
    alerts: {
      title: '智能余量提醒',
      subtitle: '在余量耗尽前收到通知',
      desc: '为周期和每周用量设置自定义阈值提醒。当余量低于你设定的限制时，TokenPrism 会发送 macOS 通知。根据不同使用模式配置不同阈值 — 再也不会意外耗尽。',
    },
    menubar: {
      title: '菜单栏集成',
      subtitle: '用量百分比始终可见',
      desc: '在 macOS 菜单栏中直接查看当前用量百分比。图标根据剩余余量分为 6 个等级变化，提供即时视觉提示。可选的百分比文字和倒计时让你随时掌握用量状态。',
    },
    privacy: {
      title: '隐私安全',
      subtitle: '你的 API 密钥只留在本地',
      desc: 'TokenPrism 从本地环境变量读取 API 密钥 — 不会上传或分享任何内容。所有用量数据使用 SwiftData 本地存储。无需账户、无追踪、无分析。只是一个尊重你隐私的原生 macOS 应用。',
    },
  },
  cta: { title: '开始监控你的 API 用量', desc: '免费、无广告、macOS 原生体验。支持 macOS 26.5+。', download: '下载 macOS 版' },
  footer: { download: '下载' },
  mockup: {
    cycle: '周期',
    weekly: '每周',
    remaining: '剩余',
    health: '充足',
    medium: '一般',
    low: '不足',
    codex: 'Codex',
    claude: 'Claude',
    usage: '用量',
    settings: '设置',
  },
}

export type Lang = 'en' | 'zh'
export type Translations = typeof en
export const translations: Record<Lang, Translations> = { en, zh }
