import { Download } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

export default function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="pt-32 pb-12 relative">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium
          text-brand-teal dark:text-brand-teal-bright bg-brand-teal/8 dark:bg-brand-teal-bright/8
          border border-brand-teal/20 dark:border-brand-teal-bright/20 mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal dark:bg-brand-teal-bright shadow-[0_0_6px_rgba(18,210,174,0.6)]" />
          {t.hero.badge}
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-5">
          <span className="bg-gradient-to-r from-brand-teal via-brand-teal-bright to-brand-blue bg-clip-text text-transparent">{t.hero.title1}</span>
        </h1>

        <p className="text-lg md:text-xl text-[#6e6e73] dark:text-[#8e8e9a] max-w-lg mx-auto mt-5 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex items-center justify-center gap-4 mt-9 flex-wrap">
          <a href="https://github.com/tyrival/TokenPrism-Releases/releases/latest/download/TokenPrism.dmg"
            className="inline-flex items-center gap-2 px-7 py-3 text-base font-semibold text-white
              bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-teal/90 hover:to-brand-blue/90
              rounded-xl shadow-[0_4px_24px_rgba(18,210,174,0.3)] dark:shadow-[0_4px_32px_rgba(18,210,174,0.35)]
              transition-all hover:-translate-y-0.5 no-underline"
          >
            <Download size={18} />
            {t.hero.download}
          </a>
        </div>
        <p className="text-xs text-[#aeaeb2] dark:text-[#5a5a6e] mt-4">{t.hero.note}</p>
      </div>

      {/* App mockup window */}
      <div className="max-w-3xl mx-auto px-4 mt-12 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)] border border-[#e5e5ea] dark:border-[#2a2d3a] bg-[#f8f9fb] dark:bg-[#12141c]">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e5e5ea] dark:border-[#1e2230]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center text-xs text-[#aeaeb2] dark:text-[#5a5a6e] font-medium">TokenPrism</div>
          </div>
          {/* Mockup content — usage cards */}
          <div className="p-5 flex gap-3 justify-center">
            {/* Health card */}
            <div className="flex-shrink-0 w-44 rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] bg-white dark:bg-[#1a1d28] p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-wider">{t.mockup.cycle}</span>
                <span className="text-[8px] font-heavy uppercase px-2 py-0.5 rounded-full bg-brand-teal/15 text-brand-teal dark:bg-brand-teal/20 dark:text-brand-teal-bright">{t.mockup.health}</span>
              </div>
              <div className="text-2xl font-bold text-[#1d1d1f] dark:text-[#e8e8ed]">78<span className="text-base">%</span></div>
              <div className="text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e]">{t.mockup.remaining}</div>
              <div className="mt-2 h-2 rounded-full bg-[#e5e5ea] dark:bg-[#2a2d3a] overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-brand-teal to-brand-teal-bright" style={{ width: '78%' }} />
              </div>
            </div>
            {/* Medium card */}
            <div className="flex-shrink-0 w-44 rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] bg-white dark:bg-[#1a1d28] p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-wider">{t.mockup.weekly}</span>
                <span className="text-[8px] font-heavy uppercase px-2 py-0.5 rounded-full bg-brand-amber/15 text-brand-amber">{t.mockup.medium}</span>
              </div>
              <div className="text-2xl font-bold text-[#1d1d1f] dark:text-[#e8e8ed]">45<span className="text-base">%</span></div>
              <div className="text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e]">{t.mockup.remaining}</div>
              <div className="mt-2 h-2 rounded-full bg-[#e5e5ea] dark:bg-[#2a2d3a] overflow-hidden">
                <div className="h-full rounded-full bg-brand-amber" style={{ width: '45%' }} />
              </div>
            </div>
            {/* Provider badge */}
            <div className="flex-shrink-0 w-32 rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] bg-white dark:bg-[#1a1d28] p-3 flex flex-col items-center justify-center gap-2">
              <div className="text-[9px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-wider">{t.mockup.usage}</div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-cyan/40 bg-cyan/5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-[11px] font-bold text-[#1d1d1f] dark:text-[#e8e8ed]">{t.mockup.codex}</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-purple/40 bg-purple/5">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="text-[11px] font-bold text-[#1d1d1f] dark:text-[#e8e8ed]">{t.mockup.claude}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
