import React, { useContext } from "react";
import { LangContext } from "../../../Context/LangProvider.jsx";
import StyledIntro from "./Style.js";

const Intro = () => {
  const langContext = useContext(LangContext)
  return (
    <StyledIntro>
      <h1>
      {langContext.texts.AboutMePag.intro[langContext.lang][0]}
        <span> {langContext.texts.AboutMePag.intro[langContext.lang][1]}</span> {langContext.texts.AboutMePag.intro[langContext.lang][2]}
        <span> {langContext.texts.AboutMePag.intro[langContext.lang][3]}</span>
      </h1>
      <h2>
      {langContext.texts.AboutMePag.sub[langContext.lang]}
      </h2>
    </StyledIntro>
  );
};

export default Intro;
