import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EditorialAccent } from "@/components/ui/EditorialHeadline";
import { transformations } from "@/lib/data";

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
                Transformations That{" "}
                <EditorialAccent>Speak Louder Than Words</EditorialAccent>
              </>
            }
            description="Real clients. Real discipline. Real results — achieved through premium coaching, not shortcuts."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:mt-20 sm:grid-cols-2 sm:gap-8">
          {transformations.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.1}>
              <article className="group premium-card premium-card-hover overflow-hidden rounded-2xl">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.beforeImage}
                      alt={`${item.name} before`}
                      fill
                      className="object-cover grayscale transition-all duration-700 group-hover:grayscale-[30%] group-hover:scale-105"
                      sizes="25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/60 sm:text-[10px] sm:tracking-[0.2em]">Before</p>
                      <p className="font-display text-sm font-bold sm:text-lg">{item.before}</p>
                    </div>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.afterImage}
                      alt={`${item.name} after`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gold sm:text-[10px] sm:tracking-[0.2em]">After</p>
                      <p className="font-display text-sm font-bold text-gold-light sm:text-lg">{item.after}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-8">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-bold sm:text-lg">{item.name}</h3>
                      <p className="mt-1 text-xs text-gold sm:text-sm">{item.goal}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-card-border px-3 py-1 text-[10px] uppercase tracking-widest text-muted">
                      {item.duration}
                    </span>
                  </div>
                  <div className="mt-5 flex gap-3">
                    <Quote className="mt-0.5 h-4 w-4 shrink-0 text-gold/40" />
                    <p className="font-serif text-sm italic leading-relaxed text-muted">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>
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
