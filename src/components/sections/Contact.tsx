import { Download, Mail, MapPin } from 'lucide-react'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { SocialLinks } from '../ui/SocialLinks'
import { useLanguage } from '../../i18n/useLanguage'
import { emailComposeUrl, profile } from '../../data'

export function Contact() {
  const { t, pick } = useLanguage()

  return (
    <Section id="contact" className="relative">
      {/* Glow centered behind the content */}
      <div
        className="accent-glow pointer-events-none absolute left-1/2 top-1/2 h-[29rem] w-[29rem] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />

      <div className="relative flex flex-col items-center text-center">
        <SectionHeading
          eyebrow={t.contact.subheading}
          title={t.contact.heading}
          align="center"
          className="[&_h2]:text-[clamp(1.875rem,5vw,3.375rem)]"
        />

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-[52ch] text-base leading-[1.7] text-content [text-wrap:pretty]">
            {t.contact.lead}
          </p>

          {/* Primary actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={emailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary px-5 py-3"
            >
              <Mail size={16} />
              {t.contact.emailLabel}
            </a>
            <a
              href={profile.cvUrl}
              download
              className="btn btn-secondary px-5 py-3"
            >
              <Download size={16} />
              {t.contact.downloadCv}
            </a>
            <SocialLinks />
          </div>

          <p className="mt-7 flex items-center justify-center gap-2 text-[13.5px] text-muted">
            <MapPin size={15} className="text-accent" />
            {t.contact.location} {pick(profile.location)}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
