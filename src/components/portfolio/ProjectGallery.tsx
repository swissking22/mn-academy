"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PortfolioProject } from "@/data/portfolio";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  project: PortfolioProject;
};

function collectImages(project: PortfolioProject) {
  const images: { src: string; label?: string }[] = [];
  const seen = new Set<string>();

  function add(src: string, label?: string) {
    if (!src || seen.has(src)) return;
    seen.add(src);
    images.push({ src, label });
  }

  add(project.coverImage, "Cover");
  project.images?.forEach((src) => add(src));
  project.beforeImages?.forEach((src) => add(src, "Before"));
  project.duringImages?.forEach((src) => add(src, "During"));
  project.afterImages?.forEach((src) => add(src, "After"));

  return images;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const images = collectImages(project);
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  if (images.length === 0) {
    return (
      <div className="aspect-4/3 overflow-hidden border border-border sm:aspect-16/10">
        <ImageFallback title={project.title} category={project.category} />
      </div>
    );
  }

  const current = images[index];

  function prev() {
    setIndex((value) => (value === 0 ? images.length - 1 : value - 1));
  }

  function next() {
    setIndex((value) => (value === images.length - 1 ? 0 : value + 1));
  }

  return (
    <div>
      <div className="relative aspect-4/3 overflow-hidden border border-border bg-charcoal sm:aspect-16/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={`${project.title}${current.label ? ` — ${current.label}` : ""}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {current.label ? (
          <span className="absolute left-4 top-4 rounded-md bg-charcoal/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            {current.label}
          </span>
        ) : null}

        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal transition hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal transition hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((image, i) => (
            <button
              key={`${image.src}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden border transition",
                i === index
                  ? "border-charcoal"
                  : "border-border opacity-70 hover:opacity-100",
              )}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
