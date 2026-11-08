import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { DivisionSection } from "@/components/home/DivisionSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { Leadership } from "@/components/home/Leadership";
import { Clients } from "@/components/home/Clients";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <DivisionSection />
      <FeaturedWork />
      <Services />
      <About />
      <Experience />
      <Leadership />
      <Clients />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
