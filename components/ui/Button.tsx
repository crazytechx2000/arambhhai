"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "@/app/theme-provider";

type Variant = "primary" | "accent" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-bold transition-all duration-200 min-h-[44px] px-5 disabled:opacity-60 disabled:pointer-events-none active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-primary text-white shadow-[0_8px_24px_-8px_rgba(0,114,255,0.45)] hover:shadow-[0_14px_32px_-10px_rgba(0,114,255,0.55)] hover:brightness-110",
  accent:
    "bg-emerald-700 text-white shadow-[0_8px_24px_-8px_rgba(4,120,87,0.35)] hover:bg-emerald-600 hover:shadow-[0_14px_32px_-10px_rgba(4,120,87,0.45)]",
  secondary:
    "border border-border text-text shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-brand-primary/30 hover:bg-brand-primary/[0.04]",
  ghost: "text-brand-primary hover:bg-brand-primary/5",
};

const variantsOnDark: Record<Variant, string> = {
  primary:
    "bg-brand-primary text-white shadow-[0_8px_20px_-8px_rgba(0,114,255,0.45)] hover:shadow-[0_12px_28px_-10px_rgba(0,114,255,0.55)] hover:brightness-110",
  accent:
    "bg-emerald-600 text-white shadow-[0_8px_20px_-8px_rgba(4,120,87,0.35)] hover:bg-emerald-500 hover:shadow-[0_12px_28px_-10px_rgba(4,120,87,0.45)]",
  secondary:
    "border border-border-dark text-white shadow-[0_1px_2px_rgba(0,0,0,0.25)] hover:border-white/20 hover:bg-white/[0.06]",
  ghost: "text-brand-primary-light hover:bg-white/[0.06]",
};

const sizes: Record<Size, string> = {
  md: "text-[15px] h-11",
  lg: "text-[16px] h-12 px-6",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  onDark?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    onDark: onDarkProp,
    className,
    children,
  } = props;

  const { theme } = useTheme();
  const isDark = theme === "dark";
  const onDark = onDarkProp ?? isDark;

  const classes = cn(
    base,
    sizes[size],
    onDark ? variantsOnDark[variant] : variants[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
