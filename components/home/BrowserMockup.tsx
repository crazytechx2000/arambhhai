import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BrowserMockup({
  children,
  className,
  compact = false,
}: {
  children?: ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[0_20px_60px_-24px_rgba(15,17,23,0.25)]",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-[#f4f5f7] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div
        className={cn(
          "relative overflow-hidden",
          compact ? "aspect-[4/3]" : "aspect-[4/3] sm:aspect-[16/11]"
        )}
      >
        {children ?? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-primary/10 via-brand-indigo/10 to-brand-accent/10">
            <div className="h-8 w-8 rounded-md bg-brand-primary/20" />
          </div>
        )}
      </div>
    </div>
  );
}
