export type Sex = "male" | "female";

export type BMIResult = {
  bmi: number;
  category: string;
  healthyMinKg: number;
  healthyMaxKg: number;
};

export type MacroResult = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  bmr: number;
  tdee: number;
};

export type BodyFatResult = {
  bodyFatPercent: number;
  category: string;
};

export type OneRMResult = {
  oneRepMax: number;
  percentages: { label: string; weight: number }[];
};

export type WaterIntakeResult = {
  liters: number;
  glasses: number;
  ml: number;
};

function round(value: number, decimals = 0): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function parsePositiveNumber(value: string): number | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const num = Number(trimmed);
  if (!Number.isFinite(num) || num <= 0) return null;
  return num;
}

export function calculateBMI(weightKg: number, heightCm: number): BMIResult {
  if (weightKg <= 0 || heightCm <= 0) {
    throw new Error("Weight and height must be greater than zero.");
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const rounded = round(bmi, 1);

  let category = "Normal weight";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  const minHealthyWeight = round(18.5 * heightM * heightM, 1);
  const maxHealthyWeight = round(24.9 * heightM * heightM, 1);

  return {
    bmi: rounded,
    category,
    healthyMinKg: minHealthyWeight,
    healthyMaxKg: maxHealthyWeight,
  };
}

export function calculateMacros(input: {
  weightKg: number;
  heightCm: number;
  age: number;
  sex: Sex;
  activityFactor: number;
  goal: "lose" | "maintain" | "gain";
}): MacroResult {
  const { weightKg, heightCm, age, sex, activityFactor, goal } = input;

  if (weightKg <= 0 || heightCm <= 0 || age <= 0) {
    throw new Error("Weight, height, and age must be greater than zero.");
  }

  const bmr =
    sex === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  let tdee = bmr * activityFactor;
  if (goal === "lose") tdee -= 400;
  if (goal === "gain") tdee += 300;

  const calories = Math.max(Math.round(tdee), 1200);
  const protein = Math.round(weightKg * 2);
  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.max(Math.round((calories - protein * 4 - fat * 9) / 4), 0);

  return { calories, protein, carbs, fat, bmr: Math.round(bmr), tdee: Math.round(tdee) };
}

/** US Navy body fat estimation (requires cm measurements) */
export function calculateBodyFat(input: {
  sex: Sex;
  heightCm: number;
  waistCm: number;
  neckCm: number;
  hipCm?: number;
}): BodyFatResult {
  const { sex, heightCm, waistCm, neckCm, hipCm } = input;

  if (heightCm <= 0 || waistCm <= 0 || neckCm <= 0) {
    throw new Error("Measurements must be greater than zero.");
  }

  if (waistCm <= neckCm) {
    throw new Error("Waist measurement must be larger than neck measurement.");
  }

  let bodyFatPercent: number;

  if (sex === "male") {
    bodyFatPercent =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waistCm - neckCm) +
          0.15456 * Math.log10(heightCm)) -
      450;
  } else {
    if (!hipCm || hipCm <= 0) {
      throw new Error("Hip measurement is required for females.");
    }
    bodyFatPercent =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waistCm + hipCm - neckCm) +
          0.221 * Math.log10(heightCm)) -
      450;
  }

  const rounded = round(Math.min(Math.max(bodyFatPercent, 3), 60), 1);

  let category = "Average";
  if (sex === "male") {
    if (rounded < 6) category = "Essential fat";
    else if (rounded < 14) category = "Athletic";
    else if (rounded < 18) category = "Fitness";
    else if (rounded < 25) category = "Average";
    else category = "Above average";
  } else {
    if (rounded < 14) category = "Essential fat";
    else if (rounded < 21) category = "Athletic";
    else if (rounded < 25) category = "Fitness";
    else if (rounded < 32) category = "Average";
    else category = "Above average";
  }

  return { bodyFatPercent: rounded, category };
}

/** Epley formula for estimated 1-rep max */
export function calculateOneRM(weightKg: number, reps: number): OneRMResult {
  if (weightKg <= 0) throw new Error("Weight must be greater than zero.");
  if (reps <= 0 || reps > 12) {
    throw new Error("Reps must be between 1 and 12 for accurate estimates.");
  }

  const oneRepMax = reps === 1 ? weightKg : weightKg * (1 + reps / 30);
  const rounded = round(oneRepMax, 1);

  const percentages = [
    { label: "95% (2 reps)", pct: 0.95 },
    { label: "90% (3–4 reps)", pct: 0.9 },
    { label: "85% (5–6 reps)", pct: 0.85 },
    { label: "80% (7–8 reps)", pct: 0.8 },
    { label: "75% (9–10 reps)", pct: 0.75 },
  ].map(({ label, pct }) => ({
    label,
    weight: round(rounded * pct, 1),
  }));

  return { oneRepMax: rounded, percentages };
}

export function calculateWaterIntake(weightKg: number, activityLevel: "low" | "moderate" | "high"): WaterIntakeResult {
  if (weightKg <= 0) throw new Error("Weight must be greater than zero.");

  const baseMl = weightKg * 35;
  const activityBonus = activityLevel === "low" ? 0 : activityLevel === "moderate" ? 350 : 700;
  const ml = Math.round(baseMl + activityBonus);
  const liters = round(ml / 1000, 1);
  const glasses = Math.round(ml / 250);

  return { liters, glasses, ml };
}
