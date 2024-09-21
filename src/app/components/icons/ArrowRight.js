import React from "react";
import cn from "../lib/cn";

export default function ArrowRight({className = ""}) {
  return (
    <svg
      className={cn("size-5 2xl:size-6",className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      ></path>
    </svg>
  );
}
