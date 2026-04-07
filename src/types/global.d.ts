export {}

declare global {
  interface Window {
    silktideCookieBannerManager?: {
      updateCookieBannerConfig: (config: unknown) => void
    }
    gtag: (...args: unknown[]) => void
    dataLayer: Record<string, unknown>[]
  }
}

