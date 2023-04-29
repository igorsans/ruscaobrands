import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../../pages/home/home";
import CasePag from "../../pages/casePag/CasePag";
import About from "../../pages/about/about";
import { LangContext } from "../../Context/LangProvider";
import Projects from "../../pages/projectsPag/Projects";

const Routes = () => {
  const handleCaseChange = (obj) => {
    localStorage.setItem("case", JSON.stringify(obj));
  };
  const [inHome, setInHome] = useState(true);
  const langContext = useContext(LangContext);

  useEffect(() => {
    const localLang = localStorage.getItem("lang");
    if (localLang) {
      langContext.setLang(localLang);
    } else {
      langContext.setLang("EN");
    }
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
        <Route path="cases" element={<CasePag setInHome={setInHome} />} />
        <Route path="aboutme" element={<About setInHome={setInHome} />} />
        <Route path="projects" element={<Projects handleCaseChange={handleCaseChange} setInHome={setInHome} />}/>
      </Switch>
      <Footer inHome={inHome} />
    </BrowserRouter>
  );
};

export default Routes;
