"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-36">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader label="FAQ" title="Questions Answered" description="Everything you need to know before starting your transformation." />
        </ScrollReveal>

        <div className="mt-10 space-y-3 sm:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={faq.question} delay={index * 0.05}>
                <div className={`premium-card overflow-hidden rounded-2xl transition-colors ${isOpen ? "border-gold/20" : ""}`}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:gap-4 sm:px-8 sm:py-6"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[0.9375rem] font-semibold leading-snug sm:text-base lg:text-lg">{faq.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-card-border text-gold">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="border-t border-card-border px-6 py-5 text-sm leading-relaxed text-muted sm:px-8 sm:py-6">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
