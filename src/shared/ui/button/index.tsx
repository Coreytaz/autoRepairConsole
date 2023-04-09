import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "~shared/lib"

const buttonVariants = cva(
  "font-sans text-lg font-medium text-secondary flex cursor-pointer items-center gap-4 rounded-lg px-4 py-2",
  {
    variants: {
      isActive: {
        true: "bg-green-300 text-primary"
      },
      variant: {
        default:
          "bg-green-500 text-white hover:bg-green-300 rounded-2xl",
        ghost:
          "hover:bg-primaryLight hover:text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },

  }

)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  icon: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, isActive, size, icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, isActive, size, className }))}
        ref={ref}
        {...props}
      >
        <span className={cn("[&>svg]:stroke-secondary", {
          '[&>svg]:stroke-primary': isActive,
        })}>{icon}</span>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
