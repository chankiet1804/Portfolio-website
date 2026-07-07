import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, viewportOnce } from '../../lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Optional delay (seconds) to offset the reveal. */
  delay?: number
}

/** Fades + rises content into view once it enters the viewport. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
