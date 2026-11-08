import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/company";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ContactDetails() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-charcoal">
          Contact details
        </h2>
        <p className="mt-2 text-sm text-muted">
          Preferred contact: {company.preferredContact}
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <Phone className="mt-0.5 size-5 shrink-0 text-creative" aria-hidden />
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Phone
            </p>
            <ul className="mt-2 space-y-1">
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-base text-charcoal transition-colors hover:text-creative"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <MessageCircle
            className="mt-0.5 size-5 shrink-0 text-[#25D366]"
            aria-hidden
          />
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              WhatsApp
            </p>
            <p className="mt-2 text-sm text-muted">Both numbers available.</p>
            <ul className="mt-3 space-y-2">
              {company.phones.map((phone) => (
                <li key={`wa-${phone}`}>
                  <a
                    href={getWhatsAppUrl("general", phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-charcoal transition-colors hover:text-[#25D366]"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <Mail className="mt-0.5 size-5 shrink-0 text-creative" aria-hidden />
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Email
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-2 block break-all text-base text-charcoal transition-colors hover:text-creative"
            >
              {company.email}
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <MapPin
            className="mt-0.5 size-5 shrink-0 text-electrical"
            aria-hidden
          />
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Location
            </p>
            <p className="mt-2 text-base text-charcoal">{company.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
