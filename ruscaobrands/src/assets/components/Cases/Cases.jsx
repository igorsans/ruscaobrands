import React from "react";
import CasesStyle from "./Style.js";
import ButtonB from "../Button/ButtonB.jsx";

const Cases = ({ handleCaseChange }) => {
  const caseteste = {
    titulo: "testando",
    descricao: "lorem ipsum etc aklsdjasd lkajsdakls asjkdaklsdjk askldjaskld",
    img: "test",
  };
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
      <ButtonB text={"see all"} />
    </CasesStyle>
  );
};

export default Cases;
