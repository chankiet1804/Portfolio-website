import { Download, Mail, MapPin } from 'lucide-react'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { SocialLinks } from '../ui/SocialLinks'
import { useLanguage } from '../../i18n/useLanguage'
import { profile } from '../../data'

export function Contact() {
  const { t, pick } = useLanguage()

  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-5 py-12 sm:px-12 sm:py-20">
        {/* Glow */}
        <div
          className="accent-glow pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 opacity-60"
          aria-hidden
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow={t.contact.subheading}
            title={t.contact.heading}
            align="center"
          />

          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-content">
              {t.contact.lead}
            </p>

            {/* Primary actions */}
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-base transition-all hover:bg-accent-strong hover:shadow-[0_0_30px_-8px_var(--color-accent)]"
              >
                <Mail size={16} />
                {t.contact.emailLabel}
              </a>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-heading transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Download size={16} />
                {t.contact.downloadCv}
              </a>
            </div>

            {/* Meta */}
            <div className="mt-10 flex flex-col items-center gap-5">
              <p className="inline-flex items-center gap-2 text-sm text-muted">
                <MapPin size={15} className="text-accent" />
                {t.contact.location} {pick(profile.location)}
              </p>
              <SocialLinks className="justify-center" />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
