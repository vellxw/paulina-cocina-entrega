import { type ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent" | "celeste" | "yellow";
  className?: string;
};

const variants = {
  default: "bg-surface-alt text-charcoal-light",
  accent: "bg-accent/10 text-accent",
  celeste: "bg-celeste/10 text-celeste-dark",
  yellow: "bg-yellow/10 text-yellow-dark",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-medium tracking-wide uppercase px-2.5 py-1 rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
