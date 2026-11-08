import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { company } from "@/data/company";

export function Clients() {
  return (
    <section className="border-y border-border bg-surface py-14 sm:py-16">
      <Container size="wide">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            Selected clients
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-[-0.03em] text-charcoal sm:text-3xl">
            Organizations we have worked with
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ul className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {company.clients.map((client) => (
              <li
                key={client}
                className="flex min-h-18 items-center bg-surface px-5 py-4 text-sm font-medium tracking-[-0.01em] text-charcoal sm:min-h-20 sm:px-6"
              >
                {client}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
