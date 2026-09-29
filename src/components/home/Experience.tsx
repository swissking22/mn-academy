import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

export function Experience() {
  const { graphicDesign, electrical } = company.experience;

  return (
    <section className="py-20 sm:py-24">
      <Container size="wide">
        <FadeIn>
          <SectionHeading
            eyebrow="Experience & Credentials"
            title="Grounded in training. Proven in practice."
            description="Credentials and experience that support both creative and technical delivery — without exaggeration."
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <article className="h-full border-l-2 border-creative pl-6 sm:pl-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-creative">
                Graphic Design
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-charcoal">
                {graphicDesign.since}
              </h3>

              <div className="mt-8">
                <p className="text-sm font-medium text-charcoal">Credentials</p>
                <ul className="mt-3 space-y-2">
                  {graphicDesign.credentials.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-sm font-medium text-charcoal">Focus</p>
                <ul className="mt-3 space-y-2">
                  {graphicDesign.additional.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <article className="h-full border-l-2 border-electrical pl-6 sm:pl-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-electrical">
                Electrical
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-charcoal">
                {electrical.practicalSince}
              </h3>
              <p className="mt-2 text-base text-muted">{electrical.professionalSince}</p>

              <div className="mt-8">
                <p className="text-sm font-medium text-charcoal">Education</p>
                <ul className="mt-3 space-y-2">
                  {electrical.education.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-muted">
                {electrical.training}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{electrical.note}</p>
            </article>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
