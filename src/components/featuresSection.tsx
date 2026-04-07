import { motion } from "motion/react"
import React from "react"

const FeaturesCard: React.FC<{
  title: string
  description: string
  index: number
}> = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex w-full min-w-44 max-w-xs flex-col items-center justify-center gap-7 rounded-2xl border-2 border-input p-7 sm:max-w-sm md:max-w-md lg:max-w-lg"
    >
      <h4 className="text-center text-2xl font-semibold md:text-3xl lg:text-4xl">
        {title}
      </h4>
      <p className="mt-2 text-center text-sm font-medium md:text-base lg:text-lg">
        {description}
      </p>
    </motion.div>
  )
}

const FeaturesSection = () => {
  const features = [
    {
      title: "Low Fees",
      description:
        "We're not middlemen. VECTOR keeps fees low so gamers and devs thrive."
    },
    {
      title: "True Ownership",
      description:
        "Downloaded a game? You have a digital license; you never truly owned it. VECTOR gives you verifiable game ownership"
    },
    {
      title: "Multi-Platform",
      description:
        "For gamers: Play on VECTOR on both PC and Mac with seamless cross-compatibility. For developers: ship content with friction-free integration, no extra builds, no headaches."
    }
  ]

  return (
    <div className="relative z-0 mb-28 mt-32 flex flex-col items-center gap-20 px-7 md:mb-72">
      <h2 className="text-4xl font-semibold md:text-7xl">Features</h2>
      <div className="flex flex-col justify-evenly gap-6 md:flex-row">
        {features.map((feature, i) => (
          <FeaturesCard key={feature.title} index={i} {...feature} />
        ))}
      </div>
    </div>
  )
}

export default FeaturesSection

