import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-bmw text-white shadow-[0_12px_30px_rgba(0,114,206,0.28)] hover:bg-[#005fac] focus-visible:ring-bmw",
  secondary:
    "bg-white text-ink ring-1 ring-black/10 hover:bg-slate-50 focus-visible:ring-bmw",
  dark: "bg-graphite text-white hover:bg-black focus-visible:ring-graphite",
  ghost: "bg-transparent text-ink hover:bg-white/70 focus-visible:ring-bmw"
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel
}: CTAButtonProps) {
  const classNames = `inline-flex min-h-12 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`;
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classNames} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classNames} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
