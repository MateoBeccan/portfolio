"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { dictionaries } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import ProjectCard, { type ShowcaseProject } from "./ProjectCard";
import useHorizontalSwipe from "./useHorizontalSwipe";

export default function ProjectShowcase({ slides, locale }: { slides: ShowcaseProject[]; locale: Locale }) {
  const [index, setIndex] = useState(0);
  const copy = dictionaries[locale];
  const count = slides.length;
  const total = String(count).padStart(2, "0");
  const position = (item: number) => String(item + 1).padStart(2, "0");
  const active = slides[index];

  function move(direction: number) {
    setIndex((current) => (current + direction + count) % count);
  }

  const swipe = useHorizontalSwipe(move);
  if (!active) return null;

  return (
    <div className="showcase" role="group" aria-labelledby="projects-heading">
      <div className="showcase-stage" id="showcase-stage" {...swipe}>
        {slides.map((project, item) => <ProjectCard key={project.slug} project={project} locale={locale}
          active={item === index} position={position(item)} total={total} />)}
      </div>
      {count > 1 && (
        <div className="showcase-navigation" onKeyDown={(event) => {
          if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }}>
          <div className="showcase-selector" role="group" aria-label={copy.projects.select}>
            {slides.map((project, item) => {
              const title = typeof project.title === "string" ? project.title : project.title[locale];
              const selectorTitle = project.shortTitle?.[locale] ?? title;
              return <button key={project.slug} type="button" data-slug={project.slug} aria-current={item === index}
                aria-controls="showcase-stage" onClick={() => setIndex(item)}>
                <span className="showcase-selector-index">{position(item)}</span>
                <span className="showcase-selector-title">{selectorTitle}</span>
              </button>;
            })}
          </div>
          <div className="showcase-controls">
            <span className="showcase-count" role="status">
              {position(index)} / {total}
              <span className="sr-only"> · {typeof active.title === "string" ? active.title : active.title[locale]}</span>
            </span>
            <button type="button" className="showcase-prev icon-button" aria-controls="showcase-stage"
              aria-label={copy.projects.previous} onClick={() => move(-1)}><ArrowLeft size={20} aria-hidden="true" /></button>
            <button type="button" className="showcase-next button primary" aria-controls="showcase-stage"
              aria-label={copy.ui.next} onClick={() => move(1)}><ArrowRight size={20} aria-hidden="true" /></button>
          </div>
        </div>
      )}
    </div>
  );
}
