import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote for graphic design or electrical services from MN Academy in Yaoundé, Cameroon. WhatsApp preferred.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-14 sm:py-20">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <FadeIn>
              <ContactDetails />
            </FadeIn>
            <FadeIn delay={0.08}>
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
