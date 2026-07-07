import { Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { useLanguage } from '../../i18n/useLanguage'

export function About() {
  const { t } = useLanguage()
  const { facts, values } = t.about

  const cards: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Briefcase, label: facts.role, value: values.roleValue },
    { icon: MapPin, label: facts.location, value: values.locationValue },
    { icon: Sparkles, label: facts.experience, value: values.experienceValue },
    { icon: GraduationCap, label: facts.education, value: values.educationValue },
  ]

  return (
    <Section id="about">
      <SectionHeading eyebrow={t.about.subheading} title={t.about.heading} />

      <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-5 lg:gap-12">
        {/* Narrative */}
        <Reveal className="lg:col-span-3">
          <p className="text-lg font-medium leading-relaxed text-heading sm:text-xl">
            {t.about.lead}
          </p>
          <p className="mt-5 leading-relaxed text-content">{t.about.body}</p>
        </Reveal>

        {/* Fact cards */}
        <Reveal className="lg:col-span-2" delay={0.1}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {cards.map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/40"
              >
                <card.icon size={20} className="text-accent" strokeWidth={1.8} />
                <p className="mt-3 text-xs uppercase tracking-wider text-muted">
                  {card.label}
                </p>
                <p className="mt-1 text-sm font-medium text-heading">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
