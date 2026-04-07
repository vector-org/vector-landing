"use client"

import React from "react"

export default function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      )
    setIsMobile(checkMobile)
  }, [])

  return isMobile
}

