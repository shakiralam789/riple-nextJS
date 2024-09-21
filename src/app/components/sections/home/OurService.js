import React from "react";
import SectionTitle from "../SectionTitle";
import LineSvg2 from "./OurSerivce/LineSvg2";
import LineSvg1 from "./OurSerivce/LineSvg1";
import ArrowRight from "../../icons/ArrowRight";
import Card1Svg from "./OurSerivce/Card1Svg";
import Card2Svg from "./OurSerivce/Card2Svg";
import Card3Svg from "./OurSerivce/Card3Svg";
import Card4Svg from "./OurSerivce/Card4Svg";
import Link from "next/link";
import SecondaryButton from "../../Button/SecondaryButton";

let ourServiceItems = [
  {
    title: "WordPress Theme Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?",
    icon: <Card1Svg />,
    link: "/",
  },
  {
    title: "Website design & Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?",
    icon: <Card2Svg />,
    link: "/",
  },
  {
    title: "AI Prompt & Image Generative",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?",
    icon: <Card3Svg />,
    link: "/",
  },
  {
    title: "Digital Marketing and SEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?",
    icon: <Card4Svg />,
    link: "/",
  },
];

export default function OurService() {
  return (
    <section className="py-24 2xl:py-28">
      <div className="container">
        <div className="w-full md:w-[90%] lg:w-[60%] mx-auto text-center">
          <SectionTitle title={"our services"}>
            We Provide Promising Services For Digital Business
          </SectionTitle>
        </div>
        <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:gap-6">
          {ourServiceItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-light2 hover:bg-dark-green group flex flex-col justify-between px-4 2xl:px-6 py-8 2xl:py-10 space-y-4 2xl:space-y-6"
            >
              <div className="space-y-4 2xl:space-y-6">
                <div>{item.icon}</div>
                <p className="font-30 text-dark-green group-hover:text-white leading-loose">
                  {item.title}
                </p>
                <LineSvg1 />
                <LineSvg2 />

                <p className="font-18 text-para group-hover:text-white leading-loose">
                  {item.desc}
                </p>
              </div>
              <Link
                href={item.link}
                className="w-full cursor-pointer min-w-fit px-4 font-18 2xl:px-6 py-3 2xl:py-3.5 border-dark-green group-hover:border-white border text-dark-green group-hover:text-white uppercase flex justify-between items-center gap-2 mt-8"
              >
                <span>learn more</span>
                <ArrowRight />
              </Link>
            </div>
          ))}
        </div>

        <SecondaryButton className="w-fit mx-auto flex items-center gap-2 mt-10">
          <span>All services</span>
          <ArrowRight />
        </SecondaryButton>
      </div>
    </section>
  );
}
