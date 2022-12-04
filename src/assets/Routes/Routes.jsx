import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../../pages/home/home";
import CasePag from "../components/CasePag/CasePag";
import LangProvider from "../../Context/LangProvider";
import About from "../../pages/about/about";

const Routes = () => {
  const [caseState, setcaseState] = useState(false);
  const [cases, setCases] = useState({});
  const handleCaseChange = (obj) => {
    setCases(obj);
    setcaseState(true);
    console.log(caseState);
    console.log(cases);
  };
  return (
    <BrowserRouter>
      <LangProvider>
        <Header setcaseState={setcaseState} />
        <Switch>
          <Route
            path="/"
            element={<Home handleCaseChange={handleCaseChange} />}
          />
          <Route path="cases" element={<CasePag cases={cases} />} />
          <Route path="aboutme" element={<About/>}/>
        </Switch>
        <Footer caseState={caseState} />
      </LangProvider>
    </BrowserRouter>
  );
};

export default Routes;
