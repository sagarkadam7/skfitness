import { siteConfig } from "@/lib/data";

export type LeadPayload = {
  type?: "booking" | "newsletter";
  name?: string;
  email?: string;
  phone?: string;
  goal?: string;
  experience?: string;
  message?: string;
  injuries?: string;
  preferredPlan?: string;
};

const planLabels: Record<string, string> = {
  "": "Not sure yet",
  starter: "Starter",
  premium: "Premium",
  elite: "Elite",
  package: "3+ month package",
};

export function formatLeadMessage(form: LeadPayload): string {
  if (form.type === "newsletter") {
    return `Hi Sagar! I'd like to join the SK Fitness newsletter.\n\nEmail: ${form.email}`;
  }

  const lines = [
    "Hi Sagar! I want to book a FREE discovery call.",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    `Goal: ${form.goal}`,
    `Experience: ${form.experience}`,
    form.preferredPlan !== undefined
      ? `Plan interest: ${planLabels[form.preferredPlan ?? ""] ?? form.preferredPlan}`
      : null,
    form.injuries ? `Health notes: ${form.injuries}` : null,
    form.message ? `Notes: ${form.message}` : null,
    "",
    "Sent from skfitness website",
  ];

  return lines.filter(Boolean).join("\n");
}

export function buildWhatsAppUrl(form: LeadPayload): string {
  const text = encodeURIComponent(formatLeadMessage(form));
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

export function formatLeadEmailBody(form: LeadPayload): string {
  return formatLeadMessage(form).replace(/\n/g, "<br>");
}
