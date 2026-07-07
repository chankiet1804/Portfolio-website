import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view (scroll-spy).
 * Returns the id of the section crossing a band near the middle of the viewport.
 */
export function useActiveSection(
  ids: readonly string[],
  rootMargin = '-45% 0px -50% 0px',
): string {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin, threshold: 0 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return active
}
