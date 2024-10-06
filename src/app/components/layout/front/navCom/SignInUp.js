import SecondaryButton from "@/app/components/Button/SecondaryButton";
import CheckBox from "@/app/components/form/CheckBox";
import Input from "@/app/components/form/input";
import Label from "@/app/components/form/Label";
import Modal from "@/app/components/form/Modal";
import PasswordInput from "@/app/components/form/PasswordInput";
import React from "react";

export default function SignUp({
  isSignUpModal,
  setIsSignUpModal,
  setIsLoginModal,
}) {
  function handleAlreadySingIn() {
    setIsLoginModal(true);
    setIsSignUpModal(false);
  }
  
  return (
    <Modal
      className="max-w-[550px] !w-[450px] 2xl:!w-[550px]"
      headerClassName="bg-white"
      resetClassName="top-6"
      title="Sign in"
      setShowPanel={setIsSignUpModal}
      showPanel={isSignUpModal}
      form={true}
    >
      <div className="grid grid-cols-1 gap-6 2xl:gap-8">
        <div>
          <Label>Username</Label>
          <Input placeholder="Username" />
        </div>
        <div>
          <Label>First name</Label>
          <Input placeholder="First name" />
        </div>
        <div>
          <Label>Last name</Label>
          <Input placeholder="Last name" />
        </div>
        <div>
          <Label>Email</Label>
          <Input placeholder="Email" />
        </div>
        <div>
          <Label>Password</Label>
          <PasswordInput placeholder="Password" />
        </div>
        <div>
          <Label>Confirm password</Label>
          <PasswordInput placeholder="Confirm password" />
        </div>
        <div className="flex justify-between flex-wrap">
          <CheckBox label="Remember me" />
        </div>
        <SecondaryButton className="text-white">Sign Up</SecondaryButton>
        <div className="text-para font-18">
          Already have an account?{" "}
          <button
            onClick={handleAlreadySingIn}
            className="text-primary underline px-3"
          >
            Sign in
          </button>
        </div>
      </div>
    </Modal>
  );
}
