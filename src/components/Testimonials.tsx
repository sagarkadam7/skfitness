import { Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EditorialAccent } from "@/components/ui/EditorialHeadline";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Testimonials"
            title={
              <>
                Trusted by <EditorialAccent>High Performers</EditorialAccent>
              </>
            }
            description="Leaders, entrepreneurs, and professionals who demand excellence — in business and in their bodies."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:mt-20 sm:gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <blockquote className="premium-card premium-card-hover flex h-full flex-col rounded-2xl p-6 sm:p-8 lg:p-10">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="mt-5 flex-1 font-serif text-base italic leading-relaxed text-foreground/90 sm:mt-6 sm:text-lg">
                  &ldquo;{t.text}&rdquo;
                </p>

                <footer className="mt-8 flex items-center gap-4 border-t border-card-border pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 font-display text-sm font-bold text-gold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold">{t.name}</cite>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
