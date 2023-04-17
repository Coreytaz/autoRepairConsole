import { VariantProps, cva } from "class-variance-authority";

import { ReactNode, forwardRef, useId } from "react";

import { cn } from "~shared/lib"

import { Label } from "../Label";

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

const normalizeNumberTel = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '').slice(0, 11);

  const match = cleanedValue.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})$/);

  if (match) {
    const formattedValue = `${match[0] ? `+7` : ''}${match[1] ? ` ${match[2]}` : ''}${match[3] ? ` ${match[3].substring(0, 3)}` : ''}${match[4] ? `-${match[4].substring(0, 4)}` : ''}`;

    return formattedValue;
  }

  return value;
}


const Input = forwardRef<HTMLInputElement, InputProps>(({ icon, className, variant, labelName, error, helperText, onChange, ...props }, ref) => {
  const id = useId()

  return (
    <>
      <div className="relative flex items-center gap-3 w-full">
        {labelName ? <Label htmlFor={id} className="grow whitespace-nowrap">{labelName}</Label> : null}
        <input
          onChange={(e) => {
            if (props.type === 'tel') {
              e.target.value = normalizeNumberTel(e.target.value)
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
        {icon ? <span className="absolute [&>svg]:w-4 [&>svg]:h-4 top-1/2 right-2 translate-y-[-50%] [&>svg]:stroke-[#A4A4A4]">{icon}</span> : null}
      </div >
      {helperText?.length! > 0 ? <p id={id} className="text-right text-red-700 mr-5 break-words whitespace-normal">{helperText}</p> : null}
    </>
  )
});

Input.displayName = "Input"

export { Input }

