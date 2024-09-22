import Location from "@/app/components/icons/LocationIcon";
import MsgIcon from "@/app/components/icons/MsgIcon";
import Telephone from "@/app/components/icons/Telephone";
import SocialIconsCom from "@/app/components/SocialIconsCom";
import React from "react";

export default function SidebarSocial() {
  return (
    <>
      <div className="py-8 px-4 border-b border-b-para space-y-5 text-gray-light font-18 gap-y-2">
        <div className="flex gap-2 items-center justify-end">
          <span className="break-all">hello@triple.com</span>
          <MsgIcon />
        </div>
        <div className="flex gap-2 items-center justify-end">
          <span className="break-all">Shonadanga, Khulna</span>
          <Location />
        </div>
        <div className="flex gap-2 items-center justify-end">
          <span className="break-all">+8801952319889</span>
          <Telephone />
        </div>
      </div>

      <SocialIconsCom className="py-8 px-4 border-b border-b-para justify-end" />
    </>
  );
}
