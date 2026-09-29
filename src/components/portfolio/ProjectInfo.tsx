import type { PortfolioProject } from "@/data/portfolio";
import { ClientReview } from "@/components/portfolio/ClientReview";

type ProjectInfoProps = {
  project: PortfolioProject;
};

export function ProjectInfo({ project }: ProjectInfoProps) {
  const meta = [
    { label: "Category", value: project.category === "graphic-design" ? "Graphic Design" : "Electrical" },
    { label: "Type", value: project.subcategory },
    project.client ? { label: "Client", value: project.client } : null,
    project.location ? { label: "Location", value: project.location } : null,
    project.year ? { label: "Year", value: project.year } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          Project
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.04em] text-charcoal sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {project.description}
        </p>
      </div>

      <dl className="grid gap-4 border-y border-border py-6 sm:grid-cols-2">
        {meta.map((item) => (
          <div key={item.label}>
            <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">{item.label}</dt>
            <dd className="mt-1 text-sm font-medium text-charcoal">{item.value}</dd>
          </div>
        ))}
      </dl>

      {project.video ? (
        <div className="overflow-hidden border border-border">
          <video
            controls
            className="aspect-video w-full bg-charcoal"
            src={project.video}
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}

      {project.review ? <ClientReview review={project.review} /> : null}
    </div>
  );
}
