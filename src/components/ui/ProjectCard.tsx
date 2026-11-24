import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Building2, CarFront, Layers3, MapPin, ScanText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project, Technology } from "@/types/project";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import SkillBadge from "./SkillBadge";

const icons = { laundry: Layers3, urban: MapPin, dealership: CarFront, career: ScanText, community: Building2, library: BookOpen };

export type ShowcaseProject = Pick<Project, "slug" | "title" | "shortTitle" | "summary" | "category" | "type" | "status" | "featured" | "technologies" | "coverImage" | "repositoryUrl" | "demoUrl">;

export function ProjectTags({ technologies, locale }: { technologies: Technology[]; locale: Locale }) {
  return <div className="tag-row">{technologies.map((item) => {
    const label = typeof item === "string" ? item : item[locale];
    return <SkillBadge key={label}>{label}</SkillBadge>;
  })}</div>;
}

export function ProjectLinks({ project }: { project: Pick<Project, "repositoryUrl" | "demoUrl"> }) {
  return <>
    {project.repositoryUrl && <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer"><FaGithub size={16} aria-hidden="true" />GitHub<ArrowUpRight size={14} aria-hidden="true" /></a>}
    {project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo<ArrowUpRight size={14} aria-hidden="true" /></a>}
  </>;
}

export function ProjectMeta({ project, locale }: { project: Pick<Project, "category" | "type" | "status">; locale: Locale }) {
  const { caseStudy } = dictionaries[locale];
  return <div className="project-meta">
    <span>{caseStudy.categories[project.category]}</span>
    {project.type && <span>{caseStudy.types[project.type]}</span>}
    {project.status && <span>{caseStudy.statuses[project.status]}</span>}
  </div>;
}

export default function ProjectCard({ project, locale, active, position, total }: { project: ShowcaseProject; locale: Locale; active: boolean; position: string; total: string }) {
  const copy = dictionaries[locale];
  const title = typeof project.title === "string" ? project.title : project.title[locale];
  const image = project.coverImage;
  const Icon = icons[project.category];

  return (
    <article className="showcase-slide" data-active={active} inert={!active} aria-hidden={active ? undefined : true} aria-label={`${position} / ${total} · ${title}`}>
      <div className="showcase-art">
        {image ? (
          <div className="showcase-image">
            {active && <Image src={image.src} alt={image.alt[locale]} fill
              sizes="(max-width: 800px) 86vw, (max-width: 1280px) 51vw, 670px" />}
          </div>
        ) : (
          <div className="showcase-art-type" aria-hidden="true">
            <Icon size={56} strokeWidth={1.25} />
            <span>{project.shortTitle?.[locale] ?? title}</span>
            <small>{copy.caseStudy.categories[project.category]}</small>
          </div>
        )}
      </div>
      <div className="showcase-copy">
        <div className="showcase-kicker">
          <span className="showcase-index">{position}</span>
          {project.featured && <span className="eyebrow">{copy.projects.feature}</span>}
        </div>
        <ProjectMeta project={project} locale={locale} />
        <h3>{title}</h3>
        <p>{project.summary[locale]}</p>
        <ProjectTags technologies={project.technologies} locale={locale} />
        <div className="project-actions">
          <Link href={`/${locale}/projects/${project.slug}`} prefetch={false} className="button primary">{copy.ui.viewProject}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> — {title}</span></Link>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
