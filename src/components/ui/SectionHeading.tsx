import { Reveal } from './Reveal'
import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  className?: string
}

/** Consistent section header: small accent eyebrow + large title. */
export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent/60" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  )
}
