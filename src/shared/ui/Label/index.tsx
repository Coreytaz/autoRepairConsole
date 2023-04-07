import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "~shared/lib"


const Label = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(
            "text-base font-medium text-secondary",
            className
        )}
        {...props}
    />
))

Label.displayName = LabelPrimitive.Root.displayName

export { Label }
