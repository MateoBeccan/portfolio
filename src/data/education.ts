import { localized as l } from "@/i18n/locales";
import type { LocalizedContent } from "@/i18n/locales";

export type Education = {
  title: LocalizedContent;
  institution: string;
  startYear: number;
  endYear: number;
  status: "closing" | "completed" | "degreeAwarded";
  areas: LocalizedContent<string[]>;
};

export type Certification = {
  title: LocalizedContent;
  institution?: string;
  year: number;
  category: "course" | "program" | "language";
  document?: string;
  verificationUrl?: string;
  credentialId?: string;
};

export const education: Education = {
  title: l("Tecnicatura en Desarrollo de Software", "Technical Degree in Software Development"),
  institution: "Instituto Superior Brigadier López",
  startYear: 2024,
  endYear: 2026,
  status: "completed",
  areas: l(
    ["Desarrollo de software", "Bases de datos", "Análisis de sistemas", "Ingeniería de software", "Arquitectura de aplicaciones", "Sistemas de gestión"],
    ["Software development", "Databases", "Systems analysis", "Software engineering", "Application architecture", "Business management systems"],
  ),
};

export const certifications: Certification[] = [
  { title: l("Amazon Junior Software Developer", "Amazon Junior Software Developer"), institution: "Amazon · Coursera", year: 2025, category: "program" },
  { title: l("Python Development", "Python Development"), institution: "Microsoft · Coursera", year: 2025, category: "program" },
  { title: l("GeneXus WorkWithPlus", "GeneXus WorkWithPlus"), year: 2026, category: "course" },
  { title: l("Inglés intermedio B1", "Intermediate English (B1)"), institution: "Centro Universitario de Idiomas", year: 2025, category: "language" },
  { title: l("Formación en Python", "Python training"), institution: "Santander Open Academy", year: 2024, category: "course" },
  { title: l("Formación en Excel", "Excel training"), institution: "Santander Open Academy", year: 2024, category: "course" },
];
