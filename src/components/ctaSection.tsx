import Image from "next/image"
import DownloadButton from "./downloadButton"

export const CTASection = () => {
  return (
    <div className="relative z-10 mt-16 flex flex-col items-center px-7 md:mb-32 md:mt-20 md:max-w-3xl">
      <Image
        src="/logo.svg"
        alt="VECTOR"
        width={486}
        height={90}
        className="w-[260px] sm:mt-0 md:mt-10 md:w-[486px]"
      />
      <p className="mt-8 text-center text-2xl font-medium ">
        You can’t move it, back it up, or control what you’ve paid for, because
        you don’t hold the game key.
      </p>
      <div className="mb-16 mt-10">
        <DownloadButton />
      </div>
    </div>
  )
}

export default CTASection

