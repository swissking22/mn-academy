import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "dark" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-creative text-white hover:bg-[#1d4ed8] active:bg-[#1e40af] shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]",
  secondary:
    "bg-charcoal text-white hover:bg-charcoal-elevated active:bg-black",
  ghost:
    "bg-transparent text-foreground hover:bg-black/[0.04] active:bg-black/[0.06]",
  outline:
    "bg-transparent border border-border-strong text-foreground hover:border-charcoal hover:bg-white",
  dark:
    "bg-white text-charcoal hover:bg-background active:bg-border",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe57] active:bg-[#189e49]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:h-12 sm:px-6",
  lg: "h-12 px-6 text-sm sm:h-14 sm:px-8 sm:text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-[-0.01em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-creative focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel, "aria-label": ariaLabel } = props;
    return (
      <Link href={href} className={classes} target={target} rel={rel} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
