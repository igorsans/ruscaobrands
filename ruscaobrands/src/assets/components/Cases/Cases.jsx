import React, { useContext } from "react";
import CasesStyle from "./Style.js";
import ButtonB from "../Button/ButtonB.jsx";
import { LangContext } from "../../../Context/LangProvider.jsx";

const Cases = ({ handleCaseChange }) => {
  const caseteste = {
    titulo: "testando",
    descricao: "lorem ipsum etc aklsdjasd lkajsdakls asjkdaklsdjk askldjaskld",
    img: "test",
  };
  const langContext = useContext(LangContext)
  return (
    <CasesStyle>
      <h2>CASES</h2>
      <hr />
      <div className="cases">
        <img
          onClick={() => handleCaseChange(caseteste)}
          className="casesImg"
          src="/Biggies.jpg"
          alt=""
        />
        <img className="casesImg" src="/Biggies.jpg" alt="" />
        <img className="casesImg" src="/Biggies.jpg" alt="" />
        <img className="casesImg" src="/Biggies.jpg" alt="" />
        <img className="casesImg" src="/Biggies.jpg" alt="" />
        <img className="casesImg" src="/Biggies.jpg" alt="" />
      </div>
      <ButtonB text={langContext.texts.Cases.Btn[langContext.lang]} />
    </CasesStyle>
  );
};

export default Cases;
