import React from "react";
import Link from "next/link";
import cn from "../lib/cn";

export default function SecondaryButton({ className = "", children, href, ...rest }) {
  if (href) {
    return (
      <Link href={href} {...rest} className={cn("btn-secondary", className)}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} className={cn("btn-primary", className)}>
      {children}
    </button>
  );
}
