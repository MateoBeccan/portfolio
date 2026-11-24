import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { locales } from "@/i18n/locales";
import { languagePaths, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...projects.map(({ slug }) => `/projects/${slug}`)].flatMap((path) => {
    const languages = Object.fromEntries(Object.entries(languagePaths(path)).map(([locale, route]) => [locale, new URL(route, siteUrl).href]));
    return locales.map((locale) => ({ url: new URL(`/${locale}${path}`, siteUrl).href, alternates: { languages } }));
  });
}
