import type { LocalizedContent } from "@/i18n/locales";

export type SocialLink = { label: "GitHub" | "LinkedIn"; href: string };

export const profile: {
  name: string;
  role: string;
  specialization: string;
  location: string;
  email?: string;
  cv: Partial<LocalizedContent>;
} = {
  name: "Mateo Beccan",
  role: "Software Developer",
  specialization: "Backend Development · Java · Spring Boot · SQL",
  location: "Rosario, Santa Fe, Argentina",
  email: "mateobeccan@gmail.com",
  cv: {},
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MateoBeccan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mateobeccan/" },
];
