import { createContext } from 'react'
import type { Lang, Localized } from './config'
import type { Dictionary } from './translations'

export interface LanguageContextValue {
  /** Active language code. */
  lang: Lang
  /** Set the active language explicitly. */
  setLang: (lang: Lang) => void
  /** Toggle between the two supported languages. */
  toggle: () => void
  /** UI chrome dictionary for the active language. */
  t: Dictionary
  /** Resolve a localized value to the active language. */
  pick: <T>(value: Localized<T>) => T
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
