import React from "react";
import CasesStyle from "./Style.js";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

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
        <Link to={"/cases"}>
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
        </Link>
      </div>
      <button className="seeAll">
        See All <BsArrowRight />
      </button>
    </CasesStyle>
  );
};

export default Cases;
