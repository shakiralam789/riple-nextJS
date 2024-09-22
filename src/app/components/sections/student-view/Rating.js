import Star from "@/app/components/icons/Star";
import cn from "@/app/components/lib/cn";
import React from "react";

export default function Rating({ className = "", rating }) {
  const totalStars = 5;
  return (
    <ul
      className={cn(
        "text-riple-yellow flex gap-2 items-center flex-wrap",
        className
      )}
    >
      {[...Array(totalStars)].map((_, index) => (
        <li key={index}>
          {index < rating ? <Star className="text-riple-yellow" /> : <Star />}
        </li>
      ))}
    </ul>
  );
}
