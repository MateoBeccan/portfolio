import { Blocks, Brain, Database, FlaskConical, PanelsTopLeft, Server, Terminal, Workflow, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

const icons = { backend: Server, enterprise: Workflow, database: Database, testing: FlaskConical, frontend: PanelsTopLeft, tools: Terminal, extras: Blocks, ai: Brain };
const technologyIcons: Record<string, string | LucideIcon> = {
  Java: "java",
  "Spring Boot": "spring-boot",
  GeneXus: Workflow,
  SQL: Database,
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  "SQL Server": Server,
};

export default function Skills({ locale }: { locale: Locale }) {
  const { stack } = dictionaries[locale];
  return (
    <section className="section bordered" id="skills" data-nav tabIndex={-1}>
      <div className="wrap">
        <SectionTitle title={stack.title} />
        <div className="stack-grid">
          {skillGroups.map(({ icon, level, title, technologies }) => {
            const Icon = icons[icon];
            return (
              <article key={icon} className="stack-category" data-category={icon} data-level={level}>
                <div className="stack-heading"><Icon size={20} aria-hidden="true" /><div><h3>{title[locale]}</h3><p>{stack.levels[level]}</p></div></div>
                <div className="tag-row">{technologies.map((technology) => {
                  const label = typeof technology === "string" ? technology : technology[locale];
                  const Mark = technologyIcons[label];
                  return <SkillBadge key={label}>
                    {typeof Mark === "string" ? (
                      <svg width="16" height="16" fill="currentColor" aria-hidden="true">
                        <use href={`/images/technology-marks.svg#${Mark}`} />
                      </svg>
                    ) : Mark && <Mark size={16} aria-hidden="true" />}
                    {label}
                  </SkillBadge>;
                })}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
