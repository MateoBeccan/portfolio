export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  highlights: string[];
  features: string[];
  technicalDecisions: string[];
  images: ProjectImage[];
  github?: ProjectLink;
  demo?: ProjectLink;
  featured: boolean;
};
