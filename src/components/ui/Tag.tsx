import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

/** Small pill used for tech-stack labels. */
export function Tag({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-content transition-colors hover:border-accent/50 hover:text-heading',
        className,
      )}
    >
      {children}
    </span>
  )
}
