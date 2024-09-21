import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <>
      <Image
        className="hidden md:block w-[200px] 2xl:w-[300px]"
        src="/images/logo.png"
        alt=""
        width={200}
        height={200}
      />
      <Image
        className="block md:hidden w-12"
        src="/images/logo-responsive.png"
        width={48}
        height={48}
        alt=""
      />
    </>
  );
}
