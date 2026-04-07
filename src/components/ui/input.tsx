import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const inputVariants = cva(
  "text-foreground flex w-full border bg-transparent px-3 text-sm outline-none transition-colors duration-300 placeholder:text-gray-500",
  {
    variants: {
      variant: {
        default: "rounded-md",
        rounded: "rounded-full"
      },
      fieldSize: {
        default: "h-8",
        sm: "h-6",
        lg: "h-10"
      },
      intent: {
        default: "border-grey-500 focus:ring-primary",
        error: "border-vector-red-2 focus:ring-border-vector-red-2"
      },
      withIcon: {
        true: "pr-10",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      fieldSize: "default",
      intent: "default",
      withIcon: false
    }
  }
)

interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    Omit<VariantProps<typeof inputVariants>, "intent"> {
  endIcon?: React.ReactNode
  error?: string | boolean
  containerClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      type,
      endIcon,
      error,
      variant,
      fieldSize,
      ...props
    },
    ref
  ) => {
    const hasError = !!error
    const errorMessage = typeof error === "string" ? error : null

    const currentIntent = hasError ? "error" : "default"

    return (
      <div className="flex w-full flex-col">
        <div
          className={cn("relative flex w-full flex-col", containerClassName)}
        >
          <input
            ref={ref}
            type={type}
            className={cn(
              inputVariants({
                variant,
                fieldSize,
                intent: currentIntent,
                withIcon: Boolean(endIcon)
              }),
              className
            )}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${props.id}-error` : undefined}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            {...props}
          />
          {endIcon && (
            <div className="text-foreground pointer-events-none absolute inset-y-0 right-3 flex items-center">
              {endIcon}
            </div>
          )}
        </div>
        {hasError && errorMessage && (
          <span
            id={`${props.id}-error`}
            role="alert"
            className="text-vector-red-2 mt-1 text-xs"
          >
            {errorMessage}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
export type { InputProps }

