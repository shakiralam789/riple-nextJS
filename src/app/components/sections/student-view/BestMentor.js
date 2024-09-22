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

export default function BestMentor() {
  return (
    <section className="relative bg-dark2 py-24 2xl:py-28 overflow-hidden">
      <Image
        className="pointer-events-none absolute top-0 left-0"
        src="/images/circles/Subtract.png"
        alt=""
        width={100}
        height={100}
      />
      <div className="container relative">
        <Image
          className="hidden sm:block pointer-events-none w-[150px] 2xl:w-[200px] absolute top-[2%] 2xl:top-[10%] right-0 2xl:right-auto 2xl:left-full z-0"
          src="/images/circles/item.png"
          alt=""
          width={200}
          height={150}
        />
        <Image
          className="hidden sm:block pointer-events-none w-[60px] 2xl:w-auto move-x absolute bottom-[-56px] 2xl:bottom-0 mt-4 right-4 2xl:right-[-10%]"
          src="/images/circles/item2.png"
          alt=""
          width={60}
          height={60}
        />
        <div className="flex flex-wrap items-center -mx-4">
          <div className="order-2 md:order-1 w-full md:w-7/12 lg:pr-16 px-4">
            <SectionTitle descClass="text-white" title="THE BEST MENTORS">
              We Care And Response
              <span className="text-primary px-2">
                Quickly Online Class From The Best Mentors
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
          <div className="order-1 md:order-2 relative md:ml-auto w-10/12 sm:w-8/12 md:w-4/12 px-4 mb-8 md:mb-0">
            <Image
              className="w-[13px] hidden sm:block pointer-events-none absolute top-1/4 -translate-y-1.2 right-[-60px]"
              src="/images/circles/Ellipse3.png"
              alt=""
              width={100}
              height={100}
            />
            <Image
              className="w-[28px] hidden sm:block pointer-events-none absolute top-0 right-0"
              src="/images/circles/Vector.png"
              alt=""
              width={100}
              height={100}
            />
            <Image
              className="w-[29px] hidden sm:block pointer-events-none absolute top-0 left-2"
              src="/images/circles/item6.png"
              alt=""
              width={100}
              height={100}
            />
            <Image
              className="hidden sm:block pointer-events-none absolute top-1/2 -translate-y-1/2 left-full ml-4"
              src="/images/circles/item4.png"
              alt=""
              width={100}
              height={100}
            />
            <Image
              className="w-full"
              src="/images/about-us-image.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
