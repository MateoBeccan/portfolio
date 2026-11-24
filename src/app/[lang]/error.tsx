"use client";

import { usePathname } from "next/navigation";
import { dictionaries } from "@/i18n/dictionary";

export default function ErrorPage({ retry }: { retry: () => void }) {
  const locale = usePathname().split("/")[1] === "en" ? "en" : "es";
  const { errors } = dictionaries[locale];
  return (
    <main id="main-content" className="wrap error-page" tabIndex={-1}>
      <h1>{errors.error}</h1>
      <button type="button" className="button primary" onClick={retry}>{errors.tryAgain}</button>
    </main>
  );
}
