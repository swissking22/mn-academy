import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  electricalServiceList,
  graphicDesignServiceList,
} from "@/data/services";

export function Services() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <Container size="wide">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            Services
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] text-charcoal sm:text-4xl">
            What we deliver
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn delay={0.05}>
            <ServiceColumn
              label="Graphic Design"
              href="/graphic-design"
              accent="creative"
              services={graphicDesignServiceList.slice(0, 8)}
              moreCount={graphicDesignServiceList.length - 8}
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <ServiceColumn
              label="Electrical Services"
              href="/electrical"
              accent="electrical"
              services={electricalServiceList.slice(0, 8)}
              moreCount={electricalServiceList.length - 8}
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function ServiceColumn({
  label,
  href,
  accent,
  services,
  moreCount,
}: {
  label: string;
  href: string;
  accent: "creative" | "electrical";
  services: readonly string[];
  moreCount: number;
}) {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <p
          className={
            accent === "creative"
              ? "text-[11px] font-medium uppercase tracking-[0.22em] text-creative"
              : "text-[11px] font-medium uppercase tracking-[0.22em] text-electrical"
          }
        >
          {label}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-charcoal"
        >
          Explore
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
      </div>

      <ul className="grid gap-2 sm:grid-cols-2">
        {services.map((service) => (
          <li
            key={service}
            className={
              accent === "creative"
                ? "border-l-2 border-creative/40 pl-3 text-sm text-muted"
                : "border-l-2 border-electrical/50 pl-3 text-sm text-muted"
            }
          >
            {service}
          </li>
        ))}
      </ul>

      {moreCount > 0 ? (
        <p className="mt-4 text-sm text-muted">
          +{moreCount} more on the{" "}
          <Link href={href} className="underline underline-offset-4">
            {label.toLowerCase()} page
          </Link>
          .
        </p>
      ) : null}
    </div>
  );
}
