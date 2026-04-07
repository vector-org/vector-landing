"use client"
import { Button, RiveAnimation } from "@/components/ui"
import { useRouter } from "next/navigation"
import { PiCardsThreeFill } from "react-icons/pi"

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="flex size-full flex-col items-center justify-center space-y-4 rounded-md bg-white">
      <RiveAnimation
        src="/hero.riv"
        layoutScaleFactor={0.5}
        className="h-[300px] w-[390px]"
      />
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-lg font-medium">Page Not Found</h1>
        <p className="text-center text-sm">
          The content you are looking for is unavailable.
        </p>
      </div>
      <div className="flex space-x-2">
        <Button variant="default" onClick={() => router.push("/")}>
          <PiCardsThreeFill className="fill-grey-900" />
          Go to Home
        </Button>
      </div>
    </div>
  )
}

