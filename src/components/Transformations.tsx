import { ArrowRight, ArrowRightLeft, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EditorialAccent } from "@/components/ui/EditorialHeadline";
import { clientResults } from "@/lib/data";

export default function Transformations() {
  return (
    <section id="results" className="relative py-16 sm:py-36">
      <div className="absolute inset-0 bg-card/30" />
      <div className="gold-line absolute top-0 left-0 right-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Proven Results"
            title={
              <>
                Outcomes That{" "}
                <EditorialAccent>Speak Louder Than Words</EditorialAccent>
              </>
            }
            description="Real clients. Real discipline. Real numbers — achieved through premium coaching, not shortcuts. Photos shared with permission when available."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:mt-20 sm:grid-cols-2 sm:gap-8">
          {clientResults.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.1}>
              <article className="group premium-card premium-card-hover flex h-full flex-col rounded-2xl p-5 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold sm:text-lg">{item.name}</h3>
                    <p className="mt-1 text-xs text-gold sm:text-sm">{item.goal}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-card-border px-3 py-1 text-[10px] uppercase tracking-widest text-muted">
                    {item.duration}
                  </span>
                </div>

                <div className="mt-6 rounded-xl border border-card-border bg-background/60 p-4 sm:mt-8 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1 text-center">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-muted sm:text-[10px]">
                        Started
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-muted sm:text-xl">
                        {item.before}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-center gap-1">
                      <ArrowRightLeft className="h-4 w-4 text-gold/60" />
                      <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                        {item.highlight}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 text-center">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gold sm:text-[10px]">
                        Result
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-gold-light sm:text-xl">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-1 gap-3 sm:mt-6">
                  <Quote className="mt-0.5 h-4 w-4 shrink-0 text-gold/40" />
                  <p className="font-serif text-sm italic leading-relaxed text-muted">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <p className="mt-4 text-[10px] uppercase tracking-widest text-muted/70">
                  {item.program} plan
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 flex justify-center">
            <a
              href="#book"
              className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light"
            >
              Begin Your Transformation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
