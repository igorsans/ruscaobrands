import React, { useContext } from "react";
import NavBar from "./Style";
import { TbWorld } from "react-icons/tb";
import { LangContext } from "../../../Context/LangProvider";

const Nav = () => {
  const langContext = useContext(LangContext)
  console.log(langContext.texts)
  return (
    <NavBar>
      <a href="#">{langContext.texts.nav.Projects[langContext.lang]}</a>
      <a href="#">{langContext.texts.nav.About[langContext.lang]}</a>
      <a href="#">{langContext.texts.nav.Metodology[langContext.lang]}</a>
      <a href="#">{langContext.texts.nav.Contact[langContext.lang]}</a>
      <div>
        <TbWorld />
        <p onClick={() =>langContext.setLang("EN")}>EN</p>
        <p onClick={() =>langContext.setLang("PT")}>PT</p>
      </div>
    </NavBar>
  );
};

export default Nav;
