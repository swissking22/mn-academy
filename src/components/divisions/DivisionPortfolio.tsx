"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  electricalSubcategories,
  filterProjects,
  graphicSubcategories,
  type PortfolioCategory,
} from "@/data/portfolio";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type DivisionPortfolioProps = {
  category: PortfolioCategory;
  title: string;
  description?: string;
};

export function DivisionPortfolio({
  category,
  title,
  description,
}: DivisionPortfolioProps) {
  const subfilters =
    category === "graphic-design" ? graphicSubcategories : electricalSubcategories;
  const [subcategory, setSubcategory] = useState<string>("All");

  const projects = useMemo(
    () => filterProjects(category, subcategory),
    [category, subcategory],
  );

  return (
    <section className="py-16 sm:py-20">
      <Container size="wide">
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Portfolio"
              title={title}
              description={description}
            />
            <Button
              href={`/portfolio?category=${category}`}
              variant="outline"
              className="shrink-0 self-start sm:self-auto"
            >
              View full portfolio
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </FadeIn>

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Project category"
        >
          {subfilters.map((item) => {
            const active = subcategory === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSubcategory(item)}
                className={cn(
                  "inline-flex min-h-10 shrink-0 items-center rounded-md px-4 text-sm transition-colors",
                  active
                    ? category === "graphic-design"
                      ? "bg-creative text-white"
                      : "bg-electrical text-charcoal"
                    : "border border-border bg-white text-muted hover:text-charcoal",
                )}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={0.04 * index}
              className="mb-5 break-inside-avoid"
            >
              <PortfolioCard project={project} />
            </FadeIn>
          ))}
        </div>

        {projects.length === 0 ? (
          <div className="mt-8 border border-dashed border-border px-6 py-14 text-center">
            <p className="text-sm text-muted">
              No projects in this filter yet.{" "}
              <Link href="/contact" className="underline underline-offset-4">
                Request a project
              </Link>
              .
            </p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
