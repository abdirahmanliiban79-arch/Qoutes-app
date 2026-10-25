import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";

const styles =
  "inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-glass-strong hover:text-ink aria-pressed:text-coral";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
}

export default function IconButton({ label, children, className = "", type = "button", ...props }: IconButtonProps) {
  return (
    <button type={type} aria-label={label} title={label} className={`${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

interface IconLinkProps extends ComponentProps<typeof Link> {
  label: string;
}

export function IconLink({ label, children, className = "", ...props }: IconLinkProps) {
  return (
    <Link aria-label={label} title={label} className={`${styles} ${className}`} {...props}>
      {children}
    </Link>
  );
}
