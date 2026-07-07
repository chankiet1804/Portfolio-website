import { CheckCircle2, MapPin } from 'lucide-react'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'
import { useLanguage } from '../../i18n/useLanguage'
import { experiences } from '../../data'

export function Experience() {
  const { t, pick } = useLanguage()

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow={t.experience.subheading}
        title={t.experience.heading}
      />

      <div className="mt-12 space-y-8">
        {experiences.map((exp) => (
          <Reveal key={exp.id}>
            <article className="relative rounded-2xl border border-border bg-surface p-5 sm:p-8">
              {/* Accent bar */}
              <span className="absolute inset-y-6 left-0 w-0.5 rounded-full bg-gradient-to-b from-accent to-accent-teal" />

              <div className="pl-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-heading">
                      {pick(exp.role)}
                    </h3>
                    <p className="mt-1 font-display text-accent">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted sm:text-right">
                    <p className="font-medium text-content">{pick(exp.period)}</p>
                    <p className="mt-1 inline-flex items-center gap-1">
                      <MapPin size={13} /> {pick(exp.location)}
                    </p>
                  </div>
                </div>

                <p className="mt-4 leading-relaxed text-content">
                  {pick(exp.description)}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-content">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-accent"
                        strokeWidth={1.8}
                      />
                      <span>{pick(h)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
