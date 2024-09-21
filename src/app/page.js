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
