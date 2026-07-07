import { useLanguage } from '../../i18n/useLanguage'
import { profile } from '../../data'
import { SocialLinks } from '../ui/SocialLinks'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-heading">
            {profile.name}
          </p>
          <p className="mt-1 text-xs text-muted">
            © {year} · {t.footer.rights}
          </p>
        </div>

        <SocialLinks />

        <p className="text-center text-xs text-muted sm:text-right">
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  )
}
