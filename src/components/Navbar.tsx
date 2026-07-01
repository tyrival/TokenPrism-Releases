import { useState, useRef, useEffect } from 'react'
import { Download, ChevronDown } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { useTheme } from '../theme/ThemeContext'
import { type Lang, LANG_LABEL } from '../i18n/translations'
import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'

const ALL_LANGS: Lang[] = ['en', 'zh', 'ja', 'ko', 'de', 'fr', 'es']

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9fb]/80 dark:bg-[#0a0d14]/75 backdrop-blur-xl border-b border-[#e5e5ea] dark:border-[#1e2230]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline group">
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt="TokenPrism"
            className="h-7 w-auto rounded-lg ring-1 ring-brand-teal/30 shadow-[0_0_12px_rgba(18,210,174,0.25)]"
          />
          <span className="text-lg font-bold text-[#1d1d1f] dark:text-[#e8e8ed] tracking-tight group-hover:text-brand-teal dark:group-hover:text-brand-teal-bright transition-colors">TokenPrism</span>
        </a>

        <div className="flex items-center gap-1.5">
          {/* Language dropdown */}
          <div className="relative" ref={ref}>
            <button onClick={() => setOpen(!open)}
              className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-[#6e6e73] dark:text-[#8e8e9a] hover:text-[#1d1d1f] dark:hover:text-[#e8e8ed] hover:bg-[#e5e5ea] dark:hover:bg-[#1e2230] rounded-md transition-colors"
            >
              {LANG_LABEL[lang]}
              <ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
              <div className="absolute top-full right-0 mt-1 bg-white dark:bg-[#1a1d28] border border-[#e5e5ea] dark:border-[#2a2d3a] rounded-lg shadow-lg py-1 min-w-[120px] z-50">
                {ALL_LANGS.map((l) => (
                  <button key={l} onClick={() => { setLang(l); setOpen(false) }}
                    className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                      l === lang
                        ? 'text-brand-teal font-semibold bg-brand-teal/5 dark:bg-brand-teal/10'
                        : 'text-[#6e6e73] dark:text-[#8e8e9a] hover:text-[#1d1d1f] dark:hover:text-[#e8e8ed] hover:bg-[#f0f0f5] dark:hover:bg-[#222632]'
                    }`}
                  >
                    {LANG_LABEL[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Theme toggle */}
          <button onClick={toggle}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#6e6e73] dark:text-[#8e8e9a] hover:text-[#1d1d1f] dark:hover:text-[#e8e8ed] hover:bg-[#e5e5ea] dark:hover:bg-[#1e2230] transition-colors"
          >
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          {/* Download button */}
          <a href="https://github.com/tyrival/TokenPrism-Releases/releases/latest/download/TokenPrism.dmg"
            className="flex items-center justify-center gap-1.5 px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-teal/90 hover:to-brand-blue/90 rounded-lg transition-colors no-underline ml-1"
          >
            <Download size={14} />
            <span>{t.nav.download}</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
