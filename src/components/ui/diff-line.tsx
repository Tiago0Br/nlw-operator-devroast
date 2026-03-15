import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const diffLine = tv({
  slots: {
    root: 'flex items-start gap-2 w-full px-4 py-2 font-mono text-sm',
    prefix: 'shrink-0 w-3',
    code: ''
  },
  variants: {
    variant: {
      removed: {
        root: 'bg-[#1a0a0a]',
        prefix: 'text-accent-red',
        code: 'text-text-secondary'
      },
      added: {
        root: 'bg-[#0a1a0f]',
        prefix: 'text-accent-green',
        code: 'text-text-primary'
      },
      context: {
        root: 'bg-transparent',
        prefix: 'text-text-tertiary',
        code: 'text-text-secondary'
      }
    }
  },
  defaultVariants: {
    variant: 'context'
  }
})

type DiffLineProps = ComponentProps<'div'> &
  VariantProps<typeof diffLine> & {
    code: string
  }

export function DiffLine({
  variant,
  code,
  className,
  ...props
}: DiffLineProps) {
  const { root, prefix, code: codeClass } = diffLine({ variant })

  const prefixChar =
    variant === 'removed' ? '-' : variant === 'added' ? '+' : ' '

  return (
    <div className={root({ class: className })} {...props}>
      <span className={prefix()}>{prefixChar}</span>
      <span className={codeClass()}>{code}</span>
    </div>
  )
}
