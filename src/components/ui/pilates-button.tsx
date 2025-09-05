import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pilatesButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        hero: "bg-pilates-black text-pilates-white hover:bg-pilates-dark-gray hover:scale-105 shadow-medium hover:shadow-strong",
        outline: "border border-pilates-black bg-transparent text-pilates-black hover:bg-pilates-black hover:text-pilates-white",
        ghost: "text-pilates-black hover:bg-pilates-light-gray hover:text-pilates-dark-gray",
        minimal: "text-pilates-gray hover:text-pilates-black underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2 text-sm",
        lg: "h-14 px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
)

export interface PilatesButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pilatesButtonVariants> {
  asChild?: boolean
}

const PilatesButton = React.forwardRef<HTMLButtonElement, PilatesButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(pilatesButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
PilatesButton.displayName = "PilatesButton"

export { PilatesButton, pilatesButtonVariants }