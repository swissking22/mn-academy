import Link from "next/link";
import { company } from "@/data/company";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <div className="mx-auto max-w-xl px-5 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-charcoal">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-charcoal px-6 text-sm font-medium text-white transition hover:bg-charcoal-elevated"
        >
          Back to {company.name}
        </Link>
      </div>
    </section>
  );
}
