import { notFound } from "next/navigation";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Methodology from "@/components/sections/Methodology";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { profile, socialLinks } from "@/data/profile";
import { dictionaries } from "@/i18n/dictionary";
import { isLocale } from "@/i18n/locales";
import { availableResumes } from "@/lib/resume";
import { pageMetadata, siteUrl } from "@/lib/seo";

const homeTitle = `${profile.name} | ${profile.role} · Java & Spring Boot`;

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) return { title: dictionaries.es.errors.notFound };
  return pageMetadata(lang, homeTitle, dictionaries[lang].meta.description);
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const resumes = availableResumes(lang);
  const url = new URL(`/${lang}`, siteUrl).href;
  const personId = `${new URL("/es", siteUrl).href}#mateo`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", "@id": personId, name: profile.name, jobTitle: profile.role, description: dictionaries[lang].meta.description, url: new URL("/es", siteUrl).href, homeLocation: { "@type": "Place", name: profile.location }, sameAs: socialLinks.map(({ href }) => href), knowsAbout: ["Backend Development", "Java", "Spring Boot", "SQL", "GeneXus", "Business Management Software"] },
      { "@type": "WebSite", "@id": `${url}#website`, url, name: homeTitle, inLanguage: lang, author: { "@id": personId } },
    ],
  };

  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Hero locale={lang} cv={resumes[0]} />
      <About locale={lang} />
      <Projects locale={lang} />
      <Skills locale={lang} />
      <Methodology locale={lang} />
      <Education locale={lang} />
      <Contact locale={lang} resumes={resumes} />
    </main>
  );
}
