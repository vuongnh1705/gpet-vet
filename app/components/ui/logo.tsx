"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "../../lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  href?: string;
}

export function Logo({ variant = "dark", className, href = "/" }: LogoProps) {
  const logoContent = (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/logo.svg"
        alt="GPET Vet Logo"
        width={60}
        height={60}
        className={cn(
          "h-auto",
          variant === "light" ? "brightness-0 invert" : ""
        )}
        priority
      />
    </div>
  );

  if (href) {
    return <Link href={href}>{logoContent}</Link>;
  }

  return logoContent;
}
