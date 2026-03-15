'use client'

import { Switch } from '@base-ui/react/switch'
import type { ComponentProps } from 'react'

type ToggleProps = ComponentProps<typeof Switch.Root> & {
  label?: string
}

export function Toggle({ label, id, ...props }: ToggleProps) {
  const switchId =
    id ?? (label ? `toggle-${label.replace(/\s+/g, '-')}` : undefined)

  return (
    <div className="inline-flex items-center gap-3 select-none group">
      <Switch.Root
        id={switchId}
        className="relative inline-flex items-center w-10 h-[22px] rounded-full p-[3px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page disabled:opacity-40 disabled:pointer-events-none data-[checked]:bg-accent-green data-[unchecked]:bg-border-primary cursor-pointer"
        {...props}
      >
        <Switch.Thumb className="block size-4 rounded-full transition-all duration-150 data-[checked]:bg-bg-page data-[checked]:translate-x-[18px] data-[unchecked]:bg-text-secondary data-[unchecked]:translate-x-0" />
      </Switch.Root>
      {label && (
        <label
          htmlFor={switchId}
          className="font-mono text-xs cursor-pointer transition-colors duration-150 group-has-[[data-checked]]:text-accent-green group-has-[[data-unchecked]]:text-text-secondary"
        >
          {label}
        </label>
      )}
    </div>
  )
}
