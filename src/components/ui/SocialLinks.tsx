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
    <ul className={cn('flex items-center gap-2.5', className)}>
      {socials.map((s) => {
        const Icon = ICONS[s.icon]
        return (
          <li key={s.id}>
            <a
              href={s.href}
              aria-label={s.label}
              title={s.label}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary h-[42px] w-[42px] text-content transition-colors hover:text-accent"
            >
              <Icon size={18} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
