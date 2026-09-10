import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SPY_IDS)
  const barRef = useRef<HTMLElement>(null)

  // Publish the real navbar height so anchor offsets stay correct on every
  // device, zoom level and font size.
  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const sync = () => {
      document.documentElement.style.setProperty(
        '--nav-h',
        `${Math.round(bar.getBoundingClientRect().height)}px`,
      )
    }

    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(bar)
    return () => observer.disconnect()
  }, [])

  const navItems = NAV_IDS.map((id) => ({ id, label: t.nav[id] }))

  return (
    <header className="rule-fade rule-bottom sticky top-0 z-50 bg-base/90 backdrop-blur-[14px]">
      <nav
        ref={barRef}
        className="mx-auto flex max-w-6xl items-center gap-7 px-5 py-3.5 sm:px-6"
      >
        {/* Brand */}
        <a
          href="#hero"
          className="mr-auto text-[17px] font-medium tracking-[-0.01em] text-heading"
        >
          <span className="text-accent">{'{'}</span> {profile.shortName}{' '}
          <span className="text-accent">{'}'}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'text-[13.5px] transition-colors',
                    isActive ? 'text-accent' : 'text-content/85 hover:text-accent',
                  )}
                >
                  {item.label}
                </a>
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
            className="btn btn-secondary h-9 w-9 text-content md:hidden"
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
            /* Floats over the page: an in-flow panel would grow the sticky
               header and shift every section while the browser is scrolling. */
            className="absolute inset-x-0 top-full overflow-hidden bg-base/95 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4 sm:px-6">
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors',
                        isActive
                          ? 'bg-accent-900 text-accent'
                          : 'text-content hover:bg-surface hover:text-accent',
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
