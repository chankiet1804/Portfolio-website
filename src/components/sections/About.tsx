import { Award, Briefcase, GraduationCap, MapPin, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { useLanguage } from '../../i18n/useLanguage'
import { certifications } from '../../data'

const CARD_CLASS =
  'elev-sm rounded-lg bg-surface p-[18px] transition-colors hover:bg-surface-2'

function CardLabel({ children }: { children: string }) {
  return (
    <p className="mb-2 text-[10.5px] uppercase tracking-[0.12em] text-muted">
      {children}
    </p>
  )
}

export function About() {
  const { t, pick } = useLanguage()
  const { facts, values } = t.about

  const cards: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Briefcase, label: facts.role, value: values.roleValue },
    { icon: MapPin, label: facts.location, value: values.locationValue },
    { icon: Smartphone, label: facts.experience, value: values.experienceValue },
    { icon: GraduationCap, label: facts.education, value: values.educationValue },
  ]

  return (
    <Section id="about">
      <SectionHeading eyebrow={t.about.subheading} title={t.about.heading} />

      <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-5 lg:gap-12">
        {/* Narrative */}
        <Reveal className="lg:col-span-3">
          <p className="text-xl font-medium leading-[1.5] tracking-[-0.01em] text-heading [text-wrap:pretty]">
            {t.about.lead}
          </p>
          {/* whitespace-pre-line keeps the \n line breaks written in the copy */}
          <p className="mt-5 whitespace-pre-line text-[15.5px] leading-[1.75] text-content [text-wrap:pretty]">
            {t.about.body}
          </p>
        </Reveal>

        {/* Fact cards */}
        <Reveal className="lg:col-span-2" delay={0.1}>
          <div className="grid grid-cols-2 gap-3.5">
            {/* Certifications share one card, scores right-aligned */}
            <div className={`${CARD_CLASS} col-span-2 flex flex-col`}>
              <Award size={20} className="mb-3 text-accent" strokeWidth={1.6} />
              <CardLabel>{facts.certifications}</CardLabel>
              {certifications.map((cert, i) => (
                <div key={cert.id}>
                  {i > 0 && <div className="my-2.5 h-px bg-border" />}
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[12.5px] leading-snug text-content">
                      {pick(cert.name)}
                    </span>
                    <span className="text-base font-medium leading-none text-accent-300">
                      {cert.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {cards.map((card) => (
              <div key={card.label} className={CARD_CLASS}>
                <card.icon size={20} className="mb-3 text-accent" strokeWidth={1.6} />
                <CardLabel>{card.label}</CardLabel>
                <p className="text-[14.5px] font-medium text-heading">
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
