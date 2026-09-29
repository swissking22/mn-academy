import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <section className="py-20 sm:py-24">
      <Container size="wide">
        <FadeIn>
          <SectionHeading
            eyebrow="Capabilities"
            title="Two disciplines. One brand."
            description="One professional company. Two specialized capabilities — unified by precision, clarity and reliable delivery."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {panels.map((panel, index) => {
            const isCreative = panel.id === "graphic-design";
            const image = divisionImages[panel.id];

            return (
              <FadeIn key={panel.id} delay={0.08 * index}>
                <Link
                  href={panel.href}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden border border-border transition-colors duration-300",
                    "min-h-136 bg-charcoal text-white hover:border-charcoal",
                  )}
                >
                  <div className="relative h-52 overflow-hidden sm:h-60">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/20 to-transparent" />
                  </div>

                  <div className="relative flex flex-1 flex-col p-7 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className={cn(
                            "text-[11px] font-medium uppercase tracking-[0.22em]",
                            isCreative ? "text-blue-300" : "text-amber-300",
                          )}
                        >
                          {panel.eyebrow}
                        </p>
                        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                          {panel.title}
                        </h3>
                      </div>
                      <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ArrowUpRight className="size-4" aria-hidden />
                      </span>
                    </div>

                    <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
                      {panel.description}
                    </p>

                    {"tagline" in panel && panel.tagline ? (
                      <p className="mt-3 text-sm font-medium tracking-[-0.01em] text-white/85">
                        {panel.tagline}
                      </p>
                    ) : null}

                    <ul className="mt-8 grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
                      {panel.services.slice(0, 6).map((service) => (
                        <li
                          key={service}
                          className="border-l border-white/15 pl-3 text-sm text-white/60"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white">
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
