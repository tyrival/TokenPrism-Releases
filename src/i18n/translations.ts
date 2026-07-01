const en = {
  nav: { features: 'Features', download: 'Download' },
  hero: {
    badge: 'macOS Menu Bar · Real-Time API Monitor',
    title1: 'TokenPrism',
    subtitle: 'Monitor your Codex and Claude API usage and agent activity right from the macOS menu bar. Track token consumption, watch agent status, set balance alerts — all in a compact, native interface.',
    download: 'Free Download',
    note: 'Requires macOS 26.5+ · Free',
  },
  features: {
    agent: {
      title: 'Agent Status Monitoring',
      subtitle: 'Track Codex & Claude agent activity in real time',
      desc: 'Monitor when your AI agents are working, waiting, or done. Visual status indicators show agent state at a glance — blue for active, green for completed, red for errors. Track activity across both Codex and Claude, with configurable layout and source ordering.',
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
    working: 'Working',
    waiting: 'Waiting',
    done: 'Done',
  },
}

const zh: typeof en = {
  nav: { features: '功能', download: '下载' },
  hero: {
    badge: 'macOS 菜单栏 · 实时 API 用量监控',
    title1: 'TokenPrism',
    subtitle: '在 macOS 菜单栏中实时监控你的 Codex 和 Claude API 用量与 Agent 活动。追踪 token 消耗、观察 Agent 状态、设置余量提醒 — 一切尽在紧凑的原生界面中。',
    download: '免费下载',
    note: '要求 macOS 26.5+ · 完全免费',
  },
  features: {
    agent: {
      title: 'Agent 状态监控',
      subtitle: '实时追踪 Codex 与 Claude Agent 活动',
      desc: '监控你的 AI Agent 何时工作中、等待中或已完成。视觉状态指示一目了然——蓝色表示活跃，绿色表示完成，红色表示错误。跨 Codex 和 Claude 追踪活动，支持可配置的布局和来源排序。',
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
    working: '工作中',
    waiting: '等待中',
    done: '已完成',
  },
}

const ja: typeof en = {
  nav: { features: '機能', download: 'ダウンロード' },
  hero: {
    badge: 'macOS メニューバー · リアルタイム API モニター',
    title1: 'TokenPrism',
    subtitle: 'Codex と Claude の API 使用量とエージェントアクティビティを macOS のメニューバーからリアルタイムで監視。トークン消費の追跡、エージェント状態の確認、残高アラートの設定 — すべてコンパクトなネイティブインターフェースで。',
    download: '無料ダウンロード',
    note: 'macOS 26.5+ 対応 · 無料',
  },
  features: {
    agent: {
      title: 'エージェント状態監視',
      subtitle: 'Codex と Claude エージェントのアクティビティをリアルタイムで追跡',
      desc: 'AI エージェントが作業中、待機中、完了したかを監視します。視覚的な状態インジケーターで一目で確認 — 青はアクティブ、緑は完了、赤はエラー。Codex と Claude の両方でアクティビティを追跡し、レイアウトとソース順序を設定可能。',
    },
    alerts: {
      title: 'スマート残高アラート',
      subtitle: '残高がなくなる前に通知を受け取る',
      desc: 'サイクルと週次の使用量アラートにカスタムしきい値を設定。残高が設定した制限を下回ると、TokenPrism が macOS 通知を送信します。異なる使用パターンに合わせて異なるしきい値を設定 — 予期せぬ残高切れを防止。',
    },
    menubar: {
      title: 'メニューバー統合',
      subtitle: '使用率を常に表示',
      desc: '現在の使用率を macOS メニューバーに直接表示。残高に応じてアイコンが 6 段階で変化し、瞬時に状況を把握できます。オプションのパーセンテージテキストとカウントダウンタイマーで詳細も確認可能。',
    },
    privacy: {
      title: 'プライバシーとセキュリティ',
      subtitle: 'API キーはあなたのマシン上にのみ保存',
      desc: 'TokenPrism はローカル環境変数から API キーを読み取ります — 一切のアップロードや共有はありません。すべての使用データは SwiftData でローカルに保存。アカウント不要、トラッキングなし、分析なし。プライバシーを尊重するネイティブ macOS アプリです。',
    },
  },
  cta: { title: 'API 使用量の監視を始めましょう', desc: '無料・広告なし。macOS ネイティブ体験。macOS 26.5+ 対応。', download: 'macOS 版をダウンロード' },
  footer: { download: 'ダウンロード' },
  mockup: {
    cycle: 'サイクル',
    weekly: '週次',
    remaining: '残り',
    health: '健全',
    medium: '注意',
    low: '不足',
    codex: 'Codex',
    claude: 'Claude',
    usage: '使用量',
    settings: '設定',
    working: '作業中',
    waiting: '待機中',
    done: '完了',
  },
}

const ko: typeof en = {
  nav: { features: '기능', download: '다운로드' },
  hero: {
    badge: 'macOS 메뉴 바 · 실시간 API 모니터',
    title1: 'TokenPrism',
    subtitle: 'Codex와 Claude API 사용량 및 에이전트 활동을 macOS 메뉴 바에서 실시간으로 모니터링하세요. 토큰 소비 추적, 에이전트 상태 확인, 잔액 알림 설정 — 모두 컴팩트한 네이티브 인터페이스에서.​',
    download: '무료 다운로드',
    note: 'macOS 26.5+ 필요 · 무료',
  },
  features: {
    agent: {
      title: '에이전트 상태 모니터링',
      subtitle: 'Codex 및 Claude 에이전트 활동을 실시간으로 추적',
      desc: 'AI 에이전트가 작업 중, 대기 중, 완료 상태인지 모니터링합니다. 시각적 상태 표시기로 한눈에 확인 — 파란색은 활성, 녹색은 완료, 빨간색은 오류. Codex와 Claude 모두에서 활동을 추적하며 레이아웃과 소스 순서를 구성할 수 있습니다.​',
    },
    alerts: {
      title: '스마트 잔액 알림',
      subtitle: '잔액 소진 전에 알림 받기',
      desc: '사이클 및 주간 사용량 알림에 대한 사용자 정의 임계값을 설정하세요. 잔액이 설정한 한도 아래로 떨어지면 TokenPrism이 macOS 알림을 보냅니다. 다양한 사용 패턴에 맞게 서로 다른 임계값을 구성 — 예기치 않게 소진되는 일이 없습니다.​',
    },
    menubar: {
      title: '메뉴 바 통합',
      subtitle: '사용량 비율 항상 표시',
      desc: '현재 사용량 비율을 macOS 메뉴 바에서 직접 확인하세요. 남은 잔액에 따라 아이콘이 6단계로 변경되어 즉각적인 시각적 신호를 제공합니다. 선택적 비율 텍스트와 카운트다운 타이머로 한눈에 정보를 확인할 수 있습니다.​',
    },
    privacy: {
      title: '개인정보 보호 및 보안',
      subtitle: 'API 키는 사용자의 기기에만 저장됩니다',
      desc: 'TokenPrism은 로컬 환경 변수에서 API 키를 읽어오며 — 어떤 정보도 업로드되거나 공유되지 않습니다. 모든 사용 데이터는 SwiftData를 통해 로컬에 저장됩니다. 계정 불필요, 추적 없음, 분석 없음. 개인정보를 존중하는 네이티브 macOS 앱입니다.',
    },
  },
  cta: { title: 'API 사용량 모니터링 시작하기', desc: '무료. 광고 없음. 네이티브 macOS 경험. macOS 26.5+ 필요.', download: 'macOS용 다운로드' },
  footer: { download: '다운로드' },
  mockup: {
    cycle: '사이클',
    weekly: '주간',
    remaining: '남음',
    health: '양호',
    medium: '보통',
    low: '부족',
    codex: 'Codex',
    claude: 'Claude',
    usage: '사용량',
    settings: '설정',
    working: '작업 중',
    waiting: '대기 중',
    done: '완료',
  },
}

const de: typeof en = {
  nav: { features: 'Funktionen', download: 'Download' },
  hero: {
    badge: 'macOS Menüleiste · Echtzeit-API-Monitor',
    title1: 'TokenPrism',
    subtitle: 'Überwachen Sie Ihre Codex- und Claude-API-Nutzung sowie Agent-Aktivitäten direkt über die macOS-Menüleiste. Verfolgen Sie Token-Verbrauch, beobachten Sie Agent-Status und legen Sie Guthaben-Alarme fest — alles in einer kompakten, nativen Oberfläche.',
    download: 'Kostenloser Download',
    note: 'Erfordert macOS 26.5+ · Kostenlos',
  },
  features: {
    agent: {
      title: 'Agent-Statusüberwachung',
      subtitle: 'Codex- und Claude-Agent-Aktivitäten in Echtzeit verfolgen',
      desc: 'Überwachen Sie, ob Ihre KI-Agenten arbeiten, warten oder fertig sind. Visuelle Statusindikatoren auf einen Blick — blau für aktiv, grün für abgeschlossen, rot für Fehler. Aktivitäten über Codex und Claude hinweg verfolgen, mit konfigurierbarem Layout und Quellreihenfolge.',
    },
    alerts: {
      title: 'Intelligente Guthaben-Alarme',
      subtitle: 'Benachrichtigt werden, bevor das Guthaben ausgeht',
      desc: 'Legen Sie benutzerdefinierte Schwellenwerte für Zyklus- und Wochennutzungsalarme fest. Wenn Ihr Guthaben unter die festgelegten Grenzen fällt, sendet TokenPrism eine macOS-Benachrichtigung. Konfigurieren Sie verschiedene Schwellenwerte für unterschiedliche Nutzungsmuster — nie wieder unerwartet ohne Guthaben dastehen.',
    },
    menubar: {
      title: 'Menüleisten-Integration',
      subtitle: 'Nutzungsprozentsatz immer sichtbar',
      desc: 'Sehen Sie Ihren aktuellen Nutzungsprozentsatz direkt in der macOS-Menüleiste. Das Symbol wechselt je nach verbleibendem Guthaben durch 6 Stufen und gibt Ihnen einen sofortigen visuellen Hinweis. Optionaler Prozenttext und Countdown-Timer halten Sie auf dem Laufenden.',
    },
    privacy: {
      title: 'Privat & Sicher',
      subtitle: 'Ihre API-Schlüssel bleiben auf Ihrem Rechner',
      desc: 'TokenPrism liest API-Schlüssel aus Ihren lokalen Umgebungsvariablen — nichts wird jemals hochgeladen oder geteilt. Alle Nutzungsdaten werden lokal mit SwiftData gespeichert. Keine Konten, kein Tracking, keine Analyse. Einfach eine native macOS-App, die Ihre Privatsphäre respektiert.',
    },
  },
  cta: { title: 'Beginnen Sie mit der API-Nutzungsüberwachung', desc: 'Kostenlos. Keine Werbung. Native macOS-Erfahrung. Erfordert macOS 26.5+.', download: 'Für macOS herunterladen' },
  footer: { download: 'Download' },
  mockup: {
    cycle: 'ZYKLUS',
    weekly: 'WOCHE',
    remaining: 'Verbleibend',
    health: 'GUT',
    medium: 'MITTEL',
    low: 'NIEDRIG',
    codex: 'Codex',
    claude: 'Claude',
    usage: 'NUTZUNG',
    settings: 'Einstellungen',
    working: 'Arbeitet',
    waiting: 'Wartet',
    done: 'Fertig',
  },
}

const fr: typeof en = {
  nav: { features: 'Fonctionnalités', download: 'Télécharger' },
  hero: {
    badge: 'Barre de menu macOS · Moniteur API en temps réel',
    title1: 'TokenPrism',
    subtitle: 'Surveillez votre utilisation des API Codex et Claude et l\'activité des agents directement depuis la barre de menu macOS. Suivez la consommation de tokens, observez l\'état des agents, définissez des alertes de solde — le tout dans une interface native compacte.',
    download: 'Téléchargement gratuit',
    note: 'Nécessite macOS 26.5+ · Gratuit',
  },
  features: {
    agent: {
      title: 'Surveillance de l\'état des agents',
      subtitle: 'Suivez l\'activité des agents Codex et Claude en temps réel',
      desc: 'Surveillez quand vos agents IA travaillent, attendent ou ont terminé. Des indicateurs visuels d\'état en un coup d\'œil — bleu pour actif, vert pour terminé, rouge pour erreur. Suivez l\'activité sur Codex et Claude, avec une disposition et un ordre des sources configurables.',
    },
    alerts: {
      title: 'Alertes de solde intelligentes',
      subtitle: 'Soyez notifié avant d\'être à court',
      desc: 'Définissez des seuils personnalisés pour les alertes d\'utilisation par cycle et par semaine. Lorsque votre solde tombe en dessous de vos limites, TokenPrism envoie une notification macOS. Configurez différents seuils pour différents modèles d\'utilisation — ne tombez plus jamais à court.',
    },
    menubar: {
      title: 'Intégration dans la barre de menu',
      subtitle: 'Pourcentage d\'utilisation toujours visible',
      desc: 'Consultez votre pourcentage d\'utilisation actuel directement dans la barre de menu macOS. L\'icône change sur 6 niveaux selon le solde restant, vous donnant un repère visuel instantané. Un texte de pourcentage optionnel et un compte à rebours vous tiennent informé en un coup d\'œil.',
    },
    privacy: {
      title: 'Privé et sécurisé',
      subtitle: 'Vos clés API restent sur votre machine',
      desc: 'TokenPrism lit les clés API depuis vos variables d\'environnement locales — rien n\'est jamais téléchargé ni partagé. Toutes les données d\'utilisation sont stockées localement avec SwiftData. Pas de comptes, pas de pistage, pas d\'analytique. Juste une application macOS native qui respecte votre vie privée.',
    },
  },
  cta: { title: 'Commencez à surveiller votre utilisation API', desc: 'Gratuit. Sans publicité. Expérience macOS native. Nécessite macOS 26.5+.', download: 'Télécharger pour macOS' },
  footer: { download: 'Télécharger' },
  mockup: {
    cycle: 'CYCLE',
    weekly: 'SEMAINE',
    remaining: 'Restant',
    health: 'BON',
    medium: 'MOYEN',
    low: 'BAS',
    codex: 'Codex',
    claude: 'Claude',
    usage: 'UTILISATION',
    settings: 'Paramètres',
    working: 'En cours',
    waiting: 'En attente',
    done: 'Terminé',
  },
}

const es: typeof en = {
  nav: { features: 'Funciones', download: 'Descargar' },
  hero: {
    badge: 'Barra de menú macOS · Monitor API en tiempo real',
    title1: 'TokenPrism',
    subtitle: 'Monitorea el uso de tus API de Codex y Claude y la actividad de los agentes directamente desde la barra de menú de macOS. Sigue el consumo de tokens, observa el estado de los agentes, configura alertas de saldo — todo en una interfaz nativa compacta.',
    download: 'Descarga gratuita',
    note: 'Requiere macOS 26.5+ · Gratis',
  },
  features: {
    agent: {
      title: 'Monitoreo de estado de agentes',
      subtitle: 'Sigue la actividad de agentes Codex y Claude en tiempo real',
      desc: 'Monitorea cuándo tus agentes de IA están trabajando, esperando o han terminado. Indicadores visuales de estado de un vistazo — azul para activo, verde para completado, rojo para errores. Sigue la actividad en Codex y Claude, con diseño y orden de fuentes configurables.',
    },
    alerts: {
      title: 'Alertas inteligentes de saldo',
      subtitle: 'Recibe notificaciones antes de quedarte sin saldo',
      desc: 'Establece umbrales personalizados para alertas de uso por ciclo y semanal. Cuando tu saldo cae por debajo de tus límites definidos, TokenPrism envía una notificación de macOS. Configura diferentes umbrales para distintos patrones de uso — nunca te quedes sin saldo inesperadamente.',
    },
    menubar: {
      title: 'Integración en la barra de menú',
      subtitle: 'Porcentaje de uso siempre visible',
      desc: 'Ve tu porcentaje de uso actual directamente en la barra de menú de macOS. El icono cambia a través de 6 niveles según el saldo restante, dándote una señal visual instantánea. El texto de porcentaje opcional y el temporizador de cuenta regresiva te mantienen informado de un vistazo.',
    },
    privacy: {
      title: 'Privado y seguro',
      subtitle: 'Tus claves API permanecen en tu máquina',
      desc: 'TokenPrism lee las claves API de tus variables de entorno locales — nada se sube ni se comparte. Todos los datos de uso se almacenan localmente con SwiftData. Sin cuentas, sin rastreo, sin análisis. Solo una aplicación nativa de macOS que respeta tu privacidad.',
    },
  },
  cta: { title: 'Comienza a monitorear tu uso de API', desc: 'Gratis. Sin anuncios. Experiencia nativa macOS. Requiere macOS 26.5+.', download: 'Descargar para macOS' },
  footer: { download: 'Descargar' },
  mockup: {
    cycle: 'CICLO',
    weekly: 'SEMANAL',
    remaining: 'Restante',
    health: 'SALUDABLE',
    medium: 'MEDIO',
    low: 'BAJO',
    codex: 'Codex',
    claude: 'Claude',
    usage: 'USO',
    settings: 'Ajustes',
    working: 'Trabajando',
    waiting: 'Esperando',
    done: 'Completado',
  },
}

export type Lang = 'en' | 'zh' | 'ja' | 'ko' | 'de' | 'fr' | 'es'
export type Translations = typeof en
export const translations: Record<Lang, Translations> = { en, zh, ja, ko, de, fr, es }

export const LANG_LABEL: Record<Lang, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
}

export const LANG_HTML: Record<Lang, string> = {
  en: 'en',
  zh: 'zh-Hans',
  ja: 'ja',
  ko: 'ko',
  de: 'de',
  fr: 'fr',
  es: 'es',
}
