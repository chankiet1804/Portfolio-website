import { Reveal } from './Reveal'
import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  className?: string
}

/** Section header: accent eyebrow, large title, short accent rule under it. */
export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <span className="text-[11px] font-normal uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.625rem)] leading-tight tracking-[-0.02em]">
        {title}
      </h2>
      <span className="mt-5 h-0.5 w-11 bg-accent" aria-hidden />
    </Reveal>
  )
}
