import React, { useContext } from "react";
import { useEffect } from "react";
import { LangContext } from "../../Context/LangProvider.jsx";
import StyledProjects from "./Styled.js";
import casesProjects from "../../Cases/cases.json";
import ButtonB from "../../assets/components/Button/ButtonB.jsx";
import { useNavigate } from "react-router-dom";
const Projects = ({ setInHome }) => {
  const navigate = useNavigate();
  const langContext = useContext(LangContext);
  const casesId = Object.keys(casesProjects);
  console.log(casesId);
  useEffect(() => {
    setInHome(false);
  }, []);
  return (
    <StyledProjects>
      <div className="intro">
        <h1>{langContext.texts.Projects.title[langContext.lang]}</h1>
        <h2>{langContext.texts.Projects.description[langContext.lang]}</h2>
      </div>
      <div className="cases">
        {casesId.map((item) => (
          <div className="projects">
            <img
              // onClick={() => changeCase(casesList[item])}
              key={casesProjects[item].id}
              className="casesImg"
              src={casesProjects[item].imgDisplay}
            />
            <h3 className="caseText">{casesProjects[item].title}</h3>
          </div>
        ))}
      </div>
      <div className="btn">
        <ButtonB nav={() => navigate("/")} />
      </div>
    </StyledProjects>
  );
};

export default Projects;
