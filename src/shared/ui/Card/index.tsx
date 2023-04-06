import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "~shared/lib"

const cardVariants = cva(
    "text-secondary rounded-2xl shadow-md",
    {
        variants: {
            variant: {
                default:
                    "bg-white",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> { }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <div
                className={cn(cardVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Card.displayName = "Card"

export { Card, cardVariants }
