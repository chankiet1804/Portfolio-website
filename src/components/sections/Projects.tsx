import { motion } from 'framer-motion'
import { ArrowUpRight, Award } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import { useLanguage } from '../../i18n/useLanguage'
import { projects, certifications } from '../../data'
import type { ProjectItem } from '../../data'
import { staggerContainer, staggerItem, viewportOnce } from '../../lib/motion'

function ProjectCard({ project }: { project: ProjectItem }) {
  const { t, pick } = useLanguage()

  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/40"
    >
      {/* Header strip */}
      <div className="relative flex items-center justify-between border-b border-border bg-surface-2 px-6 py-4">
        <div>
          <h3 className="text-lg font-semibold text-heading">{project.title}</h3>
          <p className="mt-0.5 text-xs text-muted">{pick(project.period)}</p>
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} — ${t.projects.viewCode}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-content transition-colors hover:border-accent/60 hover:text-accent"
          >
            <GithubIcon size={17} />
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="leading-relaxed text-content">{pick(project.description)}</p>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">
          {t.projects.highlights}
        </p>
        <ul className="mt-2 space-y-1.5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-content">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{pick(h)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
            >
              {t.projects.viewCode}
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <Section id="projects" className="bg-surface/40">
      <SectionHeading
        eyebrow={t.projects.subheading}
        title={t.projects.heading}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      {/* Certifications strip */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-6 grid gap-4 sm:grid-cols-2"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            variants={staggerItem}
            className="flex items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Award size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-heading">
                {cert.name}
              </p>
              <p className="text-xs text-muted">{cert.period}</p>
            </div>
            <span className="font-display text-lg font-bold text-gradient">
              {cert.score}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
