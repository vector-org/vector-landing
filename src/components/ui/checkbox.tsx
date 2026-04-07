import { Check } from "lucide-react"
import {
  Root as CheckboxRoot,
  CheckboxIndicator
} from "@radix-ui/react-checkbox"
import { cn } from "../../lib/utils"
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react"

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxRoot>,
  ComponentPropsWithoutRef<typeof CheckboxRoot>
>(({ className, ...props }, ref) => (
  <CheckboxRoot
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-neutral-200 border-neutral-900 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-vector-teal data-[state=checked]:text-neutral-50 dark:border-neutral-800 dark:border-neutral-50 dark:focus-visible:ring-neutral-300 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=checked]:text-neutral-900",
      className
    )}
    {...props}
  >
    <CheckboxIndicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="size-4" />
    </CheckboxIndicator>
  </CheckboxRoot>
))
Checkbox.displayName = CheckboxRoot.displayName

export { Checkbox }

