import { useI18n } from '../i18n/I18nContext'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-[#e5e5ea] dark:border-[#1e2230] py-8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="text-sm text-[#aeaeb2] dark:text-[#5a5a6e]">TokenPrism</span>
        <div className="flex items-center gap-6">
          <a href="https://github.com/tyrival/TokenPrism-Releases/releases/latest/download/TokenPrism.dmg"
            className="text-sm text-[#6e6e73] dark:text-[#8e8e9a] hover:text-[#1d1d1f] dark:hover:text-[#e8e8ed] transition-colors no-underline"
          >
            {t.footer.download}
          </a>
          <a href="https://github.com/tyrival/TokenPrism"
            className="text-sm text-[#6e6e73] dark:text-[#8e8e9a] hover:text-[#1d1d1f] dark:hover:text-[#e8e8ed] transition-colors no-underline"
            target="_blank" rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
