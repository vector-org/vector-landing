"use client"

import {
  cn,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import DownloadButton from "./downloadButton"

export const navItems = {
  home: {
    label: "Home",
    href: "/"
  },
  documentation: {
    label: "Documentation",
    href: "/docs"
  },
  download: {
    label: "Download",
    href: "/download"
  }
}

const NavMenu = () => {
  const [scrolledPastHero, setScrolledPastHero] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector("#hero")?.clientHeight || 400
      setScrolledPastHero(window.scrollY > heroHeight - 100)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const showLogo = pathname !== "/" || scrolledPastHero

  return (
    <div className="sticky top-0 z-50 flex w-screen max-w-[1600px] flex-col items-center bg-white drop-shadow-md">
      <div className="flex w-full items-center justify-between p-2 transition-all duration-standard">
        <div className="flex items-center">
          <Link
            href="/"
            className={cn(
              "transition-all duration-standard ease-in-out",
              showLogo
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            )}
          >
            <Image
              src="/logo.svg"
              alt="Vector Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="hidden w-full justify-end md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/press"
                  className="px-4 py-2 text-sm font-medium transition-colors"
                >
                  Press
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DownloadButton short />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* <Sheet>
          <SheetTrigger asChild>
            <PiList
              size={32}
              className="md:hidden"
              aria-label="Toggle navigation menu"
            />
          </SheetTrigger>
          <SheetContent className="md:hidden">
            <div className="grid gap-4 p-4">
              <Link href={navItems.home.href} prefetch={false}>
                {navItems.home.label}
              </Link>
              <Link href={navItems.documentation.href} prefetch={false}>
                {navItems.documentation.label}
              </Link>
            </div>
          </SheetContent>
        </Sheet> */}
      </div>
    </div>
  )
}

export default NavMenu

