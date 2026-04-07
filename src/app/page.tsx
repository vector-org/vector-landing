"use client"

import NewsletterSection from "../components/newsletterSection"
import CardSection from "../components/cardSection"
import FAQSection from "../components/faqSection"
import FeaturesSection from "../components/featuresSection"
import Footer from "../components/footer"
import HeroSection from "../components/heroSection"
import NavMenu from "../components/navMenu"
import WhySection from "../components/whySection"

export default function Landing() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <NavMenu />

      <div className="relative flex w-screen max-w-[1600px] flex-col items-center overflow-hidden bg-white px-8 md:px-24">
        <p className="pointer-events-none absolute left-14 hidden -translate-x-1/2 translate-y-full -rotate-90 select-none text-[200px] font-bold text-[--background] md:flex">
          PLAYER
        </p>
        <HeroSection />
        <FeaturesSection />
        <div className="relative hidden w-full justify-center whitespace-nowrap md:flex">
          <p
            className="pointer-events-none absolute hidden -translate-y-1/2 select-none text-[200px] font-bold text-[--background] [mask-image:linear-gradient(to_bottom,white,transparent)]
             md:flex"
          >
            YOUR KEYS
          </p>
        </div>
        <div id="why-vector" className="-mt-32 pt-32">
          <WhySection />
        </div>
        <div className="relative hidden w-full justify-center whitespace-nowrap md:flex">
          <p className="pointer-events-none absolute right-[-20px] hidden translate-x-1/2 -rotate-90 select-none text-[200px] font-bold text-[--background] md:flex">
            YOUR GAMES
          </p>
        </div>
        <CardSection />
      </div>
      <div className="relative mt-6 flex w-screen max-w-[1600px] flex-col items-center bg-white px-8 md:px-24">
        <NewsletterSection />
        <p
          className="pointer-events-none absolute hidden translate-y-[400px] select-none whitespace-nowrap text-[200px] font-bold
             text-[--background] md:flex"
        >
          PLAY // MORE
        </p>
      </div>
      <div className="relative mt-6 flex w-screen max-w-[1600px] flex-col items-center bg-white px-8 md:px-24">
        <FAQSection />
      </div>
      <div className="relative flex w-screen max-w-[1600px] flex-col items-center border-t border-black bg-white">
        <div className="flex w-full px-8 md:px-24">
          <Footer />
        </div>
      </div>
    </div>
  )
}

