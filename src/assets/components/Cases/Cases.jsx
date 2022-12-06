import React, { useContext } from "react";
import CasesStyle from "./Style.js";
import ButtonB from "../Button/ButtonB.jsx";
import { LangContext } from "../../../Context/LangProvider.jsx";
import Biggies from "/Biggies.png";
import casesList from "../../../Cases/cases.json";
import { useNavigate } from "react-router-dom";

const Cases = ({ handleCaseChange, setInHome }) => {
  const navigate = useNavigate();
  const langContext = useContext(LangContext);
  const cases = Object.keys(casesList);
  const changeCase = (obj) => {
    setInHome(false);
    navigate("/cases");
    handleCaseChange(obj);
  };
  return (
    <CasesStyle id="cases">
      <h2>CASES</h2>
      <hr />
      <div className="cases">
        {cases.map((item, index) =>
          index < 6 ? (
            <img
              onClick={() => changeCase(casesList[item])}
              key={casesList[item].id}
              className="casesImg"
              src={casesList[item].imgDisplay}
            />
          ) : (
            ""
          )
        )}
      </div>
      <ButtonB text={langContext.texts.Cases.Btn[langContext.lang]} />
    </CasesStyle>
  );
};

export default Cases;
