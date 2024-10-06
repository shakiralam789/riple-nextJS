import SecondaryButton from "@/app/components/Button/SecondaryButton";
import CheckBox from "@/app/components/form/CheckBox";
import Input from "@/app/components/form/input";
import Label from "@/app/components/form/Label";
import Modal from "@/app/components/form/Modal";
import PasswordInput from "@/app/components/form/PasswordInput";
import Link from "next/link";
import React from "react";

export default function SignIn({ isLoginModal, setIsLoginModal, setIsSignUpModal }) {
  function handleAlreadySingUp() {
    setIsLoginModal(false);
    setIsSignUpModal(true);
  }
  return (
    <Modal
      className="max-w-[550px] !w-[450px] 2xl:!w-[550px]"
      headerClassName="bg-white"
      resetClassName="top-6"
      title="Sign in"
      setShowPanel={setIsLoginModal}
      showPanel={isLoginModal}
      form={true}
    >
      <div className="grid grid-cols-1 gap-6 2xl:gap-8">
        <div>
          <Label>Username</Label>
          <Input placeholder="Username" />
        </div>
        <div>
          <Label>Password</Label>
          <PasswordInput placeholder="Password" />
        </div>
        <div className="flex justify-between flex-wrap">
          <CheckBox label="Remember me" />
          <Link className="text-primary hover:underline font-18" href="#">
            Forget password?
          </Link>
        </div>
        <SecondaryButton className="text-white">Sign in</SecondaryButton>
        <div className="text-para font-18">
          Don&apos;t have an account?{" "}
          <button
            onClick={handleAlreadySingUp}
            href="#"
            className="text-primary underline px-3"
          >
            Sign up
          </button>
        </div>
      </div>
    </Modal>
  );
}
