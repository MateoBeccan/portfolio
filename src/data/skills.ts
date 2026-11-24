import { localized as l } from "@/i18n/locales";
import type { Locale, LocalizedContent } from "@/i18n/locales";
import type { Project, Technology } from "@/types/project";

export const portfolioTechnologies = new Set(["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS", "Git", "GitHub", "Vercel"]);

export function projectUsesTechnology(project: Project, label: string, locale: Locale) {
  if (label === "Git" || label === "GitHub") return Boolean(project.repositoryUrl);

  const names = project.technologies.map((technology) => typeof technology === "string" ? technology : technology[locale]);
  if (label === "Java") return names.some((name) => /^Java(?: \d+)?$/.test(name));
  if (label === "SQL") return names.some((name) => ["MySQL", "PostgreSQL", "SQL Server"].includes(name));
  return names.includes(label);
}

export const coreTechnologies = [
  {
    name: "Java",
    area: l("Lógica de negocio", "Business logic"),
    description: l("Modelo reglas de negocio y construyo servicios orientados a objetos.", "I model business rules and build object-oriented services."),
  },
  {
    name: "Spring Boot",
    area: l("APIs y servicios", "APIs and services"),
    description: l("Desarrollo APIs REST y aplicaciones backend con arquitectura por capas.", "I build REST APIs and backend applications with layered architectures."),
  },
  {
    name: "SQL",
    area: l("Persistencia relacional", "Relational persistence"),
    description: l("Modelo relaciones, consulto datos y aplico restricciones de integridad.", "I model relationships, query data, and enforce integrity constraints."),
  },
] as const;

type SkillCategory = {
  icon: "backend" | "database" | "frontend" | "tools" | "testing" | "extras";
  title: LocalizedContent;
  technologies: Technology[];
};

export const skillGroups: SkillCategory[] = [
  { icon: "backend", title: l("Backend y arquitectura", "Backend and architecture"), technologies: ["Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "JWT", "JHipster"] },
  { icon: "database", title: l("Bases de datos", "Databases"), technologies: ["PostgreSQL", "MySQL", "SQL Server", "Liquibase", l("Modelado relacional", "Relational modeling")] },
  { icon: "frontend", title: l("Frontend", "Frontend"), technologies: ["React", "Vue.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { icon: "tools", title: l("Herramientas y plataformas", "Tools and platforms"), technologies: ["GeneXus", "Git", "GitHub", "Maven", "Supabase", "Vercel", "IntelliJ IDEA", "Visual Studio Code"] },
  { icon: "testing", title: l("Pruebas y documentación", "Testing and documentation"), technologies: ["JUnit", "Postman", "Swagger / OpenAPI", l("Pruebas unitarias", "Unit testing"), l("Pruebas de integración", "Integration testing")] },
  { icon: "extras", title: l("Otros lenguajes y herramientas", "Additional languages and tools"), technologies: ["Python", "C#", "ChatGPT", "Codex"] },
];
