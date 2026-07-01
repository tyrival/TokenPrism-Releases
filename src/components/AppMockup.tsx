import { useI18n } from '../i18n/I18nContext'

type MockupVariant = 'monitor' | 'alerts' | 'menubar' | 'privacy'

export default function AppMockup({ variant }: { variant: MockupVariant }) {
  const { t } = useI18n()

  return (
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

      {/* Content per variant */}
      <div className="p-5">
        {variant === 'monitor' && <MonitorMockup t={t} />}
        {variant === 'alerts' && <AlertsMockup t={t} />}
        {variant === 'menubar' && <MenubarMockup t={t} />}
        {variant === 'privacy' && <PrivacyMockup t={t} />}
      </div>
    </div>
  )
}

function MonitorMockup({ t }: { t: ReturnType<typeof useI18n>['t'] }) {
  return (
    <div className="space-y-3">
      {/* Daily chart bars */}
      <div className="flex items-end gap-2 justify-center h-24">
        {[85, 62, 78, 45, 90, 55, 70].map((h, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className="w-5 rounded-t-md transition-all"
              style={{
                height: `${h}%`,
                background: h >= 60
                  ? 'linear-gradient(to top, #12D2AE, #2EEFD3)'
                  : h >= 30
                    ? '#FEA053'
                    : '#FF607E',
              }}
            />
            <span className="text-[8px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e]">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
            </span>
          </div>
        ))}
      </div>
      {/* Legend */}
      <div className="flex items-center justify-center gap-4 text-[9px] font-semibold text-[#aeaeb2] dark:text-[#5a5a6e]">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-brand-teal" />
          {t.mockup.health}
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-brand-amber" />
          {t.mockup.medium}
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-brand-red" />
          {t.mockup.low}
        </div>
      </div>
    </div>
  )
}

function AlertsMockup({ t }: { t: ReturnType<typeof useI18n>['t'] }) {
  return (
    <div className="space-y-3">
      {/* Notification */}
      <div className="rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] bg-white dark:bg-[#1a1d28] p-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-red" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#1d1d1f] dark:text-[#e8e8ed] mb-0.5">Low Balance Alert</div>
            <div className="text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e]">Codex weekly usage below 15% threshold</div>
          </div>
        </div>
      </div>
      {/* Settings panel */}
      <div className="rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] bg-white dark:bg-[#1a1d28] p-3">
        <div className="text-[10px] font-bold text-[#1d1d1f] dark:text-[#e8e8ed] mb-2 uppercase tracking-wider">{t.mockup.settings}</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#6e6e73] dark:text-[#8e8e9a]">Cycle Threshold</span>
            <span className="text-[11px] font-bold text-[#1d1d1f] dark:text-[#e8e8ed]">20%</span>
          </div>
          <div className="h-1.5 rounded-full bg-[#e5e5ea] dark:bg-[#2a2d3a] overflow-hidden">
            <div className="h-full w-[20%] rounded-full bg-brand-amber" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#6e6e73] dark:text-[#8e8e9a]">Weekly Threshold</span>
            <span className="text-[11px] font-bold text-[#1d1d1f] dark:text-[#e8e8ed]">15%</span>
          </div>
          <div className="h-1.5 rounded-full bg-[#e5e5ea] dark:bg-[#2a2d3a] overflow-hidden">
            <div className="h-full w-[15%] rounded-full bg-brand-red" />
          </div>
        </div>
      </div>
    </div>
  )
}

function MenubarMockup(_props: { t: ReturnType<typeof useI18n>['t'] }) {
  return (
    <div className="space-y-3">
      {/* Menu bar strip */}
      <div className="rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] bg-white dark:bg-[#1a1d28] p-3">
        <div className="text-[10px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] mb-3 uppercase tracking-wider text-center">macOS Menu Bar</div>
        <div className="flex items-center justify-center gap-3">
          {/* Icon levels */}
          {[100, 75, 50, 25, 5, 0].map((level, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{
                  background: level >= 75
                    ? 'linear-gradient(135deg, #12D2AE, #2EEFD3)'
                    : level >= 40
                      ? 'linear-gradient(135deg, #FEA053, #FFB74D)'
                      : 'linear-gradient(135deg, #FF607E, #FF8A9E)',
                }}
              >
                <span className="text-[7px] font-bold text-white">{level}%</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-brand-teal/40" />
            </div>
          ))}
        </div>
        <div className="text-[9px] text-[#aeaeb2] dark:text-[#5a5a6e] text-center mt-2">78% — Resets in 3h 12m</div>
      </div>
    </div>
  )
}

function PrivacyMockup(_props: { t: ReturnType<typeof useI18n>['t'] }) {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] bg-white dark:bg-[#1a1d28] p-4 text-center">
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-teal/10 dark:bg-brand-teal-bright/10 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-teal dark:text-brand-teal-bright">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <div className="text-xs font-bold text-[#1d1d1f] dark:text-[#e8e8ed] mb-1">Local-Only Storage</div>
        <div className="text-[11px] text-[#6e6e73] dark:text-[#8e8e9a] leading-relaxed">
          All data stored locally via SwiftData. API keys read from your shell environment — never transmitted.
        </div>
      </div>
    </div>
  )
}
