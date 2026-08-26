import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import { profile, socialLinks } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[94svh] items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        <div className="absolute left-1/2 top-0 h-[360px] w-[min(760px,90vw)] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 sm:px-4 sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span className="truncate">{profile.availability}</span>
          </div>

          <p className="mb-4 text-base font-medium text-blue-300 sm:text-lg">
            Hola, soy {profile.name}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
            {profile.role} enfocado en construir soluciones digitales para
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-400 bg-clip-text text-transparent">
              {" "}
              resolver problemas reales.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Estudiante avanzado de Desarrollo de Software, con foco en Java, Spring Boot, SQL,
            APIs REST y aplicaciones web. Me interesa crear soluciones claras, mantenibles y
            útiles, usando IA como apoyo para aprender mejor, depurar y acelerar el trabajo técnico.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.primaryStack.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Ver proyectos
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>

            <Link
              href="/#contact"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 font-medium text-white transition hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Contactarme
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-5 border-t border-white/8 pt-7">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                <Icon size={18} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/30">
            <div className="mb-4 flex items-center gap-2 border-b border-white/8 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="space-y-4 font-mono text-sm text-slate-300">
              <p>
                <span className="text-blue-300">const</span> developer = {"{"}
              </p>
              <p className="pl-4">
                name: <span className="text-white">&quot;Mateo Beccan&quot;</span>,
              </p>
              <p className="pl-4">
                focus: <span className="text-white">&quot;Java + Spring Boot + SQL&quot;</span>,
              </p>
              <p className="pl-4">
                mindset: <span className="text-white">&quot;learn, build, iterate&quot;</span>,
              </p>
              <p>{"};"}</p>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/#about"
        aria-label="Ir a Sobre mí"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-600 transition hover:text-white motion-safe:animate-bounce md:block"
      >
        <ArrowDown size={22} aria-hidden="true" />
      </Link>
    </section>
  );
}
