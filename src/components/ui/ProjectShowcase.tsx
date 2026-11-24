"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import type { Locale } from "@/i18n/locales";
import ProjectCard, { projectIcons, type ShowcaseCopy, type ShowcaseProject } from "./ProjectCard";
import ProjectReference from "./ProjectReference";
import useHorizontalSwipe from "./useHorizontalSwipe";

export default function ProjectShowcase({ slides, locale, copy }: { slides: ShowcaseProject[]; locale: Locale; copy: ShowcaseCopy }) {
  const [index, setIndex] = useState(0);
  const selector = useRef<HTMLDivElement>(null);
  const count = slides.length;
  const total = String(count).padStart(2, "0");
  const position = (item: number) => String(item + 1).padStart(2, "0");
  const active = slides[index];

  function move(direction: number) {
    if (count > 1) setIndex((current) => (current + direction + count) % count);
  }

  function selectWithKeyboard(event: KeyboardEvent<HTMLDivElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const direction = event.key === "ArrowLeft" ? -1 : 1;
    if (selector.current?.contains(event.target as Node)) {
      const buttons = Array.from(selector.current.querySelectorAll("button"));
      const focused = buttons.findIndex((button) => button === event.target);
      const next = (focused + direction + count) % count;
      setIndex(next);
      buttons[next]?.focus();
    } else {
      move(direction);
    }
  }

  const swipe = useHorizontalSwipe(move);
  if (!active) return null;

  return (
    <div className="showcase" role="group" aria-labelledby="projects-heading">
      <div className="showcase-stage" id="showcase-stage" {...swipe}>
        {slides.map((project, item) => <ProjectCard key={project.slug} project={project} locale={locale} copy={copy}
          active={item === index} position={position(item)} total={total} />)}
      </div>
      {count > 1 && (
        <div className="showcase-navigation">
          <div className="showcase-selector" role="group" aria-label={copy.select} ref={selector} onKeyDown={selectWithKeyboard}>
            {slides.map((project, item) => {
              const title = typeof project.title === "string" ? project.title : project.title[locale];
              const selectorTitle = project.shortTitle?.[locale] ?? title;
              const Icon = projectIcons[project.category];
              return <button key={project.slug} type="button" data-slug={project.slug} aria-current={item === index}
                aria-controls="showcase-stage" onClick={() => setIndex(item)}>
                <span className="showcase-preview" aria-hidden="true">
                  {project.coverImage
                    ? <Image src={project.coverImage.src} alt="" width={96} height={56} />
                    : <Icon size={22} strokeWidth={1.5} />}
                </span>
                <span className="showcase-selector-title">{selectorTitle}</span>
                {item === index && <span className="showcase-selected" aria-hidden="true"><Check size={13} strokeWidth={3} /></span>}
              </button>;
            })}
          </div>
          <details className="showcase-case-links">
            <summary>{copy.caseLinks}</summary>
            <ul role="list">
              {slides.map((project) => <li key={project.slug}><ProjectReference project={project} locale={locale} /></li>)}
            </ul>
          </details>
          <div className="showcase-controls" onKeyDown={selectWithKeyboard}>
            <span className="showcase-count" role="status">
              {position(index)} / {total}
              <span className="sr-only"> · {typeof active.title === "string" ? active.title : active.title[locale]}</span>
            </span>
            <button type="button" className="showcase-prev icon-button" aria-controls="showcase-stage"
              aria-label={copy.previous} onClick={() => move(-1)}><ArrowLeft size={20} aria-hidden="true" /></button>
            <button type="button" className="showcase-next button primary" aria-controls="showcase-stage"
              aria-label={copy.next} onClick={() => move(1)}><ArrowRight size={20} aria-hidden="true" /></button>
          </div>
        </div>
      )}
    </div>
  );
}
