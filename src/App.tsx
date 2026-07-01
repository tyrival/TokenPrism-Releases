import { I18nProvider } from './i18n/I18nContext'
import { ThemeProvider } from './theme/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { BarChart3, Bell, Monitor, Shield } from 'lucide-react'
import AppMockup from './components/AppMockup'

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AppContent />
      </I18nProvider>
    </ThemeProvider>
  )
}

function AppContent() {
  return (
    <div className="bg-surface min-h-screen relative">
      <Navbar />
      <HeroSection />
      <FeatureSection
        id="monitor"
        icon={BarChart3}
        mockup={<AppMockup variant="monitor" />}
        reverse={false}
      />
      <FeatureSection
        id="alerts"
        icon={Bell}
        mockup={<AppMockup variant="alerts" />}
        reverse={true}
      />
      <FeatureSection
        id="menubar"
        icon={Monitor}
        mockup={<AppMockup variant="menubar" />}
        reverse={false}
      />
      <FeatureSection
        id="privacy"
        icon={Shield}
        mockup={<AppMockup variant="privacy" />}
        reverse={true}
      />
      <CTA />
      <Footer />
    </div>
  )
}
