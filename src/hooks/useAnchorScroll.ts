import { useEffect } from 'react'

/** How long to keep re-correcting after a jump, in ms. */
const SETTLE_MS = 1200

/** Reads the CSS-declared anchor offset (scroll-margin-top) in pixels. */
function anchorOffset(el: Element): number {
  return parseFloat(getComputedStyle(el).scrollMarginTop) || 0
}

/**
 * Owns in-page anchor navigation.
 *
 * The native hash jump locks onto a target position computed before lazy
 * images, fonts and animations have settled, so the page lands short of the
 * section. This scrolls manually and keeps re-aligning until the layout stops
 * moving - or until the visitor takes over by scrolling themselves.
 */
export function useAnchorScroll() {
  useEffect(() => {
    let frame = 0
    let cleanupInterrupts: (() => void) | undefined

    const stop = () => {
      cancelAnimationFrame(frame)
      cleanupInterrupts?.()
      cleanupInterrupts = undefined
    }

    const goTo = (id: string, behavior: ScrollBehavior) => {
      const el = document.getElementById(id)
      if (!el) return

      stop()

      const align = (mode: ScrollBehavior) => {
        const delta = el.getBoundingClientRect().top - anchorOffset(el)
        if (Math.abs(delta) < 1) return false
        window.scrollTo({ top: window.scrollY + delta, behavior: mode })
        return true
      }

      align(behavior)

      // Let the visitor cancel the correction the moment they scroll.
      const events = ['wheel', 'touchstart', 'keydown'] as const
      events.forEach((e) => window.addEventListener(e, stop, { passive: true }))
      cleanupInterrupts = () =>
        events.forEach((e) => window.removeEventListener(e, stop))

      const start = performance.now()
      let lastY = Number.NaN
      let stillFrames = 0

      const tick = () => {
        const y = window.scrollY
        stillFrames = Math.abs(y - lastY) < 0.5 ? stillFrames + 1 : 0
        lastY = y

        // Only correct once the current scroll has come to rest, otherwise we
        // would fight the smooth animation frame by frame.
        if (stillFrames > 2) align('instant')

        if (performance.now() - start < SETTLE_MS) {
          frame = requestAnimationFrame(tick)
        } else {
          stop()
        }
      }

      frame = requestAnimationFrame(tick)
    }

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const link = (event.target as Element | null)?.closest?.('a')
      const href = link?.getAttribute('href')
      if (!href || !href.startsWith('#') || href.length < 2) return

      const id = decodeURIComponent(href.slice(1))
      if (!document.getElementById(id)) return

      event.preventDefault()
      // Keep the native history behaviour: Back returns to the previous section.
      if (location.hash === href) history.replaceState(null, '', href)
      else history.pushState(null, '', href)
      goTo(id, 'smooth')
    }

    const onHashChange = () => {
      const id = decodeURIComponent(location.hash.slice(1))
      if (id) goTo(id, 'smooth')
    }

    document.addEventListener('click', onClick)
    window.addEventListener('hashchange', onHashChange)

    // Deep link: re-align once the page has had a chance to lay out.
    const initial = decodeURIComponent(location.hash.slice(1))
    if (initial) requestAnimationFrame(() => goTo(initial, 'instant'))

    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('hashchange', onHashChange)
      stop()
    }
  }, [])
}
