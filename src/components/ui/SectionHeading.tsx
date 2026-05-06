import { type ReactNode } from "react";

type BadgeVariant = "accent" | "celeste" | "yellow" | "default";

type SectionHeadingProps = {
  badge?: string;
  badgeVariant?: BadgeVariant;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
};

const badgeStyles: Record<BadgeVariant, string> = {
  accent: "text-red bg-red/10",
  celeste: "text-celeste-dark bg-celeste/10",
  yellow: "text-yellow-dark bg-yellow/10",
  default: "text-charcoal-light bg-surface-alt",
};

export default function SectionHeading({
  badge,
  badgeVariant = "accent",
  title,
  description,
  children,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {badge && (
        <span
          className={`inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full w-fit ${badgeStyles[badgeVariant]}`}
        >
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl tracking-tighter leading-[0.95] font-bold text-charcoal">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-warm-gray leading-relaxed max-w-[60ch]">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
