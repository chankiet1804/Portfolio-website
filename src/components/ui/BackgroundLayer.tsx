/*
  Ambient page backdrop: a slowly drifting accent grid masked to the top of
  the viewport, plus two large glows that breathe in opposite directions.
  Sits behind the content via a negative z-index inside the isolated root.
*/
export function BackgroundLayer() {
  return (
    <div
      data-bg-layer
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -inset-24"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, color-mix(in srgb, var(--color-accent) 9%, transparent) 0 1px, transparent 1px 64px), repeating-linear-gradient(to bottom, color-mix(in srgb, var(--color-accent) 9%, transparent) 0 1px, transparent 1px 64px)',
          animation: 'grid-drift 30s linear infinite',
          maskImage:
            'radial-gradient(ellipse 95% 65% at 50% 12%, #000, transparent 74%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 65% at 50% 12%, #000, transparent 74%)',
        }}
      />
      <div
        className="absolute -left-[12%] -top-[18%] h-[62vw] w-[62vw] rounded-full blur-[30px]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-accent) 14%, transparent), transparent 62%)',
          animation: 'glow-a 28s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute -bottom-[28%] -right-[16%] h-[72vw] w-[72vw] rounded-full blur-[40px]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-section-ghost) 17%, transparent), transparent 62%)',
          animation: 'glow-b 38s ease-in-out infinite alternate',
        }}
      />
    </div>
  )
}
