import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { company } from "@/data/company";

export function Leadership() {
  const { ceo } = company;

  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <Container size="wide">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
            <div className="relative size-28 shrink-0 overflow-hidden border border-border bg-charcoal sm:size-36">
              {ceo.portrait ? (
                <Image
                  src={ceo.portrait}
                  alt={ceo.name}
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center text-2xl font-semibold tracking-[-0.04em] text-white"
                  aria-hidden
                >
                  {ceo.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
            </div>

            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                Leadership
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-charcoal sm:text-3xl">
                {ceo.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-creative sm:text-base">
                {ceo.title}, {company.name}
              </p>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {ceo.summary}
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
