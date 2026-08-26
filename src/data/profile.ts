import { FaGithub, FaLinkedin } from "react-icons/fa";

export const profile = {
  name: "Mateo Beccan",
  role: "Software Developer",
  location: "Argentina",
  github: "https://github.com/MateoBeccan",
  linkedin: "https://www.linkedin.com/in/mateobeccan/",
  email: "",
  availability: "Disponible para oportunidades junior / trainee",
  primaryStack: ["Java", "Spring Boot", "SQL", "REST APIs", "Git"],
};

export const navItems = [
  { label: "Sobre mí", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Proyectos", href: "/#projects" },
  { label: "Formación", href: "/#education" },
  { label: "Contacto", href: "/#contact" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: profile.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
];
