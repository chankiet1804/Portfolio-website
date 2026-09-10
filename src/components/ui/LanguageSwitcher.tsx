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
      className="flex items-center gap-0.5 rounded-full border border-border p-0.5"
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
              'rounded-full px-2.5 py-1 text-[11.5px] font-semibold tracking-[0.06em] transition-colors',
              active
                ? 'bg-accent-800 text-accent-100'
                : 'text-content/60 hover:text-heading',
            )}
          >
            {LABELS[code]}
          </button>
        )
      })}
    </div>
  )
}
