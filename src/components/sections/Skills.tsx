import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import { cn } from '../../lib/cn'
import { useLanguage } from '../../i18n/useLanguage'
import { skillGroups } from '../../data'
import type { SkillTrack } from '../../data/types'
import { EASE, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion'

/* Framework names stay untranslated, so the toggle labels live here. */
const TRACKS: { id: SkillTrack; label: string }[] = [
  { id: 'rn', label: 'React Native' },
  { id: 'flutter', label: 'Flutter' },
]

/** Scoped to this section: it only swaps the skill chips below. */
function TrackToggle({
  track,
  onChange,
}: {
  track: SkillTrack
  onChange: (track: SkillTrack) => void
}) {
  return (
    <div
      role="tablist"
      aria-label="Framework"
      className="elev-sm inline-flex gap-1 rounded-full bg-surface p-1"
    >
      {TRACKS.map(({ id, label }) => {
        const active = id === track
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(id)}
            className={cn(
              'relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors',
              active ? 'text-accent-100' : 'text-muted hover:text-heading',
            )}
          >
            {active && (
              <motion.span
                layoutId="skills-track-pill"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-full bg-accent-800"
                aria-hidden
              />
            )}
            <span className="relative">{label}</span>
          </button>
        )
      })}
    </div>
  )
}

export function Skills() {
  const { t, pick } = useLanguage()
  const [track, setTrack] = useState<SkillTrack>('rn')

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow={t.skills.subheading}
        title={t.skills.heading}
        aside={<TrackToggle track={track} onChange={setTrack} />}
      />

      <motion.div
        /* Remounting on track change replays the stagger as the chips swap. */
        key={track}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.id}
            variants={staggerItem}
            /* whileHover, not a CSS class: framer owns the inline transform. */
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="elev-sm rounded-md bg-surface p-5 transition-colors hover:bg-surface-2"
          >
            {/* No text-base here: it resolves to --color-base and blacks out the title */}
            <p className="mb-3.5 text-sm font-medium text-heading">
              {pick(group.label)}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[...group.skills, ...(group.trackSkills?.[track] ?? [])].map(
                (skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ),
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
