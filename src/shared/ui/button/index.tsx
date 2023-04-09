import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
 
import { cn } from "~shared/lib"
 
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50  disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      
      isActive: {
        true: "bg-green-300 text-primary"
      },
      variant: {
        default:
        "bg-green-500 text-white hover:bg-green-300 rounded-2xl",
        ghost:
        "text-secondary hover:bg-primaryLight hover:text-primary",
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
    VariantProps<typeof buttonVariants> {}
 
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, isActive, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, isActive, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
 
export { Button, buttonVariants }
