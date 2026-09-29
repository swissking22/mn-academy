import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

export function Clients() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <Container size="wide">
        <FadeIn>
          <SectionHeading
            eyebrow="Selected Clients & Projects"
            title="Trusted across creative and technical work"
            description="A selection of clients and project contexts MN Academy has worked with."
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <ul className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {company.clients.map((client) => (
              <li
                key={client}
                className="flex min-h-20 items-center bg-surface px-5 py-4 text-sm font-medium tracking-[-0.01em] text-charcoal sm:min-h-24 sm:px-6"
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
