import type { Localized } from '../i18n/config'

export interface SocialLink {
  id: string
  label: string
  href: string
  /** lucide-react icon name resolved in the component layer. */
  icon: 'github' | 'linkedin' | 'mail' | 'mapPin'
}

export interface SkillGroup {
  id: string
  label: Localized
  /** Neutral technology names (not translated). */
  skills: string[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: Localized
  period: Localized
  location: Localized
  description: Localized
  highlights: Localized[]
  tech: string[]
}

export interface ProjectItem {
  id: string
  title: string
  period: Localized
  description: Localized
  highlights: Localized[]
  tech: string[]
  github?: string
  featured?: boolean
}

export interface Certification {
  id: string
  name: string
  score: string
  period: string
}
