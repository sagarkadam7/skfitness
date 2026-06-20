export type WeightUnit = "kg" | "lb";
export type LengthUnit = "cm" | "in";
export type HeightUnit = "cm" | "ft";

const KG_TO_LB = 2.2046226218;
const LB_TO_KG = 1 / KG_TO_LB;
const CM_TO_IN = 1 / 2.54;
const IN_TO_CM = 2.54;

export function round(value: number, decimals = 1): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function kgToLb(kg: number): number {
  return round(kg * KG_TO_LB, 1);
}

export function lbToKg(lb: number): number {
  return round(lb * LB_TO_KG, 2);
}

export function cmToIn(cm: number): number {
  return round(cm * CM_TO_IN, 1);
}

export function inToCm(inches: number): number {
  return round(inches * IN_TO_CM, 2);
}

export function cmToFeetInches(cm: number): { feet: number; inches: number } {
  const totalInches = cm * CM_TO_IN;
  const feet = Math.floor(totalInches / 12);
  const inches = round(totalInches - feet * 12, 1);
  return { feet, inches };
}

export function feetInchesToCm(feet: number, inches: number): number {
  return inToCm(feet * 12 + inches);
}

export function formatWeight(kg: number, unit: WeightUnit): string {
  return unit === "kg" ? `${round(kg, 1)} kg` : `${kgToLb(kg)} lb`;
}

export function formatLength(cm: number, unit: LengthUnit): string {
  return unit === "cm" ? `${round(cm, 1)} cm` : `${cmToIn(cm)} in`;
}

export function convertWeightDisplay(value: string, from: WeightUnit, to: WeightUnit): string {
  const num = parseFloat(value);
  if (!value.trim() || !Number.isFinite(num) || num <= 0) return value;
  if (from === to) return value;
  const kg = from === "kg" ? num : lbToKg(num);
  const converted = to === "kg" ? kg : kgToLb(kg);
  return String(round(converted, to === "kg" ? 1 : 1));
}

export function convertLengthDisplay(value: string, from: LengthUnit, to: LengthUnit): string {
  const num = parseFloat(value);
  if (!value.trim() || !Number.isFinite(num) || num <= 0) return value;
  if (from === to) return value;
  const cm = from === "cm" ? num : inToCm(num);
  const converted = to === "cm" ? cm : cmToIn(cm);
  return String(round(converted, 1));
}

export function parseWeightToKg(value: string, unit: WeightUnit): number | null {
  const num = parseFloat(value.trim());
  if (!Number.isFinite(num) || num <= 0) return null;
  return unit === "kg" ? num : lbToKg(num);
}

export function parseLengthToCm(value: string, unit: LengthUnit): number | null {
  const num = parseFloat(value.trim());
  if (!Number.isFinite(num) || num <= 0) return null;
  return unit === "cm" ? num : inToCm(num);
}

export function parseHeightToCm(
  heightUnit: HeightUnit,
  cmValue: string,
  feetValue: string,
  inchesValue: string
): number | null {
  if (heightUnit === "cm") {
    return parseLengthToCm(cmValue, "cm");
  }
  const ft = parseFloat(feetValue);
  const inches = parseFloat(inchesValue);
  if (!Number.isFinite(ft) || ft < 0 || !Number.isFinite(inches) || inches < 0) return null;
  const totalCm = feetInchesToCm(ft, inches);
  return totalCm > 0 ? totalCm : null;
}

/** Convert stored cm height fields when switching height unit */
export function heightCmToFields(cm: number, unit: HeightUnit): { cm: string; feet: string; inches: string } {
  if (unit === "cm") {
    return { cm: String(round(cm, 1)), feet: "", inches: "" };
  }
  const { feet, inches } = cmToFeetInches(cm);
  return { cm: "", feet: String(feet), inches: String(inches) };
}

export const WEIGHT_UNITS: { id: WeightUnit; label: string }[] = [
  { id: "kg", label: "Kg" },
  { id: "lb", label: "Lb" },
];

export const LENGTH_UNITS: { id: LengthUnit; label: string }[] = [
  { id: "cm", label: "Cm" },
  { id: "in", label: "In" },
];

export const HEIGHT_UNITS: { id: HeightUnit; label: string }[] = [
  { id: "cm", label: "Cm" },
  { id: "ft", label: "Ft / In" },
];

export const ML_TO_OZ = 0.033814;

export function mlToOz(ml: number): number {
  return round(ml * ML_TO_OZ, 0);
}

export function mlToCups(ml: number): number {
  return round(ml / 236.588, 1);
}
