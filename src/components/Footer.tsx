import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card/50 pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="gold-line" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
          SK<span className="italic text-coral">Fitness</span>
        </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Premium online fitness coaching by {siteConfig.coach}. Where discipline meets design — and ordinary becomes extraordinary.
            </p>
            <div className="mt-8 flex gap-5">
              {[
                { href: siteConfig.social.instagram, Icon: InstagramIcon, label: "Instagram" },
                { href: siteConfig.social.youtube, Icon: YoutubeIcon, label: "YouTube" },
                { href: siteConfig.social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-gold" aria-label={label}>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Navigate</h3>
            <ul className="mt-6 space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Pricing", href: "#pricing" },
                { label: "Free Fit Tools", href: "#tools" },
                { label: "Results", href: "#results" },
                { label: "Book Call", href: "#book" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Contact</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted">
                <Mail className="h-4 w-4 text-gold" />
                <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-gold">{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <Phone className="h-4 w-4 text-gold" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <MapPin className="h-4 w-4 text-gold" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-16" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted">© {year} {siteConfig.name}. Crafted for {siteConfig.coach}.</p>
          <div className="flex gap-8 text-xs text-muted">
            <Link href="#" className="hover:text-gold">Privacy</Link>
            <Link href="#" className="hover:text-gold">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
