"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "outline" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "artisan-gradient text-panq-on-primary shadow-[var(--shadow-ambient)]",
  secondary:
    "bg-panq-secondary-container text-panq-on-secondary-container",
  tertiary:
    "bg-panq-tertiary-container text-panq-on-tertiary-container",
  outline:
    "bg-transparent text-panq-primary border border-panq-outline-variant/20",
  text:
    "bg-transparent text-panq-primary",
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full px-6 py-3
        font-semibold text-[0.875rem] leading-tight
        transition-transform duration-150 ease-out
        active:scale-[0.98]
        disabled:opacity-50 disabled:pointer-events-none
        cursor-pointer
        ${variantStyles[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
