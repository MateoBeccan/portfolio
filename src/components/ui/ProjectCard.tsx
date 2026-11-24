import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Building2, CarFront, Layers3, MapPin, ScanText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project, Technology } from "@/types/project";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import SkillBadge from "./SkillBadge";

export const projectIcons = { laundry: Layers3, urban: MapPin, dealership: CarFront, career: ScanText, community: Building2, library: BookOpen };

export type ShowcaseProject = Pick<Project, "slug" | "title" | "shortTitle" | "summary" | "category" | "type" | "status" | "featured" | "technologies" | "coverImage" | "repositoryUrl" | "demoUrl"> & { highlights: string[] };
export type ShowcaseCopy = {
  feature: string;
  previous: string;
  next: string;
  select: string;
  viewProject: string;
  caseLinks: string;
  caseStudy: Pick<Dictionary["caseStudy"], "categories" | "types" | "statuses">;
};

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

export function ProjectMeta({ project, copy }: { project: Pick<Project, "category" | "type" | "status">; copy: ShowcaseCopy["caseStudy"] }) {
  return <div className="project-meta">
    <span>{copy.categories[project.category]}</span>
    {project.type && <span>{copy.types[project.type]}</span>}
    {project.status && <span>{copy.statuses[project.status]}</span>}
  </div>;
}

export default function ProjectCard({ project, locale, copy, active, position, total }: { project: ShowcaseProject; locale: Locale; copy: ShowcaseCopy; active: boolean; position: string; total: string }) {
  const title = typeof project.title === "string" ? project.title : project.title[locale];
  const image = project.coverImage;
  const Icon = projectIcons[project.category];

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
        {project.featured && <p className="showcase-feature eyebrow">{copy.feature}</p>}
        <ProjectMeta project={project} copy={copy.caseStudy} />
        <h3>{title}</h3>
        <p className="showcase-summary">{project.summary[locale]}</p>
        <ul className="showcase-highlights" role="list">
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <ProjectTags technologies={project.technologies} locale={locale} />
        <div className="project-actions">
          <Link href={`/${locale}/projects/${project.slug}`} prefetch={false} className="button primary">{copy.viewProject}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> — {title}</span></Link>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
