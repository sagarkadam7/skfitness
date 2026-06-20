"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  Activity,
  Calculator,
  Droplets,
  Dumbbell,
  Percent,
  AlertCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EditorialAccent } from "@/components/ui/EditorialHeadline";
import {
  SegmentedControl,
  UnitField,
  FormActions,
  inputClass,
  labelClass,
} from "@/components/ui/ToolFormControls";
import {
  calculateBMI,
  calculateMacros,
  calculateBodyFat,
  calculateOneRM,
  calculateWaterIntake,
  parsePositiveNumber,
  type Sex,
} from "@/lib/fitness-calculators";
import {
  type WeightUnit,
  type LengthUnit,
  type HeightUnit,
  WEIGHT_UNITS,
  LENGTH_UNITS,
  HEIGHT_UNITS,
  convertWeightDisplay,
  convertLengthDisplay,
  parseWeightToKg,
  parseLengthToCm,
  parseHeightToCm,
  formatWeight,
  kgToLb,
  mlToOz,
  mlToCups,
} from "@/lib/units";

const TOOL_TABS = [
  { id: "bmi", label: "BMI", icon: Activity },
  { id: "macros", label: "Macros", icon: Calculator },
  { id: "bodyfat", label: "Body Fat", icon: Percent },
  { id: "onerm", label: "1RM", icon: Dumbbell },
  { id: "water", label: "Water", icon: Droplets },
] as const;

