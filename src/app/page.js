import AboutUs from "./components/sections/home/AboutUs";
import Banner from "./components/sections/home/Banner";
import ClientReview from "./components/sections/home/ClientReview";
import OurProgress from "./components/sections/home/OurProgress";
import OurService from "./components/sections/home/OurService";
import SkillAndAbility from "./components/sections/home/SkillAndAbility";
import Team from "./components/sections/home/Team";
import JoinUs from "./components/sections/JoinUs";

export default function Home() {
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
      <OurService />
      <AboutUs />
      <OurProgress />
      <SkillAndAbility />
      <Team />
      <ClientReview />
      {/* <JoinUs /> */}
    </>
  );
}
