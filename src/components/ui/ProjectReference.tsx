import type { Locale } from "@/i18n/locales";
import type { Project } from "@/types/project";

export default function ProjectReference({ project, locale }: { project: Pick<Project, "slug" | "title" | "shortTitle">; locale: Locale }) {
  const title = project.shortTitle?.[locale] ?? (typeof project.title === "string" ? project.title : project.title[locale]);
  return <a className="project-reference" href={`/${locale}/projects/${project.slug}`}>{title}</a>;
}
