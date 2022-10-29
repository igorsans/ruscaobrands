import React from "react";
import SFooter from "./Style.js";
import Logo from "/Logo.png";

const Footer = () => {
  return (
    <SFooter>
      <div className="FMain">
        <div>
          <img src={Logo} alt="logo" />
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
