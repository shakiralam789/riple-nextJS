import PrimaryButton from "@/app/components/Button/PrimaryButton";
import UserIcon from "@/app/components/icons/UserIcon";
import React from "react";

export default function AuthAction() {
  return (
    <PrimaryButton href={"/"} className="hidden md:flex items-center gap-2">
      <span>login</span>
      <UserIcon />
    </PrimaryButton>
  );
}
