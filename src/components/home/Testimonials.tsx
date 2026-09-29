import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 sm:py-24">
      <Container size="wide">
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            description="Genuine feedback from clients who worked with MN Academy."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <FadeIn key={item.id} delay={0.06 * index}>
              <figure className="flex h-full flex-col border border-border bg-surface p-6 sm:p-8">
                <div className="flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-4 ${
                        i < item.rating
                          ? "fill-electrical text-electrical"
                          : "text-border-strong"
                      }`}
                      aria-hidden
                    />
                  ))}
                </div>

                <blockquote className="mt-5 flex-1 text-pretty text-base leading-relaxed text-charcoal sm:text-lg">
                  “{item.text}”
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-3">
                  {item.clientPhoto ? (
                    <Image
                      src={item.clientPhoto}
                      alt={item.clientName}
                      width={44}
                      height={44}
                      className="size-11 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex size-11 items-center justify-center rounded-full bg-charcoal text-sm font-medium text-white"
                      aria-hidden
                    >
                      {item.clientName
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-charcoal">{item.clientName}</p>
                    {item.business ? (
                      <p className="text-sm text-muted">{item.business}</p>
                    ) : null}
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
