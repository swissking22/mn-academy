"use client";

import { useState } from "react";
import { contactServiceOptions } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  description: string;
  preferredContact: "WhatsApp" | "Phone" | "Email";
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  description: "",
  preferredContact: "WhatsApp",
};

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-charcoal focus:ring-2 focus:ring-creative/20";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hello MN Academy, I’d like to request a project / quote.",
      "",
      `Name: ${form.name}`,
      `Phone / WhatsApp: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Service: ${form.service}`,
      `Preferred contact: ${form.preferredContact}`,
      "",
      "Project description:",
      form.description,
    ]
      .filter(Boolean)
      .join("\n");

    const url = getWhatsAppUrl({ custom: message });
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <div className="border border-border bg-surface p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-charcoal">
        Request a Project / Get a Quote
      </h2>
      <p className="mt-2 text-sm text-muted">
        Fill in the form and we&apos;ll continue the conversation on WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-charcoal">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-charcoal">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="service" className="text-sm font-medium text-charcoal">
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className={cn(fieldClass, "appearance-none")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {contactServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="description" className="text-sm font-medium text-charcoal">
            Project description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            className={cn(fieldClass, "resize-y")}
          />
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-charcoal">
            Preferred contact method
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(["WhatsApp", "Phone", "Email"] as const).map((method) => {
              const active = form.preferredContact === method;
              return (
                <label
                  key={method}
                  className={cn(
                    "inline-flex min-h-11 cursor-pointer items-center rounded-md border px-4 text-sm transition-colors",
                    active
                      ? "border-charcoal bg-charcoal text-white"
                      : "border-border bg-white text-muted hover:text-charcoal",
                  )}
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method}
                    checked={active}
                    onChange={() => update("preferredContact", method)}
                    className="sr-only"
                  />
                  {method}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send Request
          </Button>
          <WhatsAppButton
            context="quote"
            size="lg"
            className="w-full sm:w-auto"
            label="WhatsApp Instead"
          />
        </div>

        {submitted ? (
          <p className="text-sm text-muted" role="status">
            Opening WhatsApp with your request. If it didn&apos;t open, use the
            WhatsApp button above.
          </p>
        ) : null}
      </form>
    </div>
  );
}
