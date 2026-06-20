import { type ReactNode } from "react";

interface EditorialHeadlineProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "section" | "small";
  className?: string;
}

const sizeClasses = {
  hero: "text-[1.875rem] leading-[1.12] min-[390px]:text-[2.125rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem]",
  section: "text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl",
  small: "text-xl sm:text-3xl",
};

export function EditorialHeadline({
  children,
  as: Tag = "h2",
  size = "section",
  className = "",
}: EditorialHeadlineProps) {
  return (
    <Tag className={`headline-editorial ${sizeClasses[size]} ${className}`}>{children}</Tag>
  );
}

export function EditorialAccent({ children }: { children: ReactNode }) {
  return <em className="headline-accent">{children}</em>;
}

interface SplitHeadlineProps {
  lead: string;
  accent: string;
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "section" | "small";
  className?: string;
}

export function SplitHeadline({ lead, accent, as = "h2", size = "section", className = "" }: SplitHeadlineProps) {
  return (
    <EditorialHeadline as={as} size={size} className={className}>
      {lead} <EditorialAccent>{accent}</EditorialAccent>
    </EditorialHeadline>
  );
}
