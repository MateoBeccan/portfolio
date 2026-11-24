import type { Locale } from "./locales";

const es = {
  nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", skills: "Tecnologías", education: "Formación", contact: "Contacto" },
  ui: { navigation: "Navegación principal", footerNav: "Navegación del pie", openMenu: "Abrir menú", closeMenu: "Cerrar menú", language: "Idioma", theme: "Tema", light: "Activar tema claro", dark: "Activar tema oscuro", skip: "Saltar al contenido", cv: "Descargar CV", email: "Correo electrónico", backHome: "Volver al inicio", backProjects: "Volver a proyectos", next: "Siguiente proyecto", viewProject: "Explorar proyecto", exploreFeatures: "Explorar funcionalidades", previousImage: "Captura anterior", nextImage: "Captura siguiente", openImage: "Ampliar captura", close: "Cerrar", image: "Captura", gallery: "Capturas del proyecto", verify: "Verificar credencial", credential: "Credencial", document: "Abrir documento" },
  meta: { description: "Desarrollador de software con foco en backend, Java, Spring Boot y SQL. Explorá mis proyectos, aplicaciones empresariales y formación profesional." },
  hero: {
    available: "Disponible para oportunidades laborales", intro: "Hola, soy Mateo Beccan.",
    description: "Desarrollo aplicaciones empresariales, APIs REST y sistemas de gestión. Traduzco reglas de negocio y requerimientos funcionales en software mantenible y seguro.",
    cta: "Explorar proyectos", profile: "Perfil técnico",
    indicators: { projects: "Proyectos de software", education: "Formación finalizada", languages: "Portfolio bilingüe" },
  },
  about: {
    title: "Sobre mí",
    description: [
      "Soy desarrollador de software egresado de la Tecnicatura en Desarrollo de Software del Instituto Superior Brigadier López. Me especializo en backend y aplicaciones empresariales.",
      "En mis proyectos con Java, Spring Boot y bases de datos relacionales, diseño APIs REST y modelo datos, permisos y reglas de negocio. He trabajado en sistemas comerciales y bibliotecarios, plataformas ciudadanas y aplicaciones con inteligencia artificial.",
      "Me interesa entender cómo funciona un proceso antes de llevarlo al código. Busco sumarme a un equipo de desarrollo donde pueda aportar y seguir creciendo.",
    ],
    capabilities: [
      ["Desarrollo backend", "APIs REST con servicios por capas, autenticación y autorización por roles."],
      ["Aplicaciones empresariales", "Modelado de reglas de negocio y flujos de pedidos, reservas o cobros."],
      ["Diseño de bases de datos", "Modelado relacional, SQL y control de integridad en operaciones concurrentes."],
      ["Ingeniería de software", "Pruebas de reglas de negocio, documentación y control de versiones."],
    ],
  },
  projects: { label: "Proyectos seleccionados", title: "Software en acción.", description: "Casos de estudio con decisiones de arquitectura, reglas de negocio y funcionalidades implementadas.", feature: "Proyecto principal", previous: "Proyecto anterior", select: "Seleccionar proyecto", caseLinks: "Casos de estudio" },
  stack: {
    title: "Stack tecnológico",
    levels: { primary: "Especialización principal", applied: "Tecnologías aplicadas en proyectos", complementary: "Conocimientos complementarios" },
  },
  process: {
    title: "Cómo desarrollo software",
    description: "Uso IA como apoyo al desarrollo. Verifico sus resultados con revisión de código, pruebas y validación funcional.",
    steps: [
      ["Análisis", "Identifico requisitos, restricciones y reglas de negocio."],
      ["Diseño", "Defino entidades, relaciones, arquitectura y responsabilidades."],
      ["Implementación", "Construyo APIs, servicios, persistencia e interfaces."],
      ["Validación", "Compruebo reglas de negocio, flujos funcionales y manejo de errores."],
      ["Documentación", "Registro decisiones técnicas y versiono los cambios."],
    ],
  },
  education: {"title":"Formación académica","status":{"closing":"En cierre académico","completed":"Finalizado","degreeAwarded":"Título otorgado"}},
  certifications: { title: "Certificaciones y cursos", categories: { course: "Curso", program: "Programa de formación", language: "Formación en idiomas" } },
  contact: {
    title: "¿Buscás un desarrollador para tu equipo?",
    description: "Estoy abierto a oportunidades de desarrollo backend con Java y Spring Boot, especialmente en aplicaciones empresariales y equipos remotos.",
    email: "Contactar por correo", remote: "Interés en posiciones remotas",
  },
  resume: {
    title: "Currículum Vitae",
    description: "Conocé mi formación, experiencia en proyectos, habilidades técnicas y perfil profesional.",
    availableLanguages: "Idiomas disponibles",
    languages: { es: "Español", en: "Inglés" },
    view: "Ver CV",
    download: "Descargar PDF",
    newTab: "se abre en una pestaña nueva",
  },
  caseStudy: { problem: "Contexto y problema", solution: "Solución", role: "Mi rol", approach: "Desarrollo con GeneXus", technologies: "Tecnologías utilizadas", architecture: "Arquitectura técnica", flow: "Flujo de trabajo", features: "Funcionalidades principales", dataModel: "Modelo de datos", rules: "Reglas de negocio", decisions: "Decisiones técnicas", security: "Seguridad", testing: "Calidad de software", lessons: "Aprendizajes", stages: { implemented: "Implementado", development: "En desarrollo", design: "Diseño funcional" }, categories: { laundry: "Software de gestión empresarial", urban: "Gestión de reclamos urbanos", dealership: "Gestión comercial automotriz", career: "Compatibilidad laboral con IA", community: "Innovación ciudadana", library: "Gestión bibliotecaria" }, statuses: { development: "En desarrollo", prototype: "Prototipo", academic: "Diseño académico", functional: "Versión funcional", released: "Versión publicada" }, types: { academic: "Proyecto académico", personal: "Proyecto personal", collaborative: "Proyecto colaborativo", hackathon: "Hackathon" } },
  errors: { notFound: "Página no encontrada", missing: "La página que buscás no está disponible.", error: "Ocurrió un error", tryAgain: "Volver a intentar" },
};

