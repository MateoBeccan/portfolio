import type { Locale, LocalizedContent } from "@/i18n/locales";

export type SocialLink = { label: "GitHub" | "LinkedIn"; href: string };

type ResumeFile = { href: string; downloadName: string; type: "application/pdf" };
export type ResumeDocument = ResumeFile & { locale: Locale };

export const profile: {
  name: string;
  role: string;
  specialization: string;
  location: string;
  email?: string;
  cv: LocalizedContent<ResumeFile>;
} = {
  name: "Mateo Beccan",
  role: "Software Developer",
  specialization: "Backend Development · Java · Spring Boot · SQL",
  location: "Rosario, Santa Fe, Argentina",
  email: "mateobeccan@gmail.com",
  cv: {
    es: { href: "/cv/Mateo_Beccan_CV_ES.pdf", downloadName: "Mateo_Beccan_CV_ES.pdf", type: "application/pdf" },
    en: { href: "/cv/Mateo_Beccan_CV_EN.pdf", downloadName: "Mateo_Beccan_CV_EN.pdf", type: "application/pdf" },
  },
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MateoBeccan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mateobeccan/" },
];
