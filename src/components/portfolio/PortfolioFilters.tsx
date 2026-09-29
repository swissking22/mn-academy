"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  electricalSubcategories,
  filterProjects,
  graphicSubcategories,
  type PortfolioCategory,
} from "@/data/portfolio";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { cn } from "@/lib/utils";

const mainFilters: { label: string; value: "all" | PortfolioCategory }[] = [
  { label: "All Work", value: "all" },
  { label: "Graphic Design", value: "graphic-design" },
  { label: "Electrical", value: "electrical" },
];

function normalizeCategory(value: string | null): "all" | PortfolioCategory {
  if (value === "graphic-design" || value === "electrical") return value;
  return "all";
}

export function PortfolioFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();

  const category = normalizeCategory(searchParams.get("category"));
  const subcategory = searchParams.get("subcategory") ?? "All";

  const subfilters =
    category === "graphic-design"
      ? graphicSubcategories
      : category === "electrical"
        ? electricalSubcategories
        : null;

  const projects = useMemo(
    () => filterProjects(category, subcategory),
    [category, subcategory],
  );

  function updateParams(next: { category?: string; subcategory?: string }) {
    const params = new URLSearchParams(searchParams.toString());

    if (next.category !== undefined) {
      if (next.category === "all") params.delete("category");
      else params.set("category", next.category);
      params.delete("subcategory");
    }

    if (next.subcategory !== undefined) {
      if (next.subcategory === "All") params.delete("subcategory");
      else params.set("subcategory", next.subcategory);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Portfolio category"
      >
        {mainFilters.map((filter) => {
          const active = category === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => updateParams({ category: filter.value })}
              className={cn(
                "inline-flex min-h-11 items-center rounded-md px-4 text-sm transition-colors",
                active
                  ? "bg-charcoal text-white"
                  : "bg-white text-muted hover:text-charcoal border border-border",
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {subfilters ? (
        <div
          className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Portfolio subcategory"
        >
          {subfilters.map((item) => {
            const active = subcategory === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => updateParams({ subcategory: item })}
                className={cn(
                  "inline-flex min-h-10 shrink-0 items-center rounded-full px-4 text-sm transition-colors",
                  active
                    ? category === "graphic-design"
                      ? "bg-creative-soft text-creative"
                      : "bg-electrical-soft text-amber-700"
                    : "text-muted hover:text-charcoal",
                )}
              >
                {item}
              </button>
            );
          })}
        </div>
      ) : null}

      <p className="mt-8 text-sm text-muted">
        {projects.length} project{projects.length === 1 ? "" : "s"}
      </p>

      <motion.div layout className="mt-6 columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 break-inside-avoid"
            >
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length === 0 ? (
        <div className="mt-10 border border-dashed border-border px-6 py-16 text-center">
          <p className="text-base text-muted">
            No projects in this filter yet. Check back as new work is added.
          </p>
        </div>
      ) : null}
    </div>
  );
}
