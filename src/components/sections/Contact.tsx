import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/8 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.13),rgba(255,255,255,0.035)_42%,rgba(14,165,233,0.08))] p-6 sm:p-8 lg:p-10">
          <SectionTitle
            eyebrow="Contacto"
            title="¿Trabajamos juntos?"
            description="Estoy abierto a oportunidades donde pueda aportar, aprender de un equipo y seguir creciendo como desarrollador de software."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-slate-200"
            >
              <FaLinkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              <FaGithub size={16} aria-hidden="true" />
              GitHub
            </a>
            {profile.email ? (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                <Mail size={16} aria-hidden="true" />
                Email
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2.5 text-sm text-slate-400">
                <Mail size={16} aria-hidden="true" />
                Email pendiente
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
