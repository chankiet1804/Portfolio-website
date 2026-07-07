// Language configuration and shared types for the i18n layer.

export const LANGS = ['en', 'vi'] as const

export type Lang = (typeof LANGS)[number]

export const DEFAULT_LANG: Lang = 'en'

export const STORAGE_KEY = 'portfolio-lang'

/** A value that has a variant for every supported language. */
export type Localized<T = string> = Record<Lang, T>
