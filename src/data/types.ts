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
  /** Public store listings of the app worked on, when it is published. */
  storeLinks?: {
    android?: string
    ios?: string
  }
}

/** Groups projects into the Mobile / Web columns of the Projects section. */
export type ProjectCategory = 'mobile' | 'web'

export interface ProjectItem {
  id: string
  title: string
  category: ProjectCategory
  period: Localized
  description: Localized
  highlights: Localized[]
  tech: string[]
  github?: string
  /** Public URL of a live deployment, when there is one. */
  demo?: string
  /** Path (in /public) to a showcase image. The layout drops the image
      column entirely when a project has none. */
  image?: string
  /** Intrinsic pixel size of `image`, used to reserve layout space. */
  imageWidth?: number
  imageHeight?: number
  /** Closed-source work: shown with a note instead of a repository link. */
  privateRepo?: boolean
  featured?: boolean
}

export interface Certification {
  id: string
  name: Localized
  score: string
  period: string
}
