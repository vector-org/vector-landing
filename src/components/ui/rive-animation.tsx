"use client"

import { Fit, Layout, useRive } from "@rive-app/react-canvas"
import { cn } from "../../lib/utils"

export interface RiveAnimationProps {
  src: string
  className?: string
  layoutScaleFactor?: number
  autoplay?: boolean
}

export const RiveAnimation: React.FC<RiveAnimationProps> = ({
  src,
  className,
  layoutScaleFactor = 0.35,
  autoplay = true
}) => {
  const { RiveComponent } = useRive({
    src,
    layout: new Layout({
      fit: Fit.Layout,
      layoutScaleFactor
    }),
    autoplay
  })
  return (
    <div className={cn("h-48 w-60", className)}>
      <RiveComponent />
    </div>
  )
}

