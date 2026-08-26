import { Award, GraduationCap } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { certifications, education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="border-t border-white/8 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Formación"
          title="Formación técnica en curso, como base para seguir creciendo."
          description="Esta sección queda lista para sumar institución, fechas y certificados reales cuando estén disponibles."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {education.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-md border border-blue-300/20 bg-blue-300/10 p-2 text-blue-200">
                    <GraduationCap size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300">{item.status}</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{item.institution}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <div className="flex items-center gap-3">
              <Award className="text-blue-300" size={22} aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">Certificaciones</h3>
            </div>
            {certifications.length > 0 ? (
              <ul className="mt-5 space-y-3">
                {certifications.map((certification) => (
                  <li key={certification} className="text-sm text-slate-300">
                    {certification}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Todavía no hay certificados reales cargados. La carpeta
                <span className="font-mono text-slate-300"> public/certificates </span>
                queda disponible para incorporarlos.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
