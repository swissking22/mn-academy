"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  context?:
    | "general"
    | "graphic-design"
    | "electrical"
    | "quote"
    | "portfolio"
    | { custom: string };
  label?: string;
  variant?: "whatsapp" | "outline" | "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
};

export function WhatsAppButton({
  context = "general",
  label = "Chat on WhatsApp",
  variant = "whatsapp",
  size = "md",
  className,
  showIcon = true,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={getWhatsAppUrl(context)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={cn(className)}
      aria-label={label}
    >
      {showIcon ? <MessageCircle className="size-4" aria-hidden /> : null}
      {label}
    </Button>
  );
}
