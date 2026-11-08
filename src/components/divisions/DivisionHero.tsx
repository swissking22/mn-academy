import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

type DivisionHeroProps = {
  eyebrow: string;
  title: string;
  tagline?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  accent: "creative" | "electrical";
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function DivisionHero({
  eyebrow,
  title,
  tagline,
  description,
  imageSrc,
  imageAlt,
  accent,
  primaryCta,
  secondaryCta,
}: DivisionHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-charcoal text-white">
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-charcoal/80" />
      <div
        className={
          accent === "creative"
            ? "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.22),transparent_45%)]"
            : "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.18),transparent_45%)]"
        }
      />

      <Container size="wide" className="relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14">
        <FadeIn>
          <p
            className={
              accent === "creative"
                ? "text-[11px] font-medium uppercase tracking-[0.22em] text-blue-300"
                : "text-[11px] font-medium uppercase tracking-[0.22em] text-amber-300"
            }
          >
            {eyebrow}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {tagline ? (
            <p className="mt-4 text-lg font-medium tracking-[-0.02em] text-white/90 sm:text-xl">
              {tagline}
            </p>
          ) : null}
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href} variant="dark" size="lg">
              {primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="border-white/25 text-white hover:border-white hover:bg-white/10"
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="relative hidden aspect-4/3 overflow-hidden border border-white/15 lg:block">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="40vw"
            className="object-cover"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
