import { company } from "@/data/company";
import { phoneToWhatsApp } from "@/lib/utils";

type WhatsAppContext =
  | "general"
  | "graphic-design"
  | "electrical"
  | "quote"
  | "portfolio"
  | { custom: string };

const messages: Record<Exclude<WhatsAppContext, { custom: string }>, string> = {
  general:
    "Hello MN Academy, I’d like to discuss a project with you.",
  "graphic-design":
    "Hello MN Academy, I’m interested in your Graphic Design services. I’d like to discuss a project.",
  electrical:
    "Hello MN Academy, I’m interested in your Electrical services. I’d like to discuss a project.",
  quote:
    "Hello MN Academy, I’d like to request a quote for a project.",
  portfolio:
    "Hello MN Academy, I saw your work and would like to discuss a similar project.",
};

export function getWhatsAppMessage(context: WhatsAppContext = "general") {
  if (typeof context === "object" && "custom" in context) {
    return context.custom;
  }
  return messages[context];
}

export function getWhatsAppUrl(
  context: WhatsAppContext = "general",
  phone = company.phones[0],
) {
  const number = phoneToWhatsApp(phone);
  const text = encodeURIComponent(getWhatsAppMessage(context));
  return `https://wa.me/${number}?text=${text}`;
}
