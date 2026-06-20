"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { SplitHeadline } from "@/components/ui/EditorialHeadline";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip lg:flex lg:min-h-[100svh] lg:items-center">
      <div className="editorial-arcs absolute inset-0 overflow-hidden" aria-hidden />
      <div className="hero-glow absolute inset-0 pointer-events-none overflow-hidden" aria-hidden />
      <div className="hero-vignette absolute inset-0 pointer-events-none overflow-hidden" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:py-24">
        <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 min-w-0 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 inline-flex max-w-full items-center gap-2.5 overflow-hidden rounded-full glass px-4 py-1.5 sm:mb-8 sm:gap-3 sm:px-5 sm:py-2"
            >
              <span className="relative flex h-2 w-2 shrink-0 overflow-hidden rounded-full">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
              </span>
              <span className="truncate text-[10px] font-medium uppercase tracking-[0.12em] text-muted sm:text-xs sm:tracking-[0.15em]">
                Accepting New Clients · 2026
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <SplitHeadline
                as="h1"
                size="hero"
                lead="Walk into your next chapter"
                accent="already calibrated."
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-lg text-[0.9375rem] leading-relaxed text-muted sm:mt-8 sm:text-base lg:text-lg"
            >
              Premium online coaching by{" "}
              <span className="font-display italic text-coral">{siteConfig.coach}</span>
              — bespoke training, precision nutrition, and unwavering accountability for those who
              refuse to settle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Link
                href="#book"
                className="btn-primary group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-wider sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
              >
                Start Your Transformation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#results"
                className="btn-outline inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-wider sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
              >
                <Play className="h-4 w-4 fill-current" />
                View Results
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-3 border-t border-card-border pt-6 sm:mt-14 sm:flex sm:flex-wrap sm:items-center sm:gap-8 sm:pt-8"
            >
              {[
                { value: "50+", label: "Clients" },
                { value: "4.9★", label: "Rating" },
                { value: "4+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display text-xl font-semibold text-foreground sm:text-2xl">{stat.value}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-widest text-muted sm:text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 min-w-0 lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="pointer-events-none absolute inset-2 -z-10 rounded-2xl border border-white/10 sm:rounded-3xl" aria-hidden />

              <div className="coach-frame-glow relative aspect-[5/4] w-full overflow-hidden rounded-2xl sm:aspect-[4/5] sm:rounded-3xl">
                <Image
                  src={siteConfig.images.hero}
                  alt={`${siteConfig.coach} — Premium Fitness Coach`}
                  fill
                  className="coach-photo-hero object-cover object-[center_35%] sm:object-[center_30%]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/20 lg:from-background/50" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(240,142,126,0.12),transparent_55%)]" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
                <div className="glass-strong rounded-xl p-3.5 sm:rounded-2xl sm:p-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral/10 sm:h-12 sm:w-12">
                      <span className="font-display text-base font-semibold text-coral sm:text-lg">90%</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold sm:text-sm">Client Retention</p>
                      <p className="text-[10px] text-muted sm:text-xs">Consistent, lasting results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
