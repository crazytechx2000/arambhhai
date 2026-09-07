import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  onDark = false,
  className,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-[26px] leading-[1.2] sm:text-[32px] md:text-[38px] font-bold tracking-tight",
          onDark ? "text-white" : "text-text"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-[16px] sm:text-[17px] leading-relaxed",
            onDark ? "text-text-on-dark-muted" : "text-text-muted"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
