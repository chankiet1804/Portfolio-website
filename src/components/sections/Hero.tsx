import { motion } from 'framer-motion'
import { ArrowDown, ArrowDownRight } from 'lucide-react'
import { useLanguage } from '../../i18n/useLanguage'
import { profile } from '../../data'
import { SocialLinks } from '../ui/SocialLinks'
import { NeuronCanvas } from '../ui/NeuronCanvas'
import { useTypewriter } from '../../hooks/useTypewriter'
import { fadeUp, staggerContainer, staggerItem } from '../../lib/motion'

// Technology names, identical in both languages.
const TYPING_PHRASES = ['React Native & Flutter', 'Web3 & Blockchain'] as const

export function Hero() {
  const { t } = useLanguage()
  const typed = useTypewriter(TYPING_PHRASES)

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-var(--nav-h))] items-center py-24 sm:py-28"
    >
      {/* Particle network, bleeding past the container and fading downwards */}
      <div
        className="pointer-events-none absolute -bottom-10 -left-[40vw] -right-[40vw] -top-16 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, #000 55%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 55%, transparent 95%)',
        }}
        aria-hidden
      >
        <NeuronCanvas className="block h-full w-full" />
      </div>
      <div
        className="accent-glow pointer-events-none absolute -left-32 -top-10 h-[32rem] w-[32rem]"
        aria-hidden
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-6xl px-5 sm:px-6"
      >
        {/* Availability badge */}
        <motion.div variants={staggerItem}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-800 bg-accent/10 px-3 py-1.5 text-xs tracking-[0.04em] text-content">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_25%,transparent)]" />
            {t.hero.available}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={staggerItem}
          className="mt-8 text-sm uppercase tracking-[0.16em] text-accent-300"
        >
          {t.hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={staggerItem}
          className="mt-1.5 text-[clamp(2.625rem,7.2vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.03em]"
        >
          {profile.name}
        </motion.h1>

        {/* Role + typewriter */}
        <motion.h2
          variants={staggerItem}
          className="mt-3.5 text-[clamp(1.25rem,2.6vw,2rem)] font-normal text-content"
        >
          {t.hero.role}
          <span className="whitespace-nowrap text-accent">
            {' — '}
            {typed}
            <span
              className="ml-[3px] inline-block h-[0.95em] w-0.5 -translate-y-[0.1em] bg-accent align-middle"
              style={{ animation: 'caret-blink 1s step-end infinite' }}
              aria-hidden
            />
          </span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={staggerItem}
          className="mt-6 max-w-[60ch] text-base leading-[1.7] text-content [text-wrap:pretty]"
        >
          {t.hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary px-5 py-2.5">
            {t.hero.ctaProjects}
            <ArrowDownRight size={15} />
          </a>
          <a href="#contact" className="btn btn-secondary px-5 py-2.5">
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
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent sm:flex"
      >
        {t.hero.scroll}
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
