import { useContext } from 'react'
import { LanguageContext } from './language-context'

/** Access the active language, switchers, and translation helpers. */
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a <LanguageProvider>')
  }
  return ctx
}
