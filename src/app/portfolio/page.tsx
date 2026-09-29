import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PortfolioFilters } from "@/components/portfolio/PortfolioFilters";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Creative projects and technical solutions delivered by MN Academy — graphic design and electrical work.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container size="wide">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            Portfolio
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.05em] text-charcoal sm:text-5xl lg:text-6xl">
            Our Work
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Creative projects and technical solutions delivered by MN Academy.
          </p>
        </div>

        <div className="mt-10">
          <Suspense
            fallback={
              <div className="h-40 animate-pulse rounded-md bg-border/60" aria-hidden />
            }
          >
            <PortfolioFilters />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
