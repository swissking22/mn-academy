import type { PortfolioProject } from "@/data/portfolio";
import { ImageFallback } from "@/components/ui/ImageFallback";
import Image from "next/image";

type ProcessGalleryProps = {
  project: PortfolioProject;
};

function Stage({
  title,
  images,
  project,
}: {
  title: string;
  images?: string[];
  project: PortfolioProject;
}) {
  if (!images || images.length === 0) return null;

  return (
    <div>
      <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        {title}
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {images.map((src, index) => (
          <div
            key={`${title}-${src}-${index}`}
            className="relative aspect-[4/3] overflow-hidden border border-border"
          >
            <Image
              src={src}
              alt={`${project.title} — ${title} ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ElectricalProcess({ project }: ProcessGalleryProps) {
  const hasProcess =
    (project.beforeImages?.length ?? 0) > 0 ||
    (project.duringImages?.length ?? 0) > 0 ||
    (project.afterImages?.length ?? 0) > 0;

  if (!hasProcess) {
    if (project.coverImage || (project.images && project.images.length > 0)) {
      return null;
    }

    return (
      <div className="aspect-[16/10] overflow-hidden border border-border">
        <ImageFallback title={project.title} category="electrical" />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <Stage title="Before" images={project.beforeImages} project={project} />
      <Stage title="During" images={project.duringImages} project={project} />
      <Stage title="After" images={project.afterImages} project={project} />
    </div>
  );
}
