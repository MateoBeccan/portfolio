export type EducationItem = {
  title: string;
  institution: string;
  status: string;
  description: string;
  highlights: string[];
};

export const education: EducationItem[] = [
  {
    title: "Tecnicatura en Desarrollo de Software",
    institution: "Institución pendiente de completar",
    status: "Estudiante avanzado",
    description:
      "Formación orientada al análisis, diseño, implementación y mantenimiento de soluciones de software.",
    highlights: ["Programación", "Bases de datos", "Análisis de sistemas", "Desarrollo de aplicaciones"],
  },
];

export const certifications: string[] = [];
