"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import { type KeyboardEvent, type TouchEvent, useCallback, useEffect, useState } from "react";

import type { ProjectImage } from "@/types/project";

type ProjectCarouselProps = {
  title: string;
  images: ProjectImage[];
  className?: string;
  priority?: boolean;
};

export default function ProjectCarousel({
  title,
  images,
  className = "",
  priority = false,
}: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const hasImages = images.length > 0;
  const activeImage = images[activeIndex];

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }, [images.length]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!hasImages) {
      return;
    }

    if (event.key === "ArrowLeft" && images.length > 1) {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === "ArrowRight" && images.length > 1) {
      event.preventDefault();
      goToNext();
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsLightboxOpen(true);
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX === null || images.length < 2) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const delta = touchStartX - touchEndX;

    if (Math.abs(delta) > 42) {
      if (delta > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setTouchStartX(null);
  }

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    function handleDocumentKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowLeft" && images.length > 1) {
        goToPrevious();
      }

      if (event.key === "ArrowRight" && images.length > 1) {
        goToNext();
      }
    }

    document.addEventListener("keydown", handleDocumentKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
      document.body.style.overflow = "";
    };
  }, [goToNext, goToPrevious, images.length, isLightboxOpen]);

  return (
    <div
      className={`overflow-hidden rounded-lg border border-white/10 bg-[#0b0f16] ${className}`}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative aspect-video w-full">
        {hasImages ? (
          <button
            type="button"
            aria-label={`Ampliar screenshot: ${activeImage.alt}`}
            onClick={() => setIsLightboxOpen(true)}
            className="group relative h-full w-full bg-[#080c13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-400"
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority={priority && activeIndex === 0}
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 48vw, 100vw"
              className="object-contain p-2 transition duration-300 group-hover:scale-[1.01]"
            />
          </button>
        ) : (
          <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_34%),linear-gradient(135deg,#0b0f16,#101827)] p-5">
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <span className="text-xs text-slate-500">screenshot pendiente</span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <ImageIcon className="mb-4 text-blue-300" size={34} aria-hidden="true" />
              <p className="text-lg font-semibold text-white">{title}</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                Espacio preparado para capturas reales del proyecto.
              </p>
            </div>
          </div>
        )}

        {images.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Imagen anterior"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-black/55 text-white backdrop-blur transition hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Imagen siguiente"
              onClick={goToNext}
              className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-black/55 text-white backdrop-blur transition hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </>
        ) : null}
      </div>

      <div className="flex items-center justify-center gap-2 px-4 py-3">
        {(hasImages ? images : [{ src: "placeholder", alt: title }]).map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            aria-label={`Ir a imagen ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            disabled={!hasImages}
            className="h-1.5 w-6 rounded-full bg-white/15 transition aria-current:bg-blue-300 hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 disabled:cursor-default"
          />
        ))}
      </div>

      {isLightboxOpen && activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Screenshot ampliado de ${title}`}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-4 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative h-[82vh] w-full max-w-6xl rounded-lg border border-white/10 bg-[#07090d] p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Cerrar imagen ampliada"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-black/60 text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain p-4"
            />

            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  aria-label="Screenshot anterior"
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-black/60 text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Screenshot siguiente"
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-black/60 text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
