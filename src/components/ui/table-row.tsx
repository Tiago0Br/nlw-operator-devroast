import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const tableRow = tv({
  slots: {
    root: 'flex items-center gap-6 px-5 py-4 border-b border-border-primary',
    rank: 'w-10 font-mono text-sm text-text-tertiary shrink-0',
    score: 'w-[60px] font-mono text-sm font-bold shrink-0',
    code: 'flex-1 font-mono text-xs text-text-secondary truncate',
    lang: 'w-[100px] font-mono text-xs text-text-tertiary shrink-0 text-right'
  },
  variants: {
    variant: {
      critical: { score: 'text-accent-red' },
      warning: { score: 'text-accent-amber' },
      good: { score: 'text-accent-green' }
    }
  },
  defaultVariants: {
    variant: 'critical'
  }
})

type TableRowProps = ComponentProps<'div'> &
  VariantProps<typeof tableRow> & {
    rank?: string | number
    score?: string | number
    codePreview?: string
    lang?: string
  }

export function TableRow({
  variant,
  rank,
  score,
  codePreview,
  lang,
  className,
  ...props
}: TableRowProps) {
  const styles = tableRow({ variant })

  return (
    <div className={styles.root({ class: className })} {...props}>
      {rank !== undefined && <span className={styles.rank()}>{rank}</span>}
      {score !== undefined && <span className={styles.score()}>{score}</span>}
      {codePreview && <span className={styles.code()}>{codePreview}</span>}
      {lang && <span className={styles.lang()}>{lang}</span>}
    </div>
  )
}
