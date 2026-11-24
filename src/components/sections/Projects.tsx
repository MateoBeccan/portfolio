import ProjectShowcase from "@/components/ui/ProjectShowcase";
import { projects } from "@/data/projects";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

export default function Projects({ locale }: { locale: Locale }) {
  const copy = dictionaries[locale].projects;
  const slides = projects.map(({ slug, title, shortTitle, summary, category, type, status, featured, technologies, coverImage, screenshots, repositoryUrl, demoUrl }) => ({
    slug, title, shortTitle, summary, category, type, status, featured,
    technologies: technologies.slice(0, 4),
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
        <ProjectShowcase slides={slides} locale={locale} />
      </div>
    </section>
  );
}
