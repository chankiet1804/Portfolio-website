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
      {/* Glow anchored to the bottom-right corner of the page */}
      <div
        className="accent-glow pointer-events-none absolute -right-24 bottom-5 h-[29rem] w-[29rem]"
        aria-hidden
      />

      <div className="relative">
        <SectionHeading
          eyebrow={t.contact.subheading}
          title={t.contact.heading}
          className="[&_h2]:text-[clamp(1.875rem,5vw,3.375rem)]"
        />

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[52ch] text-base leading-[1.7] text-content [text-wrap:pretty]">
            {t.contact.lead}
          </p>

          {/* Primary actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
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

          <p className="mt-7 flex items-center gap-2 text-[13.5px] text-muted">
            <MapPin size={15} className="text-accent" />
            {t.contact.location} {pick(profile.location)}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
