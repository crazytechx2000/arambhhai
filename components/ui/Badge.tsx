import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "brand";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[12px] font-medium leading-none",
        tone === "brand"
          ? "border-brand-primary/30 bg-brand-primary/8 text-brand-primary"
          : "border-border text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
