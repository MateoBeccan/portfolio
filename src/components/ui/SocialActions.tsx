import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

const icons = { GitHub: FaGithub, LinkedIn: FaLinkedin };

export default function SocialActions({ locale, contact = false }: { locale: Locale; contact?: boolean }) {
  const copy = dictionaries[locale];
  return (
    <div className={contact ? "action-row" : "social-row"}>
      {contact && profile.email && <a className="button primary" href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" />{copy.contact.email}</a>}
      {socialLinks.map(({ label, href }) => {
        const Icon = icons[label];
        return <a key={label} className={contact ? "button secondary" : undefined} href={href} target="_blank" rel="noopener noreferrer"><Icon size={17} aria-hidden="true" />{label}</a>;
      })}
    </div>
  );
}
