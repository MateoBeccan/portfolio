export type SkillGroup = {
  title: string;
  description: string;
  emphasis?: boolean;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    description: "Mi foco principal para construir lógica de negocio, APIs y servicios mantenibles.",
    emphasis: true,
    skills: ["Java", "Spring Boot", "REST APIs", "JPA / Hibernate", "Arquitectura por capas"],
  },
  {
    title: "Databases",
    description: "Modelado, consultas y persistencia para aplicaciones con datos reales.",
    emphasis: true,
    skills: ["SQL", "MySQL", "SQL Server", "Diseño relacional"],
  },
  {
    title: "Frontend",
    description: "Interfaces web modernas para consumir APIs y presentar productos completos.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Tailwind CSS"],
  },
  {
    title: "Tools",
    description: "Herramientas de trabajo diario para versionado, pruebas manuales y productividad.",
    skills: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"],
  },
  {
    title: "AI-assisted Development",
    description: "Uso IA como apoyo para explorar, depurar, documentar y revisar decisiones técnicas.",
    skills: ["Codex", "Amazon Q", "Debugging asistido", "Documentación técnica"],
  },
  {
    title: "Experiencia académica",
    description: "Tecnologías vistas en formación y proyectos, sin sobredimensionar el nivel profesional.",
    skills: ["Python", "C#", "GeneXus"],
  },
];
