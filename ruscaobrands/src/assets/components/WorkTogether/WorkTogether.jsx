import React, { useContext } from "react";
import { LangContext } from "../../../Context/LangProvider.jsx";
import MoreInfo from "../MoreInfo/MoreInfo.jsx";
import WorkStyle from "./Style.js";

const WorkTogether = () => {
  const langContext = useContext(LangContext)
  return (
    <WorkStyle id="metodology">
      <div className="togetherIntro">
        <h2>{langContext.texts.WorkTogether.title[langContext.lang]}</h2>
        <h3>
        {langContext.texts.WorkTogether.metodology[langContext.lang]}
        </h3>
      </div>
      <div className="moreInfo">
        <div>
          <MoreInfo titulo={langContext.texts.WorkTogether.immersion[langContext.lang]}
          text={langContext.texts.WorkTogether.immersionText[langContext.lang]}
          />
          <MoreInfo 
          titulo={langContext.texts.WorkTogether.exploration[langContext.lang]}
          text={langContext.texts.WorkTogether.explorationText[langContext.lang]}
          />
        </div>
        <div>
          <MoreInfo
          titulo={langContext.texts.WorkTogether.create[langContext.lang]}
          text={langContext.texts.WorkTogether.createText[langContext.lang]}
          />
          <MoreInfo
          titulo={langContext.texts.WorkTogether.delivery[langContext.lang]}
          text={langContext.texts.WorkTogether.deliveryText[langContext.lang]}
          />
        </div>
      </div>
    </WorkStyle>
  );
};

export default WorkTogether;
