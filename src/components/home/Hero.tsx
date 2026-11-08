"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<"creative" | "technical">("creative");

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setPhase((current) =>
        current === "creative" ? "technical" : "creative",
      );
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-white">
      <Image
        src="/images/hero/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-charcoal/78" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,21,0.92)_0%,rgba(17,19,21,0.72)_48%,rgba(17,19,21,0.55)_100%)]" />
      <div className="absolute inset-0 grid-motif-dark opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.16),transparent_42%),radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.1),transparent_38%)]" />

      <Container
        size="wide"
        className="relative grid min-h-[calc(100svh-3.5rem)] items-center gap-12 py-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20"
      >
        <div>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/55"
          >
            {company.positioning}
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
          >
            <span className="block text-white">
              {company.name.toUpperCase()}
            </span>
            <span className="mt-3 block text-[0.58em] font-medium tracking-[-0.04em] text-white/90">
              Creative &amp; Technical Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Professional Graphic Design and Electrical Services for brands,
            spaces and institutions.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/graphic-design" variant="dark" size="lg">
              Graphic Design
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              href="/electrical"
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:border-white hover:bg-white/10"
            >
              Electrical Services
              <ArrowUpRight className="size-4" aria-hidden />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-4/5 w-full max-w-md lg:max-w-none"
          aria-hidden
        >
          <div className="absolute inset-0 overflow-hidden border border-white/15 bg-charcoal-elevated/40 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0">
              <Image
                src="/images/divisions/graphic-design.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 90vw, 42vw"
                className={`object-cover transition-opacity duration-700 ${
                  phase === "creative" ? "opacity-100" : "opacity-0"
                }`}
              />
              <Image
                src="/images/divisions/electrical.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 90vw, 42vw"
                className={`object-cover transition-opacity duration-700 ${
                  phase === "technical" ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/25 to-charcoal/20" />
            </div>

            <div className="absolute left-5 top-5 right-5 flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">
                  MN Academy
                </p>
                <p className="mt-1 text-lg font-semibold tracking-[-0.04em]">
                  Two divisions
                </p>
              </div>
              <div className="border border-white/20 bg-charcoal/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/75 backdrop-blur-sm">
                {phase === "creative" ? "Creative" : "Technical"}
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <div className="h-px w-full bg-white/15" />
              <div className="mt-4 flex items-center justify-between text-xs text-white/65">
                <span>Graphic Design</span>
                <span>+</span>
                <span>Electrical Services</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
