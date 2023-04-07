import { VariantProps, cva } from "class-variance-authority";

import { ReactNode, forwardRef, useId } from "react";

import { cn } from "~shared/lib"

import { Label } from "../Label";

const inputVariants = cva(
  "bg-white px-3 py-2 pr-7 border-solid border-1 border-[#EBEBEB] appearance-none rounded-lg leading-none outline-none focus:shadow-[0_0_0_1px_black]",
  {
    variants: {
      variant: {
        default:
          "",
        dark:
          "bg-gray-200",

      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  icon?: ReactNode
  label?: string
}


const Input = forwardRef<HTMLDivElement, InputProps>(({ icon, className, variant, label, ...props }) => {
  const id = useId()

  return (
    <div className="flex flex-wrap items-center gap-[15px] px-5">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative flex items-center focus-within-gray-600">
        <input
          className={cn(inputVariants({ variant, className }), {
            'px-3': !icon
          })}
          id={id}
          {...props}
        />
        <span className="[&>svg]:w-4 [&>svg]:h-4 [&>svg]:absolute [&>svg]:top-1/2 [&>svg]:right-2 [&>svg]:translate-y-[-50%] [&>svg]:stroke-[#A4A4A4]">{icon ? icon : null}</span>
      </div>
    </div >
  )
});

Input.displayName = "Input"

export { Input }

