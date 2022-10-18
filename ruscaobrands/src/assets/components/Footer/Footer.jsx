import React from "react";
import SFooter from "./Style.js";
import Logo from "/Logo.png";

const Footer = () => {
  return (
    <SFooter>
      <div>
        <div>{Logo}</div>
        <div></div>
        <div></div>
      </div>
      <div>
        <h5>
          RUSCÃOBRANDS C 2022 <span>AUTHENTIC MEMORABLE BRANDS</span>
        </h5>
      </div>
    </SFooter>
  );
};

export default Footer;
