import { createContext, useContext, useState, type ReactNode } from 'react'
import { type Lang, type Translations, translations, LANG_HTML } from './translations'

interface I18nCtx {
  lang: Lang
  t: Translations
  setLang: (l: Lang) => void
}

const I18nContext = createContext<I18nCtx>({
  lang: 'en',
  t: translations.en,
  setLang: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('tokenprism-lang')
    if (saved === 'en' || saved === 'zh' || saved === 'ja' || saved === 'ko' || saved === 'de' || saved === 'fr' || saved === 'es') return saved
    const nav = navigator.language.toLowerCase()
    if (nav.startsWith('zh')) return 'zh'
    if (nav.startsWith('ja')) return 'ja'
    if (nav.startsWith('ko')) return 'ko'
    if (nav.startsWith('de')) return 'de'
    if (nav.startsWith('fr')) return 'fr'
    if (nav.startsWith('es')) return 'es'
    return 'en'
  })

  const handleSetLang = (l: Lang) => {
    setLang(l)
    localStorage.setItem('tokenprism-lang', l)
    document.documentElement.lang = LANG_HTML[l]
    document.title = l === 'zh' ? 'TokenPrism — Codex & Claude API 用量监控' : 'TokenPrism — Codex & Claude API Usage Monitor'
  }

  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], setLang: handleSetLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
