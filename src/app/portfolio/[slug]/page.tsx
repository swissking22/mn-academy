import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProjectGallery } from "@/components/portfolio/ProjectGallery";
import { ProjectInfo } from "@/components/portfolio/ProjectInfo";
import { ElectricalProcess } from "@/components/portfolio/ElectricalProcess";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import {
  getProjectBySlug,
  portfolioProjects,
} from "@/data/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const whatsappContext =
    project.category === "graphic-design" ? "graphic-design" : "electrical";

  return (
    <article className="pb-20 pt-8 sm:pb-24 sm:pt-12">
      <Container size="wide">
        <Link
          href={`/portfolio?category=${project.category}`}
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-charcoal"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to portfolio
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="space-y-10">
            <ProjectGallery project={project} />
            {project.category === "electrical" ? (
              <ElectricalProcess project={project} />
            ) : null}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProjectInfo project={project} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <WhatsAppButton
                context={whatsappContext}
                size="lg"
                className="w-full"
                label="Discuss a Similar Project"
              />
              <Button href="/contact" variant="outline" size="lg" className="w-full">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
