import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { featuredProjects, projects } from "@/data/projects";

const otherProjects = projects.filter((project) => !project.featured);

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/8 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Proyectos"
            title="Aplicaciones pensadas desde problema, solución y stack."
            description="La sección está preparada para crecer con screenshots, demos y enlaces reales sin reescribir componentes."
          />
        </div>

        <div className="mt-10 space-y-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {otherProjects.length > 0 ? (
          <div className="mt-14">
            <h3 className="text-xl font-semibold text-white">Otros proyectos</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} compact />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
