import Link from "next/link";
import React from "react";
import TwitterIcon from "./icons/TwitterIcon";
import FacebookIcon from "./icons/FacebookIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import InstagramIcon from "./icons/InstagramIcon";
import cn from "./lib/cn";

export default function SocialIconsCom({className = ""}) {
  return (
    <div className={cn("flex flex-wrap gap-4 text-white", className)}>
      <Link
        href={"/"}
        className="size-[24px] 2xl:size-[30px] rounded-full border border-white flex items-center justify-center"
      >
        <TwitterIcon />
      </Link>
      <Link
        href={"/"}
        className="size-[24px] 2xl:size-[30px] rounded-full border border-white flex items-center justify-center"
      >
        <FacebookIcon />
      </Link>
      <Link
        href={"/"}
        className="size-[24px] 2xl:size-[30px] rounded-full border border-white flex items-center justify-center"
      >
        <LinkedInIcon />
      </Link>
      <Link
        href={"/"}
        className="size-[24px] 2xl:size-[30px] rounded-full border border-white flex items-center justify-center"
      >
        <InstagramIcon />
      </Link>
    </div>
  );
}
