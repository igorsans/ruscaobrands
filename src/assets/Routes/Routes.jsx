import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../../pages/home/home";
import CasePag from "../components/CasePag/CasePag";
import About from "../../pages/about/about";
import LangProvider, { LangContext } from "../../Context/LangProvider";

const Routes = () => {
  const [caseState, setcaseState] = useState(false);
  const [cases, setCases] = useState({});
  const handleCaseChange = (obj) => {
    setCases(obj);
    setcaseState(true);
  };
  const [inHome, setInHome] = useState(true);
  const langContext = useContext(LangContext);

  useEffect(() => {
    const localLang = localStorage.getItem("lang");
    langContext.setLang(localLang);
  }, []);
  return (
    <BrowserRouter>
      <Header setInHome={setInHome} />
      <Switch>
        <Route
          path="/"
          element={
            <Home setInHome={setInHome} handleCaseChange={handleCaseChange} />
          }
        />
        <Route path="/cases" element={<CasePag cases={cases} />} />
        <Route path="aboutme" element={<About setInHome={setInHome} />} />
      </Switch>
      <Footer caseState={caseState} inHome={inHome} />
    </BrowserRouter>
  );
};

export default Routes;
