import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import AboutMe from "../components/AboutMe/AboutMe";
import Carousel from "../components/Carousel/Carousel";
import Cases from "../components/Cases/Cases";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import WorkTogether from "../components/WorkTogether/WorkTogether";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" element={<div>
          <Intro/>
          <Cases/>
          <AboutMe/>
          <Carousel/>
          <WorkTogether/>
        </div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
