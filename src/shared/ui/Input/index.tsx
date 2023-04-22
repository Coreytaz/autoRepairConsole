import { VariantProps, cva } from "class-variance-authority";

import { ReactNode, forwardRef, useId } from "react";

import { cn } from "~shared/lib"

import { Label } from "../Label";

import { normalizeNumberTel, normalizeStateNumber } from "./normalizeInput";

const inputVariants = cva(
  "w-full bg-white px-3 py-2 pr-7 border-solid border-1 border-[#EBEBEB] appearance-none rounded-lg leading-none outline-none focus:shadow-[0_0_0_1px_black]",
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
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  error?: boolean
  helperText?: string
  icon?: ReactNode
  labelName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ icon, className, variant, labelName, error, helperText, onChange, ...props }, ref) => {
  const id = useId()

  return (
    <>
      <div className="relative flex items-center gap-3 w-full">
        {labelName ? <Label htmlFor={id} className="whitespace-nowrap">{labelName}</Label> : null}
        <input
          onChange={(e) => {
            if (props.type === 'tel') {
              e.target.value = normalizeNumberTel(e.target.value)
            }

            if (props.type === 'StateNumber') {
              e.target.value = normalizeStateNumber(e.target.value)
            }

            onChange?.(e)
          }}
          ref={ref}
          className={cn(inputVariants({ variant, className }), {
            'px-3': !icon,
            'border-red-700 border': error
          })}
          id={id}
          {...props}
        />
        {icon ? <span className="absolute [&>svg]:w-4 [&>svg]:h-4 top-1/2 right-2 translate-y-[-50%] [&>svg]:stroke-[#A4A4A4] z-10">{icon}</span> : null}
      </div >
      {helperText?.length! > 0 ? <p id={id} className="text-right text-red-700 mr-5 break-words whitespace-normal">{helperText}</p> : null}
    </>
  )
});

Input.displayName = "Input"

export { Input }

