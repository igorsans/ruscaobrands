import React, { useContext } from "react";
import NavBar from "./Style";
import { TbWorld } from "react-icons/tb";
import { LangContext } from "../../../Context/LangProvider";
import { Link } from "react-scroll";

const Nav = () => {
  const langContext = useContext(LangContext);
  const saveLang = (lang) => {
    langContext.setLang(lang)
    localStorage.setItem('lang', lang);
  }
  return (
    <NavBar>
      <Link to="cases" spy={true} smooth={true} offset={-100} duration={500}>
        <button>{langContext.texts.nav.Projects[langContext.lang]}</button>
      </Link>
      <Link to="aboutme" spy={true} smooth={true} offset={-100} duration={500}>
        <button>{langContext.texts.nav.About[langContext.lang]}</button>
      </Link>
      <Link to="metodology" spy={true} smooth={true} offset={-250} duration={500}>
        <button>{langContext.texts.nav.Metodology[langContext.lang]}</button>
      </Link>
      <Link className="nav-item" to="contact" spy={true} smooth={true} offset={-250} duration={500}>
        <button>{langContext.texts.nav.Contact[langContext.lang]}</button>
      </Link>
      <div className="langs" >
        <TbWorld />
        <button className={langContext.lang == "EN" ? "ativo" : ""} onClick={() => saveLang("EN")}>EN</button>
        <button className={langContext.lang == "PT" ? "ativo" : ""} onClick={() => saveLang("PT")}>PT</button>
      </div>
    </NavBar>
  );
};

export default Nav;
