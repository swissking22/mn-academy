import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { company } from "@/data/company";

export function About() {
  return (
    <section className="relative isolate overflow-hidden border-y border-border bg-charcoal py-16 text-white sm:py-20">
      <Image
        src="/images/about-workspace.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        aria-hidden
      />
      <div className="absolute inset-0 bg-charcoal/80" />
      <div className="absolute inset-0 grid-motif-dark opacity-25" />

      <Container size="wide" className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeIn>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal-muted">
              About MN Academy
            </p>
            <h2 className="mt-4 max-w-md text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {company.about.heading}
            </h2>
          </FadeIn>

          <div className="space-y-5">
            {company.about.body.map((paragraph, index) => (
              <FadeIn key={paragraph.slice(0, 24)} delay={0.06 * index}>
                <p className="text-pretty text-base leading-relaxed text-charcoal-muted sm:text-lg">
                  {paragraph}
                </p>
              </FadeIn>
            ))}

            <FadeIn delay={0.2}>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-6 text-sm text-white/75">
                {company.about.pillars.map((pillar) => (
                  <li key={pillar} className="inline-flex items-center gap-2">
                    <span className="size-1 rounded-full bg-electrical" aria-hidden />
                    {pillar}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
