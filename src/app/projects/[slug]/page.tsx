import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import SkillBadge from "@/components/ui/SkillBadge";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Mateo Beccan`,
      description: project.shortDescription,
      type: "article",
      locale: "es_AR",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#07090d] pt-20">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Volver a proyectos
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-300">
                Proyecto
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-400">{project.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <SkillBadge key={technology} emphasis={["Java", "Spring Boot", "SQL", "MySQL"].includes(technology)}>
                    {technology}
                  </SkillBadge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-slate-200"
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
                ) : (
                  <span className="rounded-md border border-white/10 px-4 py-2.5 text-sm text-slate-400">
                    Demo pendiente
                  </span>
                )}
              </div>
            </div>

            <ProjectCarousel title={project.title} images={project.images} priority={project.slug === "jobmatch-ai"} />
          </div>
        </section>

        <section className="border-t border-white/8 py-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {[
              { title: "Problema", content: project.problem },
              { title: "Solución", content: project.solution },
              { title: "Rol", content: project.role },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.content}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/8 py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <DetailList title="Funcionalidades" items={project.features} />
            <DetailList title="Decisiones técnicas" items={project.technicalDecisions} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
