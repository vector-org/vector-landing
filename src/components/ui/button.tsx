import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

const buttonVariants = cva(
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-white",
        outline: "border-input bg-background-alt shadow-xs border-2",
        dropdown:
          "border-grey-500 border bg-neutral-50 px-3 py-2 text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-0",
        subtle: "border-0 bg-slate-100 ring-0",
        secondary: "bg-grey-100 hover:bg-grey-100/90 text-black",
        ghost: "hover:text-muted-foreground",
        link: "text-primary",
        gray: "bg-grey-300 hover:bg-grey-300/90 text-black",
        login:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/75",
        disabled:
          "bg-muted border-border cursor-not-allowed border border-dashed text-white opacity-70",
        contextButton:
          "bg-foreground text-background shadow-xs hover:bg-foreground/90 rounded-e-none pr-0"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "w-fit shrink-0 gap-1 whitespace-nowrap rounded-sm border px-2 py-1.5 text-xs font-medium [&>svg]:size-3",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  tooltipText?: string
  tooltipSide?: "top" | "bottom" | "left" | "right"
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  tooltipText,
  tooltipSide = "top",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  const buttonElement = (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )

  if (tooltipText) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{buttonElement}</TooltipTrigger>
        <TooltipContent side={tooltipSide}>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    )
  }

  return buttonElement
}

export { Button, buttonVariants }

