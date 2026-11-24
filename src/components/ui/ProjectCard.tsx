import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, CarFront, Layers3, MapPin, ScanText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project, Technology } from "@/types/project";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import SkillBadge from "./SkillBadge";

const icons = { laundry: Layers3, urban: MapPin, dealership: CarFront, career: ScanText, community: Building2 };

export function ProjectTags({ technologies, locale }: { technologies: Technology[]; locale: Locale }) {
  return <div className="tag-row">{technologies.map((item) => {
    const label = typeof item === "string" ? item : item[locale];
    return <SkillBadge key={label}>{label}</SkillBadge>;
  })}</div>;
}

export function ProjectLinks({ project }: { project: Project }) {
  return <>
    {project.repositoryUrl && <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer"><FaGithub size={16} aria-hidden="true" />GitHub<ArrowUpRight size={14} aria-hidden="true" /></a>}
    {project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo<ArrowUpRight size={14} aria-hidden="true" /></a>}
  </>;
}

export function ProjectMeta({ project, locale }: { project: Project; locale: Locale }) {
  const { caseStudy } = dictionaries[locale];
  return <div className="project-meta">
    <span>{caseStudy.categories[project.category]}</span>
    {project.type && <span>{caseStudy.types[project.type]}</span>}
    {project.status && <span>{caseStudy.statuses[project.status]}</span>}
  </div>;
}

export default function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const copy = dictionaries[locale];
  const title = typeof project.title === "string" ? project.title : project.title[locale];
  const image = project.screenshots?.[0];
  const Icon = icons[project.category];

  return (
    <article className={project.featured ? "project-card project-featured" : "project-card"} data-project={project.category}>
      <div className="project-copy">
        {project.featured && <div className="project-card-kicker">
          <span className="panel-symbol"><Icon size={21} aria-hidden="true" /></span>
          <span className="eyebrow">{copy.projects.feature}</span>
        </div>}
        <ProjectMeta project={project} locale={locale} />
        <h3>{title}</h3>
        <p>{project.summary[locale]}</p>
        <ProjectTags technologies={project.technologies.slice(0, project.featured ? 6 : 4)} locale={locale} />
        <div className="project-actions">
          <Link href={`/${locale}/projects/${project.slug}`} prefetch={false} className={project.featured ? "button primary" : "text-link"}>{copy.ui.viewProject}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> — {title}</span></Link>
          <ProjectLinks project={project} />
        </div>
      </div>
      {image ? (
        <div className="card-art">
          <div className="card-image">
            <Image src={image.src} alt={image.alt[locale]} fill
              sizes="(max-width: 670px) 80vw, (max-width: 1200px) 48vw, 570px" />
          </div>
        </div>
      ) : <div className="card-art card-art-symbol" aria-hidden="true"><Icon size={62} strokeWidth={1.35} /></div>}
    </article>
  );
}
