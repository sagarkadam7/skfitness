const items = [
  "50+ Transformations",
  "Evidence-Based Training",
  "Weekly Accountability",
  "Personalized Nutrition",
  "1-on-1 Coaching",
  "Global Online Access",
  "90% Client Retention",
  "Premium Support",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative w-full max-w-[100vw] overflow-hidden border-y border-card-border bg-card/50 py-3.5 sm:py-5">
      <div className="marquee-track animate-marquee gap-8 sm:gap-12">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 px-4 text-[11px] font-medium uppercase tracking-[0.15em] text-muted sm:gap-12 sm:px-6 sm:text-sm sm:tracking-[0.2em]"
          >
            <span className="text-gold">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
