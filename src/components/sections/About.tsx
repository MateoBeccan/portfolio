import Image from "next/image";
import { Building2, Database, GitBranch, Server } from "lucide-react";
import portrait from "../../../public/images/perfil.png";
import ProjectReference from "@/components/ui/ProjectReference";
import SectionTitle from "@/components/ui/SectionTitle";
import { getProjectBySlug } from "@/data/projects";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

const capabilities = [
  { Icon: Server, slug: "cityfix" },
  { Icon: Building2, slug: "mira-que-te-lavo" },
  { Icon: Database, slug: "hogwarts-library" },
  { Icon: GitBranch, slug: "concesionaria" },
];

export default function About({ locale }: { locale: Locale }) {
  const { about } = dictionaries[locale];
  return (
    <section className="section bordered" id="about" data-nav tabIndex={-1}>
      <div className="wrap about-grid">
        <div className="about-copy">
          <SectionTitle title={about.title} />
          {about.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <figure className="about-portrait">
          <Image
            src={portrait}
            alt={about.portraitAlt}
            sizes="(max-width: 360px) calc(66vw - 24px), (max-width: 670px) 210px, (max-width: 1024px) 32vw, 314px"
            loading="lazy"
          />
        </figure>
        <div className="capabilities">
          {about.capabilities.map(([title, description], index) => {
            const { Icon, slug } = capabilities[index];
            const project = getProjectBySlug(slug);
            return (
              <article key={title}>
                <Icon size={21} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  {project && <ProjectReference project={project} locale={locale} />}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
