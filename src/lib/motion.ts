import type { Variants } from 'framer-motion'

// Shared animation presets so motion feels consistent across the site.

export const EASE = [0.22, 1, 0.36, 1] as const

/** Fade + rise, used for most content blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

/** Simple fade for backgrounds / images. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
}

/** Container that reveals its children one after another. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

/** Child item to pair with staggerContainer. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
}

/** Standard viewport config for scroll-triggered reveals. */
export const viewportOnce = { once: true, amount: 0.2 } as const
