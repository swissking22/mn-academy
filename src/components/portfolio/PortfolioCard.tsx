"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { cn } from "@/lib/utils";

const aspectClasses = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

type PortfolioCardProps = {
  project: PortfolioProject;
  className?: string;
};

export function PortfolioCard({ project, className }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn(
        "group block overflow-hidden border border-border bg-surface transition-colors hover:border-charcoal",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          aspectClasses[project.aspect ?? "landscape"],
        )}
      >
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full transition-transform duration-500 group-hover:scale-[1.02]">
            <ImageFallback title={project.title} category={project.category} />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/8" />
      </div>

      <div className="flex items-start justify-between gap-3 p-5">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            {project.category === "graphic-design" ? "Graphic Design" : "Electrical"}
            {" · "}
            {project.subcategory}
          </p>
          <h3 className="mt-2 text-lg font-medium tracking-[-0.02em] text-charcoal">
            {project.title}
          </h3>
          {project.client ? (
            <p className="mt-1 text-sm text-muted">{project.client}</p>
          ) : null}
        </div>
        <ArrowUpRight
          className="mt-1 size-4 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-charcoal"
          aria-hidden
        />
      </div>
    </Link>
  );
}
