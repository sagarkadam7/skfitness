import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `How ${siteConfig.name} collects and uses your information.`,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-gold hover:text-gold-light">
          ← Back to home
        </Link>
        <h1 className="mt-8 font-display text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted">Last updated: June 2026</p>

        <div className="prose prose-invert mt-10 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is operated by {siteConfig.coach}.
            This policy explains how we handle information when you use our website or contact us for coaching.
          </p>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Information we collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Contact details you submit (name, phone, email) via the booking form or newsletter</li>
              <li>Coaching-related information you choose to share (goals, experience, health notes)</li>
              <li>Basic usage data via analytics (pages visited, device type) when enabled</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">How we use it</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to discovery call requests and coaching inquiries</li>
              <li>Send newsletter content if you subscribe (you can unsubscribe anytime)</li>
              <li>Improve the website experience</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Sharing</h2>
            <p className="mt-3">
              We do not sell your data. Form submissions may be processed by email delivery services
              (e.g. Web3Forms) solely to deliver your message to us. WhatsApp messages are handled by Meta
              when you choose to contact us there.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Your rights</h2>
            <p className="mt-3">
              You may request access, correction, or deletion of your personal data by emailing{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              Questions about this policy: {siteConfig.email} · {siteConfig.phone}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
