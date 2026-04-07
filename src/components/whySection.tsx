import Rive, { Fit, Layout } from "@rive-app/react-canvas"
import React from "react"

const WhySection = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center gap-8 px-7 md:max-w-3xl">
        <h2 className="text-4xl font-semibold md:text-7xl">Why VECTOR?</h2>
        <p className="text-pretty text-center font-medium md:mt-3">
          The gaming industry is broken. A handful of platforms set the rules,
          gouge fees, and when you “buy” a game, you don’t actually own
          it—you’re just getting a license. You can’t move it, back it up, or
          control what you’ve paid for, because you don’t hold the game key.
          VECTOR provides true ownership through verifiable on-chain game keys,
          fair fees for developers, and a marketplace built for players and
          creators alike.
        </p>
      </div>
      <div className="relative z-10 mt-7 flex  aspect-video flex-col items-center px-7 md:max-w-3xl md:px-7">
        <Rive
          src="/hero.riv"
          className="mt-3 h-64 w-80 scale-125 md:h-80 md:w-96 md:scale-150"
          layout={
            new Layout({
              fit: Fit.Contain
            })
          }
        />
      </div>
    </>
  )
}

export default WhySection

