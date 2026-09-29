"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  electricalServices,
  graphicDesignServices,
  type ServiceCategory,
} from "@/data/services";
import { cn } from "@/lib/utils";

function ServiceAccordion({
  categories,
  accent,
}: {
  categories: ServiceCategory[];
  accent: "creative" | "electrical";
}) {
  const [openId, setOpenId] = useState<string | null>(categories[0]?.id ?? null);
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <div className="divide-y divide-border border-y border-border">
      {categories.map((category) => {
        const open = openId === category.id;
        const panelId = `${baseId}-${category.id}-panel`;
        const buttonId = `${baseId}-${category.id}-button`;

        return (
          <div key={category.id}>
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenId(open ? null : category.id)}
              className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left"
            >
              <div>
                <p className="text-lg font-medium tracking-[-0.02em] text-charcoal">
                  {category.title}
                </p>
                <p className="mt-1 text-sm text-muted">{category.description}</p>
              </div>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-muted transition-transform duration-300",
                  open && "rotate-180",
                )}
                aria-hidden
              />
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="grid gap-2 pb-5 sm:grid-cols-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "border-l-2 pl-3 text-sm text-muted",
                          accent === "creative"
                            ? "border-creative/40"
                            : "border-electrical/50",
                        )}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function Services() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-24">
      <Container size="wide">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="What we deliver"
            description="Grouped by discipline — expand a category to see the full service list."
          />
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn delay={0.05}>
            <div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-creative">
                Graphic Design
              </p>
              <ServiceAccordion categories={graphicDesignServices} accent="creative" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-electrical">
                Electrical
              </p>
              <ServiceAccordion categories={electricalServices} accent="electrical" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
