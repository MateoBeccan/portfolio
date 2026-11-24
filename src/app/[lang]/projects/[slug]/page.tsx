import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { dictionaries } from "@/i18n/dictionary";
import { isLocale } from "@/i18n/locales";
import { profile } from "@/data/profile";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { ProjectLinks, ProjectMeta, ProjectTags } from "@/components/ui/ProjectCard";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import ProjectFlow from "@/components/ui/ProjectFlow";

type Props = PageProps<"/[lang]/projects/[slug]">;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const project = getProjectBySlug(slug);
  if (!project) return { title: dictionaries[lang].errors.notFound };

  const title = typeof project.title === "string" ? project.title : project.title[lang];
  const screenshot = project.coverImage ?? project.screenshots?.[0];
  const shareImage = screenshot && { url: screenshot.src, alt: screenshot.alt[lang], ...screenshot.size };
  return pageMetadata(lang, `${title} | ${profile.name}`, project.summary[lang], `/projects/${slug}`, shareImage);
}

function DetailList({ items }: { items: string[] }) {
  return <ul className="detail-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default async function ProjectPage({ params }: Props) {
  const { lang, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!isLocale(lang) || !project) notFound();

  const { caseStudy: copy, ui } = dictionaries[lang];
  const title = typeof project.title === "string" ? project.title : project.title[lang];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const nextTitle = typeof next.title === "string" ? next.title : next.title[lang];
  const cover = project.coverImage ?? project.screenshots?.[0];
  const url = new URL(`/${lang}/projects/${slug}`, siteUrl).href;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    url,
    name: title,
    description: project.summary[lang],
    inLanguage: lang,
    genre: copy.categories[project.category],
    image: cover && new URL(cover.src, siteUrl).href,
    keywords: project.technologies.map((technology) => typeof technology === "string" ? technology : technology[lang]),
  };
  const hasDevelopmentApproach = Boolean(project.developmentApproach);
  const context = hasDevelopmentApproach ? "case-context case-context-editorial" : "case-context";
  const prose = [
    { title: copy.problem, body: project.problem },
    { title: copy.solution, body: project.solution },
    { title: copy.role, body: hasDevelopmentApproach ? undefined : project.role },
  ];
  const details = [
    { title: copy.dataModel, items: project.dataModel },
    { title: copy.rules, items: hasDevelopmentApproach ? undefined : project.businessRules },
    { title: copy.decisions, items: project.technicalDecisions },
    { title: copy.security, items: project.security },
    { title: copy.testing, items: project.testing },
    { title: copy.lessons, items: hasDevelopmentApproach ? undefined : project.lessonsLearned },
  ];

  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <header className="case-hero">
        <div className={cover ? "wrap case-hero-grid" : "wrap"}>
          <Link href={`/${lang}#projects`} prefetch={false} className="text-link"><ArrowLeft size={17} aria-hidden="true" />{ui.backProjects}</Link>
          <div className="case-heading">
            <ProjectMeta project={project} locale={lang} />
            <h1>{title}</h1>
            {project.subtitle && <p className="case-subtitle">{project.subtitle[lang]}</p>}
            {project.event && <p className="case-event">{project.event[lang]}</p>}
            <p className="case-summary">{project.description[lang]}</p>
            {!hasDevelopmentApproach && <ProjectTags technologies={project.technologies} locale={lang} />}
            {hasDevelopmentApproach && <a className="button secondary" href="#features">{ui.exploreFeatures}<ArrowUpRight size={16} aria-hidden="true" /></a>}
            {(project.repositoryUrl || project.demoUrl) && <div className="project-actions"><ProjectLinks project={project} /></div>}
          </div>
          {cover && <figure className="case-cover">
            <Image src={cover.src} alt={cover.alt[lang]} width={cover.size?.width ?? 1600} height={cover.size?.height ?? 900}
              sizes="(max-width: 820px) 92vw, (max-width: 1200px) 45vw, 520px" fetchPriority="high" loading="eager" />
            {cover.title && <figcaption>{cover.title[lang]}</figcaption>}
          </figure>}
        </div>
      </header>
      <div className="wrap case-content">
        <div className={context}>
          {prose.map(({ title, body }) => body && <section key={title}><h2>{title}</h2><p>{body[lang]}</p></section>)}
        </div>
        {project.architecture && <section id="architecture" className="case-section architecture-section">
          <h2>{copy.architecture}</h2><p>{project.architecture.description[lang]}</p>
          <ProjectFlow steps={project.architecture.steps} locale={lang} />
        </section>}
        {project.flow && !hasDevelopmentApproach && <section className="case-section"><h2>{copy.flow}</h2><ProjectFlow steps={project.flow} locale={lang} /></section>}
        {project.features?.length ? <section className="case-section" id="features">
          <h2>{copy.features}</h2>
          <div className="case-details">{project.features.map(({ stage, items }) => <div key={stage}>{!hasDevelopmentApproach && <h3>{copy.stages[stage]}</h3>}<DetailList items={items[lang]} /></div>)}</div>
        </section> : null}
        {project.screenshots?.length ? <section className="case-section"><h2>{ui.gallery}</h2><ProjectCarousel images={project.screenshots} locale={lang} copy={ui} /></section> : null}
        {project.developmentApproach && <section id="architecture" className="case-section architecture-section">
          <h2>{copy.approach}</h2><p>{project.developmentApproach[lang]}</p>
          {project.flow && <ProjectFlow steps={project.flow} locale={lang} />}
        </section>}
        {hasDevelopmentApproach && project.businessRules && <section className="case-section"><h2>{copy.rules}</h2><DetailList items={project.businessRules[lang]} /></section>}
        {hasDevelopmentApproach && project.role && <section className="case-section"><h2>{copy.role}</h2><p>{project.role[lang]}</p></section>}
        {hasDevelopmentApproach && <section className="case-section case-stack"><h2>{copy.technologies}</h2><ProjectTags technologies={project.technologies} locale={lang} /></section>}
        {hasDevelopmentApproach && project.lessonsLearned && <section className="case-section"><h2>{copy.lessons}</h2><DetailList items={project.lessonsLearned[lang]} /></section>}
        {details.some(({ items }) => items?.[lang].length) && <div className="case-details case-detail-sections">
          {details.map(({ title, items }) => items?.[lang].length ? <section key={title}><h2>{title}</h2><DetailList items={items[lang]} /></section> : null)}
        </div>}
        <div className="case-pagination">
          <Link href={`/${lang}#projects`} prefetch={false} className="text-link"><ArrowLeft size={17} aria-hidden="true" />{ui.backProjects}</Link>
          <Link href={`/${lang}/projects/${next.slug}`} prefetch={false} className="next-project"><span className="eyebrow">{ui.next}</span><strong>{nextTitle}<ArrowUpRight size={17} aria-hidden="true" /></strong></Link>
        </div>
      </div>
    </main>
  );
}
