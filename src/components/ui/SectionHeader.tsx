import { type ReactNode } from "react";
import { EditorialHeadline } from "@/components/ui/EditorialHeadline";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <p className={`section-label ${align === "center" ? "justify-center" : ""}`}>{label}</p>
      <EditorialHeadline
        as="h2"
        size="section"
        className={`mt-5 ${dark ? "text-background" : ""}`}
      >
        {title}
      </EditorialHeadline>
      {description && (
        <p
          className={`mt-4 font-sans text-sm leading-relaxed sm:mt-5 sm:text-base lg:text-lg ${
            dark ? "text-background/70" : "text-muted"
          } ${align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
