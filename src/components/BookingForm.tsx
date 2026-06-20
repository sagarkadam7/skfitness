"use client";

import { useState } from "react";
import { Calendar, Send, CheckCircle2, ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/data";

const goals = [
  { id: "Fat Loss", label: "Lose Fat", emoji: "🔥" },
  { id: "Muscle Building", label: "Build Muscle", emoji: "💪" },
  { id: "Strength & Performance", label: "Get Stronger", emoji: "⚡" },
  { id: "General Fitness", label: "Stay Fit", emoji: "✨" },
  { id: "Nutrition Only", label: "Nutrition", emoji: "🥗" },
  { id: "Post-Injury / Rehab", label: "Rehab", emoji: "🩹" },
];

const experienceLevels = [
  { id: "Beginner", label: "Beginner", hint: "New to training" },
  { id: "Intermediate", label: "Intermediate", hint: "1–2 years" },
  { id: "Advanced", label: "Advanced", hint: "3+ years" },
];

const planOptions = [
  { id: "", label: "Not sure yet", hint: "Help me choose" },
  { id: "starter", label: "Starter", hint: "From ₹1,999/mo" },
  { id: "premium", label: "Premium", hint: "Most popular" },
  { id: "elite", label: "Elite", hint: "Full coaching" },
  { id: "package", label: "3+ month pack", hint: "Save more" },
];

const STEPS = ["About you", "Your goals", "Almost done"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  goal: string;
  experience: string;
  message: string;
  injuries: string;
  preferredPlan: string;
};

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    goal: "",
    experience: "",
    message: "",
    injuries: "",
    preferredPlan: "",
  });

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const inputClass =
    "w-full rounded-xl border border-card-border bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors focus:border-coral/50 placeholder:text-muted/60";
  const labelClass = "mb-2 block text-sm font-medium text-foreground";

  const validateStep = (s: number): boolean => {
    if (s === 0) {
      if (!form.name.trim()) {
        setError("Please enter your name.");
        return false;
      }
      if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
        setError("Enter a valid 10-digit phone or WhatsApp number.");
        return false;
      }
      return true;
    }
    if (s === 1) {
      if (!form.goal) {
        setError("Tap your main goal to continue.");
        return false;
      }
      if (!form.experience) {
        setError("Tap your experience level to continue.");
        return false;
      }
      return true;
    }
    return true;
  };

  const next = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  };

  const submit = () => {
    if (!validateStep(0) || !validateStep(1)) {
      setStep(form.name && form.phone ? (form.goal ? 2 : 1) : 0);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="book" className="py-16 sm:py-36">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <CheckCircle2 className="mx-auto h-16 w-16 text-coral" />
          <h2 className="mt-6 font-display text-3xl font-bold">You&apos;re all set!</h2>
          <p className="mt-4 text-muted">
            Thanks, {form.name.split(" ")[0]}! I&apos;ll WhatsApp or call you within 24 hours to
            book your free discovery call.
          </p>
        </div>
      </section>
    );
  }

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <section id="book" className="relative py-16 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coral/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <SectionHeader
              align="left"
              label="Begin Today"
              title="Free Discovery Call"
              description="3 quick steps — takes under 1 minute. No payment, no pressure."
            />
            <ul className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {[
                "Personalized goal assessment",
                "Training & nutrition overview",
                "Honest fit evaluation",
                "Q&A about programs",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-sm text-muted">
                  <Calendar className="h-4 w-4 shrink-0 text-coral" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Sagar!%20I%20want%20a%20free%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-3.5 text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366]/20 sm:mt-10 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Skip form — chat on WhatsApp
            </a>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="premium-card rounded-2xl p-5 sm:p-6 lg:p-8">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>
                    Step {step + 1} of {STEPS.length}
                  </span>
                  <span className="font-medium text-coral">{STEPS[step]}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-card-border">
                  <div
                    className="h-full rounded-full bg-coral transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Step 1 — Contact */}
              {step === 0 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold">Let&apos;s connect</h3>
                    <p className="mt-1 text-sm text-muted">Just the basics — I&apos;ll reach out on WhatsApp.</p>
                  </div>
                  <div>
                    <label htmlFor="book-name" className={labelClass}>
                      Your name <span className="text-coral">*</span>
                    </label>
                    <input
                      id="book-name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Sagar Kadam"
                    />
                  </div>
                  <div>
                    <label htmlFor="book-phone" className={labelClass}>
                      WhatsApp / phone <span className="text-coral">*</span>
                    </label>
                    <input
                      id="book-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass}
                      placeholder="9876543210"
                    />
                    <p className="mt-1.5 text-xs text-muted">10-digit number — no need to add +91</p>
                  </div>
                  <div>
                    <label htmlFor="book-email" className={labelClass}>
                      Email <span className="text-muted font-normal">(optional)</span>
                    </label>
                    <input
                      id="book-email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                      placeholder="you@gmail.com"
                    />
                  </div>
                </div>
              )}

              {/* Step 2 — Goals */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold">What&apos;s your goal?</h3>
                    <p className="mt-1 text-sm text-muted">Tap one — no typing needed.</p>
                  </div>
                  <div>
                    <p className={labelClass}>
                      Main goal <span className="text-coral">*</span>
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {goals.map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => update("goal", g.id)}
                          className={`min-h-[52px] rounded-xl border px-3 py-3 text-left transition-all sm:min-h-0 ${
                            form.goal === g.id
                              ? "border-coral bg-coral/15 text-foreground"
                              : "border-card-border bg-background hover:border-coral/40"
                          }`}
                        >
                          <span className="text-lg">{g.emoji}</span>
                          <span className="mt-1 block text-xs font-semibold leading-tight">{g.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className={labelClass}>
                      Experience level <span className="text-coral">*</span>
                    </p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {experienceLevels.map((lvl) => (
                        <button
                          key={lvl.id}
                          type="button"
                          onClick={() => update("experience", lvl.id)}
                          className={`min-h-[52px] rounded-xl border px-4 py-3 text-left transition-all sm:min-h-0 ${
                            form.experience === lvl.id
                              ? "border-coral bg-coral/15"
                              : "border-card-border bg-background hover:border-coral/40"
                          }`}
                        >
                          <span className="block text-sm font-semibold">{lvl.label}</span>
                          <span className="text-xs text-muted">{lvl.hint}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 — Optional */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold">Anything else?</h3>
                    <p className="mt-1 text-sm text-muted">All optional — skip if you want.</p>
                  </div>
                  <div>
                    <p className={labelClass}>Interested in a plan?</p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {planOptions.map((p) => (
                        <button
                          key={p.id || "unsure"}
                          type="button"
                          onClick={() => update("preferredPlan", p.id)}
                          className={`rounded-xl border px-3 py-2.5 text-left transition-all ${
                            form.preferredPlan === p.id
                              ? "border-coral bg-coral/15"
                              : "border-card-border bg-background hover:border-coral/40"
                          }`}
                        >
                          <span className="block text-xs font-semibold">{p.label}</span>
                          <span className="text-[10px] text-muted">{p.hint}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="book-injuries" className={labelClass}>
                      Injuries or health notes <span className="text-muted font-normal">(optional)</span>
                    </label>
                    <input
                      id="book-injuries"
                      type="text"
                      value={form.injuries}
                      onChange={(e) => update("injuries", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. lower back pain, knee surgery"
                    />
                  </div>
                  <div>
                    <label htmlFor="book-message" className={labelClass}>
                      Anything you&apos;d like to share? <span className="text-muted font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="book-message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={`${inputClass} resize-none`}
                      placeholder="e.g. Want to lose 10 kg before my wedding in 4 months"
                    />
                  </div>
                </div>
              )}

              {error && (
                <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-2.5 text-sm text-red-300">{error}</p>
              )}

              {/* Navigation */}
              <div className="mt-8 flex gap-3">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={back}
                    className="btn-outline flex items-center justify-center gap-1 rounded-full px-5 py-3.5 text-xs font-semibold uppercase tracking-wider"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                )}
                {step < STEPS.length - 1 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="btn-primary flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-xs font-semibold uppercase tracking-widest"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submit}
                    className="btn-primary flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-xs font-semibold uppercase tracking-widest"
                  >
                    <Send className="h-4 w-4" />
                    Book Free Call
                  </button>
                )}
              </div>

              {step === 2 && (
                <button
                  type="button"
                  onClick={submit}
                  className="mt-3 w-full text-center text-xs text-muted underline-offset-2 hover:text-coral hover:underline"
                >
                  Skip extras &amp; submit now
                </button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
