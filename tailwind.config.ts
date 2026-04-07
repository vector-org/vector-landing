import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mona-sans)", "Mona Sans", "system-ui", "sans-serif"],
        mono: ["Mona Sans", "monospace"]
      },
      colors: {
        "vector-teal": "#9CD3B8",
        "dark-teal": "#99C8B1",
        "vector-orange": "#F67327",
        "vector-red": "#CD1C18",
        "vector-red-2": "#F05959",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-alt": "rgb(var(--background-alt) / <alpha-value>)",
        grey: {
          100: "rgb(var(--grey-100) / <alpha-value>)",
          300: "rgb(var(--grey-300) / <alpha-value>)",
          500: "rgb(var(--grey-500) / <alpha-value>)",
          600: "rgb(var(--grey-600) / <alpha-value>)",
          900: "rgb(var(--grey-900) / <alpha-value>)"
        },
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--primary-foreground) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        "secondary-foreground": "rgb(var(--secondary-foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        "muted-foreground": "rgb(var(--muted-foreground) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-foreground": "rgb(var(--accent-foreground) / <alpha-value>)",
        destructive: "rgb(var(--destructive) / <alpha-value>)",
        "destructive-foreground": "rgb(var(--destructive-foreground) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        white: "#FFFFFF",
        sidebar: "#2B2B2B",
        "sidebar-foreground": "#FFFFFF",
        "sidebar-primary": "#9CD3B8",
        "sidebar-primary-foreground": "#293330",
        "sidebar-accent": "#F67327",
        "sidebar-accent-foreground": "#293330",
        "sidebar-border": "#2B2B2B",
        "sidebar-ring": "#2B2B2B",
        "chart-1": "#FF6384",
        "chart-2": "#36A2EB",
        "chart-3": "#FFCE56",
        "chart-4": "#4BC0C0",
        "chart-5": "#9966FF",
        negative: "#FF0000",
        "dark-green": "#003300"
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
        vector: "0 4px 60px -15px rgba(0, 0, 0, 0.3)"
      },
      keyframes: {
        ringPulse: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(249,115,22, 0.7)"
          },
          "50%": {
            boxShadow: "0 0 0 8px rgba(249,115,22, 0)"
          }
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" }
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        },
        pulse: {
          "50%": {
            opacity: "0.5"
          }
        }
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        ringPulse: "ringPulse 1s ease-in-out infinite",
        spin: "spin 1s linear infinite",
        pulse: "pulse 1s ease-in-out infinite"
      },
      transitionDuration: {
        standard: "300ms"
      }
    }
  },
  plugins: [tailwindAnimate]
}

export default config
