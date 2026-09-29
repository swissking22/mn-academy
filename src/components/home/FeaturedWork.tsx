import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const aspectClasses = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

export function FeaturedWork() {
  const projects = getFeaturedProjects().slice(0, 6);

  return (
    <section className="py-20 sm:py-24">
      <Container size="wide">
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected Work"
              description="A look at selected creative projects and technical work delivered by MN Academy."
            />
            <Button href="/portfolio" variant="outline" className="shrink-0 self-start sm:self-auto">
              View All Work
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </FadeIn>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.05 * index} className="mb-5 break-inside-avoid">
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
                    <div className="h-full transition-transform duration-500 group-hover:scale-[1.02]">
                      <ImageFallback
                        title={project.title}
                        category={project.category}
                      />
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
                </div>

                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                      {project.category === "graphic-design"
                        ? "Graphic Design"
                        : "Electrical"}
                      {" · "}
                      {project.subcategory}
                    </p>
                    <h3 className="mt-2 text-lg font-medium tracking-[-0.02em] text-charcoal">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    className="mt-1 size-4 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-charcoal"
                    aria-hidden
                  />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
