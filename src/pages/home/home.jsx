import React from "react";
import { useEffect } from "react";
import AboutMe from "../../assets/components/AboutMe/AboutMe";
import Cases from "../../assets/components/Cases/Cases";
import Contact from "../../assets/components/Contact/Contact";
import Intro from "../../assets/components/Intro/Intro";
import WorkTogether from "../../assets/components/WorkTogether/WorkTogether";

const Home = ({handleCaseChange, setInHome}) => {
  useEffect(() => {
    setInHome(true)
  }, [])
  
  return (
    <>
      <Intro />
      <Cases setInHome={setInHome} handleCaseChange={handleCaseChange} />
      <AboutMe setInHome={setInHome} />
      {/* <Carousel/> */}
      <WorkTogether />
      <Contact />
    </>
  );
};

export default Home;
