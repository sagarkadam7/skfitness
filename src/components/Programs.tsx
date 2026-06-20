import { Flame, Dumbbell, Video, Apple, LucideIcon, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EditorialAccent } from "@/components/ui/EditorialHeadline";
import { programs } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  flame: Flame,
  dumbbell: Dumbbell,
  video: Video,
  apple: Apple,
};

export default function Programs() {
  return (
    <section id="programs" className="relative py-16 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Programs"
            title={
              <>
                Bespoke Coaching{" "}
                <span className="block">
                  <EditorialAccent>For Every Ambition</EditorialAccent>
                </span>
              </>
            }
            description="Four pillars of transformation — each fully customized to your body, schedule, and goals."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon] ?? Dumbbell;
            const isFeatured = i === 0;

            return (
              <ScrollReveal key={program.id} delay={i * 0.1}>
                <article
                  className={`group premium-card premium-card-hover relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10 ${
                    isFeatured ? "sm:row-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-all group-hover:bg-gold/10" />

                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold transition-colors group-hover:border-gold/40 group-hover:bg-gold/10">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-display text-xl font-bold leading-tight sm:text-2xl">{program.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{program.description}</p>

                  <ul className="mt-8 space-y-3 border-t border-card-border pt-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted">
                        <span className="h-px w-4 bg-gold/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Learn More <ArrowUpRight className="h-3 w-3" />
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
