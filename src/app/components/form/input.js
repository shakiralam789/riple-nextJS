import React from "react";
import cn from "../lib/cn";

export default function Input({ className = "", type = "text", ...rest }) {
  return <input {...rest} className={cn(`def-input`, className)} type={type} />;
}
