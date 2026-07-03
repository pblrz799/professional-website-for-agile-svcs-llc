import { MapPin, Phone, Mail } from 'lucide-react'
const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <img
            src="/agile-logo-white.svg"
            alt="Agile Services, LLC"
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-xs leading-relaxed text-primary-foreground/70">
            Commercial Construction. Class A Delivery. Since 2020.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                
                  href={link.href}
                  className="text-primary-foreground/85 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-primary-foreground/85">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>14 NE 1st Avenue, Suite 1403, Miami, FL 33132</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-accent" />
              
                href="tel:+18336389259"
                className="transition-colors hover:text-accent"
              >
                (833) 638-9259
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-accent" />
              
                href="mailto:info@agileservices.us"
                className="transition-colors hover:text-accent"
              >
                info@agileservices.us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-primary-foreground/60">
          © 2024 Agile Svcs LLC. Licensed General Contractor. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
