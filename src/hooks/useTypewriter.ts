import { useEffect, useRef, useState } from 'react'

interface TypewriterOptions {
  /** ms per character while typing. */
  typeMs?: number
  /** ms per character while erasing. */
  eraseMs?: number
  /** ms to hold a fully typed phrase before erasing. */
  holdMs?: number
  /** ms to pause on an empty string before the next phrase. */
  pauseMs?: number
}

/**
 * Cycles through `phrases`, typing and erasing one character at a time.
 * Starts with the first phrase already typed so the hero never renders empty.
 * Returns the phrase untouched when the visitor prefers reduced motion.
 */
export function useTypewriter(
  phrases: readonly string[],
  { typeMs = 65, eraseMs = 34, holdMs = 1900, pauseMs = 420 }: TypewriterOptions = {},
): string {
  const [text, setText] = useState(phrases[0] ?? '')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    if (phrases.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let phrase = 0
    let count = phrases[0].length
    let erasing = true

    const tick = () => {
      const word = phrases[phrase]
      if (erasing) {
        count -= 1
        setText(word.slice(0, count))
        if (count <= 0) {
          erasing = false
          phrase = (phrase + 1) % phrases.length
          timer.current = setTimeout(tick, pauseMs)
          return
        }
        timer.current = setTimeout(tick, eraseMs)
      } else {
        count += 1
        setText(word.slice(0, count))
        if (count >= word.length) {
          erasing = true
          timer.current = setTimeout(tick, holdMs)
          return
        }
        timer.current = setTimeout(tick, typeMs)
      }
    }

    timer.current = setTimeout(tick, holdMs + 300)
    return () => clearTimeout(timer.current)
  }, [phrases, typeMs, eraseMs, holdMs, pauseMs])

  return text
}
