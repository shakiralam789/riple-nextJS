import React from "react";
import MsgIcon from "../../icons/MsgIcon";
import Location from "../../icons/LocationIcon";
import Telephone from "../../icons/Telephone";
import TwitterIcon from "../../icons/TwitterIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import Link from "next/link";
import SocialIconsCom from "../../SocialIconsCom";

export default function TopNav() {
  return (
    <section className="hidden md:block relative bg-dark-green py-3">
      <div className="absolute w-1/2 top-0 left-0 h-full block bg-primary">
        <div className="triangle absolute left-full top- bg-primary"></div>
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 items-center">
          <div className="text-white md:text-dark2 font-18 flex justify-center md:justify-start flex-wrap gap-x-6 gap-y-2">
            <div className="flex gap-2 items-center">
              <MsgIcon />
              <span className="break-all">hello@triple.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <Location />
              <span className="break-all">Shonadanga, Khulna</span>
            </div>
            <div className="flex gap-2 items-center">
             <Telephone />
              <span className="break-all">+8801952319889</span>
            </div>
          </div>
          <SocialIconsCom className="justify-center md:justify-end md:pl-10"/>
        </div>
      </div>
    </section>
  );
}
