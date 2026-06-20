import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SplitHeadline } from "@/components/ui/EditorialHeadline";
import { siteConfig } from "@/lib/data";

export default function PremiumCTA() {
  return (
    <section className="py-20 sm:py-24">
      <ScrollReveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl px-4 sm:rounded-3xl sm:px-6 lg:px-8">
          <div className="editorial-arcs absolute inset-0 opacity-60" />
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={siteConfig.images.coach}
              alt=""
              fill
              className="object-cover object-center opacity-25 blur-sm scale-105"
              sizes="100vw"
              aria-hidden
            />
          </div>
          <div className="absolute inset-0 bg-background/88" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />

          <div className="relative px-5 py-12 text-center sm:px-16 sm:py-20">
            <p className="section-label justify-center">Limited Availability</p>
            <SplitHeadline
              as="h2"
              size="section"
              className="mt-5 mx-auto max-w-3xl"
              lead="Your transformation starts with"
              accent="one decision."
            />
            <p className="mx-auto mt-5 max-w-xl text-muted">
              I accept a limited number of clients each month to ensure every person receives
              the attention they deserve. Spots fill quickly.
            </p>
            <Link
              href="#book"
              className="btn-primary mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-sans text-xs font-semibold uppercase tracking-widest sm:mt-10 sm:w-auto sm:px-10"
            >
              Claim Your Spot
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
