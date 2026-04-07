"use client"

import { useEffect } from "react"

const CookieBanner = () => {
  useEffect(() => {
    let cancelled = false

    const updateBannerConfig = () => {
      if (
        cancelled ||
        !window.silktideCookieBannerManager?.updateCookieBannerConfig
      ) {
        return
      }

      window.silktideCookieBannerManager.updateCookieBannerConfig({
        background: { showBackground: true },
        cookieIcon: { position: "bottomRight" },
        cookieTypes: [
          {
            id: "necessary",
            name: "Necessary",
            description:
              "<p>These cookies are necessary for the website to function properly.</p>",
            required: true,
            onAccept: () => console.log("Necessary cookies accepted")
          },
          {
            id: "analytical",
            name: "Analytical",
            description:
              "<p>These help us improve the site by tracking page usage.</p>",
            required: false,
            onAccept: () => {
              window.gtag?.("consent", "update", {
                analytics_storage: "granted"
              })
              window.dataLayer?.push({ event: "consent_accepted_analytical" })
            },
            onReject: () => {
              window.gtag?.("consent", "update", {
                analytics_storage: "denied"
              })
            }
          },
          {
            id: "advertising",
            name: "Advertising",
            description:
              "<p>These cookies provide personalization and ad targeting.</p>",
            required: false,
            onAccept: () => console.log("Advertising accepted"),
            onReject: () => console.log("Advertising rejected")
          }
        ],
        text: {
          banner: {
            description:
              "<p>We use cookies to improve your experience. <a href='/cookie-policy' target='_blank'>Cookie Policy</a></p>",
            acceptAllButtonText: "Accept all",
            rejectNonEssentialButtonText: "Reject non-essential",
            preferencesButtonText: "Preferences"
          },
          preferences: {
            title: "Customize your cookie preferences",
            description:
              "<p>You can choose not to allow some types of cookies.</p>"
          }
        },
        position: { banner: "bottomRight" }
      })
    }

    const loadConsentManager = async () => {
      const existingScript = document.getElementById(
        "silktide-consent-manager-script"
      ) as HTMLScriptElement | null

      if (existingScript) {
        if (window.silktideCookieBannerManager?.updateCookieBannerConfig) {
          updateBannerConfig()
          return
        }

        existingScript.addEventListener("load", updateBannerConfig, {
          once: true
        })
        return
      }

      await new Promise<void>((resolve) => {
        const script = document.createElement("script")
        script.id = "silktide-consent-manager-script"
        script.src = "/cookie-banner/silktide-consent-manager.js"
        script.async = true
        script.onload = () => {
          updateBannerConfig()
          resolve()
        }
        document.body.appendChild(script)
      })
    }

    loadConsentManager()

    return () => {
      cancelled = true
    }
  }, [])

  return null
}

export default CookieBanner

