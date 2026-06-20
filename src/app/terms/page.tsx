import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms for using ${siteConfig.name} coaching services and website.`,
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-gold hover:text-gold-light">
          ← Back to home
        </Link>
        <h1 className="mt-8 font-display text-3xl font-bold sm:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted">Last updated: June 2026</p>

        <div className="prose prose-invert mt-10 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            By using the {siteConfig.name} website or enrolling in coaching with {siteConfig.coach},
            you agree to these terms.
          </p>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Coaching services</h2>
            <p className="mt-3">
              Online fitness and nutrition coaching is educational and not a substitute for medical advice.
              Consult a physician before starting any exercise or nutrition program, especially if you have
              injuries or health conditions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Payments &amp; refunds</h2>
            <p className="mt-3">
              Plan pricing is listed on the website. Premium and Elite plans include a 14-day satisfaction
              guarantee on the first month as described on the site. Package terms and pause policies are
              communicated during onboarding.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Client responsibilities</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Provide accurate health and contact information</li>
              <li>Follow programs at your own risk and report pain or injury promptly</li>
              <li>Respect communication boundaries and scheduled check-in times</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Intellectual property</h2>
            <p className="mt-3">
              Training plans, meal guides, and site content are for your personal use only. Do not redistribute
              or resell program materials without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Limitation of liability</h2>
            <p className="mt-3">
              {siteConfig.coach} and {siteConfig.name} are not liable for injuries or outcomes resulting from
              unsupervised exercise or failure to follow medical guidance. Results vary by individual effort
              and adherence.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              {siteConfig.email} · {siteConfig.phone}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
