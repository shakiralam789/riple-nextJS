import Image from "next/image";
import Link from "next/link";
import React from "react";
import TwitterIcon from "../../icons/TwitterIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import MsgIcon from "../../icons/MsgIcon";
import Telephone from "../../icons/Telephone";
import Location from "../../icons/LocationIcon";
import PrimaryButton from "../../Button/PrimaryButton";
import JoinUs from "../../sections/JoinUs";

export default function Footer() {
  return (
    <>
      <JoinUs />
      <footer
        style={{ paddingTop: "var(--join-us-height)" }}
        className={`inviter bg-dark2 overflow-hidden`}
      >
        <div className="container relative font-18 py-20 text-white 2xl:py-24">
          <Image
            className="hidden 2xl:block pointer-events-none w-[150px] 2xl:w-[200px] absolute top-[2%] 2xl:top-[10%] left-0 2xl:left-auto 2xl:right-full z-0"
            src="/images/circles/item.png"
            width={200}
            height={150}
            alt=""
          />
          <Image
            className="hidden sm:block pointer-events-none w-[60px] 2xl:w-auto move-x absolute bottom-[5%] 2xl:bottom-[20%] left-0 2xl:left-[-10%] z-0"
            src="/images/circles/item2.png"
            width={60}
            height={60}
            alt=""
          />
          <Image
            className="hidden 2xl:block pointer-events-none w-[40px] 2xl:w-auto move-y absolute bottom-[20%] right-[5%] 2xl:right-[-10%] z-0"
            src="/images/circles/item-up.png"
            width={40}
            height={40}
            alt=""
          />

          <div className="relative z-10 grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <Link className="mb-4 block w-[200px] 2xl:w-[300px]" href="/">
                <Image
                  className="w-full"
                  src="/images/logo-white.png"
                  width={300}
                  height={200}
                  alt=""
                />
              </Link>
              <p className="mb-10 text-gray-light leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod commo mollit anim id est laborum.
              </p>

              <h3 className="font-30 mb-7 capitalize">Follow us</h3>
              <div className="flex items-center flex-wrap gap-4">
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
            </div>
            <div className="lg:pl-8">
              <h3 className="font-30 mb-7 capitalize">Services</h3>
              <ul className="space-y-4">
                <li className="capitalize">
                  <Link
                    className=" duration-300 text-gray-light hover:text-primary leading-loose"
                    href="/"
                  >
                    Air Condition
                  </Link>
                </li>
                <li className="capitalize">
                  <Link
                    className=" duration-300 text-gray-light hover:text-primary leading-loose"
                    href="/"
                  >
                    Appliance Repair
                  </Link>
                </li>
                <li className="capitalize">
                  <Link
                    className=" duration-300 text-gray-light hover:text-primary leading-loose"
                    href="/"
                  >
                    Electrical Work
                  </Link>
                </li>
                <li className="capitalize">
                  <Link
                    className=" duration-300 text-gray-light hover:text-primary leading-loose"
                    href="/"
                  >
                    Home Maintenance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:pl-8">
              <h3 className="font-30 mb-7 capitalize">Contact</h3>
              <ul className="space-y-4">
                <li className="capitalize flex gap-3">
                  <MsgIcon className="text-primary w-5 2xl:w-7" />
                  <Link
                    type="email"
                    className="duration-300 text-gray-light hover:text-primary leading-loose"
                    href="/"
                  >
                    riple @agency.com
                  </Link>
                </li>
                <li className="capitalize flex gap-3">
                  <Telephone className="text-primary w-5 2xl:w-7" />
                  <Link
                    className="duration-300 text-gray-light hover:text-primary leading-loose"
                    href="/"
                  >
                    +62813 3795 3255
                  </Link>
                </li>
                <li className="capitalize flex gap-3">
                  <Location className="text-primary w-5 2xl:w-7" />
                  <Link
                    className="duration-300 text-gray-light hover:text-primary leading-loose"
                    href="/"
                  >
                    SJalan By Pass Rai No.349 Khulna, City, Triple Web Lab
                  </Link>
                </li>
              </ul>
            </div>
            <div className="xl:pl-8">
              <h3 className="font-30 mb-7 capitalize">Subscribe Letter</h3>
              <p className="text-gray-light">
                By subscribing to our mailing list you will always be updated
              </p>
              <input
                className="mt-6 2xl:mt-8 outline-none placeholder:text-gray-500 w-full bg-dark-green/20 h-[50px] 2xl:h-[60px] px-4 2xl:px-5"
                placeholder="Enter your email"
                type="email"
              />
              <PrimaryButton className="mt-6">Subscribe now</PrimaryButton>
            </div>
          </div>
        </div>
        <div id="copy-right" className="bg-dark-green font-18 text-white">
          <div className="container py-6 items-center sm: sm:justify-between flex flex-col sm:flex-row gap-2 flex-wrap leading-loose">
            <span>© riple Web Lab 2024 Design by shakir alam</span>
            <ul className="flex gap-6">
              <li>
                <Link className="hover:text-primary duration-300" href="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary duration-300" href="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary duration-300" href="/">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
