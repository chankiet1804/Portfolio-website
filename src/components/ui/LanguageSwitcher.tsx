import { LANGS, type Lang } from '../../i18n/config'
import { useLanguage } from '../../i18n/useLanguage'
import { cn } from '../../lib/cn'

const LABELS: Record<Lang, string> = { en: 'EN', vi: 'VI' }

/** Segmented EN / VI toggle. */
export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.a11y.switchLang}
      className="relative flex items-center rounded-full border border-border bg-surface-2 p-0.5 text-xs font-semibold"
    >
      {LANGS.map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={cn(
              'relative z-10 rounded-full px-2.5 py-1 transition-colors',
              active ? 'text-base' : 'text-content hover:text-heading',
            )}
          >
            {active && (
              <span className="absolute inset-0 -z-10 rounded-full bg-accent" />
            )}
            {LABELS[code]}
          </button>
        )
      })}
    </div>
  )
}
