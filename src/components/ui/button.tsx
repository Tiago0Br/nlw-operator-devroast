import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'inline-flex items-center justify-center cursor-pointer',
    'font-mono text-sm font-medium',
    'transition-opacity duration-150',
    'disabled:opacity-40 disabled:pointer-events-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page'
  ],
  variants: {
    variant: {
      primary:
        'bg-accent-green text-bg-page hover:opacity-90 active:opacity-80',
      secondary:
        'bg-transparent text-text-primary border border-border-primary hover:border-border-hover hover:bg-bg-elevated active:opacity-80',
      ghost:
        'bg-transparent text-text-secondary border border-border-primary hover:text-text-primary hover:border-border-hover active:opacity-80'
    },
    size: {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-6 py-2.5',
      lg: 'px-8 py-3 text-base'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button className={button({ variant, size, className })} {...props} />
}
