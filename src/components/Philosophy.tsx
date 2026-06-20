import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EditorialAccent } from "@/components/ui/EditorialHeadline";
import { siteConfig } from "@/lib/data";

const pillars = [
  {
    number: "01",
    title: "Precision Programming",
    text: "Every rep, set, and macro is calculated for your body — not copied from a template.",
  },
  {
    number: "02",
    title: "Relentless Accountability",
    text: "Weekly check-ins, progress reviews, and direct access. No falling through the cracks.",
  },
  {
    number: "03",
    title: "Sustainable Excellence",
    text: "Build habits that last decades — not crash diets that fail in weeks.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative overflow-x-clip py-16 sm:py-36">
      <div className="editorial-arcs-left absolute inset-0 overflow-hidden" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="The SK Standard"
            title={
              <>
                Coaching at the <EditorialAccent>Highest Level</EditorialAccent>
              </>
            }
            description={`${siteConfig.coach} doesn't sell programs — he builds transformations through science, discipline, and white-glove personal attention.`}
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:mt-20 sm:gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.number} delay={i * 0.12}>
              <article className="group premium-card premium-card-hover relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10">
                <div className="absolute -right-4 -top-4 font-display text-8xl font-semibold text-white/[0.03] transition-colors group-hover:text-coral/10">
                  {pillar.number}
                </div>
                <span className="font-sans text-xs font-semibold tracking-[0.2em] text-coral-soft uppercase">
                  {pillar.number}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{pillar.text}</p>
                <div className="gold-line mt-8 w-12 transition-all group-hover:w-full" />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
