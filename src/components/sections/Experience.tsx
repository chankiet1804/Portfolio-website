import { CalendarDays, MapPin } from 'lucide-react'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'
import { AppleIcon, GooglePlayIcon } from '../ui/BrandIcons'
import { useLanguage } from '../../i18n/useLanguage'
import { experiences } from '../../data'

/** Store badge: brand glyph plus the store's own two-line wording. */
function StoreBadge({
  href,
  icon: Icon,
  caption,
  name,
}: {
  href: string
  icon: typeof AppleIcon
  caption: string
  name: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="btn btn-secondary gap-2.5 px-3.5 py-2"
    >
      <Icon size={19} />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[9.5px] uppercase tracking-[0.09em] text-muted">
          {caption}
        </span>
        <span className="mt-[3px] text-[13.5px]">{name}</span>
      </span>
    </a>
  )
}

export function Experience() {
  const { t, pick } = useLanguage()

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow={t.experience.subheading}
        title={t.experience.heading}
      />

      <div className="mt-11 space-y-16">
        {experiences.map((exp) => (
          <Reveal key={exp.id}>
            <article className="grid gap-10 lg:grid-cols-2">
              {/* Who and when */}
              <div>
                <p className="flex items-center gap-2 text-[12.5px] tracking-[0.06em] text-accent-300">
                  <CalendarDays size={14} />
                  {pick(exp.period)}
                </p>
                <h3 className="mt-2.5 text-[clamp(1.5rem,3.2vw,2.125rem)] tracking-[-0.02em]">
                  {exp.company}
                </h3>
                <p className="mt-1.5 text-base text-heading">{pick(exp.role)}</p>
                <p className="mt-1 flex items-center gap-1.5 text-[13.5px] text-muted">
                  <MapPin size={14} />
                  {pick(exp.location)}
                </p>
                <p className="mt-5 leading-[1.7] text-content [text-wrap:pretty]">
                  {pick(exp.description)}
                </p>
                {exp.storeLinks && (
                  <div className="mt-5 flex flex-wrap items-center gap-2.5">
                    {exp.storeLinks.android && (
                      <StoreBadge
                        href={exp.storeLinks.android}
                        icon={GooglePlayIcon}
                        caption="Get it on"
                        name="Google Play"
                      />
                    )}
                    {exp.storeLinks.ios && (
                      <StoreBadge
                        href={exp.storeLinks.ios}
                        icon={AppleIcon}
                        caption="Download on the"
                        name="App Store"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* What I did, numbered */}
              <div className="grid gap-3.5">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <span className="shrink-0 pt-[3px] text-xs text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[14.5px] leading-[1.65] text-content [text-wrap:pretty]">
                      {pick(h)}
                    </p>
                  </div>
                ))}
                <div className="mt-2 flex flex-wrap gap-1.5">
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
