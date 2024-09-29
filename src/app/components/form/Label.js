import React from "react";
import cn from "../lib/cn";

export default function Label({ className = "", children, ...rest }) {
  return (
    <label {...rest} className={cn(`def-label mb-2`, className)}>
      {children}
    </label>
  );
}
