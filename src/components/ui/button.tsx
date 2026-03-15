import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'inline-flex items-center justify-center cursor-pointer',
    'font-mono text-sm font-medium',
    'transition-opacity duration-150',
    'disabled:opacity-40 disabled:pointer-events-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]'
  ],
  variants: {
    variant: {
      primary: 'bg-[#10B981] text-[#0A0A0A] hover:opacity-90 active:opacity-80',
      secondary:
        'bg-transparent text-[#FAFAFA] border border-[#2A2A2A] hover:border-[#3A3A3A] hover:bg-[#1A1A1A] active:opacity-80',
      ghost:
        'bg-transparent text-[#6B7280] border border-[#2A2A2A] hover:text-[#FAFAFA] hover:border-[#3A3A3A] active:opacity-80'
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
