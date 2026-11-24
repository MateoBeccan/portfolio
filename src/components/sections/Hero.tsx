import { ArrowDownRight, Braces, MapPin, Terminal } from "lucide-react";
import { profile } from "@/data/profile";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import SocialActions, { CvLink } from "@/components/ui/SocialActions";

export default function Hero({ locale }: { locale: Locale }) {
  const { hero, nav } = dictionaries[locale];
  const [discipline, title] = profile.role.split(" ");
  return (
    <section className="hero" id="home" data-nav tabIndex={-1}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="availability"><span aria-hidden="true" />{hero.available}</div>
          <p className="hero-intro">{hero.intro}</p>
          <h1>{discipline} <em>{title}</em></h1>
          <p className="hero-stack">{profile.specialization}</p>
          <p className="hero-description">{hero.description}</p>
          <div className="action-row hero-actions">
            <a href="#projects" className="button primary">{hero.cta}<ArrowDownRight size={18} aria-hidden="true" /></a>
            <CvLink locale={locale} />
            <a href="#contact" className="button secondary">{nav.contact}</a>
          </div>
          <div className="hero-bottom">
            <SocialActions locale={locale} />
            <p className="location"><MapPin size={16} aria-hidden="true" />{profile.location}</p>
          </div>
        </div>

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
