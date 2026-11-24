"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dictionaries } from "@/i18n/dictionary";

export default function NotFound() {
  const locale = usePathname().split("/")[1] === "en" ? "en" : "es";
  const { errors, ui } = dictionaries[locale];
  return (
    <main id="main-content" className="wrap error-page" tabIndex={-1}>
      <span className="eyebrow">404</span>
      <h1>{errors.notFound}</h1>
      <p>{errors.missing}</p>
      <Link href={`/${locale}`} className="button primary">{ui.backHome}</Link>
    </main>
  );
}
