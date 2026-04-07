import React from "react"
import { motion } from "motion/react"

const barSlideVariants = {
  orange: {
    initial: { y: "-100%" },
    animate: {
      y: "0%",
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] as const }
    }
  },
  green: {
    initial: { y: "100%" },
    animate: {
      y: "0%",
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] as const }
    }
  }
}

const contentRevealVariants = {
  orange: {
    initial: { clipPath: "inset(100% 0 0 0)" },
    animate: {
      clipPath: "inset(0% 0 0 0)",
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] as const }
    }
  },
  green: {
    initial: { clipPath: "inset(0 0 100% 0)" },
    animate: {
      clipPath: "inset(0% 0 0 0)",
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] as const }
    }
  },
  none: {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const, delay: 0.3 }
    }
  }
}

const Card: React.FC<
  React.PropsWithChildren<{
    variant?: "green" | "orange"
  }>
> = ({ variant, children }) => {
  // Bar height class reused for content margin
  const barHeightClass = "h-32"

  // Content padding + margin so content doesn't hide behind bar
  let contentPaddingClass = "p-8"
  if (variant === "orange")
    contentPaddingClass = "pt-40 px-8 pb-8" // top padding large for orange bar at top
  else if (variant === "green") contentPaddingClass = "pb-40 px-8 pt-8" // bottom padding large for green bar

  const selectedContentVariants = variant
    ? contentRevealVariants[variant]
    : contentRevealVariants.none
  const selectedBarVariants = variant ? barSlideVariants[variant] : null

  return (
    <motion.div
      className="relative flex min-h-[600px] min-w-72 max-w-full flex-1 basis-72 flex-col overflow-hidden rounded-lg bg-[--background]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      {variant === "orange" && (
        <motion.div
          className={`absolute inset-x-0 top-0 ${barHeightClass} rounded-t-lg bg-secondary`}
          variants={selectedBarVariants!}
        />
      )}
      {variant === "green" && (
        <motion.div
          className={`absolute inset-x-0 bottom-0 ${barHeightClass} rounded-b-lg bg-primary`}
          variants={selectedBarVariants!}
        />
      )}

      <motion.div
        className={`relative flex grow flex-col ${contentPaddingClass}`}
        variants={selectedContentVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

const CardSection = () => {
  return (
    <div className="relative z-0 my-16 flex flex-col items-center px-7">
      <div className="flex flex-wrap justify-evenly gap-6">
        <Card variant="green">
          <h3 className="mb-8 text-4xl font-bold leading-tight text-black">
            Empowering Gamers
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-lg font-medium text-secondary">
                Ownership and Control
              </h4>
              <p className="text-base leading-relaxed text-black">
                Players have complete ownership of their games and assets,
                enabling them to trade or resell freely.
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-medium text-secondary">
                Interoperability
              </h4>
              <p className="text-base leading-relaxed text-black">
                Gamers can use their licenses and assets across multiple games
                within the VECTOR ecosystem, adding unprecedented utility and
                value.
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-medium text-secondary">
                Social Connectivity
              </h4>
              <p className="text-base leading-relaxed text-black">
                Built-in social features, including profiles, guilds, and
                messaging, create a vibrant community where gamers can connect
                and collaborate.
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex h-full flex-col justify-end">
            <h3
              className="bg-[linear-gradient(135deg,_#9DD3B8_30%,_#F3732D_80%)] bg-clip-text text-right text-5xl font-medium
              leading-none text-transparent"
            >
              YOUR
              <br />
              KEYS
              <br />
              YOUR
              <br />
              GAMES
            </h3>
          </div>
        </Card>
        <Card variant="orange">
          <h3 className="mb-8 text-4xl font-bold leading-tight text-black">
            Benefits for Developers
          </h3>

          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-lg font-medium text-secondary">
                Cost Efficiency
              </h2>
              <p className="text-base leading-relaxed text-black">
                Minimal fees for listing games on the VECTOR marketplace mean
                more revenue stays with the developers.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-medium text-secondary">
                Broader Market Reach
              </h2>
              <p className="text-base leading-relaxed text-black">
                By supporting popular game engines such as Unity, Unreal Engine,
                and Godot, VECTOR enables seamless integration for developers
                across various platforms.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-medium text-secondary">
                Ease of Integration
              </h2>
              <p className="text-base leading-relaxed text-black">
                VECTOR’s plugins and APIs simplify the process of integrating
                games, ensuring developers can quickly on board their projects
                with minimal friction.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CardSection

