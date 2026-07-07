import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { useLanguage } from '../../i18n/useLanguage'
import { profile } from '../../data'
import { SocialLinks } from '../ui/SocialLinks'
import { fadeUp, staggerContainer, staggerItem } from '../../lib/motion'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Backdrop: grid + accent glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="accent-glow pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] opacity-70"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base to-transparent" aria-hidden />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-6xl px-5 sm:px-6"
      >
        {/* Availability badge */}
        <motion.div variants={staggerItem}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.available}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={staggerItem}
          className="mt-5 text-base font-medium text-content sm:mt-6 sm:text-lg"
        >
          {t.hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={staggerItem}
          className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={staggerItem}
          className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl"
        >
          <span className="text-gradient">{t.hero.role}</span>
          <span className="text-muted"> · Web3</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={staggerItem}
          className="mt-6 max-w-2xl text-base leading-relaxed text-content sm:text-lg"
        >
          {t.hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={staggerItem}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-base transition-all hover:bg-accent-strong hover:shadow-[0_0_30px_-8px_var(--color-accent)]"
          >
            {t.hero.ctaProjects}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-heading transition-colors hover:border-accent/60 hover:text-accent"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={staggerItem} className="mt-10">
          <SocialLinks />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted transition-colors hover:text-accent sm:flex"
      >
        {t.hero.scroll}
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
