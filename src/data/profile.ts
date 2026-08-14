import type { SocialLink } from './types'

// Core identity + contact. Only public channels the owner approved are listed.
export const profile = {
  name: 'Huynh Chan Kiet',
  shortName: 'Kiet',
  email: 'huynhkiet0418@gmail.com',
  github: 'https://github.com/chankiet1804',
  linkedin: 'https://www.linkedin.com/in/kiet-huynh-651bb6317',
  location: {
    en: 'Ho Chi Minh City, Vietnam',
    vi: 'TP. Hồ Chí Minh, Việt Nam',
  },
  /** Path (in /public) to the downloadable CV. */
  cvUrl: '/Huynh-Chan-Kiet-CV.pdf',
} as const

/**
 * Gmail compose URL with the recipient prefilled. Preferred over `mailto:`,
 * which silently does nothing when the OS has no mail handler registered.
 */
export const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email,
)}`

export const socials: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: profile.github,
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: 'linkedin',
  },
  {
    id: 'email',
    label: 'Email',
    href: emailComposeUrl,
    icon: 'mail',
  },
]
