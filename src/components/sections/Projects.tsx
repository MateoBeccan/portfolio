import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

export default function Projects({ locale }: { locale: Locale }) {
  const copy = dictionaries[locale].projects;
  return (
    <section className="section bordered project-section" id="projects" data-nav tabIndex={-1}>
      <div className="wrap">
        <SectionTitle title={copy.title} description={copy.description} />
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />)}
        </div>
      </div>
    </section>
  );
}
