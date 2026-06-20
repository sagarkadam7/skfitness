"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="border-t border-card-border py-12 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="section-label justify-center">Newsletter</p>
        <h2 className="mt-3 font-display text-xl font-bold sm:mt-4 sm:text-2xl lg:text-3xl">Elite Fitness Insights</h2>
        <p className="mt-2 text-sm text-muted sm:mt-3">Training wisdom, nutrition strategies, and mindset — curated weekly.</p>
        {done ? (
          <p className="mt-6 font-semibold text-gold">Welcome to the inner circle.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
              className="w-full rounded-full border border-card-border bg-background/50 px-6 py-3.5 text-base outline-none focus:border-gold/50 sm:w-72 sm:text-sm" />
            <button type="submit" className="btn-primary w-full rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-widest sm:w-auto">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
