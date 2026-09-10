import { motion } from 'framer-motion'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import { useLanguage } from '../../i18n/useLanguage'
import { skillGroups } from '../../data'
import { staggerContainer, staggerItem, viewportOnce } from '../../lib/motion'

export function Skills() {
  const { t, pick } = useLanguage()

  return (
    <Section id="skills">
      <SectionHeading eyebrow={t.skills.subheading} title={t.skills.heading} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.id}
            variants={staggerItem}
            className="elev-sm rounded-md bg-surface p-5 transition-colors hover:bg-surface-2"
          >
            {/* No text-base here: it resolves to --color-base and blacks out the title */}
            <p className="mb-3.5 text-sm font-medium text-heading">
              {pick(group.label)}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                /* The lead group carries the accent tags; the rest stay neutral. */
                <Tag key={skill} variant={index === 0 ? 'accent' : 'neutral'}>
                  {skill}
                </Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
