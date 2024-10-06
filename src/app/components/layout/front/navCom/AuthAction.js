"use client";
import PrimaryButton from "@/app/components/Button/PrimaryButton";
import UserIcon from "@/app/components/icons/UserIcon";
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignInUp";

export default function AuthAction() {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isSignUpModal, setIsSignUpModal] = useState(false);
  const user = true;
  return (
    <div>
      {user ? (
        <PrimaryButton
          onClick={() => setIsLoginModal(true)}
          className="hidden md:flex items-center gap-2"
        >
          <span>Sign in</span>
          <UserIcon />
        </PrimaryButton>
      ) : (
        <PrimaryButton
          onClick={() => setIsSignUpModal(true)}
          className="hidden md:flex items-center gap-2"
        >
          <span>Sign up</span>
          <UserIcon />
        </PrimaryButton>
      )}

      {isLoginModal && (
        <SignIn setIsSignUpModal={setIsSignUpModal} isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />
      )}

      {isSignUpModal && (
        <SignUp
        setIsLoginModal={setIsLoginModal}
          isSignUpModal={isSignUpModal}
          setIsSignUpModal={setIsSignUpModal}
        />
      )}
    </div>
  );
}
