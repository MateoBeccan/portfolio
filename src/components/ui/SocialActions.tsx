import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download, Mail } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import { publicDocument } from "@/lib/public-documents";

const icons = { GitHub: FaGithub, LinkedIn: FaLinkedin };

export function CvLink({ locale }: { locale: Locale }) {
  const cv = publicDocument(profile.cv[locale], "cv");
  if (!cv) return null;
  return <a className="button secondary" href={cv} download><Download size={17} aria-hidden="true" />{dictionaries[locale].ui.cv}</a>;
}

export default function SocialActions({ locale, contact = false }: { locale: Locale; contact?: boolean }) {
  const { ui } = dictionaries[locale];
  return (
    <div className={contact ? "action-row" : "social-row"}>
      {contact && profile.email && <a className="button primary" href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" />{ui.email}</a>}
      {socialLinks.map(({ label, href }) => {
        const Icon = icons[label];
        return <a key={label} className={contact ? "button secondary" : undefined} href={href} target="_blank" rel="noopener noreferrer"><Icon size={17} aria-hidden="true" />{label}</a>;
      })}
      {contact && <CvLink locale={locale} />}
    </div>
  );
}
