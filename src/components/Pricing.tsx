import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EditorialAccent } from "@/components/ui/EditorialHeadline";
import { pricingPlans, pricingOffers } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Investment"
            title={
              <>
                Choose Your <EditorialAccent>Level</EditorialAccent>
              </>
            }
            description="Monthly plans from ₹1,999. Commit longer, save more — package offers below."
          />
        </ScrollReveal>

        {/* Monthly plans */}
        <div className="mt-12 grid gap-4 sm:mt-20 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.12}>
              <article
                className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-8 lg:p-10 ${
                  plan.popular
                    ? "premium-card premium-card-accent lg:py-12"
                    : "premium-card premium-card-hover"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-gold-light px-5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-background">
                    Most Selected
                  </span>
                )}

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{plan.name}</p>
                <p className="mt-3 text-sm text-muted">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1 border-b border-card-border pb-6 sm:mt-8 sm:pb-8">
                  <span className="font-display text-4xl font-bold sm:text-5xl">{plan.price}</span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>

                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#book"
                  className={`mt-10 block rounded-full py-4 text-center text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                    plan.popular ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {plan.cta}
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Package offers */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 sm:mt-28">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label justify-center">
                <Sparkles className="mr-1 inline h-3.5 w-3.5 text-coral" />
                Package Offers
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold sm:mt-5 sm:text-3xl lg:text-4xl">
                Commit More, <EditorialAccent>Save More</EditorialAccent>
              </h3>
              <p className="mt-4 text-sm text-muted">
                Pay upfront for 3, 6, or 12 months and lock in a lower effective monthly rate.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {pricingOffers.map((offer, i) => (
                <ScrollReveal key={offer.id} delay={i * 0.08}>
                  <article
                    className={`relative flex h-full flex-col rounded-2xl p-7 ${
                      offer.highlight
                        ? "premium-card premium-card-accent ring-1 ring-coral/30"
                        : "premium-card premium-card-hover"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-coral">
                        {offer.badge}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted">
                        {offer.duration}
                      </span>
                    </div>

                    <h4 className="mt-5 font-display text-xl font-semibold">{offer.name}</h4>

                    <div className="mt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-3xl font-bold">{offer.totalPrice}</span>
                        <span className="text-xs text-muted line-through">{offer.originalTotal}</span>
                      </div>
                      <p className="mt-1 text-sm text-coral-soft">{offer.perMonth} effective</p>
                      <p className="mt-2 inline-block rounded-full bg-gold/10 px-3 py-0.5 text-xs font-semibold text-gold">
                        {offer.savings}
                      </p>
                    </div>

                    <ul className="mt-6 flex-1 space-y-2.5 border-t border-card-border pt-6">
                      {offer.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs text-muted">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#book"
                      className={`mt-6 block rounded-full py-3.5 text-center text-xs font-semibold uppercase tracking-widest ${
                        offer.highlight ? "btn-primary" : "btn-outline"
                      }`}
                    >
                      Claim Offer
                    </Link>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <p className="mt-10 text-center text-xs text-muted">
              All packages include a 14-day satisfaction guarantee. Prices in INR. GST included where applicable.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
