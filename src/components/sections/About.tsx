import { Award, GraduationCap, MapPin, Smartphone } from 'lucide-react'
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

interface Fact {
  icon: LucideIcon
  label: string
  value: string
}

function FactCard({ icon: Icon, label, value }: Fact) {
  return (
    <div className={CARD_CLASS}>
      <Icon size={20} className="mb-3 text-accent" strokeWidth={1.6} />
      <CardLabel>{label}</CardLabel>
      {/* whitespace-pre-line keeps the 
 line breaks written in the copy */}
      <p className="whitespace-pre-line text-[14.5px] font-medium leading-snug text-heading">
        {value}
      </p>
    </div>
  )
}

export function About() {
  const { t, pick } = useLanguage()
  const { facts, values } = t.about

  /* The certifications card is rendered between the first and second fact,
     so the grid reads: Focus / Certifications, then Location / Education. */
  const [focus, ...tailFacts] = [
    { icon: Smartphone, label: facts.experience, value: values.experienceValue },
    { icon: MapPin, label: facts.location, value: values.locationValue },
    { icon: GraduationCap, label: facts.education, value: values.educationValue },
  ] satisfies Fact[]

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
            <FactCard {...focus} />

            {/* Certifications share one card, scores right-aligned. The cell is
                narrow, so the compact names are used to keep each row on one line. */}
            <div className={CARD_CLASS}>
              <Award size={20} className="mb-3 text-accent" strokeWidth={1.6} />
              <CardLabel>{facts.certifications}</CardLabel>
              <div className="grid gap-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-baseline justify-between gap-2"
                    title={pick(cert.name)}
                  >
                    <span className="text-[13px] leading-snug text-content">
                      {cert.shortName}
                    </span>
                    <span className="text-[14.5px] font-medium leading-none text-accent-300">
                      {cert.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {tailFacts.map((card) => (
              <FactCard key={card.label} {...card} />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
