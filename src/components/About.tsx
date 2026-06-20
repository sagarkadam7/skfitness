import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EditorialAccent } from "@/components/ui/EditorialHeadline";
import { credentials, siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="overflow-x-clip py-16 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-12 lg:gap-20">
          <ScrollReveal className="lg:col-span-5" direction="left">
            <div className="relative pb-4 sm:pb-0">
              <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-2xl sm:aspect-[3/4] sm:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1583454114551-21fe1395167a?w=800&h=1066&fit=crop&q=85"
                  alt={siteConfig.coach}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 right-0 premium-card premium-card-accent rounded-2xl p-5 sm:-bottom-8 sm:right-4 sm:p-6 lg:right-8">
                <p className="font-display text-2xl italic text-coral sm:text-3xl">4+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted">Years of Excellence</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" direction="right" delay={0.15}>
            <SectionHeader
              align="left"
              label="Your Coach"
              title={
                <>
                  {siteConfig.coach}
                  <span className="mt-2 block text-2xl sm:text-3xl lg:text-4xl">
                    <EditorialAccent>Precision. Passion. Performance.</EditorialAccent>
                  </span>
                </>
              }
              description="I built SK Fitness for one reason — to deliver the kind of coaching I wished existed when I started my own journey. No generic plans. No ghosting. Just elite-level guidance tailored to you."
            />

            <p className="mt-6 leading-relaxed text-muted">
              After transforming 50+ clients across India and online, I&apos;ve refined a
              system that combines evidence-based training, flexible nutrition, and weekly
              accountability into one seamless experience.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {credentials.map((cred) => (
                <li key={cred} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
