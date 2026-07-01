import { type ReactNode } from 'react'
import { type LucideIcon } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

type FeatureKey = 'agent' | 'alerts' | 'menubar' | 'privacy'

export default function FeatureSection({ id, icon: Icon, mockup, reverse }: {
  id: FeatureKey
  icon: LucideIcon
  mockup: ReactNode
  reverse: boolean
}) {
  const { t } = useI18n()
  const feature = t.features[id]

  return (
    <section id={id} className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          {/* Mockup */}
          <div className="flex-1 w-full max-w-lg">{mockup}</div>

          {/* Text */}
          <div className="flex-1 max-w-md">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-teal/10 dark:bg-brand-teal-bright/10 mb-5">
              <Icon size={20} className="text-brand-teal dark:text-brand-teal-bright" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] dark:text-[#e8e8ed] mb-2">{feature.title}</h3>
            <p className="text-sm font-medium text-brand-teal dark:text-brand-teal-bright mb-4">{feature.subtitle}</p>
            <p className="text-[15px] text-[#6e6e73] dark:text-[#8e8e9a] leading-relaxed">{feature.desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
