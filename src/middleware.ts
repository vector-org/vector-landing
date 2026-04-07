import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""

  if (hostname.startsWith("press.")) {
    const url = request.nextUrl.clone()

    if (url.pathname === "/") {
      url.pathname = "/press"
      return NextResponse.rewrite(url)
    }

    if (!url.pathname.startsWith("/press")) {
      url.pathname = `/press${url.pathname}`
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"]
}

