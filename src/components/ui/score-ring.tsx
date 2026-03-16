import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ScoreRingProps = Omit<ComponentProps<'div'>, 'children'> & {
  score: number
  max?: number
  size?: number
  strokeWidth?: number
}

export function ScoreRing({
  score,
  max = 10,
  size = 180,
  strokeWidth = 4,
  className,
  ...props
}: ScoreRingProps) {
  const clampedScore = Math.min(Math.max(score, 0), max)
  const fraction = clampedScore / max

  const cx = size / 2
  const cy = size / 2
  const r = (size - strokeWidth) / 2

  const circumference = 2 * Math.PI * r
  const arcLength = circumference * fraction

  // Arc starts at top (−90° offset) going clockwise
  // strokeDasharray: arc portion + remaining gap
  const dashArray = `${arcLength} ${circumference - arcLength}`
  // Rotate so arc starts at top
  const rotateTransform = `rotate(-90 ${cx} ${cy})`

  // Gradient stop at 35% of the arc is amber, then transparent
  const gradientId = 'scoreGradient'

  return (
    <div
      className={twMerge(
        'relative inline-flex items-center justify-center',
        className
      )}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        aria-hidden="true"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientTransform={`rotate(0 ${cx} ${cy})`}
          >
            <stop offset="0%" stopColor="var(--color-accent-green)" />
            <stop offset="65%" stopColor="var(--color-accent-amber)" />
            <stop offset="66%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer ring (full circle, border-primary) */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          stroke="var(--color-border-primary)"
          strokeWidth={strokeWidth}
        />

        {/* Score arc */}
        {fraction > 0 && (
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeDasharray={dashArray}
            strokeLinecap="butt"
            transform={rotateTransform}
          />
        )}
      </svg>

      {/* Center label */}
      <div className="left-6 relative flex flex-row items-center gap-0.5">
        <span className="font-mono text-5xl font-bold leading-none text-text-primary">
          {clampedScore % 1 === 0
            ? clampedScore.toFixed(0)
            : clampedScore.toFixed(1)}
        </span>
        <span className="font-mono text-base leading-none text-text-tertiary">
          /10
        </span>
      </div>
    </div>
  )
}
