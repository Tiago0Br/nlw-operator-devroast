import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const badge = tv({
  base: 'inline-flex items-center gap-2 font-mono text-xs',
  variants: {
    variant: {
      critical: 'text-accent-red',
      warning: 'text-accent-amber',
      good: 'text-accent-green',
      verdict: 'text-accent-red'
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm'
    }
  },
  defaultVariants: {
    variant: 'good',
    size: 'sm'
  }
})

const dot = tv({
  base: 'rounded-full shrink-0',
  variants: {
    variant: {
      critical: 'bg-accent-red',
      warning: 'bg-accent-amber',
      good: 'bg-accent-green',
      verdict: 'bg-accent-red'
    },
    size: {
      sm: 'size-2',
      md: 'size-2.5'
    }
  },
  defaultVariants: {
    variant: 'good',
    size: 'sm'
  }
})

type BadgeProps = ComponentProps<'span'> & VariantProps<typeof badge>

export function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={badge({ variant, size, className })} {...props}>
      <span className={dot({ variant, size })} />
      {children}
    </span>
  )
}
