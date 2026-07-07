import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../../i18n/useLanguage'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { useActiveSection } from '../../hooks/useActiveSection'
import { profile } from '../../data'
import { cn } from '../../lib/cn'

const NAV_IDS = ['about', 'skills', 'experience', 'projects', 'contact'] as const
// Include hero so nothing is highlighted while it is in view.
const SPY_IDS = ['hero', ...NAV_IDS] as const

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SPY_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = NAV_IDS.map((id) => ({ id, label: t.nav[id] }))

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/80 bg-base/80 backdrop-blur-lg'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <a href="#hero" className="group flex items-center gap-2 font-display text-lg font-bold text-heading">
          <span className="text-accent">{'{'}</span>
          <span>{profile.shortName}</span>
          <span className="text-accent">{'}'}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    isActive ? 'text-accent' : 'text-content hover:text-accent',
                  )}
                >
                  {item.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-content md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-base/95 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-accent/10 text-accent'
                          : 'text-content hover:bg-surface-2 hover:text-accent',
                      )}
                    >
                      <span
                        className={cn(
                          'h-4 w-0.5 rounded-full transition-colors',
                          isActive ? 'bg-accent' : 'bg-transparent',
                        )}
                      />
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
