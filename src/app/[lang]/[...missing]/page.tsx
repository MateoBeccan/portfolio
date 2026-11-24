import { notFound } from "next/navigation";
import { dictionaries } from "@/i18n/dictionary";
import { isLocale } from "@/i18n/locales";

export async function generateMetadata({ params }: PageProps<"/[lang]/[...missing]">) {
  const { lang } = await params;
  return { title: dictionaries[isLocale(lang) ? lang : "es"].errors.notFound };
}

export default function MissingPage() {
  notFound();
}
