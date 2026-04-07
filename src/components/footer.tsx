import Image from "next/image"
import Link from "next/link"
import { PiDiscordLogo, PiTelegramLogo } from "react-icons/pi"
import { RiTwitterXFill } from "react-icons/ri"

const Footer = () => {
  return (
    <footer className="w-full p-8">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-bold text-black">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/terms-of-service"
                className="text-sm hover:text-black/90"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/data-protection-policy"
                className="text-sm hover:text-gray-900"
              >
                Data Protection Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-end md:text-right">
          <Image
            src="/logo.svg"
            alt="VECTOR"
            width={373}
            height={85}
            className="mb-4 w-[200px] md:w-[300px]"
          />
          <p className="mb-2 text-sm text-gray-600 transition-colors hover:text-gray-900">
            <a href="mailto:hello@playonvector.com" className="hover:underline">
              hello@playonvector.com
            </a>
          </p>
          <p className="mb-4 text-base text-black">Join us on social media</p>
          <div className="flex gap-4 md:justify-end">
            <Link
              href="https://t.me/playonvector"
              target="_blank"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <PiTelegramLogo fontSize={32} />
            </Link>

            <Link
              href="https://x.com/playonvector"
              target="_blank"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <RiTwitterXFill fontSize={32} />
            </Link>
            <Link
              href="https://discord.com/invite/playonvector"
              target="_blank"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <PiDiscordLogo fontSize={32} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

