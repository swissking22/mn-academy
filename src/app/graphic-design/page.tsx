import type { Metadata } from "next";
import { DivisionHero } from "@/components/divisions/DivisionHero";
import { ServiceGrid } from "@/components/divisions/ServiceGrid";
import { DivisionPortfolio } from "@/components/divisions/DivisionPortfolio";
import { HomeCTA } from "@/components/home/HomeCTA";
import {
  divisions,
  graphicDesignServiceList,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Graphic Design",
  description:
    "Logo design, branding, flyers, social media, covers and visual identity from MN Academy in Yaoundé, Cameroon.",
  alternates: {
    canonical: "/graphic-design",
  },
};

export default function GraphicDesignPage() {
  const division = divisions.graphicDesign;

  return (
    <>
      <DivisionHero
        eyebrow={division.eyebrow}
        title={division.title}
        description="Professional visual design for brands, campaigns, events and institutions — from logos and identity systems to flyers, covers and social media."
        imageSrc="/images/divisions/graphic-design.jpg"
        imageAlt="Graphic design workspace with creative materials"
        accent="creative"
        primaryCta={{ href: "#portfolio", label: "View projects" }}
        secondaryCta={{ href: "/contact", label: "Request a Project" }}
      />

      <ServiceGrid
        title="Graphic Design services"
        description="Clear creative services for brands, campaigns and everyday communication."
        services={graphicDesignServiceList}
        accent="creative"
      />

      <div id="portfolio">
        <DivisionPortfolio
          category="graphic-design"
          title="Graphic Design portfolio"
          description="Selected projects with category, client and short context."
        />
      </div>

      <HomeCTA />
    </>
  );
}
