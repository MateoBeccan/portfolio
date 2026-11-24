import { MapPin } from "lucide-react";
import SocialActions from "@/components/ui/SocialActions";
import { profile } from "@/data/profile";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

export default function Contact({ locale }: { locale: Locale }) {
  const { contact, hero } = dictionaries[locale];
  return (
    <section className="section bordered" id="contact" data-nav tabIndex={-1}>
      <div className="wrap">
        <div className="contact-panel">
          <div className="availability"><span aria-hidden="true" />{hero.available}</div>
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
          <SocialActions locale={locale} contact />
          <p className="location"><MapPin size={16} aria-hidden="true" />{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
