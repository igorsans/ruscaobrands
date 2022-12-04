import React from "react";
import AboutMe from "../../assets/components/AboutMe/AboutMe";
import Cases from "../../assets/components/Cases/Cases";
import Contact from "../../assets/components/Contact/Contact";
import Intro from "../../assets/components/Intro/Intro";
import WorkTogether from "../../assets/components/WorkTogether/WorkTogether";

const Home = ({handleCaseChange}) => {
  return (
    <>
      <Intro />
      <Cases handleCaseChange={handleCaseChange} />
      <AboutMe />
      {/* <Carousel/> */}
      <WorkTogether />
      <Contact />
    </>
  );
};

export default Home;
