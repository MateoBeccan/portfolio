import { localized as l } from "@/i18n/locales";
import type { LocalizedContent } from "@/i18n/locales";
import type { Technology } from "@/types/project";

export type SkillCategory = {
  icon: "backend" | "enterprise" | "database" | "testing" | "frontend" | "tools" | "extras" | "ai";
  title: LocalizedContent;
  level: "primary" | "applied" | "complementary";
  technologies: Technology[];
};

export const skillGroups: SkillCategory[] = [
  { icon: "backend", title: l("Desarrollo backend", "Backend development"), level: "primary", technologies: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "JWT"] },
  { icon: "enterprise", title: l("Low-code y desarrollo empresarial", "Low-code and enterprise development"), level: "applied", technologies: ["GeneXus", l("Modelado de procesos de negocio", "Business process modeling"), l("Aplicaciones empresariales", "Business applications")] },
  { icon: "database", title: l("Bases de datos", "Databases"), level: "applied", technologies: ["SQL", "PostgreSQL", "MySQL", "SQL Server", l("Modelado relacional", "Relational modeling")] },
  { icon: "testing", title: l("Pruebas y documentación", "Testing and documentation"), level: "applied", technologies: ["JUnit", "Postman", "Swagger / OpenAPI", l("Pruebas unitarias", "Unit testing"), l("Pruebas de integración", "Integration testing")] },
  { icon: "frontend", title: l("Frontend", "Frontend"), level: "applied", technologies: ["React", "Vue.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { icon: "tools", title: l("Herramientas y plataformas", "Tools and platforms"), level: "applied", technologies: ["Git", "GitHub", "Maven", "IntelliJ IDEA", "Visual Studio Code", "Vercel", "Supabase"] },
  { icon: "extras", title: l("Conocimientos complementarios", "Additional technologies"), level: "complementary", technologies: ["Python", "C#", "JHipster"] },
  { icon: "ai", title: l("Desarrollo asistido por IA", "AI-assisted development"), level: "complementary", technologies: ["ChatGPT", "Codex"] },
];
