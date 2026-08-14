import { motion } from 'framer-motion'
import { ArrowUpRight, Award, ExternalLink, Globe, Smartphone } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import { useLanguage } from '../../i18n/useLanguage'
import { projects, certifications } from '../../data'
import type { ProjectCategory, ProjectItem } from '../../data'
import { staggerContainer, staggerItem, viewportOnce } from '../../lib/motion'

const categoryIcons: Record<ProjectCategory, typeof Smartphone> = {
  mobile: Smartphone,
  web: Globe,
}

const categoryOrder: ProjectCategory[] = ['mobile', 'web']

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
        <div className="flex items-center gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} — ${t.projects.viewDemo}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-content transition-colors hover:border-accent/60 hover:text-accent"
            >
              <ExternalLink size={17} />
            </a>
          )}
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
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
              >
                {t.projects.viewDemo}
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
              >
                {t.projects.viewCode}
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
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

      {/* One block per category so mobile and web work read apart */}
      {categoryOrder.map((category) => {
        const items = projects.filter((p) => p.category === category)
        if (items.length === 0) return null
        const Icon = categoryIcons[category]

        return (
          <div key={category} className="mt-12">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon size={16} />
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-heading">
                {t.projects.categories[category]}
              </h3>
              <span className="h-px flex-1 bg-border" />
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-6 grid gap-6 md:grid-cols-2"
            >
              {items.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        )
      })}

      {/* Certifications strip */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 grid gap-4 sm:grid-cols-2"
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
