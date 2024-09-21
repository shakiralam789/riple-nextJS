import AllSellCourse from "@/app/components/sections/student-view/AllSellCourse";
import Banner from "@/app/components/sections/student-view/Banner";
import BestMentor from "@/app/components/sections/student-view/BestMentor";
import FreeTrial from "@/app/components/sections/student-view/FreeTrial";
import OnlineCourse from "@/app/components/sections/student-view/OnlineCourse";
import StudentAchievements from "@/app/components/sections/student-view/StudentAchievements";
import TopCourse from "@/app/components/sections/student-view/TopCourse";
import React from "react";

export default function page() {
  return (
    <>
      <button
        id="scrollButton"
        className="active book-call duration-300 pointer-events-none [&.active]:pointer-events-auto opacity-0 [&.active]:opacity-100 flex fixed bottom-8 right-8 z-20 hover:bg-dark-green btn-secondary items-center gap-2 mt-8"
      >
        <span>book a call</span>
        <svg
          className="size-5 2xl:size-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>
      <Banner />
      <TopCourse />
      <BestMentor />
      <FreeTrial />
      {/* <OnlineCourse /> */}
      <StudentAchievements />
      <AllSellCourse />
    </>
  );
}
