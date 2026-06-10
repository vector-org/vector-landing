import { Button } from "@/components/ui"
import Image from "next/image"
import DownloadButton from "./downloadButton"

export const HeroSection = () => {
  return (
    <div
      id="hero"
      className="relative z-0 mt-6 flex flex-col items-center px-7 md:max-w-3xl md:px-7"
    >
      <Image
        src="/ykyg.svg"
        alt="Vector slogan"
        height={40}
        width={420}
        className="h-auto w-[260px] md:w-[420px]"
      />
      <Image
        src="/logo.svg"
        alt="VECTOR"
        width={810}
        height={150}
        className="w-[260px] sm:mt-0 md:mt-10 md:w-[760px]"
      />
      <div className="mt-7 w-full max-w-3xl">
        <video
          className="size-full rounded-lg"
          src="/vector.MP4"
          controls
          autoPlay
          muted
          loop
          playsInline
          title="Vector hero video"
        />
      </div>
      <div className="mt-9 flex w-full flex-wrap justify-center gap-3 px-7 md:gap-6">
        <DownloadButton />
        <Button
          variant="ghost"
          className="border-2 border-input font-semibold hover:bg-inherit  hover:text-inherit"
          onClick={() => {
            const section = document.getElementById("why-vector")
            section?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Learn More
        </Button>
      </div>
    </div>
  )
}

export default HeroSection

