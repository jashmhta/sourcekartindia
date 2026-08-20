"use client";

import Link from "next/link";
import { ArrowRight } from "./Icons";
import { Magnetic } from "../dynamics/MagneticButton";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "outline" | "filled" | "filled-dark";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "outline",
  className = "",
}: Props) {
  if (variant === "filled") {
    const isExternal = href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");
    return (
      <Magnetic strength={0.25}>
        {isExternal ? (
          <a href={href} className={`btn-filled group ${className}`}>
            <span>{children}</span>
            <span className="btn-filled-icon">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
        ) : (
          <Link href={href} className={`btn-filled group ${className}`}>
            <span>{children}</span>
            <span className="btn-filled-icon">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        )}
      </Magnetic>
    );
  }

  if (variant === "filled-dark") {
    return (
      <Magnetic strength={0.25}>
        <Link
          href={href}
          className={`inline-flex items-center gap-2.5 rounded-full bg-[#0f1f10] py-1.5 pl-[18px] pr-1.5 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[#c6f19d] transition hover:brightness-110 ${className}`}
        >
          <span>{children}</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#c6f19d] text-[#0f1f10]">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </Magnetic>
    );
  }

  const isExternal = href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");
  return (
    <Magnetic strength={0.25}>
      {isExternal ? (
        <a href={href} className={`btn-primary group ${className}`}>
          <span>{children}</span>
          <span className="btn-primary-icon">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </a>
      ) : (
        <Link href={href} className={`btn-primary group ${className}`}>
          <span>{children}</span>
          <span className="btn-primary-icon">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      )}
    </Magnetic>
  );
}
