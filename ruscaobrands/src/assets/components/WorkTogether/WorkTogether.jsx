import React from "react";
import MoreInfo from "../MoreInfo/MoreInfo.jsx";
import WorkStyle from "./Style.js";

const WorkTogether = () => {
  return (
    <WorkStyle>
      <div className="togetherIntro">
        <h2>We'll work together</h2>
        <h3>
          My methodology includes you in the design process. Get ready for lots
          of immersion, conversation and coffee! After all, extracting as much
          information and details as possible about your story is the secret to
          a powerful and memorable brand. :&#41;
        </h3>
      </div>
      <div className="moreInfo">
        <div>
          <MoreInfo titulo="Immersion" 
          text="Our first meeting, we'll sit down and hear the incredible story of your business. I'll send to you the briefing with several questions that will be essential for the story that we will write together going forward."
          />
          <MoreInfo 
          titulo="Exploration"
          text="Our first meeting, we'll sit down and hear the incredible story of your business. I'll send to you the briefing with several questions that will be essential for the story that we will write together going forward."
          />
        </div>
        <div>
          <MoreInfo
          titulo="Creation"
          text="Our first meeting, we'll sit down and hear the incredible story of your business. I'll send to you the briefing with several questions that will be essential for the story that we will write together going forward."
          />
          <MoreInfo
          titulo="Delivery"
          text="Our first meeting, we'll sit down and hear the incredible story of your business. I'll send to you the briefing with several questions that will be essential for the story that we will write together going forward."
          />
        </div>
      </div>
    </WorkStyle>
  );
};

export default WorkTogether;
