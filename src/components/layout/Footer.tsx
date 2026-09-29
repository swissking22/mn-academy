import Link from "next/link";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-charcoal text-white">
      <Container size="wide" className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-xl font-semibold tracking-[-0.04em]">
              {company.name.toUpperCase()}
            </p>
            <p className="mt-2 text-sm text-charcoal-muted">
              {company.positioning}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal-muted">
              <span>Graphic Design</span>
              <span className="text-white/20">/</span>
              <span>Electrical</span>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>{company.location}</li>
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white break-all">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-charcoal-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>Yaoundé, Cameroon</p>
        </div>
      </Container>
    </footer>
  );
}
