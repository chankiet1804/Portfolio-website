import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

/** Small pill used for tech-stack labels. */
export function Tag({
  children,
  variant = 'neutral',
  className,
}: {
  children: ReactNode
  /** Accent tags mark the primary stack of a card; neutral is the default. */
  variant?: 'neutral' | 'accent'
  className?: string
}) {
  return (
    <span
      className={cn(
        'tag',
        variant === 'accent' ? 'tag-accent' : 'tag-neutral',
        className,
      )}
    >
      {children}
    </span>
  )
}
