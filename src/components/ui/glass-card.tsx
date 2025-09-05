import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "dark" | "strong"
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseClasses = "backdrop-blur-glass border border-glass rounded-xl shadow-glass transition-all duration-500"
    
    const variants = {
      default: "bg-glass border-glass",
      dark: "bg-glass-dark border-glass-dark",
      strong: "backdrop-blur-glass-strong bg-glass border-glass"
    }

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variants[variant], className)}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }