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
      <Banner />
      <TopCourse />
      <BestMentor />
      <FreeTrial />
      <OnlineCourse />
      <StudentAchievements />
      <AllSellCourse />
    </>
  );
}
