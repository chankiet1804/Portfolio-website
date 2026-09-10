import { useEffect, useRef } from 'react'

// Accent colours are baked in: the canvas cannot read CSS custom properties
// per frame without a layout read. They mirror --color-accent / -400.
const LINK_RGB = '145,132,217'
const NODE_RGB = '181,171,252'

const LINK_DIST = 132 // px below which two nodes are joined
const PUSH_DIST = 128 // px within which the cursor pushes nodes away

interface Node {
  bx: number
  by: number
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

/**
 * Drifting particle network behind the hero. Nodes spring back to their seed
 * position, link up when close, and scatter away from the cursor.
 */
export function NeuronCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const nodes: Node[] = []
    const mouse = { x: -9999, y: -9999, active: false }
    let w = 0
    let h = 0
    let visible = true
    let raf = 0

    const seed = () => {
      nodes.length = 0
      const target = Math.min(78, Math.max(26, Math.round((w * h) / 17000)))
      for (let i = 0; i < target; i++) {
        const bx = Math.random() * w
        const by = Math.random() * h
        nodes.push({
          bx,
          by,
          x: bx,
          y: by,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          r: 1 + Math.random() * 1.4,
        })
      }
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active =
        mouse.x > -60 && mouse.x < w + 60 && mouse.y > -60 && mouse.y < h + 60
    }
    const onLeave = () => {
      mouse.active = false
      mouse.x = -9999
      mouse.y = -9999
    }

    const frame = () => {
      raf = requestAnimationFrame(frame)
      if (!visible) return
      ctx.clearRect(0, 0, w, h)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        n.vx += (n.bx - n.x) * 0.0006
        n.vy += (n.by - n.y) * 0.0006
        if (mouse.active) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const d = Math.hypot(dx, dy)
          if (d < PUSH_DIST && d > 0.01) {
            const f = (1 - d / PUSH_DIST) * 1.9
            n.x += (dx / d) * f
            n.y += (dy / d) * f
          }
        }
        n.vx *= 0.986
        n.vy *= 0.986
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 > LINK_DIST * LINK_DIST) continue
          const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.3
          ctx.strokeStyle = `rgba(${LINK_RGB},${alpha.toFixed(3)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      for (const n of nodes) {
        let glow = 0
        if (mouse.active) {
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y)
          if (d < PUSH_DIST * 1.5) glow = 1 - d / (PUSH_DIST * 1.5)
        }
        ctx.fillStyle = `rgba(${NODE_RGB},${(0.4 + glow * 0.5).toFixed(3)})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + glow * 1.1, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Stop drawing once the hero scrolls out of view.
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (visible = e.isIntersecting)),
      { threshold: 0 },
    )
    io.observe(canvas)

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseout', onLeave, { passive: true })

    resize()
    frame()

    return () => {
      io.disconnect()
      ro.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return <canvas ref={ref} aria-hidden className={className} />
}
