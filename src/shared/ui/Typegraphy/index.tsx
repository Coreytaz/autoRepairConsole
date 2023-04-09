import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

import { cn } from '~shared/lib';

export type TypographyTag = 'h1' | 'h2' | 'span' | 'div';

const typographyVariants = cva('color-secondary font-family-sans not-italic', {
    variants: {
        variant: {
            div: "text-base",
            span: "text-base",
            h1: "text-5xl",
            h2: "text-3xl"
        },
    },
});

export interface TypographyProps
    extends React.HTMLAttributes<TypographyTag>,
    VariantProps<typeof typographyVariants> {
    tag: TypographyTag;
    children: React.ReactNode;
}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(({ children, className, tag: Tag = 'div', variant = Tag }, ref) => {
    return (
        <Tag className={cn(typographyVariants({ variant, className }))} ref={ref} >
            {children}
        </Tag>
    )
});

Typography.displayName = "Typography"

export { Typography, typographyVariants }
