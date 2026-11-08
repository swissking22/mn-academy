import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { getFeaturedProjects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const aspectClasses = {
  portrait: "aspect-3/4",
  landscape: "aspect-4/3",
  square: "aspect-square",
  wide: "aspect-16/10",
};

export function FeaturedWork() {
  const projects = getFeaturedProjects().slice(0, 6);
  const graphic = projects.filter((p) => p.category === "graphic-design");
  const electrical = projects.filter((p) => p.category === "electrical");

  return (
    <section className="py-16 sm:py-20">
      <Container size="wide">
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                Selected Work
              </p>
              <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] text-charcoal sm:text-4xl lg:text-5xl">
                Featured projects
              </h2>
              <p className="mt-3 max-w-xl text-pretty text-base text-muted sm:text-lg">
                Actual creative and electrical projects from the MN Academy portfolio.
              </p>
            </div>
            <Button
              href="/portfolio"
              variant="outline"
              className="shrink-0 self-start sm:self-auto"
            >
              View all work
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-14">
          <FeaturedGroup
            label="Graphic Design"
            href="/portfolio?category=graphic-design"
            projects={graphic}
          />
          <FeaturedGroup
            label="Electrical"
            href="/portfolio?category=electrical"
            projects={electrical}
          />
        </div>
      </Container>
    </section>
  );
}

function FeaturedGroup({
  label,
  href,
  projects,
}: {
  label: string;
  href: string;
  projects: ReturnType<typeof getFeaturedProjects>;
}) {
  if (projects.length === 0) return null;

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
          {label}
        </h3>
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-charcoal"
        >
          See more
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={0.05 * index}>
            <Link
              href={`/portfolio/${project.slug}`}
              className="group block overflow-hidden border border-border bg-surface transition-colors hover:border-charcoal"
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
                  <div className="h-full">
                    <ImageFallback
                      title={project.title}
                      category={project.category}
                    />
                  </div>
                )}
              </div>

              <div className="p-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                  {project.subcategory}
                  {project.year ? ` · ${project.year}` : ""}
                </p>
                <h4 className="mt-2 text-lg font-medium tracking-[-0.02em] text-charcoal">
                  {project.title}
                </h4>
                {project.client ? (
                  <p className="mt-1 text-sm text-muted">{project.client}</p>
                ) : null}
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
