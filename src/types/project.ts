import type { LocalizedContent } from "@/i18n/locales";

export type Technology = string | LocalizedContent;
export type ProjectStatus = "development" | "prototype" | "academic";
export type ProjectType = "academic" | "personal" | "collaborative" | "hackathon";
export type ProjectCategory = "laundry" | "urban" | "dealership" | "career" | "community";
export type Implementation = "implemented" | "design" | "development";

export type ProjectImage = {
  src: string;
  alt: LocalizedContent;
  title?: LocalizedContent;
  caption?: LocalizedContent;
  size?: { width: number; height: number };
};

export type Project = {
  slug: string;
  title: Technology;
  subtitle?: LocalizedContent;
  summary: LocalizedContent;
  description: LocalizedContent;
  category: ProjectCategory;
  type?: ProjectType;
  status?: ProjectStatus;
  featured?: boolean;
  technologies: Technology[];
  problem: LocalizedContent;
  solution: LocalizedContent;
  role?: LocalizedContent;
  architecture?: { steps: Technology[]; description: LocalizedContent };
  developmentApproach?: LocalizedContent;
  flow?: Technology[];
  features?: { stage: Implementation; items: LocalizedContent<string[]> }[];
  businessRules?: LocalizedContent<string[]>;
  technicalDecisions?: LocalizedContent<string[]>;
  security?: LocalizedContent<string[]>;
  testing?: LocalizedContent<string[]>;
  lessonsLearned?: LocalizedContent<string[]>;
  screenshots?: ProjectImage[];
  repositoryUrl?: string;
  demoUrl?: string;
  event?: LocalizedContent;
};
