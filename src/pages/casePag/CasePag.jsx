import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CaseComponent from "./Style.js";
import ButtonB from "../../assets/components/Button/ButtonB.jsx";
const CasePag = ({ setInHome }) => {
  const navigate = useNavigate();
  const [casesParsed , setCase] = useState({})
  
  
  useEffect(() => {
    setInHome(false);
    const cases = localStorage.getItem("case");
    if (cases){
      setCase(JSON.parse(cases))
    } else {
      navigate("/")
    }
  }, []);

  return (
    <CaseComponent>
      <div className="introText">
        <h1>{casesParsed.title}</h1>
        <h2>{casesParsed.about}</h2>
      </div>
      <hr />
      <div className="conteudo">
        <img src={casesParsed.imgDisplay} />
        <h3>{casesParsed.description}</h3>
        {casesParsed.images ?
        casesParsed.images.map((item) => <img key={item} src={item} />) 
        : ""}
      </div>
      <div className="btn">
        <ButtonB nav={() => navigate("/")}/>
      </div>
    </CaseComponent>
  );
};

export default CasePag;
