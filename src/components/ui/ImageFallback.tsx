import { cn } from "@/lib/utils";
import type { PortfolioCategory } from "@/data/portfolio";

type ImageFallbackProps = {
  title: string;
  category: PortfolioCategory;
  className?: string;
};

export function ImageFallback({ title, category, className }: ImageFallbackProps) {
  const isCreative = category === "graphic-design";

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col justify-between overflow-hidden p-6 sm:p-8",
        isCreative ? "bg-charcoal text-white" : "bg-[#16181b] text-white",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-40",
          isCreative ? "grid-motif-dark" : "",
        )}
      />

      {!isCreative ? (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 80H120V40H180M180 40V140H260M260 140V90H360"
            stroke="#F59E0B"
            strokeWidth="1.2"
            className="circuit-line"
          />
          <path
            d="M40 220H140V160H220M220 160H300V240H360"
            stroke="#F59E0B"
            strokeWidth="1.2"
            className="circuit-line"
          />
          <circle cx="180" cy="40" r="3" fill="#F59E0B" />
          <circle cx="260" cy="140" r="3" fill="#F59E0B" />
          <circle cx="220" cy="160" r="3" fill="#F59E0B" />
        </svg>
      ) : (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="40" y="40" width="120" height="160" stroke="#2563EB" strokeWidth="1.2" />
          <rect x="180" y="80" width="160" height="100" stroke="#2563EB" strokeWidth="1.2" />
          <line x1="40" y1="220" x2="360" y2="220" stroke="#2563EB" strokeWidth="1" />
          <circle cx="300" cy="60" r="18" stroke="#2563EB" strokeWidth="1.2" />
        </svg>
      )}

      <div className="relative z-10">
        <p
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.22em]",
            isCreative ? "text-blue-300/80" : "text-amber-300/80",
          )}
        >
          {isCreative ? "Graphic Design" : "Electrical"}
        </p>
      </div>

      <div className="relative z-10">
        <p className="max-w-[16ch] text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
          {title}
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/45">
          Asset pending
        </p>
      </div>
    </div>
  );
}
