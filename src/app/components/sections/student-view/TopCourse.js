import React from "react";
import SectionTitle from "../SectionTitle";
import Card from "./Card";
import SecondaryButton from "../../Button/SecondaryButton";
import ArrowRight from "../../icons/ArrowRight";

const topCourseData = [
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

export default function TopCourse() {
  return (
    <section className="py-24 2xl:py-28">
      <div className="container">
        <div className="w-full md:w-[90%] lg:w-[60%]">
          <SectionTitle title="OUR TOP COURSES">
            Enjoy Learning At Comfort Of Your Home And Different Way What Do You
            Want To Learn
          </SectionTitle>
        </div>
        <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:gap-6">
          {topCourseData.map((item, index) => (
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
