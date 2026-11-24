import ProjectShowcase from "@/components/ui/ProjectShowcase";
import { projects } from "@/data/projects";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

export default function Projects({ locale }: { locale: Locale }) {
  const { projects: copy, caseStudy, ui } = dictionaries[locale];
  const { categories, types, statuses } = caseStudy;
  const slides = projects.map(({ slug, title, shortTitle, summary, category, type, status, featured, technologies, coverImage, screenshots, repositoryUrl, demoUrl, technicalHighlights }) => ({
    slug, title, shortTitle, summary, category, type, status, featured,
    technologies: technologies.slice(0, 4),
    highlights: technicalHighlights[locale].slice(0, 3),
    coverImage: coverImage ?? screenshots?.[0],
    repositoryUrl, demoUrl,
  }));
  return (
    <section className="section bordered project-section" id="projects" data-nav tabIndex={-1}>
      <div className="wrap">
        <header className="section-title showcase-heading">
          <span className="eyebrow">{copy.label}</span>
          <h2 id="projects-heading">{copy.title}</h2>
          <p>{copy.description}</p>
        </header>
        <ProjectShowcase slides={slides} locale={locale} copy={{
          feature: copy.feature, previous: copy.previous, select: copy.select,
          next: ui.next, viewProject: ui.viewProject, caseLinks: copy.caseLinks, caseStudy: { categories, types, statuses },
        }} />
      </div>
    </section>
  );
}
