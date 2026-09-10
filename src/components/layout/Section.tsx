import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  /** Inner container width. Defaults to a comfortable reading width. */
  containerClassName?: string
}

/** Semantic section with consistent vertical rhythm and a centered container. */
export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('section-block', className)}
    >
      <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-6', containerClassName)}>
        {children}
      </div>
    </section>
  )
}
