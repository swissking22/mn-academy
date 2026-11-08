import type { Metadata } from "next";
import { DivisionHero } from "@/components/divisions/DivisionHero";
import { ServiceGrid } from "@/components/divisions/ServiceGrid";
import { DivisionPortfolio } from "@/components/divisions/DivisionPortfolio";
import { HomeCTA } from "@/components/home/HomeCTA";
import { company } from "@/data/company";
import {
  divisions,
  electricalServiceList,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Electrical Services",
  description:
    "Electrical installation, wiring, lighting, AC, CCTV and maintenance from MN Academy in Yaoundé, Cameroon. Empowering Lives Through Electricity.",
  alternates: {
    canonical: "/electrical",
  },
};

export default function ElectricalPage() {
  const division = divisions.electrical;

  return (
    <>
      <DivisionHero
        eyebrow={division.eyebrow}
        title={division.title}
        tagline={company.electricalTagline}
        description="Professional electrical installation, wiring, lighting, systems and maintenance for residential and commercial projects."
        imageSrc="/images/divisions/electrical.png"
        imageAlt="Professional electrical installation work"
        accent="electrical"
        primaryCta={{ href: "#portfolio", label: "View projects" }}
        secondaryCta={{ href: "/contact", label: "Get a Quote" }}
      />

      <ServiceGrid
        title="Electrical services"
        description="Technical services delivered with practical experience and professional standards."
        services={electricalServiceList}
        accent="electrical"
      />

      <div id="portfolio">
        <DivisionPortfolio
          category="electrical"
          title="Electrical portfolio"
          description="Projects with type, location, year and process photography where available."
        />
      </div>

      <HomeCTA />
    </>
  );
}
