import { useLanguage } from '../../i18n/useLanguage'
import { profile } from '../../data'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="rule-fade rule-top">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-5 py-6 text-[12.5px] text-muted sm:px-6">
        <span>
          © {year} {profile.name}. {t.footer.rights}
        </span>
        <span>{t.footer.builtWith}</span>
      </div>
    </footer>
  )
}
