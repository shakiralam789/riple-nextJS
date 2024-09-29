import React from "react";
import cn from "../lib/cn";

export default function TextArea({ className = "", ...rest }) {
  return <textarea {...rest} className={cn(`def-input`, className)}></textarea>;
}
