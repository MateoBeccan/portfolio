import { ExternalLink, FileText, Globe, MapPin } from "lucide-react";
import ResumeDownloadLink from "@/components/ui/ResumeDownloadLink";
import SocialActions from "@/components/ui/SocialActions";
import { profile, type ResumeDocument } from "@/data/profile";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

export default function Contact({ locale, resumes }: { locale: Locale; resumes: ResumeDocument[] }) {
  const { contact, hero, resume } = dictionaries[locale];
  return (
    <section className="section bordered" id="contact" data-nav tabIndex={-1}>
      <div className="wrap">
        <div className="contact-panel">
          <div className="contact-copy">
            <div className="availability"><span aria-hidden="true" />{hero.available}</div>
            <h2>{contact.title}</h2>
            <p>{contact.description}</p>
            <ul className="contact-details" role="list">
              <li className="location"><MapPin size={16} aria-hidden="true" />{profile.location}</li>
              <li className="location"><Globe size={16} aria-hidden="true" />{contact.remote}</li>
            </ul>
            <SocialActions locale={locale} contact />
            {profile.email && <p className="contact-address">{profile.email}</p>}
          </div>
          {resumes.length > 0 && (
            <section className="resume-card" aria-labelledby="resume-title">
              <div className="resume-heading">
                <span className="panel-symbol"><FileText size={21} aria-hidden="true" /></span>
                <div>
                  <h3 id="resume-title">{resume.title}</h3>
                  <p>{resume.description}</p>
                </div>
              </div>
              <ul className="resume-versions" aria-label={resume.availableLanguages} role="list">
                {resumes.map((document) => {
                  const language = resume.languages[document.locale];
                  return (
                    <li key={document.locale} className="resume-version">
                      <span className="skill-badge">{language}</span>
                      <div className="resume-actions">
                        <a className="button secondary" href={document.href} hrefLang={document.locale} type={document.type} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} aria-hidden="true" />
                          <span>{resume.view}<span className="sr-only"> ({language}, {resume.newTab})</span></span>
                        </a>
                        <ResumeDownloadLink className="button secondary" document={document} label={resume.download} language={language} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
