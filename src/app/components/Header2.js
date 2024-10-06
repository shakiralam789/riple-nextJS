import React from "react";
import cn from "./lib/cn";

export default function Header2({
  tag = "h2",
  children,
  className = "",
  ...props
}) {
  return (
    <tag {...props} className={cn("font-24 font-medium text-dark2", className)}>
      {children}
    </tag>
  );
}
