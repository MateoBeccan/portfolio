import { ArrowDownRight, Braces, MapPin, Terminal } from "lucide-react";
import { profile, type ResumeDocument } from "@/data/profile";
import { education } from "@/data/education";
import { projects } from "@/data/projects";
import { dictionaries } from "@/i18n/dictionary";
import { locales, type Locale } from "@/i18n/locales";
import SocialActions from "@/components/ui/SocialActions";
import ResumeDownloadLink from "@/components/ui/ResumeDownloadLink";

export default function Hero({ locale, cv }: { locale: Locale; cv?: ResumeDocument }) {
  const { hero, nav, resume, ui } = dictionaries[locale];
  const [discipline, title] = profile.role.split(" ");
  const indicators = [
    { label: hero.indicators.projects, value: String(projects.length).padStart(2, "0") },
    { label: education.status === "closing" ? dictionaries[locale].education.status.closing : hero.indicators.education, value: education.endYear },
    { label: hero.indicators.languages, value: locales.map((language) => language.toUpperCase()).join(" / ") },
  ];
  return (
    <section className="hero" id="home" data-nav tabIndex={-1}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="availability"><span aria-hidden="true" />{hero.available}</div>
          <p className="hero-intro">{hero.intro}</p>
          <h1 lang="en">{discipline} <em>{title}</em></h1>
          <p className="hero-stack" lang="en">{profile.specialization}</p>
          <p className="hero-description">{hero.description}</p>
          <div className="action-row hero-actions">
            <a href="#projects" className="button primary">{hero.cta}<ArrowDownRight size={18} aria-hidden="true" /></a>
            {cv && <ResumeDownloadLink
              className="button secondary"
              document={cv}
              label={ui.cv}
              language={resume.languages[cv.locale]}
              showLanguage={cv.locale !== locale}
            />}
            <a href="#contact" className="button hero-contact">{nav.contact}</a>
          </div>
          <div className="hero-bottom">
            <SocialActions locale={locale} />
            <p className="location"><MapPin size={16} aria-hidden="true" />{profile.location}</p>
          </div>
        </div>
        <dl className="hero-indicators">
          {indicators.map(({ label, value }) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
        <div className="hero-visual">
          <figure className="hero-panel">
            <figcaption className="hero-panel-heading">
              <span><Braces size={17} aria-hidden="true" /> developer.ts</span>
              <span className="window-controls" aria-hidden="true"><i /><i /><i /></span>
            </figcaption>
            <pre className="hero-code"><code>
              <span className="syntax-keyword">const</span>{" developer = {\n"}
              {"  name: "}<span className="syntax-value">&quot;{profile.name}&quot;</span>{",\n"}
              {"  focus: "}<span className="syntax-value">&quot;Backend Development&quot;</span>{",\n"}
              {"  stack: [\n"}
              {"    "}<span className="syntax-value">&quot;Java&quot;, &quot;Spring Boot&quot;, &quot;SQL&quot;</span>{",\n"}
              {"    "}<span className="syntax-value">&quot;GeneXus&quot;</span>{",\n"}
              {"  ],\n};"}
            </code></pre>
            <div className="hero-panel-footer"><Terminal size={16} aria-hidden="true" />{hero.profile}</div>
          </figure>
        </div>
      </div>
    </section>
  );
}
