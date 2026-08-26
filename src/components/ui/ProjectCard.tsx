import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import ProjectCarousel from "@/components/ui/ProjectCarousel";
import SkillBadge from "@/components/ui/SkillBadge";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-blue-300/35 hover:bg-white/[0.055] sm:p-5 lg:grid-cols-[0.95fr_1.05fr]">
      {!compact ? (
        <ProjectCarousel
          title={project.title}
          images={project.images}
          priority={project.slug === "jobmatch-ai"}
        />
      ) : null}

      <div className="flex flex-col">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            {project.technologies.slice(0, compact ? 4 : 6).map((technology) => (
              <SkillBadge key={technology} emphasis={["Java", "Spring Boot", "SQL", "MySQL"].includes(technology)}>
                {technology}
              </SkillBadge>
            ))}
          </div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
            {project.shortDescription}
          </p>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-slate-300">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Ver detalle
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          {project.github ? (
            <a
              href={project.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              <FaGithub size={16} aria-hidden="true" />
              {project.github.label}
            </a>
          ) : null}

          {project.demo ? (
            <a
              href={project.demo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              <ExternalLink size={16} aria-hidden="true" />
              {project.demo.label}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
