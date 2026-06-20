"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`px-4 py-8 text-center transition-all duration-700 sm:px-8 sm:py-12 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="font-display text-3xl font-bold gradient-text-gold sm:text-4xl lg:text-5xl">{value}</div>
      <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted sm:mt-3 sm:text-xs sm:tracking-[0.2em]">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative">
      <div className="gold-line absolute top-0 left-0 right-0" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
        {stats.map((stat) => (
          <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
      <div className="gold-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
