import { ArrowUpRight, Award, Check, GraduationCap } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import { certifications, education } from "@/data/education";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import { credentialUrl, publicDocument } from "@/lib/public-documents";

export default function Education({ locale }: { locale: Locale }) {
  const copy = dictionaries[locale];
  return (
    <>
      <section className="section bordered" id="education" data-nav tabIndex={-1}>
        <div className="wrap education-grid">
          <SectionTitle title={copy.education.title} />
          <article className="education-card">
            <span className="panel-symbol"><GraduationCap size={22} aria-hidden="true" /></span>
            <div>
              <div className="education-meta">
                <p className="eyebrow">{`${education.startYear} – ${education.endYear}`}</p>
                <span className="education-status" data-status={education.status}>
                  {education.status !== "closing" && <Check size={14} aria-hidden="true" />}
                  {copy.education.status[education.status]}
                </span>
              </div>
              <h3>{education.title[locale]}</h3>
              <p>{education.institution}</p>
              <div className="tag-row">{education.areas[locale].map((area) => <SkillBadge key={area}>{area}</SkillBadge>)}</div>
            </div>
          </article>
        </div>
      </section>
      <section className="section bordered" id="certifications">
        <div className="wrap">
          <SectionTitle title={copy.certifications.title} />
          <ul className="credential-grid" role="list">
            {certifications.map((item) => {
              const document = publicDocument(item.document, "certificates");
              const verification = credentialUrl(item.verificationUrl);
              return (
                <li key={item.title.es}>
                  <Award size={20} aria-hidden="true" />
                  <div>
                    <h3>{item.title[locale]}</h3>
                    <p>{[item.institution, item.year, copy.certifications.categories[item.category]].filter(Boolean).join(" · ")}</p>
                    {item.credentialId && <p>{copy.ui.credential} {item.credentialId}</p>}
                    {document && <a href={document} target="_blank" rel="noopener noreferrer">{copy.ui.document}<span className="sr-only"> — {item.title[locale]}</span><ArrowUpRight size={15} aria-hidden="true" /></a>}
                    {verification && <a href={verification} target="_blank" rel="noopener noreferrer">{copy.ui.verify}<span className="sr-only"> — {item.title[locale]}</span><ArrowUpRight size={15} aria-hidden="true" /></a>}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