function ToolShell({
  id,
  icon: Icon,
  title,
  description,
  children,
}: {
  id: string;
  icon: typeof Activity;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="premium-card scroll-mt-24 rounded-2xl p-5 sm:scroll-mt-28 sm:p-6 lg:p-8">
      <div className="mb-6 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-coral/10 text-coral">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold">{title}</h3>
          {description && <p className="mt-1 text-xs leading-relaxed text-muted">{description}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{message}</span>
    </div>
  );
}

function ResultBox({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border border-coral/20 bg-coral/5 p-6">{children}</div>;
}

function HeightFields({
  heightUnit,
  cm,
  feet,
  inches,
  onCmChange,
  onFeetChange,
  onInchesChange,
  idPrefix,
}: {
  heightUnit: HeightUnit;
  cm: string;
  feet: string;
  inches: string;
  onCmChange: (v: string) => void;
  onFeetChange: (v: string) => void;
  onInchesChange: (v: string) => void;
  idPrefix: string;
}) {
  if (heightUnit === "cm") {
    return (
      <UnitField
        id={`${idPrefix}-height-cm`}
        label="Height"
        value={cm}
        onChange={onCmChange}
        unitLabel="cm"
        placeholder="175"
        required
      />
    );
  }

  return (
    <div>
      <span className={labelClass}>Height</span>
      <div className="grid grid-cols-2 gap-3">
        <UnitField
          id={`${idPrefix}-height-ft`}
          label="Feet"
          value={feet}
          onChange={onFeetChange}
          unitLabel="ft"
          placeholder="5"
          step="1"
          required
        />
        <UnitField
          id={`${idPrefix}-height-in`}
          label="Inches"
          value={inches}
          onChange={onInchesChange}
          unitLabel="in"
          placeholder="9"
          step="0.1"
          max="11.9"
          required
        />
      </div>
    </div>
  );
}

function BMICalculator() {
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [weight, setWeight] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateBMI> | null>(null);

  const reset = () => {
    setWeight("");
    setHeightCm("");
    setHeightFt("");
    setHeightIn("");
    setError("");
    setResult(null);
  };

  const handleWeightUnit = (unit: WeightUnit) => {
    setWeightUnit(unit);
    setWeight((w) => convertWeightDisplay(w, weightUnit, unit));
    setResult(null);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    const w = parseWeightToKg(weight, weightUnit);
    const h = parseHeightToCm(heightUnit, heightCm, heightFt, heightIn);

    if (!w || !h) {
      setError("Please enter valid weight and height.");
      return;
    }
    if (h < 100 || h > 250) {
      setError(heightUnit === "cm" ? "Height should be 100–250 cm." : "Height seems out of range. Check ft/in.");
      return;
    }

    try {
      setResult(calculateBMI(w, h));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed.");
    }
  };

  return (
    <ToolShell id="tool-bmi" icon={Activity} title="BMI Calculator" description="Body Mass Index with healthy weight range for your height.">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <SegmentedControl label="Weight unit" options={WEIGHT_UNITS} value={weightUnit} onChange={handleWeightUnit} size="sm" />
          <SegmentedControl label="Height unit" options={HEIGHT_UNITS} value={heightUnit} onChange={(u) => { setHeightUnit(u); setResult(null); }} size="sm" />
        </div>
        <UnitField id="bmi-weight" label="Weight" value={weight} onChange={setWeight} unitLabel={weightUnit} placeholder={weightUnit === "kg" ? "70" : "154"} required />
        <HeightFields heightUnit={heightUnit} cm={heightCm} feet={heightFt} inches={heightIn} onCmChange={setHeightCm} onFeetChange={setHeightFt} onInchesChange={setHeightIn} idPrefix="bmi" />
        {error && <ErrorMessage message={error} />}
        <FormActions onReset={reset} submitLabel="Calculate BMI" />
        {result && (
          <ResultBox>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-coral">{result.bmi}</div>
              <div className="mt-1 text-sm font-medium">{result.category}</div>
              <div className="mt-3 text-xs text-muted">
                Healthy weight: {formatWeight(result.healthyMinKg, weightUnit)} – {formatWeight(result.healthyMaxKg, weightUnit)}
                {weightUnit === "lb" && (
                  <span className="block mt-1 text-[10px]">({result.healthyMinKg}–{result.healthyMaxKg} kg)</span>
                )}
              </div>
            </div>
          </ResultBox>
        )}
      </form>
    </ToolShell>
  );
}

function MacroCalculator() {
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [weight, setWeight] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState<Sex>("male");
  const [activity, setActivity] = useState("1.55");
  const [goal, setGoal] = useState<"lose" | "maintain" | "gain">("maintain");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateMacros> | null>(null);

  const reset = () => {
    setWeight(""); setHeightCm(""); setHeightFt(""); setHeightIn(""); setAge("");
    setError(""); setResult(null);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    const w = parseWeightToKg(weight, weightUnit);
    const h = parseHeightToCm(heightUnit, heightCm, heightFt, heightIn);
    const a = parsePositiveNumber(age);
    if (!w || !h || !a) { setError("Please fill in weight, height, and age."); return; }
    if (a < 15 || a > 100) { setError("Age should be 15–100."); return; }
    try {
      setResult(calculateMacros({ weightKg: w, heightCm: h, age: a, sex, activityFactor: parseFloat(activity), goal }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed.");
    }
  };

  return (
    <ToolShell id="tool-macros" icon={Calculator} title="Macro & Calorie Calculator" description="TDEE, BMR, and daily protein, carbs, and fat targets.">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <SegmentedControl label="Weight unit" options={WEIGHT_UNITS} value={weightUnit} onChange={(u) => { setWeight(convertWeightDisplay(weight, weightUnit, u)); setWeightUnit(u); setResult(null); }} size="sm" />
          <SegmentedControl label="Height unit" options={HEIGHT_UNITS} value={heightUnit} onChange={(u) => { setHeightUnit(u); setResult(null); }} size="sm" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <UnitField id="macro-weight" label="Weight" value={weight} onChange={setWeight} unitLabel={weightUnit} placeholder={weightUnit === "kg" ? "70" : "154"} required />
          <div>
            <label htmlFor="macro-age" className={labelClass}>Age (years)</label>
            <input id="macro-age" type="number" min="15" max="100" required value={age} onChange={(e) => setAge(e.target.value)} className={inputClass} placeholder="28" />
          </div>
        </div>
        <HeightFields heightUnit={heightUnit} cm={heightCm} feet={heightFt} inches={heightIn} onCmChange={setHeightCm} onFeetChange={setHeightFt} onInchesChange={setHeightIn} idPrefix="macro" />
        <div className="grid gap-4 sm:grid-cols-2">
          <SegmentedControl label="Sex" options={[{ id: "male" as Sex, label: "Male" }, { id: "female" as Sex, label: "Female" }]} value={sex} onChange={setSex} size="sm" />
          <div>
            <label htmlFor="macro-goal" className={labelClass}>Goal</label>
            <select id="macro-goal" value={goal} onChange={(e) => setGoal(e.target.value as typeof goal)} className={inputClass}>
              <option value="lose">Fat loss (−400 cal)</option>
              <option value="maintain">Maintain weight</option>
              <option value="gain">Muscle gain (+300 cal)</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="macro-activity" className={labelClass}>Activity level</label>
          <select id="macro-activity" value={activity} onChange={(e) => setActivity(e.target.value)} className={inputClass}>
            <option value="1.2">Sedentary — desk job, little exercise</option>
            <option value="1.375">Light — 1–3 workouts/week</option>
            <option value="1.55">Moderate — 3–5 workouts/week</option>
            <option value="1.725">Very active — 6–7 workouts/week</option>
            <option value="1.9">Athlete — intense / 2× daily</option>
          </select>
        </div>
        {error && <ErrorMessage message={error} />}
        <FormActions onReset={reset} submitLabel="Calculate Macros" />
        {result && (
          <ResultBox>
            <p className="mb-4 text-center text-xs text-muted">BMR: {result.bmr} kcal · TDEE: {result.tdee} kcal</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { label: "Calories", value: result.calories, unit: "kcal" },
                { label: "Protein", value: result.protein, unit: "g" },
                { label: "Carbs", value: result.carbs, unit: "g" },
                { label: "Fat", value: result.fat, unit: "g" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-background/50 p-2.5 text-center sm:p-3">
                  <div className="font-display text-lg font-bold text-coral sm:text-xl">{item.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted">{item.label} ({item.unit})</div>
                </div>
              ))}
            </div>
          </ResultBox>
        )}
      </form>
    </ToolShell>
  );
}

function BodyFatCalculator() {
  const [lengthUnit, setLengthUnit] = useState<LengthUnit>("cm");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [sex, setSex] = useState<Sex>("male");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateBodyFat> | null>(null);

  const reset = () => {
    setHeightCm(""); setHeightFt(""); setHeightIn(""); setWaist(""); setNeck(""); setHip("");
    setError(""); setResult(null);
  };

  const toggleLength = (unit: LengthUnit) => {
    setWaist((v) => convertLengthDisplay(v, lengthUnit, unit));
    setNeck((v) => convertLengthDisplay(v, lengthUnit, unit));
    setHip((v) => convertLengthDisplay(v, lengthUnit, unit));
    setLengthUnit(unit);
    setResult(null);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    const h = parseHeightToCm(heightUnit, heightCm, heightFt, heightIn);
    const w = parseLengthToCm(waist, lengthUnit);
    const n = parseLengthToCm(neck, lengthUnit);
    const hipVal = parseLengthToCm(hip, lengthUnit);
    if (!h || !w || !n) { setError("Enter height, waist, and neck measurements."); return; }
    if (sex === "female" && !hipVal) { setError("Hip measurement is required for females."); return; }
    try {
      setResult(calculateBodyFat({ sex, heightCm: h, waistCm: w, neckCm: n, hipCm: sex === "female" ? hipVal ?? undefined : undefined }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed.");
    }
  };

  const len = lengthUnit;

  return (
    <ToolShell id="tool-bodyfat" icon={Percent} title="Body Fat Calculator" description="US Navy method. Waist at navel, neck below Adam's apple, hip at widest point.">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <SegmentedControl label="Measurement unit" options={LENGTH_UNITS} value={lengthUnit} onChange={toggleLength} size="sm" />
          <SegmentedControl label="Height unit" options={HEIGHT_UNITS} value={heightUnit} onChange={(u) => { setHeightUnit(u); setResult(null); }} size="sm" />
        </div>
        <SegmentedControl label="Sex" options={[{ id: "male" as Sex, label: "Male" }, { id: "female" as Sex, label: "Female" }]} value={sex} onChange={(s) => { setSex(s); setResult(null); }} size="sm" />
        <HeightFields heightUnit={heightUnit} cm={heightCm} feet={heightFt} inches={heightIn} onCmChange={setHeightCm} onFeetChange={setHeightFt} onInchesChange={setHeightIn} idPrefix="bf" />
        <div className="grid gap-4 sm:grid-cols-2">
          <UnitField id="bf-waist" label="Waist" value={waist} onChange={setWaist} unitLabel={len} placeholder={len === "cm" ? "85" : "33.5"} required />
          <UnitField id="bf-neck" label="Neck" value={neck} onChange={setNeck} unitLabel={len} placeholder={len === "cm" ? "38" : "15"} required />
          {sex === "female" && (
            <div className="sm:col-span-2">
              <UnitField id="bf-hip" label="Hip" value={hip} onChange={setHip} unitLabel={len} placeholder={len === "cm" ? "95" : "37.4"} required />
            </div>
          )}
        </div>
        {error && <ErrorMessage message={error} />}
        <FormActions onReset={reset} submitLabel="Calculate Body Fat" />
        {result && (
          <ResultBox>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-coral">{result.bodyFatPercent}%</div>
              <div className="mt-1 text-sm font-medium">{result.category}</div>
            </div>
          </ResultBox>
        )}
      </form>
    </ToolShell>
  );
}

function OneRMCalculator() {
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateOneRM> | null>(null);

  const reset = () => { setWeight(""); setReps(""); setError(""); setResult(null); };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    const w = parseWeightToKg(weight, weightUnit);
    const r = parsePositiveNumber(reps);
    if (!w || !r) { setError("Enter weight lifted and reps completed."); return; }
    try {
      setResult(calculateOneRM(w, Math.round(r)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed.");
    }
  };

  const displayWeight = (kg: number) => (weightUnit === "kg" ? `${kg} kg` : `${kgToLb(kg)} lb`);

  return (
    <ToolShell id="tool-onerm" icon={Dumbbell} title="1RM Strength Calculator" description="Estimate your one-rep max (Epley formula). Best with 1–10 reps.">
      <form onSubmit={onSubmit} className="space-y-4">
        <SegmentedControl label="Weight unit" options={WEIGHT_UNITS} value={weightUnit} onChange={(u) => { setWeight(convertWeightDisplay(weight, weightUnit, u)); setWeightUnit(u); setResult(null); }} size="sm" />
        <div className="grid gap-4 sm:grid-cols-2">
          <UnitField id="rm-weight" label="Weight lifted" value={weight} onChange={setWeight} unitLabel={weightUnit} placeholder={weightUnit === "kg" ? "100" : "225"} step="0.5" required />
          <div>
            <label htmlFor="rm-reps" className={labelClass}>Reps completed</label>
            <input id="rm-reps" type="number" min="1" max="12" required value={reps} onChange={(e) => setReps(e.target.value)} className={inputClass} placeholder="5" />
            <p className="mt-1.5 text-[10px] text-muted">1–12 reps for best accuracy</p>
          </div>
        </div>
        {error && <ErrorMessage message={error} />}
        <FormActions onReset={reset} submitLabel="Calculate 1RM" />
        {result && (
          <ResultBox>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-coral">{displayWeight(result.oneRepMax)}</div>
              <div className="mt-1 text-sm text-muted">Estimated 1-rep max</div>
            </div>
            <ul className="mt-4 space-y-2 border-t border-card-border pt-4">
              {result.percentages.map((row) => (
                <li key={row.label} className="flex justify-between text-sm">
                  <span className="text-muted">{row.label}</span>
                  <span className="font-semibold">{displayWeight(row.weight)}</span>
                </li>
              ))}
            </ul>
          </ResultBox>
        )}
      </form>
    </ToolShell>
  );
}

function WaterIntakeCalculator() {
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<"low" | "moderate" | "high">("moderate");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateWaterIntake> | null>(null);

  const reset = () => { setWeight(""); setError(""); setResult(null); };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    const w = parseWeightToKg(weight, weightUnit);
    if (!w) { setError("Please enter your weight."); return; }
    try {
      setResult(calculateWaterIntake(w, activity));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed.");
    }
  };

  return (
    <ToolShell id="tool-water" icon={Droplets} title="Daily Water Intake" description="Hydration target based on body weight and training intensity.">
      <form onSubmit={onSubmit} className="space-y-4">
        <SegmentedControl label="Weight unit" options={WEIGHT_UNITS} value={weightUnit} onChange={(u) => { setWeight(convertWeightDisplay(weight, weightUnit, u)); setWeightUnit(u); setResult(null); }} size="sm" />
        <UnitField id="water-weight" label="Weight" value={weight} onChange={setWeight} unitLabel={weightUnit} placeholder={weightUnit === "kg" ? "70" : "154"} required />
        <div>
          <label htmlFor="water-activity" className={labelClass}>Training intensity</label>
          <select id="water-activity" value={activity} onChange={(e) => setActivity(e.target.value as typeof activity)} className={inputClass}>
            <option value="low">Low — rest day / light walk</option>
            <option value="moderate">Moderate — regular training</option>
            <option value="high">High — intense / 2× daily</option>
          </select>
        </div>
        {error && <ErrorMessage message={error} />}
        <FormActions onReset={reset} submitLabel="Calculate Water" />
        {result && (
          <ResultBox>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-background/50 p-3 text-center">
                <div className="font-display text-2xl font-bold text-coral">{result.liters}L</div>
                <div className="text-[10px] uppercase tracking-widest text-muted">Liters</div>
              </div>
              <div className="rounded-xl bg-background/50 p-3 text-center">
                <div className="font-display text-2xl font-bold text-coral">{result.glasses}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted">Glasses (250ml)</div>
              </div>
              <div className="rounded-xl bg-background/50 p-3 text-center">
                <div className="font-display text-2xl font-bold text-coral">{mlToCups(result.ml)}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted">Cups (8 oz)</div>
              </div>
            </div>
            <p className="mt-3 text-center text-[10px] text-muted">{result.ml} ml · {mlToOz(result.ml)} fl oz</p>
          </ResultBox>
        )}
      </form>
    </ToolShell>
  );
}

function ToolQuickNav() {
  return (
    <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none sm:mx-0 sm:mb-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
      {TOOL_TABS.map(({ id, label, icon: Icon }) => (
        <a
          key={id}
          href={`#tool-${id}`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-card-border bg-background/60 px-4 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-muted transition-all hover:border-coral/40 hover:text-coral sm:text-xs"
        >
          <Icon className="h-3.5 w-3.5" />
          {label}
        </a>
      ))}
    </div>
  );
}

export default function FitnessTools() {
  return (
    <section id="tools" className="bg-card/30 py-16 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Free Tools"
            title={<>Know Your <EditorialAccent>Numbers</EditorialAccent></>}
            description="Five calculators with metric & imperial units. Toggle kg/lb, cm or ft/in — get instant results."
          />
        </ScrollReveal>

        <ToolQuickNav />

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <BMICalculator />
          <MacroCalculator />
          <BodyFatCalculator />
          <OneRMCalculator />
          <WaterIntakeCalculator />
        </div>
      </div>
    </section>
  );
}
