import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Mona_Sans } from "next/font/google"
import CookieBanner from "../components/cookieBanner"
import StructuredData from "../components/structuredData"
import "./globals.css"

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  metadataBase: new URL("https://playonvector.com"),
  title: {
    default: "VECTOR | YOUR KEYS - YOUR GAMES",
    template: "%s | VECTOR"
  },
  description:
    "VECTOR brings true ownership to gaming. Fair fees, no gatekeepers. Built for gamers and devs. YOUR KEYS - YOUR GAMES.",
  keywords: [
    "gaming",
    "blockchain",
    "",
    "games",
    "ownership",
    "decentralized",
    "play to own",
    "gaming platform",
    "crypto gaming",
    "web3 games",
    "game launcher"
  ],
  authors: [{ name: "Vector Team", url: "https://playonvector.com" }],
  creator: "Vector",
  publisher: "Vector",
  applicationName: "Vector Gaming Platform",
  category: "Gaming Application",
  classification: "Gaming Platform",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://playonvector.com",
    title: "VECTOR | YOUR KEYS - YOUR GAMES",
    description:
      "VECTOR brings true ownership to gaming. Fair fees, no gatekeepers. Built for gamers and devs.",
    siteName: "Vector",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vector Gaming Platform - Your Keys, Your Games"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "VECTOR | YOUR KEYS - YOUR GAMES",
    description:
      "VECTOR brings true ownership to gaming. Fair fees, no gatekeepers. Built for gamers and devs.",
    creator: "@playonvector",
    images: ["/twitter-card.png"]
  },
  alternates: {
    canonical: "https://playonvector.com"
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${monaSans.className} overscroll-none`}>
      <head>
        <link
          rel="stylesheet"
          id="silktide-consent-manager-css"
          href="/cookie-banner/silktide-consent-manager.css"
        />
      </head>
      <body className="h-screen antialiased">
        <StructuredData />
        {children}
        <CookieBanner />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

