import type { Metadata } from "next";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/locales";

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-ten-weld-phlxz3mz7b.vercel.app");

export function languagePaths(path = "") {
  return { "es-AR": `/es${path}`, en: `/en${path}`, "x-default": `/es${path}` };
}

export function pageMetadata(locale: Locale, title: string, description: string, path = "", image?: { url: string; alt: string; width?: number; height?: number }): Metadata {
  const url = `/${locale}${path}`;
  const images = [image ?? { url: "/social-card.png", alt: `${profile.name} · ${profile.role}`, width: 1200, height: 630 }];
  return {
    metadataBase: siteUrl,
    title,
    description,
    authors: [{ name: profile.name }],
    alternates: { canonical: url, languages: languagePaths(path) },
    openGraph: { title, description, url, siteName: profile.name, locale: locale === "es" ? "es_AR" : "en_US", alternateLocale: locale === "es" ? "en_US" : "es_AR", type: path ? "article" : "website", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
