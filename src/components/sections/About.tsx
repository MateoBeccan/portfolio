import { Building2, Database, GitBranch, Server } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

const icons = [Server, Building2, Database, GitBranch];

export default function About({ locale }: { locale: Locale }) {
  const { about } = dictionaries[locale];
  return (
    <section className="section bordered" id="about" data-nav tabIndex={-1}>
      <div className="wrap about-grid">
        <div className="about-copy">
          <SectionTitle title={about.title} />
          {about.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="capabilities">
          {about.capabilities.map(([title, description], index) => {
            const Icon = icons[index];
            return <article key={title}><Icon size={21} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></article>;
          })}
        </div>
      </div>
    </section>
  );
}