const en: typeof es = {
  nav: { home: "Home", about: "About", projects: "Projects", skills: "Technologies", education: "Education", contact: "Contact" },
  ui: { navigation: "Main navigation", footerNav: "Footer navigation", openMenu: "Open menu", closeMenu: "Close menu", language: "Language", theme: "Theme", light: "Switch to light theme", dark: "Switch to dark theme", skip: "Skip to content", cv: "Download CV", email: "Email", backHome: "Back to home", backProjects: "Back to projects", next: "Next project", viewProject: "Explore project", exploreFeatures: "Explore features", previousImage: "Previous screenshot", nextImage: "Next screenshot", openImage: "Enlarge screenshot", close: "Close", image: "Screenshot", gallery: "Project screenshots", verify: "Verify credential", credential: "Credential", document: "Open document" },
  meta: { description: "Software Developer focused on backend development, Java, Spring Boot, and SQL. Explore my software projects, business applications, and technical education." },
  hero: {
    available: "Open to work", intro: "Hi, I’m Mateo Beccan.",
    description: "I build business applications, REST APIs, and management systems. I turn business rules and functional requirements into maintainable, secure software.",
    cta: "Explore projects", profile: "Technical profile",
    indicators: { projects: "Software projects", education: "Studies completed", languages: "Bilingual portfolio" },
  },
  about: {
    title: "About me",
    description: [
      "I’m a Software Developer who completed the Technical Degree program in Software Development at Instituto Superior Brigadier López. My focus is backend development and business applications.",
      "In my projects with Java, Spring Boot, and relational databases, I design REST APIs and model data, permissions, and business rules. I’ve worked on sales and library management systems, civic platforms, and AI-powered applications.",
      "I like to understand a process before writing the code for it. I’m looking to join a development team where I can contribute and continue to grow.",
    ],
    capabilities: [
      ["Backend development", "REST APIs with layered services, authentication, and role-based authorization."],
      ["Business applications", "Modeling business rules and workflows for orders, reservations, and payments."],
      ["Database design", "Relational modeling, SQL, and data integrity during concurrent operations."],
      ["Software engineering", "Business-rule testing, documentation, and version control."],
    ],
  },
  projects: { label: "Selected projects", title: "Software in action.", description: "Case studies covering architecture decisions, business rules, and implemented features.", feature: "Featured case study", previous: "Previous project", select: "Select project", caseLinks: "Case studies" },
  stack: {
    title: "Technical stack",
    levels: { primary: "Core specialization", applied: "Technologies used in projects", complementary: "Complementary skills" },
  },
  process: {
    title: "How I build software",
    description: "I use AI to support development and verify its output through code review, testing, and functional checks.",
    steps: [
      ["Analysis", "I identify requirements, constraints, and business rules."],
      ["Design", "I define entities, relationships, architecture, and responsibilities."],
      ["Implementation", "I build APIs, services, persistence layers, and interfaces."],
      ["Validation", "I verify business rules, workflows, and error handling."],
      ["Documentation", "I record technical decisions and track changes in version control."],
    ],
  },
  education: {"title":"Education","status":{"closing":"Finishing coursework","completed":"Completed","degreeAwarded":"Degree awarded"}},
  certifications: { title: "Certifications and courses", categories: { course: "Course", program: "Training program", language: "Language training" } },
  contact: {
    title: "Looking for a software developer to join your team?",
    description: "I’m open to backend development opportunities with Java and Spring Boot, especially in business applications and remote teams.",
    email: "Contact by email", remote: "Interested in remote roles",
  },
  resume: {
    title: "Resume",
    description: "Explore my educational background, project experience, technical skills, and professional profile.",
    availableLanguages: "Available languages",
    languages: { es: "Spanish", en: "English" },
    view: "View Resume",
    download: "Download PDF",
    newTab: "opens in a new tab",
  },
  caseStudy: { problem: "Context and problem", solution: "Solution", role: "My role", approach: "Building with GeneXus", technologies: "Technologies used", architecture: "Technical architecture", flow: "Workflow", features: "Key features", dataModel: "Data model", rules: "Business rules", decisions: "Technical decisions", security: "Security", testing: "Software quality", lessons: "Lessons learned", stages: { implemented: "Implemented", development: "In development", design: "Functional design" }, categories: { laundry: "Business Management Software", urban: "Urban issue management", dealership: "Dealership operations", career: "AI-powered job matching", community: "Civic innovation", library: "Library management" }, statuses: { development: "In development", prototype: "Prototype", academic: "Academic design", functional: "Working version", released: "Released version" }, types: { academic: "Academic project", personal: "Personal project", collaborative: "Collaborative project", hackathon: "Hackathon" } },
  errors: { notFound: "Page not found", missing: "The page you’re looking for is unavailable.", error: "Something went wrong", tryAgain: "Try again" },
};

export const dictionaries: Record<Locale, typeof es> = { es, en };
export type Dictionary = typeof es;
