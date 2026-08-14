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
    <Section id="skills" className="bg-surface/40">
      <SectionHeading eyebrow={t.skills.subheading} title={t.skills.heading} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.id}
            variants={staggerItem}
            className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {/* No text-base here: it resolves to --color-base and blacks out the title */}
              <h3 className="font-semibold text-heading">
                {pick(group.label)}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
