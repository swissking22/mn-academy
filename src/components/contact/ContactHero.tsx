import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-charcoal py-16 text-white sm:py-20">
      <Image
        src="/images/cta-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-charcoal/78" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,21,0.9)_0%,rgba(17,19,21,0.65)_100%)]" />

      <Container size="wide" className="relative">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal-muted">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl">
            Let&apos;s work together.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-charcoal-muted sm:text-lg">
            Have a design project, electrical installation or technical request?
            Let&apos;s discuss it.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
