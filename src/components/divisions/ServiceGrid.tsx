import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type ServiceGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  services: readonly string[];
  accent: "creative" | "electrical";
};

export function ServiceGrid({
  eyebrow = "Services",
  title,
  description,
  services,
  accent,
}: ServiceGridProps) {
  return (
    <section className="border-b border-border bg-surface py-16 sm:py-20">
      <Container size="wide">
        <FadeIn>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </FadeIn>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service} delay={0.03 * index}>
              <li
                className={cn(
                  "flex min-h-16 items-center border border-border bg-white px-5 py-4 text-sm font-medium tracking-[-0.01em] text-charcoal",
                  accent === "creative"
                    ? "border-l-2 border-l-creative"
                    : "border-l-2 border-l-electrical",
                )}
              >
                {service}
              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
