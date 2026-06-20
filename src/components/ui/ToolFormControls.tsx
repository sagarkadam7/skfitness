"use client";

type SegmentedOption<T extends string> = { id: T; label: string };

interface SegmentedControlProps<T extends string> {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label?: string;
  size?: "sm" | "md";
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
  size = "md",
}: SegmentedControlProps<T>) {
  const pad = size === "sm" ? "px-3 py-2 text-[10px] sm:py-1.5" : "px-4 py-2.5 text-xs sm:py-2";

  return (
    <div>
      {label && (
        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-muted">
          {label}
        </span>
      )}
      <div
        className="inline-flex w-full rounded-xl border border-card-border bg-background/80 p-1"
        role="group"
        aria-label={label}
      >
        {options.map((opt) => {
          const active = value === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={`flex-1 rounded-lg font-sans font-semibold uppercase tracking-wider transition-all ${pad} ${
                active
                  ? "bg-coral text-background shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
              aria-pressed={active}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface UnitFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  unitLabel: string;
  placeholder?: string;
  step?: string;
  min?: string;
  max?: string;
  required?: boolean;
}

export function UnitField({
  id,
  label,
  value,
  onChange,
  unitLabel,
  placeholder,
  step = "0.1",
  min = "0",
  max,
  required,
}: UnitFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-muted">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          step={step}
          min={min}
          max={max}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-card-border bg-background px-4 py-3.5 pr-14 text-base text-foreground outline-none transition-colors focus:border-coral/50 sm:py-3 sm:text-sm"
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-wider text-coral-soft">
          {unitLabel}
        </span>
      </div>
    </div>
  );
}

export function FormActions({
  onReset,
  submitLabel,
}: {
  onReset: () => void;
  submitLabel: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="submit"
        className="btn-primary relative z-10 flex-1 rounded-xl py-3.5 text-xs font-semibold uppercase tracking-widest sm:py-3"
      >
        {submitLabel}
      </button>
      <button
        type="button"
        onClick={onReset}
        className="btn-outline rounded-xl px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest sm:w-auto"
      >
        Reset
      </button>
    </div>
  );
}

export const inputClass =
  "w-full rounded-xl border border-card-border bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors focus:border-coral/50 sm:py-3 sm:text-sm";
export const labelClass = "mb-2 block text-[10px] font-semibold uppercase tracking-widest text-muted";
