import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { company } from "@/data/company";

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-surface">
      <Container size="wide" className="py-12 sm:py-14">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <h2 className="max-w-3xl text-balance text-2xl font-semibold tracking-[-0.04em] text-charcoal sm:text-3xl lg:text-4xl">
              Creative thinking. Technical precision. Practical results.
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Based in {company.location}, MN Academy has delivered professional
              creative and electrical work since 2023 — one brand, two specialized
              capabilities.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
