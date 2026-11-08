import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { divisions } from "@/data/services";
import { cn } from "@/lib/utils";

const divisionImages = {
  "graphic-design": {
    src: "/images/divisions/graphic-design.jpg",
    alt: "Graphic design workspace with creative materials",
  },
  electrical: {
    src: "/images/divisions/electrical.png",
    alt: "Professional electrical installation work",
  },
} as const;

export function DivisionSection() {
  const panels = [divisions.graphicDesign, divisions.electrical];

  return (
    <section className="py-16 sm:py-20">
      <Container size="wide">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            Divisions
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] text-charcoal sm:text-4xl">
            Graphic Design + Electrical Services
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {panels.map((panel, index) => {
            const isCreative = panel.id === "graphic-design";
            const image = divisionImages[panel.id];

            return (
              <FadeIn key={panel.id} delay={0.08 * index}>
                <Link
                  href={panel.href}
                  className={cn(
                    "group relative flex min-h-100 flex-col overflow-hidden border border-border bg-charcoal text-white transition-colors duration-300 hover:border-charcoal sm:min-h-112",
                  )}
                >
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/35 to-transparent" />
                  </div>

                  <div className="relative flex flex-1 flex-col justify-end p-7 sm:p-9">
                    <p
                      className={cn(
                        "text-[11px] font-medium uppercase tracking-[0.22em]",
                        isCreative ? "text-blue-300" : "text-amber-300",
                      )}
                    >
                      {panel.eyebrow}
                    </p>
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                        {panel.title}
                      </h3>
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ArrowUpRight className="size-4" aria-hidden />
                      </span>
                    </div>

                    {"tagline" in panel && panel.tagline ? (
                      <p className="mt-3 text-sm font-medium tracking-[-0.01em] text-white/85">
                        {panel.tagline}
                      </p>
                    ) : (
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
                        {panel.description}
                      </p>
                    )}

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white">
                      {panel.cta}
                      <ArrowUpRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
