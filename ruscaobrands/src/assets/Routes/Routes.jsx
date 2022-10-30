import { useState } from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import AboutMe from "../components/AboutMe/AboutMe";
import CasePag from "../components/CasePag/CasePag";
// import Carousel from "../components/Carousel/Carousel";
// import Case from "../components/Case/Case";
import Cases from "../components/Cases/Cases";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import WorkTogether from "../components/WorkTogether/WorkTogether";

const Routes = () => {
  const [caseState, setcaseState] = useState(false)
  const [cases, setCases] = useState({});
  const handleChange = (obj) =>{
    console.log(obj)
    setCases(obj)
    setcaseState(true)
    console.log(cases)
  }
  return (
    <BrowserRouter>
      <Header setcaseState={setcaseState} />
      <Switch>
        <Route
          path="/"
          element={
            !caseState ?
            <div>
              <Intro />
              <Cases setCases={handleChange}  />
              <AboutMe />
              {/* <Carousel/> */}
              <WorkTogether />
              <Contact />
            </div>
            :
            <CasePag cases={cases} />
          }
        />
      </Switch>
      <Footer caseState={caseState} />
    </BrowserRouter>
  );
};

export default Routes;
