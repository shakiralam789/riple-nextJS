import React from "react";
import SectionTitle from "../SectionTitle";
import Card from "./Card";
import SecondaryButton from "../../Button/SecondaryButton";
import ArrowRight from "../../icons/ArrowRight";

const sellCourseData = [
  {
    image: "/images/our-course.jpg",
    title: "Ui/UX Complete Guide",
    rating: 5,
    course: 30,
  },
  {
    image: "/images/our-course-2.jpg",
    title: "Website design & Development",
    rating: 4,
    course: 50,
  },
  {
    image: "/images/our-course-3.jpg",
    title: "Graphic Design complete",
    rating: 5,
    course: 30,
  },
  {
    image: "/images/our-course-4.jpg",
    title: "Data Analysis Learning",
    rating: 5,
    course: 40,
  },
];
export default function AllSellCourse() {
  return (
    <section className="py-24 2xl:py-28">
      <div className="container">
        <div className="w-full md:w-[90%] lg:w-[60%]">
          <SectionTitle title="ALL SELL COURSES">
            Let the journey of organizing your own learning begin
          </SectionTitle>
        </div>
        <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:gap-6">
          {sellCourseData.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>

        <SecondaryButton className="mt-10 w-fit mx-auto flex items-center gap-2">
          <span>VIEW ALL COURSES</span>
          <ArrowRight />
        </SecondaryButton>
      </div>
    </section>
  );
}
