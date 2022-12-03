import React, { useState } from "react";
// import SFooter from "./Style.js";
import Logo from "/Logo.png";
import LogoB from "/Logob.png"
import styled from "styled-components";

const Footer = ({caseState}) => {
  const SFooter = styled.footer`
  background-color: ${!caseState? 'black' : 'white'};
  color: ${caseState? 'black' : 'white'};
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .logo{
    width: 326;
    height: 40px;
  }
  & .FMain {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    margin-bottom: 54px;
    & .FNav,
    .FContact {
      display: flex;
      gap: 23px;
      justify-content: space-around;
      & a{
        color: black;
      }
    }
  }
  & .FMainB {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    margin-bottom: 54px;
    & .FNav,
    .FContact {
      display: flex;
      gap: 23px;
      justify-content: space-around;
    }
  }
  & .FEnd {
    margin-bottom: 49px;
  }
`;


  return (
    <SFooter bgcolor={caseState}>
      <div
       className={!caseState? 'FMainB': 'FMain'}>
        <div>
          <img className="logo" src={!caseState? Logo: LogoB} alt="logo" />
        </div>
        <nav className="FNav">
          <a target="_blank" href="">
            BEHANCE
          </a>
          <a target="_blank" href="">
            DRIBBBLE
          </a>
          <a target="_blank" href="">
            INSTAGRAM
          </a>
          <a target="_blank" href="">
            LINKEDIN
          </a>
        </nav>
        <div className="FContact">
          <a target="_blank" href="">
            hello@ruscaobrands.com
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5521983405451&text=Say Hello! I want to hear your story. :)"
          >
            +55 21 983405451
          </a>
        </div>
      </div>
      <div className="FEnd">
        <h5>
          RUSCÃOBRANDS &#169; 2022 <span>AUTHENTIC MEMORABLE BRANDS</span>
        </h5>
      </div>
    </SFooter>
  );
};

export default Footer;
