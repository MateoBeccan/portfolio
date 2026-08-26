import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "jobmatch-ai",
    title: "JobMatch AI",
    shortDescription: "Análisis de compatibilidad entre CVs y ofertas laborales con asistencia de IA.",
    description:
      "Aplicación orientada a ayudar a comparar perfiles profesionales con búsquedas laborales, resaltando coincidencias, brechas y oportunidades de mejora.",
    problem:
      "Leer una oferta, revisar un CV y detectar coincidencias relevantes puede ser lento y subjetivo, especialmente cuando se evalúan varias postulaciones.",
    solution:
      "Centralizar el análisis en una experiencia clara que estructura requisitos, habilidades detectadas y recomendaciones accionables.",
    role:
      "Diseño de flujo funcional, estructura de datos, integración de análisis asistido por IA y construcción de la experiencia de usuario.",
    technologies: ["TypeScript", "Next.js", "AI-assisted workflow", "Tailwind CSS"],
    highlights: [
      "Producto aplicado a empleabilidad",
      "Lectura estructurada de requisitos",
      "Base preparada para iterar con datos reales",
    ],
    features: [
      "Carga y comparación de información profesional",
      "Análisis de compatibilidad por criterios",
      "Resumen de fortalezas y brechas",
      "Recomendaciones orientadas a mejora del perfil",
    ],
    technicalDecisions: [
      "Separación entre datos de entrada, resultado de análisis y presentación",
      "Interfaz pensada para lectura rápida por secciones",
      "Preparado para conectar proveedores de IA sin exponer secretos en cliente",
    ],
    images: [
      {
        src: "/projects/jobmatch-ai/home.png",
        alt: "Pantalla principal de JobMatch AI con propuesta de análisis de compatibilidad entre CV y oferta laboral.",
      },
      {
        src: "/projects/jobmatch-ai/hom1.png",
        alt: "Sección de JobMatch AI que explica el flujo desde el CV hasta el próximo paso profesional.",
      },
      {
        src: "/projects/jobmatch-ai/home2.png",
        alt: "Sección de JobMatch AI con caminos profesionales sugeridos y llamado a analizar el CV.",
      },
      {
        src: "/projects/jobmatch-ai/analisis.png",
        alt: "Pantalla de nueva evaluación de JobMatch AI para cargar CV y oferta laboral.",
      },
      {
        src: "/projects/jobmatch-ai/carga-analisis.png",
        alt: "Pantalla de JobMatch AI con análisis en curso comparando habilidades con la oferta.",
      },
      {
        src: "/projects/jobmatch-ai/resultado.png",
        alt: "Pantalla de resultado de JobMatch AI con compatibilidad estimada y lectura general.",
      },
      {
        src: "/projects/jobmatch-ai/resultado1.png",
        alt: "Pantalla de JobMatch AI con requisitos detectados, acciones sugeridas y preguntas de entrevista.",
      },
    ],
    github: {
      label: "GitHub",
      href: "https://github.com/MateoBeccan/jobmatch-ai",
    },
    demo: {
      label: "Demo",
      href: "https://jobmatch-ai-ten.vercel.app/",
    },
    featured: true,
  },
  {
    slug: "concesionaria",
    title: "Concesionaria",
    shortDescription: "Sistema de gestión para vehículos, reservas, ventas, pagos y estados operativos.",
    description:
      "Sistema completo para administrar una concesionaria, cubriendo inventario, flujo comercial, pagos, seguridad y conversión de monedas.",
    problem:
      "La gestión manual de vehículos, reservas, ventas y pagos dificulta mantener estados consistentes y trazabilidad del negocio.",
    solution:
      "Construir una aplicación con backend robusto, persistencia relacional y frontend administrativo para operar el flujo principal.",
    role:
      "Participación en el desarrollo full stack, modelado de entidades, endpoints, vistas administrativas y reglas de negocio.",
    technologies: ["Java", "Spring Boot", "MySQL", "Vue", "JHipster"],
    highlights: [
      "Dominio de negocio completo",
      "Estados y operaciones comerciales",
      "Stack Java orientado a aplicación real",
    ],
    features: [
      "Gestión de vehículos e inventario",
      "Reservas y ventas",
      "Pagos y control de estados",
      "Conversión de monedas",
      "Seguridad de acceso",
    ],
    technicalDecisions: [
      "Modelo relacional para entidades principales del negocio",
      "Separación de responsabilidades entre backend y frontend",
      "Uso de JHipster para acelerar estructura base y convenciones",
    ],
    images: [],
    featured: true,
  },
  {
    slug: "cityfix",
    title: "CityFix",
    shortDescription: "Gestión y seguimiento de reclamos ciudadanos con autenticación y estados.",
    description:
      "Aplicación para registrar, organizar y consultar reclamos ciudadanos, con foco en seguimiento claro y operación por estado.",
    problem:
      "Los reclamos ciudadanos necesitan trazabilidad, categorías y estados visibles para que el seguimiento no dependa de canales informales.",
    solution:
      "Una plataforma web con autenticación, carga de reclamos y visualización de progreso para ordenar el ciclo de atención.",
    role:
      "Desarrollo de backend y frontend, integración de autenticación JWT y construcción de vistas con React.",
    technologies: ["Spring Boot", "React", "Vite", "Tailwind CSS", "JWT"],
    highlights: ["Autenticación JWT", "Flujo de reclamos por estado", "Aplicación web full stack"],
    features: [
      "Registro y consulta de reclamos",
      "Clasificación por estado",
      "Autenticación de usuarios",
      "Interfaz responsive para gestión",
    ],
    technicalDecisions: [
      "JWT para proteger rutas y acciones",
      "API REST como contrato entre frontend y backend",
      "Tailwind para mantener consistencia visual y velocidad de iteración",
    ],
    images: [],
    featured: true,
  },
  {
    slug: "sistema-lavanderia",
    title: "Sistema de Lavandería",
    shortDescription: "Análisis y diseño de sistema integral para operación de lavandería.",
    description:
      "Proyecto académico centrado en relevar, modelar y diseñar un sistema de gestión integral para una lavandería.",
    problem:
      "Una operación con clientes, pedidos, caja, maquinaria e inventario requiere procesos claros para evitar pérdidas de información.",
    solution:
      "Diseño de un sistema que organiza módulos principales, roles y trazabilidad para acompañar el funcionamiento completo.",
    role:
      "Análisis funcional, modelado de módulos, definición de procesos y documentación del sistema.",
    technologies: ["Análisis de sistemas", "SQL", "Modelado", "Documentación"],
    highlights: [
      "Proyecto académico integral",
      "Foco en análisis funcional",
      "Cobertura de múltiples módulos",
    ],
    features: [
      "Clientes y proveedores",
      "Pedidos e inventario",
      "Cobros, caja y reportes",
      "Maquinaria y auditoría",
    ],
    technicalDecisions: [
      "Separación por módulos del negocio",
      "Priorización de trazabilidad y reportes",
      "Base preparada para implementación progresiva",
    ],
    images: [],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
