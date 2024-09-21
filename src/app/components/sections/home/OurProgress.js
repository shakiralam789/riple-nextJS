import React from "react";
import SectionTitle from "../SectionTitle";
import SecondaryButton from "../../Button/SecondaryButton";
import ArrowRight from "../../icons/ArrowRight";
import CardIcon1 from "./OurProgressC/CardIcon1";
import LineSvg from "./OurProgressC/LineSvg";

const OurProgressData = [
  {
    title: "SEO &amp; Digital Marketing",
    courseNumber: "80+",
    icon: <CardIcon1 />
  },
  {
    title: "Responsive Web Design",
    courseNumber: "80+",
    icon: <CardIcon1 />
  },
  {
    title: "UI UX Design",
    courseNumber: "80+",
    icon: <CardIcon1 />
  },
  {
    title: "Software Development",
    courseNumber: "80+",
    icon: <CardIcon1 />
  },
  {
    title: "Graphic Design",
    courseNumber: "90+",
    icon: <CardIcon1 />
  },
  {
    title: "Motion Design",
    courseNumber: "100+",
    icon: <CardIcon1 />
  },
]

export default function OurProgress() {
  return (
    <section className="py-24 2xl:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between">
          <div className="w-full md:w-7/12">
            <SectionTitle title="OUR POGRESS">
              We Follow The Working Process For Finished Project &amp; Class
            </SectionTitle>
          </div>
          <div className="">
            <SecondaryButton href={"/"} className="w-fit flex items-center gap-2 mt-10">
              <span>VIEW ALL OUR COURSES</span>
              <ArrowRight />
            </SecondaryButton>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {
            OurProgressData.map((item, index) => (
              <div
                key={index}
                className="group relative text-center px-4 2xl:px-6 py-6 xl:py-10 2xl:py-12 bg-gray-light2 hover:bg-dark-green"
              >
                <div className="hidden group-hover:block absolute inset-2 border-white/50 border-2">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 -translate-y-1/2 w-20 flex justify-center items-center bg-dark-green">
                    {item.icon}
                  </div>
                </div>
                <div className="flex justify-center">
                  <LineSvg />
                </div>
                <h2 className="font-30 text-dark-green group-hover:text-white mt-8">
                  {item.title}
                </h2>
                <p className="font-18 text-primary mt-4">{item.courseNumber} Courses</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}
