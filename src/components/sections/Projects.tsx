import { ArrowUpRight, Lock } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'
import { useLanguage } from '../../i18n/useLanguage'
import { projects } from '../../data'
import type { ProjectItem } from '../../data'
import { cn } from '../../lib/cn'

function ProjectArticle({
  project,
  index,
}: {
  project: ProjectItem
  index: number
}) {
  const { t, pick } = useLanguage()
  const hasImage = Boolean(project.image)
  // Alternate which side the showcase image sits on.
  const imageFirst = index % 2 === 1

  return (
    <Reveal>
      <article
        className={cn(
          'grid items-center gap-12',
          hasImage && 'lg:grid-cols-2',
        )}
      >
        {hasImage && (
          <div className={imageFirst ? 'lg:order-first' : 'lg:order-last'}>
            <img
              src={project.image}
              alt={project.title}
              width={project.imageWidth}
              height={project.imageHeight}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
        )}

        <div>
          <div className="mb-4 flex items-baseline gap-3.5">
            <span className="text-[13px] tracking-[0.1em] text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-[11px] uppercase tracking-[0.12em] text-muted">
              {t.projects.categories[project.category]} · {pick(project.period)}
            </span>
          </div>

          <h3 className="text-[clamp(1.75rem,3.8vw,2.5rem)] tracking-[-0.025em]">
            {project.title}
          </h3>

          <p className="mt-4 max-w-[46ch] text-base leading-[1.7] text-content [text-wrap:pretty]">
            {pick(project.description)}
          </p>

          <ul className="mt-5 space-y-1.5">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm leading-relaxed text-content"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{pick(h)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Tag key={tech} variant="accent">
                {tech}
              </Tag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary px-4 py-2.5"
              >
                <GithubIcon size={16} />
                {t.projects.viewCode}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary px-4 py-2.5"
              >
                {t.projects.viewDemo}
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.privateRepo && (
              <p className="flex items-center gap-1.5 text-[13px] text-muted">
                <Lock size={14} />
                {t.projects.privateRepo}
              </p>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow={t.projects.subheading}
        title={t.projects.heading}
      />

      <div className="mt-14 grid gap-24">
        {projects.map((project, index) => (
          <ProjectArticle key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
