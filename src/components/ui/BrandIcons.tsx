// Brand glyphs (GitHub, LinkedIn) - lucide-react dropped brand icons,
// so we ship minimal inline SVGs with a lucide-compatible API.

interface IconProps {
  size?: number
  className?: string
}

export function GithubIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.575.106.785-.25.785-.556 0-.274-.01-1-.015-1.965-3.196.695-3.87-1.54-3.87-1.54-.522-1.328-1.276-1.682-1.276-1.682-1.043-.713.08-.699.08-.699 1.153.081 1.76 1.184 1.76 1.184 1.026 1.758 2.692 1.25 3.348.955.104-.743.401-1.25.73-1.538-2.552-.29-5.235-1.276-5.235-5.68 0-1.255.448-2.28 1.183-3.084-.119-.29-.513-1.46.112-3.045 0 0 .965-.309 3.163 1.178a11 11 0 0 1 5.76 0c2.196-1.487 3.16-1.178 3.16-1.178.626 1.585.232 2.755.114 3.045.737.804 1.182 1.829 1.182 3.084 0 4.415-2.687 5.386-5.246 5.67.412.355.78 1.056.78 2.13 0 1.538-.014 2.778-.014 3.156 0 .309.207.667.79.554A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
    </svg>
  )
}

export function LinkedinIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function GooglePlayIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.61 1.81a1.5 1.5 0 0 0-.36.98v18.42c0 .38.13.72.36.98l.06.06L13.9 12v-.24L3.67 1.75zM17.3 15.4l-3.4-3.4v-.24l3.4-3.4.08.05 4.04 2.3c1.15.65 1.15 1.72 0 2.38l-4.04 2.3zM16.4 16.36 12.9 12.9 2.6 23.2c.38.4 1 .45 1.7.05l12.1-6.88M16.4 7.64 4.3.76C3.6.36 2.98.4 2.6.8l10.3 10.3z" />
    </svg>
  )
}

export function AppleIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.05 12.74c-.03-2.62 2.14-3.88 2.24-3.94-1.22-1.79-3.12-2.03-3.8-2.06-1.62-.16-3.16.95-3.98.95-.82 0-2.09-.93-3.43-.9-1.77.02-3.4 1.03-4.3 2.61-1.83 3.18-.47 7.89 1.31 10.47.87 1.26 1.91 2.68 3.28 2.63 1.32-.05 1.81-.85 3.4-.85 1.59 0 2.03.85 3.42.82 1.41-.02 2.31-1.29 3.17-2.55 1-1.46 1.41-2.88 1.43-2.95-.03-.01-2.74-1.05-2.77-4.17M14.46 4.9c.72-.88 1.21-2.1 1.08-3.31-1.04.04-2.3.69-3.05 1.57-.67.77-1.26 2.01-1.1 3.2 1.16.09 2.35-.59 3.07-1.46" />
    </svg>
  )
}
