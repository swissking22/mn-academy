import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function HomeCTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container size="wide">
        <FadeIn>
          <div className="relative overflow-hidden border border-border bg-charcoal px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-16">
            <Image
              src="/images/cta-bg.jpg"
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover opacity-30"
              aria-hidden
            />
            <div className="absolute inset-0 bg-charcoal/75" />
            <div className="absolute inset-0 grid-motif-dark opacity-30" />
            <div className="relative max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal-muted">
                Start a project
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Ready to design something clear — or power something reliable?
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-charcoal-muted sm:text-lg">
                Tell us about your graphic design brief or electrical request.
                Preferred contact is WhatsApp.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="dark" size="lg">
                  Request a Quote
                  <ArrowUpRight className="size-4" aria-hidden />
                </Button>
                <WhatsAppButton context="quote" size="lg" variant="whatsapp" />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
