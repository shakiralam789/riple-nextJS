"use client";

import React, { useState, forwardRef } from "react";
import CloseEyeSvg from "../icons/CloseEyeSvg";
import OpenEyeSvg from "../icons/OpenEyeSvg";
import cn from "../lib/cn";
import Input from "./input";

const PasswordInput = forwardRef(({ className = "", ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className={cn("relative", className)}>
      <Input
        ref={ref}
        placeholder={rest.placeholder ? rest.placeholder : "Password"}
        className={"pr-10"}
        type={showPassword ? "text" : "password"}
        {...rest}
      />
      <button
        onClick={handleShowPassword}
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        {showPassword ? <CloseEyeSvg /> : <OpenEyeSvg />}
      </button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
