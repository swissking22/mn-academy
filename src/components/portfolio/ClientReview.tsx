"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type ClientReviewProps = {
  review: {
    clientName: string;
    clientPhoto?: string;
    rating: number;
    text: string;
  };
};

export function ClientReview({ review }: ClientReviewProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border border-border bg-surface">
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-14 w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="text-sm font-medium tracking-[-0.01em] text-charcoal">
          Client Review
        </span>
        <ChevronDown
          className={cn(
            "size-4 text-muted transition-transform duration-300",
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
            <div className="border-t border-border px-5 py-5">
              <div className="flex items-center gap-3">
                {review.clientPhoto ? (
                  <Image
                    src={review.clientPhoto}
                    alt={review.clientName}
                    width={44}
                    height={44}
                    className="size-11 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="flex size-11 items-center justify-center rounded-full bg-charcoal text-sm font-medium text-white"
                    aria-hidden
                  >
                    {review.clientName
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-charcoal">{review.clientName}</p>
                  <div
                    className="mt-1 flex items-center gap-0.5"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-3.5 ${
                          i < review.rating
                            ? "fill-electrical text-electrical"
                            : "text-border-strong"
                        }`}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">
                “{review.text}”
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
