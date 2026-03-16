import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const card = tv({
  slots: {
    root: 'flex flex-col gap-3 bg-bg-surface border border-border-primary p-5',
    header: 'flex items-center gap-2',
    dot: 'size-2 rounded-full shrink-0',
    label: 'font-mono text-xs',
    title: 'font-mono text-sm text-text-primary',
    description: 'font-sans text-xs text-text-secondary leading-[1.5]'
  },
  variants: {
    variant: {
      critical: {
        dot: 'bg-accent-red',
        label: 'text-accent-red'
      },
      warning: {
        dot: 'bg-accent-amber',
        label: 'text-accent-amber'
      },
      good: {
        dot: 'bg-accent-green',
        label: 'text-accent-green'
      },
      verdict: {
        dot: 'bg-accent-red',
        label: 'text-accent-red'
      }
    }
  },
  defaultVariants: {
    variant: 'critical'
  }
})

type CardProps = ComponentProps<'div'> &
  VariantProps<typeof card> & {
    label?: string
    title?: string
    description?: string
  }

export function Card({
  variant,
  label,
  title,
  description,
  className,
  ...props
}: CardProps) {
  const styles = card({ variant })

  return (
    <div className={styles.root({ class: className })} {...props}>
      {label && (
        <div className={styles.header()}>
          <span className={styles.dot()} />
          <span className={styles.label()}>{label}</span>
        </div>
      )}
      {title && <p className={styles.title()}>{title}</p>}
      {description && <p className={styles.description()}>{description}</p>}
    </div>
  )
}
