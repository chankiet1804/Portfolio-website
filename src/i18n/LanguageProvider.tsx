import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { DEFAULT_LANG, LANGS, STORAGE_KEY, type Lang, type Localized } from './config'
import { translations } from './translations'
import { LanguageContext, type LanguageContextValue } from './language-context'

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && (LANGS as readonly string[]).includes(stored)) {
    return stored as Lang
  }
  // Fall back to the browser preference when Vietnamese is requested.
  return window.navigator.language.toLowerCase().startsWith('vi') ? 'vi' : DEFAULT_LANG
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggle = useCallback(
    () => setLangState((prev) => (prev === 'en' ? 'vi' : 'en')),
    [],
  )
  const pick = useCallback(
    <T,>(value: Localized<T>): T => value[lang],
    [lang],
  )

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle, t: translations[lang], pick }),
    [lang, setLang, toggle, pick],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
