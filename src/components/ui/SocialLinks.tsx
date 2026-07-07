import { Mail, MapPin } from 'lucide-react'
import type { ComponentType } from 'react'
import { socials } from '../../data'
import type { SocialLink } from '../../data'
import { cn } from '../../lib/cn'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

type IconComponent = ComponentType<{ size?: number; className?: string }>

const ICONS: Record<SocialLink['icon'], IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  mapPin: MapPin,
}

/** Row of icon links to the owner's public profiles. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {socials.map((s) => {
        const Icon = ICONS[s.icon]
        const external = s.icon !== 'mail'
        return (
          <li key={s.id}>
            <a
              href={s.href}
              aria-label={s.label}
              title={s.label}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-content transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
            >
              <Icon size={18} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
