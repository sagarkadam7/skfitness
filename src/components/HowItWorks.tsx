import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { howItWorks } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="The Process"
            title="Four Steps to Your Best Self"
            description="A refined onboarding experience — from first conversation to lasting transformation."
          />
        </ScrollReveal>

        <div className="relative mt-12 sm:mt-20">
          <div className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent sm:left-4 lg:left-1/2 lg:top-0 lg:h-full" />

          <div className="space-y-10 sm:space-y-12 lg:space-y-0">
            {howItWorks.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div
                  className={`relative grid items-start gap-4 pl-10 sm:pl-12 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pl-0 ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div
                    className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-gold/40 bg-background sm:top-2 sm:h-8 sm:w-8 lg:hidden ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </div>

                  <div className={`min-w-0 ${i % 2 === 1 ? "lg:order-2 lg:text-right" : ""}`}>
                    <span className="font-display text-5xl font-bold text-gold/20 sm:text-6xl lg:text-7xl">
                      {step.step}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold sm:mt-2 sm:text-2xl lg:text-3xl">{step.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:mt-4 lg:text-base">
                      {step.description}
                    </p>
                  </div>

                  <div className={`hidden lg:block ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="premium-card mx-auto flex h-32 w-32 items-center justify-center rounded-full">
                      <span className="font-display text-4xl font-bold gradient-text-gold">{step.step}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
