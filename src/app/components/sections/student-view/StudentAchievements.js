import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";
import Progress from "../../Progress";

export default function StudentAchievements() {
  return (
    <section className="bg-dark2 py-24 2xl:py-28 overflow-hidden">
      <div className="container relative">
        <Image
          className="hidden 2xl:block pointer-events-none w-[150px] 2xl:w-[200px] absolute top-[2%] 2xl:top-[10%] left-0 2xl:left-auto 2xl:right-full z-0"
          src="/images/circles/item.png"
          width={200}
          height={150}
          alt=""
        />
        <Image
          className="hidden sm:block pointer-events-none w-[60px] 2xl:w-auto move-x absolute bottom-[-56px] 2xl:bottom-0 mt-4 left-4 2xl:left-[-10%]"
          src="/images/circles/item2.png"
          width={60}
          height={60}
          alt=""
        />
        <div className="flex flex-wrap items-center -mx-4">
          <div className="order-2 md:order-1 w-full md:w-7/12 lg:pr-20 px-4">
            <SectionTitle
              title="OUR STUDENT ACHIEVEMENTS"
              descClass="text-white"
            >
              We Provide Any Solution Using Tech Services
            </SectionTitle>
            <p className="font-18 text-gray-light mt-6 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <div className="mt-16 2xl:mt-20 space-y-12">
              <Progress
                label="Business Strategy"
                bgClass="bg-green-light"
                value="60%"
              />
              <Progress
                label="Job achievement"
                bgClass="bg-primary"
                value="78%"
              />
              <Progress
                label="Product Development"
                bgClass="bg-primary"
                value="96%"
              />
            </div>
          </div>
          <div className="relative order-1 md:order-2 md:pl-16 w-10/12 sm:w-8/12 md:w-5/12 px-4 mb-8 md:mb-0">
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
        </div>
      </div>
    </section>
  );
}
