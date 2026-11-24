import { Blocks, Database, FlaskConical, PanelsTopLeft, Server, Terminal, Workflow, type LucideIcon } from "lucide-react";
import { projects } from "@/data/projects";
import { coreTechnologies, portfolioTechnologies, projectUsesTechnology, skillGroups } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

const icons = { backend: Server, database: Database, frontend: PanelsTopLeft, tools: Terminal, testing: FlaskConical };
const technologyIcons: Record<string, string | LucideIcon> = {
  Java: "java",
  "Spring Boot": "spring-boot",
  SQL: Database,
  GeneXus: Workflow,
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  "SQL Server": Server,
};
function TechnologyMark({ name, size = 16 }: { name: string; size?: number }) {
  const Mark = technologyIcons[name];
  if (typeof Mark === "string") {
    return <svg width={size} height={size} fill="currentColor" aria-hidden="true"><use href={`/images/technology-marks.svg#${Mark}`} /></svg>;
  }
  return Mark ? <Mark size={size} aria-hidden="true" /> : null;
}

export default function Skills({ locale }: { locale: Locale }) {
  const { stack } = dictionaries[locale];
  const groups = skillGroups.map(({ icon, title, technologies }) => {
    const entries = technologies.map((technology) => {
      const label = typeof technology === "string" ? technology : technology[locale];
      const applied = icon !== "extras" && (portfolioTechnologies.has(label) || projects.some((project) => projectUsesTechnology(project, label, locale)));
      return { label, applied };
    });
    return { icon, title, entries };
  });
  const complementary = groups.flatMap(({ entries }) => entries.filter(({ applied }) => !applied));

  return (
    <section className="section bordered" id="skills" data-nav tabIndex={-1}>
      <div className="wrap">
        <SectionTitle title={stack.title} />
        <section className="stack-core" aria-labelledby="core-stack">
          <h3 id="core-stack">{stack.levels.primary}</h3>
          <div className="stack-core-grid">
            {coreTechnologies.map(({ name, area, description }) => (
              <article key={name}>
                <div className="core-technology-heading">
                  <span className="panel-symbol"><TechnologyMark name={name} size={23} /></span>
                  <div><h4>{name}</h4><p>{area[locale]}</p></div>
                </div>
                <p>{description[locale]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="stack-applied" aria-labelledby="applied-stack">
          <h3 id="applied-stack">{stack.levels.applied}</h3>
          <div className="stack-grid">
            {groups.map(({ icon, title, entries }) => {
              const technologies = entries.filter(({ applied }) => applied);
              if (icon === "extras" || technologies.length === 0) return null;
              const Icon = icons[icon];

              return (
                <div key={icon} className="stack-category">
                  <h4 className="stack-heading"><Icon size={17} aria-hidden="true" />{title[locale]}</h4>
                  <div className="tag-row">
                    {technologies.map(({ label }) => <SkillBadge key={label}><TechnologyMark name={label} />{label}</SkillBadge>)}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="stack-complementary" aria-labelledby="complementary-stack">
          <h3 className="stack-heading" id="complementary-stack"><Blocks size={17} aria-hidden="true" />{stack.levels.complementary}</h3>
          <div className="tag-row">
            {complementary.map(({ label }) => <SkillBadge key={label}><TechnologyMark name={label} />{label}</SkillBadge>)}
          </div>
        </section>
      </div>
    </section>
  );
}
