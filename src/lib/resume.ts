import { profile, type ResumeDocument } from "@/data/profile";
import { locales, type Locale } from "@/i18n/locales";
import { publicDocument } from "@/lib/public-documents";

export function availableResumes(locale: Locale): ResumeDocument[] {
  const preferredOrder = [locale, ...locales.filter((other) => other !== locale)];
  return preferredOrder.flatMap((language) => {
    const file = profile.cv[language];
    const href = publicDocument(file.href, "cv");
    return href ? [{ ...file, href, locale: language }] : [];
  });
}
