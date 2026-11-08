import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-surface">
      <Container size="wide" className="py-10 sm:py-12">
        <FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Creativity",
              "Technical knowledge",
              "Practical experience",
              "Client satisfaction",
            ].map((item) => (
              <p
                key={item}
                className="border-l border-border pl-4 text-sm font-medium tracking-[-0.01em] text-charcoal sm:text-base"
              >
                {item}
              </p>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
