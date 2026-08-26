import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/8 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Tech stack"
          title="Tecnologías organizadas por contexto, no por porcentajes."
          description="Mi eje profesional está en Java, Spring Boot, SQL y desarrollo de software. El resto del stack acompaña la construcción de aplicaciones completas."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} emphasis={group.emphasis}>
                    {skill}
                  </SkillBadge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
