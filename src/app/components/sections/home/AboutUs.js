import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";
import CheckIcon from "../../icons/CheckIcon";

const aboutUsItems = [
  {
    title: "Innovative Solutions",
  },
  {
    title: "Commitment to Quality",
  },
  {
    title: "Unlimited Success",
  },
  {
    title: "Client - Centric Approach",
  },
];

export default function AboutUs() {
  return (
    <section className="relative bg-dark2 py-24 2xl:py-28 overflow-hidden">
      <Image
        className="w-[190px] pointer-events-none absolute top-0 left-0"
        src="/images/circles/Subtract.png"
        width={100}
        height={100}
        alt=""
      />
      <div className="container relative">
        <Image
          className="hidden sm:block pointer-events-none w-[150px] 2xl:w-[200px] absolute top-[2%] 2xl:top-[10%] right-0 2xl:right-auto 2xl:left-full z-0"
          src="/images/circles/item.png"
          width={200}
          height={150}
          alt=""
        />
        <Image
          className="hidden sm:block pointer-events-none w-[60px] 2xl:w-auto move-x absolute bottom-[-56px] 2xl:bottom-0 mt-4 right-4 2xl:right-[-10%]"
          src="/images/circles/item2.png"
          width={60}
          height={60}
          alt=""
        />
        <div className="flex flex-wrap items-center -mx-4">
          <div className="relative w-10/12 sm:w-8/12 md:w-4/12 px-4 mb-8 md:mb-">
            <Image
              className="w-[13px] hidden sm:block pointer-events-none absolute top-1/4 -translate-y-1.2 right-[-60px]"
              src="/images/circles/Ellipse3.png"
              width={100}
              height={100}
              alt=""
            />
            <Image
              className="w-[28px] hidden sm:block pointer-events-none absolute top-0 right-0"
              src="/images/circles/Vector.png"
              width={100}
              height={100}
              alt=""
            />
            <Image
              className="w-[29px] hidden sm:block pointer-events-none absolute top-0 left-2"
              src="/images/circles/item6.png"
              width={100}
              height={100}
              alt=""
            />
            <Image
              className="w-[48px] hidden sm:block pointer-events-none absolute top-1/2 -translate-y-1/2 left-full ml-4"
              src="/images/circles/item4.png"
              width={100}
              height={100}
              alt=""
            />

            <Image
              className="w-full"
              src="/images/about-us-image.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="w-full md:w-8/12 lg:pl-20 px-4">
            <SectionTitle title="about us" descClass="text-white">
              We Care And Response{" "}
              <span className="text-primary">
                Quickly The Key Of Our Success
              </span>
            </SectionTitle>
            <p className="font-18 text-gray-light mt-6 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>

            <ul className="mt-6 space-y-4 font-18 text-white capitalize">
              {aboutUsItems.map((item, index) => (
                <li key={index} className="flex items-center gap-x-6 gap-y-3">
                  <CheckIcon />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
