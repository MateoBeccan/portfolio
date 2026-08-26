import { Brain, Code2, Database, GraduationCap } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";

const strengths = [
  {
    title: "Base técnica",
    description: "Java, Spring Boot, SQL y APIs REST como núcleo de crecimiento profesional.",
    icon: Code2,
  },
  {
    title: "Pensamiento de producto",
    description: "Me interesa entender el problema antes de escribir código y cuidar la experiencia final.",
    icon: Database,
  },
  {
    title: "Formación activa",
    description: "Estudiante avanzado, construyendo criterio con proyectos académicos y aplicaciones reales.",
    icon: GraduationCap,
  },
  {
    title: "IA como herramienta",
    description: "La uso para explorar alternativas, depurar, revisar código y documentar con más velocidad.",
    icon: Brain,
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/8 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Sobre mí"
          title="Desarrollo software con foco en claridad, aprendizaje y utilidad real."
          description="Soy Mateo Beccan, estudiante avanzado de la Tecnicatura en Desarrollo de Software. Estoy construyendo mi camino profesional desde una base práctica: entender dominios, modelar datos, crear APIs y convertir ideas en aplicaciones usables."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {strengths.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <Icon className="mb-5 text-blue-300" size={24} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-300">
              Perfil
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              No busco presentarme como senior: estoy en una etapa junior / early-career,
              con muchas ganas de crecer, aprender de equipos sólidos y seguir construyendo
              proyectos que tengan estructura, datos y valor de uso.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-300">
              Cómo trabajo
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Me gusta avanzar con ciclos cortos: relevar el problema, definir una solución
              simple, implementar, probar y ajustar. La IA entra como una herramienta de
              productividad y revisión, pero las decisiones técnicas siguen necesitando
              fundamentos, lectura crítica y responsabilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
