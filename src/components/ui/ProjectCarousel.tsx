"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import type { ProjectImage } from "@/types/project";
import useHorizontalSwipe from "./useHorizontalSwipe";

type GalleryCopy = Pick<Dictionary["ui"], "previousImage" | "nextImage" | "openImage" | "close" | "image" | "gallery">;

export default function ProjectCarousel({ images, locale, copy }: { images: ProjectImage[]; locale: Locale; copy: GalleryCopy }) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const frame = useRef<HTMLAnchorElement>(null);
  const image = images[index];
  function move(direction: number) {
    if (images.length < 2) return;
    setIndex((current) => (current + direction + images.length) % images.length);
  }

  const swipe = useHorizontalSwipe(move);
  if (!image) return null;

  function handleArrow(event: KeyboardEvent<HTMLElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || images.length < 2) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    move(event.key === "ArrowLeft" ? -1 : 1);
  }

  function controls() {
    return images.length > 1 && <div className="gallery-controls">
      <button className="icon-button" type="button" aria-label={copy.previousImage} onClick={() => move(-1)}><ArrowLeft size={19} aria-hidden="true" /></button>
      <span role="status">{copy.image} {index + 1} / {images.length}</span>
      <button className="icon-button" type="button" aria-label={copy.nextImage} onClick={() => move(1)}><ArrowRight size={19} aria-hidden="true" /></button>
    </div>;
  }

  return (
    <>
      <figure className="gallery" onKeyDown={handleArrow}>
        <a className="gallery-frame" href={image.src} ref={frame} {...swipe} aria-label={`${copy.openImage} — ${image.alt[locale]}`} onClick={(event) => {
          if (!dialog.current || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          dialog.current.showModal();
          setExpanded(true);
        }}>
          <Image src={image.src} alt={image.alt[locale]} fill sizes="(max-width: 800px) 92vw, 850px" />
          <span className="icon-button" aria-hidden="true"><Expand size={18} /></span>
        </a>
        <figcaption>
          {image.title && <strong>{image.title[locale]}</strong>}
          {image.caption?.[locale] ?? image.alt[locale]}
        </figcaption>
        {controls()}
      </figure>
      {images.every(({ title }) => title) && images.length > 1 && (
        <ul className="gallery-thumbnails" role="list" onKeyDown={handleArrow}>
          {images.map((item, position) => (
            <li key={item.src}>
              <button type="button" className="gallery-thumbnail" aria-pressed={position === index} onClick={() => setIndex(position)}>
                <span className="gallery-thumbnail-image"><Image src={item.src} alt="" fill sizes="(max-width: 670px) 28vw, 280px" /></span>
                <span>{item.title?.[locale]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <dialog ref={dialog} className="gallery-dialog" aria-label={copy.gallery} onClose={() => {
        setExpanded(false);
        frame.current?.focus({ preventScroll: true });
      }} onKeyDown={handleArrow}>
        <div className="dialog-inner">
          <button className="icon-button dialog-close" type="button" aria-label={copy.close} onClick={() => dialog.current?.close()}><X size={21} aria-hidden="true" /></button>
          {expanded && <>
            <div className="dialog-image" {...swipe}><Image src={image.src} alt={image.alt[locale]} fill sizes="(max-width: 1240px) 94vw, 1220px" /></div>
            {image.title && <p className="dialog-caption">{image.title[locale]}</p>}
            {controls()}
          </>}
        </div>
      </dialog>
    </>
  );
}
